import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import BasicButton from "../../components/buttons/BasicButton";
import StepNum from "../../components/StepNum";
import CountryPicker from 'react-native-country-picker-modal'

export default function ProfileStep4Screen({route,navigation}) {
    const {logout} = React.useContext(AuthContext);
    const [country, setCountry] = useState('');
    const [countryCode, setCountryCode] = useState('FR');
    const [withCountryNameButton, setWithCountryNameButton] = useState(true);
    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country.cca2)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.step}>
                    <StepNum number={4}/>
                </View>
                <Text style={styles.text}>Country/Region</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.contentTop}>
                    <View style={styles.select}>
                        <CountryPicker
                            {...{
                                countryCode,
                                withCountryNameButton,
                                onSelect,
                            }}
                        />
                    </View>
                </View>
                <View style={styles.contentMessage}>
                    <Text style={styles.message}>Select the country / region you are</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <BasicButton data={'plain'}
                             onButtonClick={'ProfileStep5Screen'}
                             ButtonText={'Continue'}
                    disabled={!(country)}
                             params={Object.assign(route.params.params, {country:country})}/>
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
    select: {
        borderWidth: 2,
        borderColor: '#34CC98',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 25
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