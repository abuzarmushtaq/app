import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import AddIcon from 'react-native-vector-icons/Entypo';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Swipeout from 'react-native-swipeout';


import CalendarLists from './ChildComponents/CalendarLists';


export default class MyCalender extends Component {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    render() {
        return (

            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ marginTop: 8, marginBottom: 8, marginRight: 20 }}>
                        <Menu
                            ref={this.setMenuRef}
                            button={
                                <TouchableOpacity onPress={this.showMenu} style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
                                    <Text style={{ fontSize: 18 }}>Add new </Text>
                                    <AddIcon name="circle-with-plus" color="black" size={30} />
                                </TouchableOpacity>
                            }
                        >
                            <MenuItem onPress={this.hideMenu}>Available Slots</MenuItem>
                            <MenuItem onPress={this.hideMenu}>Blocking Slots</MenuItem>

                        </Menu>
                    </View>
                </View>



                <CalendarList
                    horizontal={true}
                    pagingEnabled={true}
                    style={{ height: 350 }}
                    theme={{
                        arrowColor: 'black',
                        todayTextColor: 'black',
                    }}
                    markingType={'custom'}
                    markedDates={{
                        '2018-09-12': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'black',
                                },
                                text: {
                                    color: 'white'
                                },
                            },
                        }
                    }}
                    hideArrows={false}
                    style={{ borderBottomWidth: 1, borderBottomColor: '#ddd' }}
                />

                <View>
                    <CalendarLists />
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