import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function TutorialScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Text>Start Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterStack')}>
                <Text>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterStack')}>
                <Text>Skip</Text>
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