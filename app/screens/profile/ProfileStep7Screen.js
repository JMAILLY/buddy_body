import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import BasicButton from "../../components/buttons/BasicButton";
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import StepNum from "../../components/StepNum";

const HeightItems = Array.from(Array(220).keys());
const WeightItems = Array.from(Array(220).keys());


const List = (item, index) => (
    <View style={[styles.item, { width: 50 }]}>
        <Text style={styles.itemText}>
            { item }
        </Text>
    </View>
);

export default function ProfileStep7Screen({route, navigation}) {
    const {logout} = React.useContext(AuthContext);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [touchheight, setTouchHeight] = useState('cm');
    const [touchweigth, setTouchWeight] = useState('kg');


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.step}>
                    <StepNum number={7}/>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>What is your height ?</Text>
                <View style={styles.buttonMesure}>
                    <TouchableOpacity style={[styles.button, touchheight === 'ft' ? styles.buttonClicked : '']} onPress={()=> setTouchHeight('ft')}>
                        <Text style={[styles.buttonText, touchheight === 'ft' ? styles.textClicked : '']}>ft</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, touchheight === 'cm' ? styles.buttonClicked : '' ,{marginLeft: 30}]} onPress={()=> setTouchHeight('cm')}>
                        <Text style={[styles.buttonText, touchheight === 'cm' ? styles.textClicked : '']}>cm</Text>
                    </TouchableOpacity>
                </View>
                <HorizontalPicker
                    data={HeightItems}
                    renderItem={List}
                    itemWidth={50}
                    snapTimeout={100}
                    defaultIndex={180}
                    onChange={( position ) => setHeight(position)}
                />
                <Text style={styles.text}>What is your weight ?</Text>
                <View style={styles.buttonMesure}>
                    <TouchableOpacity style={[styles.button, touchweigth === 'lbs' ? styles.buttonClicked : '']} onPress={()=> setTouchWeight('lbs')}>
                    <Text style={[styles.buttonText, touchweigth === 'lbs' ? styles.textClicked : '']}>lbs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, touchweigth === 'kg' ? styles.buttonClicked : '' ,{marginLeft: 30}]} onPress={()=> setTouchWeight('kg')}>
                        <Text style={[styles.buttonText, touchweigth === 'kg' ? styles.textClicked : '']}>kg</Text>
                    </TouchableOpacity>
                </View>
                <HorizontalPicker
                    data={WeightItems}
                    renderItem={List}
                    itemWidth={50}
                    snapTimeout={100}
                    defaultIndex={90}
                    onChange={( position ) => setWeight(position)}
                />
            </View>
            <View style={styles.buttons}>
                <BasicButton data={'plain'}
                             onButtonClick={'ProfileStep8Screen'}
                             ButtonText={'Continue'}
                    // disabled={!(height && weight)}
                             params={Object.assign(route.params.params, {height:height},{weight:weight})}/>
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

    buttonMesure: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:30
    },
    button: {
        flexDirection: 'row',
        borderColor: '#34CC98',
        borderWidth: 1,
        width:75,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
    },
    buttonText: {
        fontSize: 12,
        color : '#34CC98',
    },
    buttonClicked : {
        backgroundColor: '#34CC98',
    },
    textClicked: {
        color : 'white',
    },
    itemText : {
        fontSize : 14,
    },
    item : {
        marginTop: 50,
        textAlign : 'center',
    }
});