import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

export default function CalendarScreen({navigation}) {
    const {logout} = React.useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text>Work in Progress !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});