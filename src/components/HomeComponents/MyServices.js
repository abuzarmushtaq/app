import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation';
import Swipeout from 'react-native-swipeout';
import { Button } from 'react-native-elements';


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
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Button
                        title="Add New"
                        buttonStyle={{
                            backgroundColor: 'black',
                            // borderWidth: 1,
                            // borderRadius: 10,
                        }}
                        onPress={() => this.props.navigation.navigate('Home')}
                        fontWeight='bold'
                        color='white' />
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
                <View style={{ marginTop: 10, marginBottom: 10, justifyContent: 'flex-end' }}>
                    <Button
                        title="Add New"
                        buttonStyle={{
                            backgroundColor: 'black',
                            // borderWidth: 1,
                            // borderRadius: 10,
                        }}
                        onPress={() => this.props.navigation.navigate('Home')}
                        fontWeight='bold'
                        color='white' />
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
        // height: 100,
        // justifyContent: 'center'
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
    }
})