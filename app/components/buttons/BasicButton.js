import * as React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import LinearGrad from "../LinearGrad";
import { useNavigation } from '@react-navigation/native';

export default function BasicButton({data,onButtonClick, ButtonText, params, disabled=false}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.button,(data === "plain") ? styles.plain : (data === "white") ? styles.white : (data === "transparent") ? styles.transparent : (data === "clear") ? styles.clear : styles.clearWhite]}
                          onPress={() => onButtonClick ? navigation.navigate(onButtonClick, {
                              params : params
                          }) : ''}
                          disabled={disabled}>
            {!!ButtonText &&
                <Text style={[styles.text,(data === "plain") ? styles.plainText : (data === "white") ? styles.whiteText : (data === "transparent") ? styles.transparentText : (data === "clear") ? styles.clearText : styles.clearWhiteText]}>{ButtonText}</Text>
            }
            {data === "plain" &&
                <LinearGrad/>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button : {
        height: 50,
        borderRadius: 100,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 6,
        // },
        // shadowOpacity: 0.16,
        // shadowRadius: 10.00,
        // elevation: 1,
    },
    text : {
        fontWeight : 'bold',
        fontSize : 14
    },
    plain : {

    },
    plainText : {
        color: 'white',
    },
    white : {
        backgroundColor : 'white',
    },
    whiteText : {
        color : '#34CC98'
    },
    transparent : {
        backgroundColor : 'transparent',
        borderWidth : 2,
        borderStyle : 'solid',
        borderColor : '#34CC98'
    },
    transparentText : {
        color : '#34CC98'
    },
    clear: {
        backgroundColor : 'transparent',
    },
    clearText : {
        color : '#34CC98'
    },
    clearWhite: {
        backgroundColor : 'transparent',
    },
    clearWhiteText : {
        color : 'white'
    },
});