import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Swipeout from 'react-native-swipeout';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { GiftedChat } from 'react-native-gifted-chat';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import AvatarIcon from 'react-native-vector-icons/MaterialIcons';




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
                            <Text>Date & Time:</Text>
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
                            <Text>Date & Time: </Text>
                            <Text>Adress: </Text>
                            <Text>Service Detail: </Text>
                        </View>
                    </Swipeout>
                </View>
            </ScrollView>
        )
    }
}

class Disputed extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#eee' }}>
                <View>
                    <Swipeout backgroundColor="white">
                        <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <AvatarIcon name="person" size={40} />
                                <Text>John</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: '#0eb2e7' }}>Chat </Text>
                            </TouchableOpacity>
                        </View>
                    </Swipeout>
                    <Swipeout backgroundColor="white">
                        <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <AvatarIcon name="person" size={40} />
                                <Text>Ashlay</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: '#0eb2e7' }}>Chat </Text>
                            </TouchableOpacity>
                        </View>
                    </Swipeout>
                    <Swipeout backgroundColor="white">
                        <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <AvatarIcon name="person" size={40} />
                                <Text>Asad</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: '#0eb2e7' }}>Chat </Text>
                            </TouchableOpacity>
                        </View>
                    </Swipeout>
                    <Swipeout backgroundColor="white">
                        <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <AvatarIcon name="person" size={40} />
                                <Text>Andrew</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: '#0eb2e7' }}>Chat </Text>
                            </TouchableOpacity>
                        </View>
                    </Swipeout>
                    <Swipeout backgroundColor="white">
                        <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <AvatarIcon name="person" size={40} />
                                <Text>Andrew</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: '#0eb2e7' }}>Chat </Text>
                            </TouchableOpacity>
                        </View>
                    </Swipeout>
                    <Swipeout backgroundColor="white">
                        <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <AvatarIcon name="person" size={40} />
                                <Text>Adam</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: '#0eb2e7' }}>Chat </Text>
                            </TouchableOpacity>
                        </View>
                    </Swipeout>
                </View>
            </ScrollView>
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
        borderTopColor: '#ddd',
        borderTopWidth: 1,
    },
    serviceBar: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    }
})