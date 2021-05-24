import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import BasicButton from "../../components/buttons/BasicButton";
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import StepNum from "../../components/StepNum";

const WeightItems = Array.from(Array(220).keys());
const TimeItems = Array.from(Array(24).keys());


const List = (item, index) => (
    <View style={[styles.item, {width: 50}]}>
        <Text style={styles.itemText}>
            {item}
        </Text>
    </View>
);

export default function ProfileStep8Screen({route, navigation}) {
    const {logout} = React.useContext(AuthContext);
    const [goalWeight, setGoalWeight] = useState('');
    const [goalTime, setGoalTime] = useState('');
    const [touchgoalweight, setTouchGoalWeight] = useState('kg');


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.step}>
                    <StepNum number={8}/>
                </View>
            </View>
            <View style={styles.content}>
                <View>
                    <Text style={styles.text}>What is your goal weight ?</Text>
                    <View style={styles.buttonMesure}>
                        <TouchableOpacity style={[styles.button, touchgoalweight === 'lbs' ? styles.buttonClicked : '']}
                                          onPress={() => setTouchGoalWeight('lbs')}>
                            <Text
                                style={[styles.buttonText, touchgoalweight === 'lbs' ? styles.textClicked : '']}>lbs</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, touchgoalweight === 'kg' ? styles.buttonClicked : '', {marginLeft: 30}]}
                            onPress={() => setTouchGoalWeight('kg')}>
                            <Text
                                style={[styles.buttonText, touchgoalweight === 'kg' ? styles.textClicked : '']}>kg</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <HorizontalPicker
                            data={WeightItems}
                            renderItem={List}
                            itemWidth={50}
                            snapTimeout={100}
                            defaultIndex={90}
                            onChange={(position) => setGoalWeight(position)}
                        />
                        <Image
                            style={[styles.triangle]}
                            source={{
                                uri:
                                    " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAABHNCSVQICAgIfAhkiAAAAP5JREFUKFOFkTFLw1AUhc9J0C5xdHURbIW6+F7+gcW/oGPpklCK3epP0K0OkiyCm9LNTdB/0Jd2qKAOLq7iZBYrzZVUK61J6Jse556Pw7mXyHvSs7V57xrXb+WNmScqE3oEgoRSHyj/8r8nA5WfLtacePxCcF0gb7GzuvlcaXzMgxlImbBL4GhmEuAs0l67ENqNzretxB6BsP9MgkliTXYGqvk40xaSdD+4A7mX6Slyb1y/loF0PzgAeZW7zVQUOTSuf51+p0k/5b8eCGwUQQK8xs5KNV3KFFImPCHQKUz5HQhwGmnvmGl5ijUkWFoOySdgbVGZ4Jbg/jJg7gQ335+cUQkP1rtZAAAAAElFTkSuQmCC"
                            }}
                        />
                    </View>
                </View>
                <View style={{marginTop: 75}}>
                    <Text style={styles.text}>In how long would you like{'\n'}to complete your goal ?</Text>
                    <View>
                        <HorizontalPicker
                            data={TimeItems}
                            renderItem={List}
                            itemWidth={50}
                            snapTimeout={100}
                            defaultIndex={6}
                            onChange={(position) => setGoalTime(position)}
                        />
                        <Text style={[styles.months]}>months</Text>
                        <Image
                            style={[styles.triangle]}
                            source={{
                                uri:
                                    " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAABHNCSVQICAgIfAhkiAAAAP5JREFUKFOFkTFLw1AUhc9J0C5xdHURbIW6+F7+gcW/oGPpklCK3epP0K0OkiyCm9LNTdB/0Jd2qKAOLq7iZBYrzZVUK61J6Jse556Pw7mXyHvSs7V57xrXb+WNmScqE3oEgoRSHyj/8r8nA5WfLtacePxCcF0gb7GzuvlcaXzMgxlImbBL4GhmEuAs0l67ENqNzretxB6BsP9MgkliTXYGqvk40xaSdD+4A7mX6Slyb1y/loF0PzgAeZW7zVQUOTSuf51+p0k/5b8eCGwUQQK8xs5KNV3KFFImPCHQKUz5HQhwGmnvmGl5ijUkWFoOySdgbVGZ4Jbg/jJg7gQ335+cUQkP1rtZAAAAAElFTkSuQmCC"
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.buttons}>
                <BasicButton data={'plain'}
                             onButtonClick={'ProfileStep9Screen'}
                             ButtonText={'Continue'}
                             disabled={!(goalWeight && goalTime)}
                             params={Object.assign(route.params.params, {goalWeight: goalWeight}, {goalTime: goalTime})}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
    },
    contentMessage: {
        marginTop: 50,
    },
    contentTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontWeight: '600',
        fontSize: 16,
        marginTop: 30,
        textAlign: 'center',
    },
    buttons: {
        alignSelf: 'stretch',
        height: 115
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 30,
        textAlign: 'center',
    },

    buttonMesure: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    button: {
        flexDirection: 'row',
        borderColor: '#34CC98',
        borderWidth: 1,
        width: 75,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 12,
        color: '#34CC98',
    },
    buttonClicked: {
        backgroundColor: '#34CC98',
    },
    textClicked: {
        color: 'white',
    },
    itemText: {
        fontSize: 14,
    },
    item: {
        marginTop: 50,
        textAlign: 'center',
    },
    triangle: {
        height: 11,
        width: 13,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10
    },
    months: {
        marginTop: 5,
        color: '#34CC98',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});