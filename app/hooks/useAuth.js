import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

import config from '../config';
import {createAction} from '../utils/createAction';

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
                    },{
                        headers: {
                            'Bypass-Tunnel-Reminder': 'ok'
                        }
                    }
                );
                if (data.message) {
                    return data
                } else {
                    const user = {
                        email: data[0].email,
                        firstname: data[0].firstname,
                        lastname: data[0].lastname,
                    };
                    await AsyncStorage.setItem('user', JSON.stringify(user))
                    dispatch(createAction('SET_USER', user));
                    return data
                }
            },
            logout: async () => {
                await AsyncStorage.removeItem('user')
                dispatch(createAction('REMOVE_USER'));
            },
            register: async (email, password) => {
                const {data} = await Axios.post(config.API_URL + '/users/register', {
                    email: email,
                    password: password
                },{
                        headers: {
                            'Bypass-Tunnel-Reminder': 'ok'
                        }
                    }
                );
                return data
            },
            isEmailInUse: async (email) => {
                const {data} = await Axios.post(config.API_URL + '/users/isEmailInUse', {
                    email: email,
                    },{
                        headers: {
                            'Bypass-Tunnel-Reminder': 'ok'
                        }
                    }
                );
                return data
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
