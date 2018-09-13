import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Swipeout from 'react-native-swipeout';


export default class CalendarLists extends Component {
    render() {
        return (
            <View>
                <View style={styles.serviceBar}>
                    <Swipeout backgroundColor="white">
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Service 1</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Time: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.serviceBar}>
                    <Swipeout backgroundColor="white">
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Service 2</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Time: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.serviceBar}>
                    <Swipeout backgroundColor="white">
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Service 3</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Time: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.serviceBar}>
                    <Swipeout backgroundColor="white">
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Service 4</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Time: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.serviceBar}>
                    <Swipeout backgroundColor="white">
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Service 5</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Time: </Text>
                        </View>
                    </Swipeout>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    serviceBar: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
})