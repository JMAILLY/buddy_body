import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View,TextInput,Platform} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import BasicButton from "../../components/buttons/BasicButton";

//for future native datetime picking solution
import DateTimePicker from '@react-native-community/datetimepicker';
import StepNum from "../../components/StepNum";

export default function ProfileStep3Screen({route,navigation}) {
    const [gender, setGender] = useState('');
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [date, setDate] = useState(0);


    const cleanDay = (text) => {
        const cleanNumber = text.replace(/[^0-9]/g, "");
        setDay(cleanNumber);
        setDate(Date.parse(year+'-'+month+'-'+day));
    }
    const cleanMonth = (text) => {
        const cleanNumber = text.replace(/[^0-9]/g, "");
        setMonth(cleanNumber);
        setDate(Date.parse(year+'-'+month+'-'+day));
    }
    const cleanYear = (text) => {
        const cleanNumber = text.replace(/[^0-9]/g, "");
        setYear(cleanNumber);
        setDate(Date.parse(year+'-'+month+'-'+day));
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.step}>
                    <StepNum number={3}/>
                </View>
                <Text style={styles.text}>Date of birth</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.contentTop}>
                    <TextInput style={styles.input} maxLength = {2} keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric"}  onChange={(e) => {
                        cleanDay(e.target.value);
                    }}/>
                    <Text style={styles.slash}>/</Text>
                    <TextInput style={styles.input} maxLength = {2} keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric"}  onChange={(e) => {
                        cleanMonth(e.target.value);
                    }}/>
                    <Text style={styles.slash}>/</Text>
                    <TextInput style={styles.input} maxLength = {4} keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric"}  onChange={(e) => {
                        cleanYear(e.target.value);
                    }}/>
                </View>
                <View style={styles.contentMessage}>
                    <Text style={styles.message}>Matching someone around your age is better !</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <BasicButton data={'plain'}
                             onButtonClick={'ProfileStep4Screen'}
                             ButtonText={'Continue'}
                             // disabled={!(date)}
                             params={Object.assign(route.params.params, {date:date})}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    contentMessage : {
        marginTop: 50,
    },
    contentTop : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontWeight : '600',
        fontSize : 16,
        marginTop: 30,
        textAlign: 'center',
    },
    buttons: {
        alignSelf: 'stretch',
        height: 115
    },
    text : {
        fontWeight : 'bold',
        fontSize : 14,
        marginTop: 30,
        textAlign: 'center',
    },
    input : {
        borderRadius: 25,
        backgroundColor: '#34CC98',
        color: 'white',
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
    },
    slash : {
        color : '#34CC98',
        margin : 10,
        fontSize: 24,
    }
});