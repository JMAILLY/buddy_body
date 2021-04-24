import * as React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LinearGrad() {

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    return (

            <LinearGradient
                // Background Linear Gradient
                colors={['#39BAC4', '#34CC98']}
                style={[styles.background]}
                start={{x: 1.0, y: 0.5}} end={{x: 0.5, y: 1.0}}
                // locations={[0,0]}
            />

    );
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        top: 0,
        right:0,
        bottom:0,
        zIndex: -1,
    },
});