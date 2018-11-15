// Import Constructor
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import { 
	createSwitchNavigator, 
	createStackNavigator 
} from 'react-navigation'

// Import Screens
import SplashScreen 		from './screens/SplashScreen';
import LoginScreen 			from './screens/LoginScreen';
import RegisterScreen 		from './screens/RegisterScreen';
import AuthLoadingScreen	from './screens/AuthLoadingScreen';
//import HomeScreen from './screens/HomeScreen';
//import BottomTabs from './app/components/Navigators';
//import AppDrawerNavigator from './app/components/MenuDrawer';

// export default class App extends React.Component {
// 	render() {
// 		return (
// 			 //<BottomTabs />
// 			//<Tabs />
// 			<AppStackNavigator />
// 			//<AppDrawerNavigator />
// 		);
// 	}
// }
const AuthStackNavigator = createStackNavigator({
	Splash: SplashScreen,
	Login: LoginScreen,
	Register: RegisterScreen
})

export default createSwitchNavigator({
	AuthLoading: AuthLoadingScreen,
	Auth: AuthStackNavigator,
})




// const AppStackNavigator = createStackNavigator({
// 	Splash: { screen: SplashScreen },	//welcome screen
// 	Login: { screen: LoginScreen },
// 	Register: { screen: RegisterScreen }
// }
// ,
 // {
	// navigationOptions: {
	// 	gesturesEnabled: false
	// }
// }


const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center'
	},

});

//AppRegistry.registerComponent('ProfilePage', () => BottomTabs);