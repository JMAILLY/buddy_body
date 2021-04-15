import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

export default function StartScreen({navigation}) {
    console.log(navigation)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Tutorial')}>
                <Text>Get started</Text>
            </TouchableOpacity>
            <Text>
                Already have an account?
                <TouchableOpacity onPress={() => navigation.navigate('LoginStack')}>
                    <Text> Sign in</Text>
                </TouchableOpacity>
            </Text>

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