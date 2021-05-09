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
                <View style={styles.sig}>
                    <Text style={styles.signin}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginStack')}>
                        <Text style={styles.signinLink}> Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingLeft: 20,
        paddingRight: 20,
    },
    content : {
        alignSelf: 'stretch',
        height: 165
    },
    sig : {
        flexDirection: 'row',
        marginTop: 25,
        textAlign: 'center',
        justifyContent: 'center'
    },
    signin : {
        fontWeight: '600',
    },
    signinLink : {
        fontWeight: '700',
        color : '#39BAC4'
    }
});