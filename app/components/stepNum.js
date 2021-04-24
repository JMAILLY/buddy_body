import * as React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function StepNum({number}) {

    return (

        <View style={styles.wrapper}>
            <View style={styles.bar}>
                <View style={[styles.complet,{width:number*10+'%'}]}>

                </View>
            </View>
            <Text style={styles.text}>STEP {number}/10</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    wrapper : {
        marginTop: 30,
    },
    complet: {
        height: 8,
        borderRadius: 25,
        backgroundColor: '#34CC98'
    },
    bar : {
        width: 200,
        height: 8,
        borderRadius: 25,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.16,
        shadowRadius: 10.00,
        elevation: 1,
    },
    text : {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 10,
        color: '#34CC98',
    }
});