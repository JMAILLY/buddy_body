import * as React from 'react';
import {StyleSheet, Text, View, useWindowDimensions, Dimensions, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LinearGrad from "../LinearGrad";
import Svg, { Circle, Rect } from 'react-native-svg';

export default function HeaderReturn({navigation}) {
    const windowWidth = useWindowDimensions().width;
    return (
        <View style={[styles.container,{width:windowWidth}]}>
            <View style={[styles.content]}>
                <LinearGrad/>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill='white'>
                        <g data-name="Layer 2"><g data-name="arrow-ios-back">
                            <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/>
                            <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/>
                        </g>
                        </g>
                    </svg>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
    },
    content : {
        height:50,
        padding: 20,
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.16,
        shadowRadius: 10.00,
        elevation: 1,
    },
});