import * as React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LinearGrad({number}) {

    return (

        <View style={styles.wrapper}>
            <View style={styles.bar}>

            </View>
            <Text style={styles.text}>STEP {number}/10</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    wrapper : {

    },
    bar : {
        width: 200,
        height: 8,
        borderRadius: 25,
        background: 'white'
    },
    text : {
        textAlign: 'center',
    }
});