import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import BasicButton from "../../components/buttons/BasicButton";

export default function ProfileStep1Screen({navigation}) {
    const {logout} = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.step}>

                </View>
                <Text style={styles.text}>How can we call you ?</Text>
            </View>
            <View style={styles.content}>

            </View>
            <View style={styles.buttons}>
                <BasicButton data={'plain'}
                             onButtonClick={'ProfileStep2Screen'}
                             ButtonText={'Continue'}/>
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
    buttons: {
        alignSelf: 'stretch',
        height: 115
    },
    text : {
        fontWeight : 'bold',
        fontSize : 14,
        marginTop: 30
    }
});