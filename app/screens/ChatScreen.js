import React, {useEffect, useState, useRef} from 'react';
import {Button, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import HeaderChat from "../components/headers/HeaderChat";
import LinearGrad from "../components/LinearGrad";
import io from 'socket.io-client';
import {useAuth} from "../hooks/useAuth";


export default function ChatScreen({navigation}) {

    const {auth, state} = useAuth();
    const {logout} = React.useContext(AuthContext);
    const [name, setName] = useState('');
    const [chatMessage, setChatMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const socketRef = useRef()

    if(state.user && name === ''){
        setName(state.user.firstname)
    }

    useEffect(
        () => {
            socketRef.current = io.connect("http://127.0.0.1:8080");
            socketRef.current.on("chat message", ({name,chatMessage}) => {
                setChatMessages([...chatMessages,{name, chatMessage}] );
            });
            return () => socketRef.current.disconnect()
        },
        [ chatMessages ]
    )

    const submitChatMessage = (e) => {
        socketRef.current.emit("chat message",{name, chatMessage})
        e.preventDefault()
        setChatMessage('')
    }
    return (
        <View style={styles.container}>
            <LinearGrad/>
            <HeaderChat/>
            <View style={styles.content}>
                {
                    chatMessages.map(({ name, chatMessage }, index) => (
                        <Text key={index}>{name} : {(chatMessage)}</Text>
                    ))
                }
                <TextInput
                    onChangeText={ message => {
                        setChatMessage(message)
                    }}
                    value={chatMessage}
                />
                <TouchableOpacity onPress={(e) => submitChatMessage(e)}>
                    <Text>Go</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    content : {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }
});