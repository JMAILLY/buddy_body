import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';

export default function ProfileStep8Screen({navigation}) {
    const {logout} = React.useContext(AuthContext);

    //To next profile step
    const handleNext = async (e) => {
        e.preventDefault()
        navigation.navigate('ProfileStep9Screen')
    }

    //Disable Skip, it's now necessary to complete the profile to use the app
    // const handleSkip = async (e) => {
    //     e.preventDefault()
    // }

    return (
        <View style={styles.container}>
            <Text>Profile Start</Text>
            <TouchableOpacity
                onPress={handleNext}>
                <Text>Continue</Text>
            </TouchableOpacity>
            {/*<TouchableOpacity*/}
            {/*    onPress={handleSkip}>*/}
            {/*    <Text>Skip for now</Text>*/}
            {/*</TouchableOpacity>*/}
            <Button
                name={'log-out'}
                onPress={() => {
                    logout();
                }}>
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