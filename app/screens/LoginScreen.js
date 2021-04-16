import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import config from '../config';
import {AuthContext} from '../contexts/AuthContext';
import BasicButton from "../components/buttons/BasicButton";
import LinearGrad from "../components/LinearGrad";

function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const {login} = React.useContext(AuthContext);


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
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.wrapper}>
                <View style={styles.full}>
                    <Text style={styles.title}>Login</Text>
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
                    <TouchableOpacity style={[styles.button,styles.plain]} onPress={handleLogin}>
                        <Text style={[styles.text,styles.plainText]}>Login</Text>
                        <LinearGrad/>
                    </TouchableOpacity>
                    <BasicButton data={'clear'}
                                 onButtonClick={'RegisterStack'}
                                 ButtonText={'Register'}/>
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

export default LoginScreen