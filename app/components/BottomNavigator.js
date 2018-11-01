import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

export default class BottomNavigator extends Component {
	render() {
		return (


		);
	}
}

/*
const AppStackNavigator = createStackNavigator({
	Splash: SplashScreen,
	Login: LoginScreen,
	Home: HomeScreen
})
*/
export default createBottomTabNavigator ({
	Home: {
		screens:Home,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => (
				<Icon name='ios-home'
					  color={tintColor} 
					  size={24} />
			)
		}
	},
	Settings: {
		screens:Settings,
		navigationOptions: {
			tabBarLabel: 'Settings',
			tabBarIcon: ({ tintColor }) => (
				<Icon name='ios-seetings'
					  color={tintColor} 
					  size={24} />
			)
		}
	}
}, {//router config
	initialRouteName: 'Settings',
	order: ['Settings', 'Home'],
	//navigation for complete tab navigator
	navigationOptions: {
		tabBarVisible: true
	},
	tabBarOptions: {
		activeTintColor: 'red',
		inactiveTintColor: 'grey'
	}

});


const styles = StyleSheet.create({
	/**headerBackground: {
		flex: 1,
		width: null,
		alignSelf: 'stretch'
	},
	**/

});