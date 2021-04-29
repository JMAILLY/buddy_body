import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import BasicButton from "../../components/buttons/BasicButton";
import StepNum from "../../components/StepNum";
import CountryPicker from "react-native-country-picker-modal";

export default function ProfileStep5Screen({route,navigation}) {
    const {logout} = React.useContext(AuthContext);
    const [goal, setGoal] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.step}>
                    <StepNum number={5}/>
                </View>
                <Text style={styles.text}>Let us know how we can help you</Text>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={[styles.item, goal === 'Weight loss' ? styles.border : '']} onPress={() => setGoal('Weight loss')}>
                    <Text style={styles.itemText}>Weight loss</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.item, goal === 'Muscle gain' ? styles.border : '']} onPress={() => setGoal('Muscle gain')}>
                    <Text style={styles.itemText}>Muscle gain</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.item, goal === 'Improve overall fitness' ? styles.border : '']} onPress={() => setGoal('Improve overall fitness')}>
                    <Text style={styles.itemText}>Improve overall fitness</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.item, goal === 'Maintain weight' ? styles.border : '']} onPress={() => setGoal('Maintain weight')}>
                    <Text style={styles.itemText}>Maintain weight</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <BasicButton data={'plain'}
                             onButtonClick={'ProfileStep6Screen'}
                             ButtonText={'Continue'}
                    disabled={!(goal)}
                             params={Object.assign(route.params.params, {goal:goal})}/>
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
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    contentMessage : {
        marginTop: 50,
    },
    contentTop : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontWeight : '600',
        fontSize : 16,
        marginTop: 30,
        textAlign: 'center',
    },
    buttons: {
        alignSelf: 'stretch',
        height: 115
    },
    text : {
        fontWeight : 'bold',
        fontSize : 14,
        marginTop: 30,
        textAlign: 'center',
    },

    item : {
        height: 75,
        borderRadius: 25,
        alignSelf: 'stretch',
        backgroundColor: 'black',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 10,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    itemText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    border: {
        borderColor: '#34CC98',
    }
});