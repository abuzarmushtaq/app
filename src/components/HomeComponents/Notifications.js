import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import UserIcon from 'react-native-gifted-chat';

export default class Notifications extends Component {
    state = {
        messages: [],
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hi!',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Asad',
                        // avatar: ,
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
                <GiftedChat
                    style={{ backgroundColor: 'white' }}
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
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