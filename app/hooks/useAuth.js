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
                const {data} = await Axios.post('http://localhost:3001/users/login', {
                        email: email,
                        password: password
                    },{
                        headers: {
                            'Bypass-Tunnel-Reminder': 'ok',
                            'User-Agent': 'Buddy-body',
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
                const {data} = await Axios.post('http://localhost:3001/users/register', {
                    email: email,
                    password: password
                },{
                        headers: {
                            'Bypass-Tunnel-Reminder': 'ok',
                            'User-Agent': 'Buddy-body',
                        }
                    }
                );
                return data
            },
            isEmailInUse: async (email) => {
                const {data} = await Axios.post('http://localhost:3001/users/isEmailInUse', {
                    email: email,
                    },{
                        headers: {
                            'Bypass-Tunnel-Reminder': 'ok',
                            'User-Agent': 'Buddy-body',
                        }
                    }
                );
                return data
            },
            completeProfile: async (firstname,lastname,activity,country,date,gender,goal,goalTime,goalWeight,height,picture,weight,interests) => {
                const prevData = JSON.parse(await AsyncStorage.getItem('user'));
                console.log('firstname ' + firstname)
                console.log('firstname ' + lastname)
                const {data} = await Axios.post('http://localhost:3001/users/completeProfile', {
                        email: prevData.email,
                        firstname: firstname,
                        lastname: lastname,
                        activity: activity,
                        country: country,
                        date: date,
                        gender: gender,
                        goal: goal,
                        goalTime: goalTime,
                        goalWeight: goalWeight,
                        height: height,
                        picture: picture,
                        weight: weight,
                        interests: interests,
                    },{
                        headers: {
                            'Bypass-Tunnel-Reminder': 'ok',
                            'User-Agent': 'Buddy-body',
                        }
                    }
                );
                if (data.type !== "ok") {
                    console.log('1')
                    console.log(data)
                    return data
                } else {
                    console.log('2')
                    console.log(data)
                    const user = {
                        email: prevData.email,
                        password: prevData.password,
                        firstname: firstname,
                        lastname: lastname,
                        activity: activity,
                        country: country,
                        date: date,
                        gender: gender,
                        goal: goal,
                        goalTime: goalTime,
                        goalWeight: goalWeight,
                        height: height,
                        picture: picture,
                        weight: weight,
                        interests: interests,
                    };
                    console.log(user)
                    await AsyncStorage.setItem('user', JSON.stringify(user))
                    dispatch(createAction('SET_USER', user));
                    console.log(JSON.parse(await AsyncStorage.getItem('user')));
                    return data
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
