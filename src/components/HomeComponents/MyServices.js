import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation';
import Swipeout from 'react-native-swipeout';

import AddIcon from 'react-native-vector-icons/Entypo';
// import { Button } from 'react-native-elements';


let swipeoutBtns = [
    {
        text: 'Edit',
        backgroundColor: 'green',
        color: 'white',
        underlayColor: "black",
    },
    {
        text: 'Delete',
        backgroundColor: 'red',
        color: 'white',
        underlayColor: "black",
    }
];

class Services extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{ marginTop: 5, marginBottom: 5, marginRight: 20, flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <View style={styles.AddButton}>
                            <Text style={{ fontSize: 18, paddingRight: 5 }}>Add Services</Text>
                            <AddIcon name="circle-with-plus" color="black" size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.serviceBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Category - Service - Charges </Text>
                            <Text>Description: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.serviceBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Category - Service - Charges </Text>
                            <Text>Description: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.serviceBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Category - Service - Charges </Text>
                            <Text>Description: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.serviceBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Category - Service - Charges </Text>
                            <Text>Description: </Text>
                        </View>
                    </Swipeout>
                </View>
            </ScrollView>
        )
    }
}
class Bundles extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>

                <View style={{ marginTop: 5, marginBottom: 5, marginRight: 20, flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <View style={styles.AddButton}>
                            <Text style={{ fontSize: 18, paddingRight: 5 }}>Add Bundles</Text>
                            <AddIcon name="circle-with-plus" color="black" size={30} />
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.serviceBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Service 1 + Service 2 + Service 3</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Charges: </Text>
                            <Text>Description: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.serviceBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Service 1 + Service 2 + Service 3</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Charges: </Text>
                            <Text>Description: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.serviceBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Service 1 + Service 2 + Service 3</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Charges: </Text>
                            <Text>Description: </Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.serviceBar}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Service 1 + Service 2 + Service 3</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Charges: </Text>
                            <Text>Description: </Text>
                        </View>
                    </Swipeout>
                </View>

            </ScrollView>
        )
    }
}

export default createMaterialTopTabNavigator({
    Services: Services,
    Bundles: Bundles,
}, {
        initialRouteName: 'Services',
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