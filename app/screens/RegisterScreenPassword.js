import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Axios from "axios";
import config from "../config";
import {AuthContext} from '../contexts/AuthContext';

function RegisterScreenMail({route, navigation}) {
    const { emailUser } = route.params;
    const {register} = React.useContext(AuthContext);
    const [email, setEmail] = useState(emailUser);
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            let response = await register(email, password);
            if (response.type === "mailError"){
                setMessage(response.message)
            }else{
                setMessage(response.message)
                setTimeout(function(){
                    navigation.navigate('LoginStack')
                }, 3000);
            }
        } catch (e) {
            setMessage(e.message);
        }
    }

    return (
        <KeyboardAvoidingView behavior='padding'>
            <View style={styles.container}>
                <Text>Password</Text>
                <TextInput secureTextEntry={true} placeholder={'Password'} onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <TouchableOpacity
                    onPress={handleRegister}>
                    <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Text>return</Text>
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

export default RegisterScreenMail