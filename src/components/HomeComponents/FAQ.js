import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Swipeout from 'react-native-swipeout';
import AddIcon from 'react-native-vector-icons/Entypo';

export default class FAQ extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={{ marginTop: 5, marginBottom: 5, marginRight: 20, flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <View style={styles.AddButton}>
                            <Text style={{ fontSize: 18, paddingRight: 5 }}>Add New</Text>
                            <AddIcon name="circle-with-plus" color="black" size={30} />
                        </View>
                    </TouchableOpacity>
                </View>

                <Swipeout backgroundColor="white">
                    <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>Question:  My Service</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>Answer: Lorem Lipsum... </Text>
                    </View>
                </Swipeout>
                <Swipeout backgroundColor="white">
                    <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>Question:  My Speed</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>Answer: Lorem Lipsum... </Text>
                    </View>
                </Swipeout>
                <Swipeout backgroundColor="white">
                    <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>Question:  Work Quality</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>Answer: Lorem Lipsum... </Text>
                    </View>
                </Swipeout>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    serviceBar: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    AddButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5
    }
})