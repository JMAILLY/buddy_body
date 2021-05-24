import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import BasicButton from "../../components/buttons/BasicButton";
import StepNum from "../../components/StepNum";
import {useAuth} from "../../hooks/useAuth";

export default function ProfileStep1Screen({navigation}) {
    const {auth, state} = useAuth();
    const {logout} = React.useContext(AuthContext);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.step}>
                    <StepNum number={1}/>
                </View>
                <Text style={styles.text}>How can we call you ?</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.contentTop}>
                    <Text style={styles.label}>Firstname</Text>
                    <TextInput style={styles.input} placeholder={'Firstname'} onChange={(e) => {
                        setFirstname(e.target.value);
                    }}/>
                    <Text style={styles.label2}>Lastname</Text>
                    <TextInput style={styles.input} placeholder={'Lastname'} onChange={(e) => {
                        setLastname(e.target.value);
                    }}/>
                </View>
                <View style={styles.contentMessage}>
                    <Text style={styles.message}>For security reasons,{'\n'} your Lastname will not be
                        displayed. {'\n'}{'\n'}Only your Firstname will be used to find the best match for you !</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <BasicButton data={'plain'}
                             onButtonClick={'ProfileStep2Screen'}
                             ButtonText={'Continue'}
                             disabled={!(lastname && firstname)}
                             params={{firstname: firstname, lastname: lastname}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    contentMessage: {
        marginTop: 50,
    },
    message: {
        fontWeight: '600',
        fontSize: 16,
        marginTop: 30,
        textAlign: 'center',
    },
    buttons: {
        alignSelf: 'stretch',
        height: 115
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 30,
        textAlign: 'center',
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
});