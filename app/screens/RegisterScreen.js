import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import LinearGrad from "../components/LinearGrad";
import BasicButton from "../components/buttons/BasicButton";

function RegisterScreen({navigation}) {
    const {register} = React.useContext(AuthContext);
    const {isEmailInUse} = React.useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            let isEmailUsed = await isEmailInUse(email, password);
            if (isEmailUsed.type === "mailError") {
                setMessage(isEmailUsed.message)
            } else {
                let response = await register(email, password);
                setMessage(response.message)
                setTimeout(function () {
                    navigation.navigate('LoginStack')
                }, 3000);
            }

        } catch (e) {
            setMessage(e.message);
        }
    }

    return (
        <View style={styles.container} behavior='padding'>
            <View style={styles.wrapper}>
                <View style={styles.full}>
                    <Text style={styles.title}>Register</Text>
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
                    <TouchableOpacity style={[styles.button, styles.plain]} onPress={handleRegister}>
                        <Text style={[styles.text, styles.plainText]}>Continue</Text>
                        <LinearGrad/>
                    </TouchableOpacity>
                    <BasicButton data={'clear'}
                                 onButtonClick={'LoginStack'}
                                 ButtonText={'Login'}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        padding: 25
    },
    full: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    wrapper: {
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
    button: {
        height: 50,
        borderRadius: 100,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14
    },
    plain: {
        marginBottom: 15
    },
    plainText: {
        color: 'white',
    },
    label: {
        color: '#34CC98',
        fontSize: 12,
        marginBottom: 5
    },
    label2: {
        color: '#34CC98',
        fontSize: 12,
        marginBottom: 5,
        marginTop: 15
    },
    input: {
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#34CC98',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
        paddingBottom: 15
    },
    message: {
        fontWeight: '600',
        marginTop: 30,
        textAlign: 'center'
    }
});

export default RegisterScreen