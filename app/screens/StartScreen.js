import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

export default function StartScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Text>Start Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Tutorial')}>
                <Text>Get started</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginStack')}>
                <Text>Sign in</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});