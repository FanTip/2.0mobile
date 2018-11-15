import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// import screens
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import NotificationsScreen from '../../screens/NotificationsScreen';
import MessagesScreen from '../../screens/MessagesScreen';

// import navigators
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import MenuDrawer from './MenuDrawer'

const BottomTabs = createMaterialTopTabNavigator({
	Home: {
		screen:HomeScreen,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => (
				<Icon name='ios-home'
					  color={tintColor} 
					  size={24} />
		  	)
		}
	},
	Drawer: {
		screen:DrawerNavigator,
		navigationOptions: {
			tabBarLabel: 'Menu',
			tabBarIcon: ({ tintColor }) => (
				<Icon name='ios-menu'
					  color={tintColor} 
					  size={24} />
		  	)
		} 
	},
	Notifications:{
		screen: NotificationsScreen,
		navigationOptions: {
			tabBarLabel: 'Notifications',
			tabBarIcon: ({ tintColor }) => (
				<Icon name='ios-notifications'
					  color={tintColor} 
					  size={24} />
		  	)
		}
	},
	Messages:{
		screen: MessagesScreen,
		navigationOptions: {
			tabBarLabel: 'Messages',
			tabBarIcon: ({ tintColor }) => (
				<Icon name='ios-message'
					  color={tintColor} 
					  size={24} />
		  	)
		}
	}
},{ 	//router config
	// initial tab route when first loading
	initialRouteName: 'Home',
	order: ['Notifications', 'Messages', 'Home', 'Drawer'], 
	tabBarPosition: 'bottom',
	swipeEnabled: true,
	animationEnabled: true,
	//navigation for complete tab navigator
	navigationOptions: {
		tabBarVisible: true
	},
	tabBarOptions: {
		activeTintColor: 'orange',
		inactiveTintColor: 'grey',
		style: {
			backgroundColor: '#46494f',
			//borderTopWidth: 0.5,
		},
		tabStyle: {
			//height : 70,
		}, // the bottom highlight 
		indicatorStyle: {
			height: 0
		},
		showIcon: true,
		showLabel: true
	}

})

export default BottomTabs;