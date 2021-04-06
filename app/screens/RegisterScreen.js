import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Axios from "axios";
import config from "../config";
import {AuthContext} from '../contexts/AuthContext';

function RegisterScreen({navigation}) {
    const {register} = React.useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = React.useState('');

    const [message, setMessage] = useState('');

    // const Register = () => {
    //     Axios.post(config.API_URL + '/users/register', {
    //         firstname: firstname,
    //         lastname: lastname,
    //         email: email,
    //         password: password
    //     }).then((response) => {
    //         if (response.data.message){
    //             setMessage(response.data.message)
    //         }else{
    //             setMessage("Your account as been created !")
    //         }
    //     });
    // }

    return (
        <KeyboardAvoidingView behavior='padding'>
            <View style={styles.container}>
                <Text>Firstname</Text>
                <TextInput placeholder={'Firstname'} onChange={(e) => {
                    setFirstname(e.target.value);
                }}/>
                <Text>Lastname</Text>
                <TextInput placeholder={'Lastname'} onChange={(e) => {
                    setLastname(e.target.value);
                }}/>
                <Text>Email</Text>
                <TextInput placeholder={'Email'} onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                <Text>Password</Text>
                <TextInput secureTextEntry={true} placeholder={'Password'} onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <TouchableOpacity
                    onPress={async () => {
                        try {
                            await register(email, password);
                        } catch (e) {
                            setError(e.message);
                        }
                    }}>
                    <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text>Log in</Text>
                </TouchableOpacity>
                <Text>{message}</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RegisterScreen