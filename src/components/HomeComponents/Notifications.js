import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';

export default class Notifications extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Notifications</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})