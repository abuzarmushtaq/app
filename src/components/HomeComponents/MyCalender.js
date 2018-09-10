import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import AddIcon from 'react-native-vector-icons/Entypo';
import Swipeout from 'react-native-swipeout';



// import CalLeftArrow from 'react-native-vector-icons/MaterialIcons';

export default class MyCalender extends Component {
    render() {
        return (

            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{
                    marginTop: 10,
                    marginRight: 20,
                    flex: 1, justifyContent: 'flex-end', flexDirection: 'row'
                }}>
                    <TouchableOpacity>
                        <View style={styles.AddButton}>
                            <Text style={{ fontSize: 18, paddingRight: 5 }}>Add Bundles</Text>
                            <AddIcon name="circle-with-plus" color="black" size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <CalendarList
                        horizontal={true}
                        pagingEnabled={true}
                        style={{ height: 350 }}
                        theme={{
                            arrowColor: 'black',
                            todayTextColor: 'green'
                        }}
                    />
                </View>
                <View>
                    <Swipeout
                        // right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text>Service 1</Text>
                            <Text>09:00 AM - 10:00 AM</Text>
                        </View>
                    </Swipeout>
                    <Swipeout
                        // right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text>Service 2</Text>
                            <Text>09:00 AM - 10:00 AM</Text>
                        </View>
                    </Swipeout>
                    <Swipeout
                        // right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text>Service 3</Text>
                            <Text>09:00 AM - 10:00 AM</Text>
                        </View>
                    </Swipeout>
                    <Swipeout
                        // right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text>Service 4</Text>
                            <Text>09:00 AM - 10:00 AM</Text>
                        </View>
                    </Swipeout>
                    <Swipeout
                        // right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text>Service 5</Text>
                            <Text>09:00 AM - 10:00 AM</Text>
                        </View>
                    </Swipeout>
                    <Swipeout
                        // right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text>Service 6</Text>
                            <Text>09:00 AM - 10:00 AM</Text>
                        </View>
                    </Swipeout>
                    <Swipeout
                        // right={swipeoutBtns}
                        backgroundColor="white"
                    >
                        <View style={{ padding: 10 }}>
                            <Text>Service 7</Text>
                            <Text>09:00 AM - 10:00 AM</Text>
                        </View>
                    </Swipeout>
                </View>

            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    AddButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        marginTop: 5
    }
})