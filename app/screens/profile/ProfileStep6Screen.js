import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import BasicButton from "../../components/buttons/BasicButton";
import StepNum from "../../components/StepNum";

export default function ProfileStep6Screen({route, navigation}) {
    const {logout} = React.useContext(AuthContext);
    const [activity, setActivity] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.step}>
                    <StepNum number={6}/>
                </View>
                <Text style={styles.text}>Activity rate during your week {'\n'}(by time, effort, physical
                    difficulty)</Text>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={[styles.item, activity === 'No physical activity' ? styles.border : '']}
                                  onPress={() => setActivity('No physical activity')}>
                    <Text style={styles.itemText}>No physical activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.item, activity === 'Light physical activity' ? styles.border : '']}
                                  onPress={() => setActivity('Light physical activity')}>
                    <Text style={styles.itemText}>Light physical activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.item, activity === 'Medium physical activity' ? styles.border : '']}
                                  onPress={() => setActivity('Medium physical activity')}>
                    <Text style={styles.itemText}>Medium physical activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.item, activity === 'Hight physical activity' ? styles.border : '']}
                                  onPress={() => setActivity('Hight physical activity')}>
                    <Text style={styles.itemText}>Hight physical activity</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <BasicButton data={'plain'}
                             onButtonClick={'ProfileStep7Screen'}
                             ButtonText={'Continue'}
                             disabled={!(activity)}
                             params={Object.assign(route.params.params, {activity: activity})}/>
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
        justifyContent: 'center',
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

    item: {
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