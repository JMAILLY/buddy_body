import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Axios from "axios";
import config from "../config";
import {AuthContext} from '../contexts/AuthContext';


// navigation.navigate('RegisterPassword', {
//     emailUser: email,
// })


function RegisterScreenPassword({navigation}) {
    const {isEmailInUse} = React.useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNext = async (e) => {
        e.preventDefault()
        try {
            let response = await isEmailInUse(email);
            if (response.type === "mailError"){
                setMessage(response.message)
            }else{
                navigation.navigate('RegisterPassword', {
                    emailUser: email,
                });
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
                <TouchableOpacity
                    onPress={handleNext}>
                    <Text>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LoginStack')}>
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

export default RegisterScreenPassword