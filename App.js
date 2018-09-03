import React from 'react';
import { StyleSheet, View, Image, StatusBar, TouchableOpacity } from 'react-native';

import LogInScreen from './src/components/LogInScreen';
import RegisterScreen from './src/components/RegisterScreen';


import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createTabNavigator, createDrawerNavigator } from 'react-navigation';
import Icons from 'react-native-vector-icons/Ionicons';

import ShiftOverView from "./src/components/HomeComponents/ShiftOverView";
import MyServices from './src/components/HomeComponents/MyServices';
import Notifications from "./src/components/HomeComponents/Notifications";
import MyCalender from "./src/components/HomeComponents/MyCalender";



const TabNavigator = createBottomTabNavigator({
  'Shift Overview': {
    screen: ShiftOverView,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/1x_shift-overview_active-state.png')} style={{ width: 25, height: 25, }} />
      )
    }
  },
  'My Services': {
    screen: MyServices,
    // navigationOptions: {
    //   tabBarIcon: ({ tintColor }) => (
    //     <Image source={require('./assets/xyz')} style={{ width: 25, height: 25, }} />
    //   )
    // }
  },
  'My Calender': {
    screen: MyCalender,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/1x_calendar_active-state.png')} style={{ width: 25, height: 25, }} />
      )
    }
  },
  'Notification': {
    screen: Notifications,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/1x_notifications_active-state.png')} style={{ width: 25, height: 25, }} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'black'
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
            <Image source={require('./assets/1x_Menu.png')} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})

const DrawerNavigator = createDrawerNavigator({
  'Go Serve Me': StackNavigation
})

export default createSwitchNavigator({
  // SignIn: LogInScreen,
  // Register: RegisterScreen,
  Home: DrawerNavigator
})

console.disableYellowBox = true;