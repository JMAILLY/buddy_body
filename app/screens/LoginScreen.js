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
        <View style={styles.container} behavior='padding'>
            <View style={styles.wrapper}>
                <View style={styles.full}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder={'Email'} onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                    <Text style={styles.label2}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder={'Password'} onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                    <Text style={styles.message}>{message}</Text>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity style={[styles.button,styles.plain]} onPress={handleLogin}>
                        <Text style={[styles.text,styles.plainText]}>Continue</Text>
                        <LinearGrad/>
                    </TouchableOpacity>
                    <BasicButton data={'clear'}
                                 onButtonClick={'RegisterStack'}
                                 ButtonText={'Register'}/>
                </View>
            </View>
        </View>
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
        justifyContent: 'center',
    },
    wrapper : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    content: {
        alignSelf: 'stretch',
        height: 130,
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
    label : {
        color: '#34CC98',
        fontSize: 12,
        marginBottom: 5
    },
    label2 : {
        color: '#34CC98',
        fontSize: 12,
        marginBottom: 5,
        marginTop: 15
    },
    input : {
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#34CC98',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
        paddingBottom: 15
    },
    message : {
        fontWeight: '600',
        marginTop: 30,
        textAlign: 'center'
    }
});

export default LoginScreen