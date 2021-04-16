import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Axios from "axios";
import config from "../config";
import {AuthContext} from '../contexts/AuthContext';
import LinearGrad from "../components/LinearGrad";
import BasicButton from "../components/buttons/BasicButton";

function RegisterScreen({navigation}) {
    const {register} = React.useContext(AuthContext);
    const [email, setEmail] = useState('');
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
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.wrapper}>
                <View style={styles.full}>
                    <Text style={styles.title}>Register</Text>
                    <Text>Email</Text>
                    <TextInput placeholder={'Email'} onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                    <Text>Password</Text>
                    <TextInput secureTextEntry={true} placeholder={'Password'} onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                    <Text>{message}</Text>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity style={[styles.button,styles.plain]} onPress={handleRegister}>
                        <Text style={[styles.text,styles.plainText]}>Register</Text>
                        <LinearGrad/>
                    </TouchableOpacity>
                    <BasicButton data={'clear'}
                                 onButtonClick={'LoginStack'}
                                 ButtonText={'Login'}/>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title : {
        fontWeight : 'bold',
        fontSize : 16,
        textAlign: 'center',
        padding: 25
    },
    full :{
        flex: 1,
        alignSelf: 'stretch',
    },
    wrapper : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    content: {
        alignSelf: 'stretch',
        height: 165
    },
    button : {
        height: 50,
        borderRadius: 100,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    text : {
        fontWeight : 'bold',
        fontSize : 14
    },
    plain : {
        marginBottom: 15
    },
    plainText : {
        color: 'white',
    },
});

export default RegisterScreen