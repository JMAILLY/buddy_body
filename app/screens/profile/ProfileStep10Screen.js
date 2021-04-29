import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import BasicButton from "../../components/buttons/BasicButton";
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import StepNum from "../../components/StepNum";
import CountryPicker from "react-native-country-picker-modal";
import LinearGrad from "../../components/LinearGrad";

export default function ProfileStep10Screen({route, navigation}) {
    const {logout} = React.useContext(AuthContext);
    const [picture, setPicture] = useState('');

    const handleFinish = async (e) => {
        e.preventDefault()
        console.log(route.params)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.step}>
                    <StepNum number={10}/>
                </View>
                <Text style={styles.text}>Time to customise your interests</Text>
            </View>
            <View style={styles.content}>
                <Image
                    style={[styles.interest]}
                    source={{
                        uri:
                            " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAABHNCSVQICAgIfAhkiAAAAP5JREFUKFOFkTFLw1AUhc9J0C5xdHURbIW6+F7+gcW/oGPpklCK3epP0K0OkiyCm9LNTdB/0Jd2qKAOLq7iZBYrzZVUK61J6Jse556Pw7mXyHvSs7V57xrXb+WNmScqE3oEgoRSHyj/8r8nA5WfLtacePxCcF0gb7GzuvlcaXzMgxlImbBL4GhmEuAs0l67ENqNzretxB6BsP9MgkliTXYGqvk40xaSdD+4A7mX6Slyb1y/loF0PzgAeZW7zVQUOTSuf51+p0k/5b8eCGwUQQK8xs5KNV3KFFImPCHQKUz5HQhwGmnvmGl5ijUkWFoOySdgbVGZ4Jbg/jJg7gQ335+cUQkP1rtZAAAAAElFTkSuQmCC"
                    }}
                />
                <Image
                    style={[styles.interest]}
                    source={{
                        uri:
                            " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAABHNCSVQICAgIfAhkiAAAAP5JREFUKFOFkTFLw1AUhc9J0C5xdHURbIW6+F7+gcW/oGPpklCK3epP0K0OkiyCm9LNTdB/0Jd2qKAOLq7iZBYrzZVUK61J6Jse556Pw7mXyHvSs7V57xrXb+WNmScqE3oEgoRSHyj/8r8nA5WfLtacePxCcF0gb7GzuvlcaXzMgxlImbBL4GhmEuAs0l67ENqNzretxB6BsP9MgkliTXYGqvk40xaSdD+4A7mX6Slyb1y/loF0PzgAeZW7zVQUOTSuf51+p0k/5b8eCGwUQQK8xs5KNV3KFFImPCHQKUz5HQhwGmnvmGl5ijUkWFoOySdgbVGZ4Jbg/jJg7gQ335+cUQkP1rtZAAAAAElFTkSuQmCC"
                    }}
                />
                <Image
                    style={[styles.interest]}
                    source={{
                        uri:
                            " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAABHNCSVQICAgIfAhkiAAAAP5JREFUKFOFkTFLw1AUhc9J0C5xdHURbIW6+F7+gcW/oGPpklCK3epP0K0OkiyCm9LNTdB/0Jd2qKAOLq7iZBYrzZVUK61J6Jse556Pw7mXyHvSs7V57xrXb+WNmScqE3oEgoRSHyj/8r8nA5WfLtacePxCcF0gb7GzuvlcaXzMgxlImbBL4GhmEuAs0l67ENqNzretxB6BsP9MgkliTXYGqvk40xaSdD+4A7mX6Slyb1y/loF0PzgAeZW7zVQUOTSuf51+p0k/5b8eCGwUQQK8xs5KNV3KFFImPCHQKUz5HQhwGmnvmGl5ijUkWFoOySdgbVGZ4Jbg/jJg7gQ335+cUQkP1rtZAAAAAElFTkSuQmCC"
                    }}
                />
                <Image
                    style={[styles.interest]}
                    source={{
                        uri:
                            " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAABHNCSVQICAgIfAhkiAAAAP5JREFUKFOFkTFLw1AUhc9J0C5xdHURbIW6+F7+gcW/oGPpklCK3epP0K0OkiyCm9LNTdB/0Jd2qKAOLq7iZBYrzZVUK61J6Jse556Pw7mXyHvSs7V57xrXb+WNmScqE3oEgoRSHyj/8r8nA5WfLtacePxCcF0gb7GzuvlcaXzMgxlImbBL4GhmEuAs0l67ENqNzretxB6BsP9MgkliTXYGqvk40xaSdD+4A7mX6Slyb1y/loF0PzgAeZW7zVQUOTSuf51+p0k/5b8eCGwUQQK8xs5KNV3KFFImPCHQKUz5HQhwGmnvmGl5ijUkWFoOySdgbVGZ4Jbg/jJg7gQ335+cUQkP1rtZAAAAAElFTkSuQmCC"
                    }}
                />
                <Image
                    style={[styles.interest]}
                    source={{
                        uri:
                            " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAABHNCSVQICAgIfAhkiAAAAP5JREFUKFOFkTFLw1AUhc9J0C5xdHURbIW6+F7+gcW/oGPpklCK3epP0K0OkiyCm9LNTdB/0Jd2qKAOLq7iZBYrzZVUK61J6Jse556Pw7mXyHvSs7V57xrXb+WNmScqE3oEgoRSHyj/8r8nA5WfLtacePxCcF0gb7GzuvlcaXzMgxlImbBL4GhmEuAs0l67ENqNzretxB6BsP9MgkliTXYGqvk40xaSdD+4A7mX6Slyb1y/loF0PzgAeZW7zVQUOTSuf51+p0k/5b8eCGwUQQK8xs5KNV3KFFImPCHQKUz5HQhwGmnvmGl5ijUkWFoOySdgbVGZ4Jbg/jJg7gQ335+cUQkP1rtZAAAAAElFTkSuQmCC"
                    }}
                />
                <Image
                    style={[styles.interest]}
                    source={{
                        uri:
                            " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAABHNCSVQICAgIfAhkiAAAAP5JREFUKFOFkTFLw1AUhc9J0C5xdHURbIW6+F7+gcW/oGPpklCK3epP0K0OkiyCm9LNTdB/0Jd2qKAOLq7iZBYrzZVUK61J6Jse556Pw7mXyHvSs7V57xrXb+WNmScqE3oEgoRSHyj/8r8nA5WfLtacePxCcF0gb7GzuvlcaXzMgxlImbBL4GhmEuAs0l67ENqNzretxB6BsP9MgkliTXYGqvk40xaSdD+4A7mX6Slyb1y/loF0PzgAeZW7zVQUOTSuf51+p0k/5b8eCGwUQQK8xs5KNV3KFFImPCHQKUz5HQhwGmnvmGl5ijUkWFoOySdgbVGZ4Jbg/jJg7gQ335+cUQkP1rtZAAAAAElFTkSuQmCC"
                    }}
                />
                <Image
                    style={[styles.interest]}
                    source={{
                        uri:
                            " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAABHNCSVQICAgIfAhkiAAAAP5JREFUKFOFkTFLw1AUhc9J0C5xdHURbIW6+F7+gcW/oGPpklCK3epP0K0OkiyCm9LNTdB/0Jd2qKAOLq7iZBYrzZVUK61J6Jse556Pw7mXyHvSs7V57xrXb+WNmScqE3oEgoRSHyj/8r8nA5WfLtacePxCcF0gb7GzuvlcaXzMgxlImbBL4GhmEuAs0l67ENqNzretxB6BsP9MgkliTXYGqvk40xaSdD+4A7mX6Slyb1y/loF0PzgAeZW7zVQUOTSuf51+p0k/5b8eCGwUQQK8xs5KNV3KFFImPCHQKUz5HQhwGmnvmGl5ijUkWFoOySdgbVGZ4Jbg/jJg7gQ335+cUQkP1rtZAAAAAElFTkSuQmCC"
                    }}
                />
                <Image
                    style={[styles.interest]}
                    source={{
                        uri:
                            " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAABHNCSVQICAgIfAhkiAAAAP5JREFUKFOFkTFLw1AUhc9J0C5xdHURbIW6+F7+gcW/oGPpklCK3epP0K0OkiyCm9LNTdB/0Jd2qKAOLq7iZBYrzZVUK61J6Jse556Pw7mXyHvSs7V57xrXb+WNmScqE3oEgoRSHyj/8r8nA5WfLtacePxCcF0gb7GzuvlcaXzMgxlImbBL4GhmEuAs0l67ENqNzretxB6BsP9MgkliTXYGqvk40xaSdD+4A7mX6Slyb1y/loF0PzgAeZW7zVQUOTSuf51+p0k/5b8eCGwUQQK8xs5KNV3KFFImPCHQKUz5HQhwGmnvmGl5ijUkWFoOySdgbVGZ4Jbg/jJg7gQ335+cUQkP1rtZAAAAAElFTkSuQmCC"
                    }}
                />
                <Image
                    style={[styles.interest]}
                    source={{
                        uri:
                            " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAABHNCSVQICAgIfAhkiAAAAP5JREFUKFOFkTFLw1AUhc9J0C5xdHURbIW6+F7+gcW/oGPpklCK3epP0K0OkiyCm9LNTdB/0Jd2qKAOLq7iZBYrzZVUK61J6Jse556Pw7mXyHvSs7V57xrXb+WNmScqE3oEgoRSHyj/8r8nA5WfLtacePxCcF0gb7GzuvlcaXzMgxlImbBL4GhmEuAs0l67ENqNzretxB6BsP9MgkliTXYGqvk40xaSdD+4A7mX6Slyb1y/loF0PzgAeZW7zVQUOTSuf51+p0k/5b8eCGwUQQK8xs5KNV3KFFImPCHQKUz5HQhwGmnvmGl5ijUkWFoOySdgbVGZ4Jbg/jJg7gQ335+cUQkP1rtZAAAAAElFTkSuQmCC"
                    }}
                />
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button,styles.plain]} onPress={handleFinish}>
                    <Text style={[styles.buttonText,styles.plainText]}>Continue</Text>
                    <LinearGrad/>
                </TouchableOpacity>
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
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        maxHeight: 340
    },
    buttons: {
        alignSelf: 'stretch',
        height: 115
    },
    button : {
        height: 50,
        borderRadius: 100,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    plain : {
        marginBottom: 15
    },
    plainText : {
        color: 'white',
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 14,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 30,
        textAlign: 'center',
    },
    interest : {
        width:100,
        height:100,
    }
});