import React from 'react';
import { StyleSheet, View, Image, StatusBar, TouchableOpacity } from 'react-native';

import ShiftIcon from 'react-native-vector-icons/MaterialIcons';
import ServiceIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarIcon from 'react-native-vector-icons/Octicons';
import NotificationIcon from 'react-native-vector-icons/Entypo';

import LogInScreen from './src/components/LogInScreen';
import RegisterScreen from './src/components/RegisterScreen';


import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createTabNavigator, createDrawerNavigator } from 'react-navigation';
import Icons from 'react-native-vector-icons/Ionicons';

import ShiftOverView from "./src/components/HomeComponents/ShiftOverView";
import MyServices from './src/components/HomeComponents/MyServices';
import Notifications from "./src/components/HomeComponents/Notifications";
import MyCalender from "./src/components/HomeComponents/MyCalender";

export default class App extends React.Component {
  render() {
    return (
      <MainNavigation />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  'Shift Overview': {
    screen: ShiftOverView,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <ShiftIcon name="format-list-bulleted" color={tintColor} size={30} />
      )
    }
  },
  'My Services': {
    screen: MyServices,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <ServiceIcon name="broom" color={tintColor} size={30} />
      )
    }
  },
  'My Calender': {
    screen: MyCalender,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <CalendarIcon name="calendar" color={tintColor} size={26} />
      )
    }
  },
  'Notification': {
    screen: Notifications,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <NotificationIcon name="bell" color={tintColor} size={25} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#898989'
    }
  })

const StackNavigation = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({
      // title: 'Go Serve Me',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <ShiftIcon name="format-align-justify" size={30} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})

const DrawerNavigator = createDrawerNavigator({
  'Go Serve Me': StackNavigation
})

const MainNavigation = createSwitchNavigator({
  // SignIn: LogInScreen,
  Register: RegisterScreen,
  // Home: DrawerNavigator
})

console.disableYellowBox = true;