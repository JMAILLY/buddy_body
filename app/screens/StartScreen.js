import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import BasicButton from "../components/buttons/BasicButton";

export default function StartScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <BasicButton data={'plain'} onButtonClick={'TutorialScreen'} ButtonText={'Get started'}/>
                <Text style={styles.signin}>
                    Already have an account?
                    <TouchableOpacity onPress={() => navigation.navigate('LoginStack')} style={styles.signinLink}>
                        <Text> Sign in</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingLeft: 20,
        paddingRight: 20,
    },
    content : {
        alignSelf: 'stretch',
        height: 165
    },
    signin : {
        fontWeight: '600',
        marginTop: 25,
        textAlign: 'center'
    },
    signinLink : {
        color : '#39BAC4'
    }
});