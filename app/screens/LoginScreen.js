import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import config from '../config';
import {AuthContext} from '../contexts/AuthContext';

function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const {login} = React.useContext(AuthContext);

    // const login = () => {
    //     Axios.post(config.API_URL + '/users/login', {
    //         email: email,
    //         password: password
    //     }).then((response) => {
    //         if (response.data.message){
    //             setMessage(response.data.message)
    //         }else{
    //             setMessage("Hello " + response.data[0].firstname)
    //         }
    //     });
    // }
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            let response = await login(email, password);
            if (response.message){
                setMessage(response.message)
            }
        } catch (e) {
            setMessage(e.message);
        }
    }

    return (
        <KeyboardAvoidingView behavior='padding'>
            <View style={styles.container}>
                <Text>Email</Text>
                <TextInput placeholder={'Email'} onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                <Text>Password</Text>
                <TextInput secureTextEntry={true} placeholder={'Password'} onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <TouchableOpacity
                    onPress={handleLogin}>
                    <Text>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterStack')}>
                    <Text>Register</Text>
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

export default LoginScreen