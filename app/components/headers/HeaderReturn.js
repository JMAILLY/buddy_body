import * as React from 'react';
import {StyleSheet, Text, View, useWindowDimensions, Dimensions, TouchableOpacity, Image} from 'react-native';
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
                    <Image
                        style={styles.picto}
                        source={{
                            uri:
                                " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAPdJREFUSEvtk1FNA1EQRc9VABJwQKsA6oAqABxUQlHQoICigKIAcIAEJICC29zkNeGj4c2S3b/O79vcs3NmRkxcmjifE6BreLAi2+fAG/AtadEj/AfwDlwBH5KuRwXY3gK3wA8wk/Q1GsD2HfDUAueSPnvheS8psh0V8Z66l5ROStUF2J618Az3UdKqlNw+qgCi4hJ4lXQzJLykyPZha3aSllMAoiiQM+BB0noIpKsoYbaj5qUFLyXtqpASoEEy3E0uGFiMuqaHv/11aBl8IIH9WeUOWhdZ1cwjW/UsKcc3HqBBLoB0sK3cxKAOen977P0E6FqbXNEe3LFJGRosUDkAAAAASUVORK5CYII="
                        }}
                    />
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
    picto : {
        width: 24,
        height: 24
    }
});