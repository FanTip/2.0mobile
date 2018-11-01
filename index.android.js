import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation'


import SplashScreen from './screens/SplashScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

//export default class ProfilePage extends Component {
export default class App extends React.Component {
	render() {
		return (
			<AppStackNavigator />
		);
	}
}

const AppStackNavigator = createStackNavigator({
	Splash: SplashScreen,
	Login: LoginScreen,
	Home: HomeScreen
})


const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},

});

//AppRegistry.registerComponent('ProfilePage', () => ProfilePage);