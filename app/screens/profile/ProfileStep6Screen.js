import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import BasicButton from "../../components/buttons/BasicButton";

export default function ProfileStep6Screen({navigation}) {
    const {logout} = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View>

            </View>
            <View style={styles.content}>
                <BasicButton data={'plain'}
                             onButtonClick={'ProfileStep7Screen'}
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
    content: {
        alignSelf: 'stretch',
        height: 115
    },
});