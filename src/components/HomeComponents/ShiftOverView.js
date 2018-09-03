import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Swipeout from 'react-native-swipeout';
import { createMaterialTopTabNavigator } from 'react-navigation';

let swipeoutBtns = [
    {
        text: 'Cancel',
        backgroundColor: 'red',
        color: 'white',
        underlayColor: "black",
    }
];

let ShiftRequestObject = {}

class Pending extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.requestBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: </Text>
                            <Text>Date & Time: </Text>
                            <Text>Adress: </Text>
                            <Text>Service Detail: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.requestBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: </Text>
                            <Text>Date & Time: </Text>
                            <Text>Adress: </Text>
                            <Text>Service Detail: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.requestBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: "null"</Text>
                            <Text>Date & Time: "null"</Text>
                            <Text>Adress: "null"</Text>
                            <Text>Service Detail: "null"</Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.requestBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: "null"</Text>
                            <Text>Date & Time: "null"</Text>
                            <Text>Adress: "null"</Text>
                            <Text>Service Detail: "null"</Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.requestBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: "null"</Text>
                            <Text>Date & Time: "null"</Text>
                            <Text>Adress: "null"</Text>
                            <Text>Service Detail: "null"</Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.requestBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: "null"</Text>
                            <Text>Date & Time: "null"</Text>
                            <Text>Adress: "null"</Text>
                            <Text>Service Detail: "null"</Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.requestBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: "null"</Text>
                            <Text>Date & Time: "null"</Text>
                            <Text>Adress: "null"</Text>
                            <Text>Service Detail: "null"</Text>
                        </View>
                    </Swipeout>
                </View>
            </ScrollView>
        )
    }
}
class Done extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> View Same As Pending Page! </Text>
            </View>
        )
    }
}
class Disputed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> View Same As Pending Page! </Text>
            </View>
        )
    }
}

export default createMaterialTopTabNavigator({
    Pending: Pending,
    Done: Done,
    Disputed: Disputed
}, {
        initialRouteName: 'Pending',
        navigationOptions: {
            swipeEnabled: false
        },
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: 'white'
            },
            indicatorStyle: {
                backgroundColor: 'black'
            }
        }
    });
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    requestBar: {
        // height: 100,
        // justifyContent: 'center'
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
    }
})