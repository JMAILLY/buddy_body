import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
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
                const {data} = await Axios.post('https://buddy-body.loca.lt/users/login', {
                        email: email,
                        password: password
                    }, {
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
                        activity: data[0].activity,
                        country: data[0].country,
                        date: data[0].date,
                        gender: data[0].gender,
                        goal: data[0].goal,
                        goalTime: data[0].goalTime,
                        goalWeight: data[0].goalWeight,
                        height: data[0].height,
                        picture: data[0].picture,
                        weight: data[0].weight,
                        interests: data[0].interests,
                        idGroup: data[0].idGroup,
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
                const {data} = await Axios.post('https://buddy-body.loca.lt/users/register', {
                        email: email,
                        password: password
                    }, {
                        headers: {
                            'Bypass-Tunnel-Reminder': 'ok',
                            'User-Agent': 'Buddy-body',
                        }
                    }
                );
                return data
            },
            isEmailInUse: async (email) => {
                const {data} = await Axios.post('https://buddy-body.loca.lt/users/isEmailInUse', {
                        email: email,
                    }, {
                        headers: {
                            'Bypass-Tunnel-Reminder': 'ok',
                            'User-Agent': 'Buddy-body',
                        }
                    }
                );
                return data
            },
            completeProfile: async (firstname, lastname, activity, country, date, gender, goal, goalTime, goalWeight, height, picture, weight, interests) => {
                const prevData = JSON.parse(await AsyncStorage.getItem('user'));
                const {data} = await Axios.post('https://buddy-body.loca.lt/users/completeProfile', {
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
                    }, {
                        headers: {
                            'Bypass-Tunnel-Reminder': 'ok',
                            'User-Agent': 'Buddy-body',
                        }
                    }
                );
                if (data.type !== "ok") {
                    return data
                } else {
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
                    await AsyncStorage.setItem('user', JSON.stringify(user))
                    dispatch(createAction('SET_USER', user));
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
