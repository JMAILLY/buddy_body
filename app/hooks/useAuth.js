import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

import config from '../config';
import {createAction} from '../utils/createAction';

console.log('useauth');

export function useAuth() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
    },
  );
  const auth = React.useMemo(
    () => ({
      login: async (email, password) => {
          const {data} = await Axios.post(config.API_URL + '/users/login', {
              email: email,
              password: password
          });
          if (data.message){
              console.log('Wrong combination!')
          }else {
              console.log("Hello " + data[0].firstname)
              const user = {
                  email: data[0].email,
                  firstname: data[0].firstname,
                  lastname: data[0].lastname,
              };
              await AsyncStorage.setItem('user', JSON.stringify(user))
              dispatch(createAction('SET_USER', user));
          }
      },
      logout: async () => {
          await AsyncStorage.removeItem('user')
        dispatch(createAction('REMOVE_USER'));
      },
      register: async (firstname, lastname, email, password) => {
          const {data} = await Axios.post(config.API_URL + '/users/register', {
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: password
          })
          if (data.message){
              console.log(data.message)
          }else {
              console.log("User " + data[0].firstname + " created")
          }
      },
    }),
    [],
  );
  React.useEffect(() => {
      AsyncStorage.getItem('user').then(user => {
        if (user) {
          dispatch(createAction('SET_USER', JSON.parse(user)));
        }
      });
  }, []);
  return {auth, state};
}
