import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

export default function ChatScreen({navigation}) {
    const {logout} = React.useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                name={'log-out'}
                onPress={() => {
                    logout();
                }}>
                ok
            </Button>
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