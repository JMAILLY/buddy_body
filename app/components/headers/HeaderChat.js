import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import LinearGrad from "../LinearGrad";
import {useAuth} from "../../hooks/useAuth";

export default function HeaderChat({navigation}) {
    const {auth, state} = useAuth();

    const windowWidth = useWindowDimensions().width;
    return (
        <View style={[styles.container, {width: windowWidth}]}>
            <View style={[styles.content]}>
                <View style={styles.buddies}>
                    {/*TODO GET IMG FROM GROUP TO DISPLAY WITH .MAP*/}
                    <Image
                        style={styles.img}
                        source={{
                            uri: "data:image/png;base64,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"
                            // uri:
                            // state.user ? state.user.picture : ''
                        }}
                    />
                    <Image
                        style={styles.img}
                        source={{
                            uri: "data:image/png;base64,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"
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    content: {
        padding: 20,
        justifyContent: 'center',
        overflow: 'hidden',
        flexDirection: 'row'
    },
    buddies : {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    picto: {
        width: 24,
        height: 24
    },
    img: {
        width: 30,
        height: 30,
        marginLeft: 2.5,
        marginRight: 2.5
    }
});