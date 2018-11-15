// Import Constructor
import React, { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Text,
	Image,
	TouchableOpacity
} from 'react-native';
import { 
	createSwitchNavigator, 
	createStackNavigator, 
	createDrawerNavigator,
	createBottomTabNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import SplashScreen 		from './screens/SplashScreen';
import LoginScreen 			from './screens/LoginScreen';
import RegisterScreen 		from './screens/RegisterScreen';
import AuthLoadingScreen	from './screens/AuthLoadingScreen';

import HomeScreen			from './screens/HomeScreen';
import SettingsScreen		from './screens/SettingsScreen';
import NotificationsScreen	from './screens/NotificationsScreen';
import MessagesScreen		from './screens/MessagesScreen';

import FanTipHistory		from './screens/FanTipHistory';
import About				from './screens/About';

const AuthStackNavigator = createStackNavigator({
	SplashScreen: SplashScreen,
	LoginScreen: LoginScreen,
	RegisterScreen: RegisterScreen
})

const AppTabNavigator = createBottomTabNavigator({
	NotificationsScreen: {
		screen: NotificationsScreen,
		title: 'Notifications'
	},
	MessagesScreen: {
		screen: MessagesScreen,
	},
	HomeScreen: {
		screen: HomeScreen,
	}
	// ,
	// Menu: {
	// 	screen: AppDrawerNavigator
	// }
})

const AppStackNavigator = createStackNavigator({
	AppTabNavigator: {
		screen: AppTabNavigator,
		navigationOptions: ({ navigation }) => ({
			headerTitle: (
		  		<View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
        			<Image resizeMode="cover" 
         			  source={require('./app/img/Fan_Tipper_Logo_Green.png')}
         			  style={{
         			  	width: 120, 
         			  	height: 50, 
         			  	resizeMode:'contain',
         			  	alignItems: 'center' 
         			  }}
      			 	 />
  				</View>
				),
			headerLeft: (
				<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
					<View style={{ paddingHorizontal: 10 }}>
						<Icon name='md-menu' size={24} />
					</View>
				</TouchableOpacity>
			)
		})
	}
})

const AppDrawerNavigator = createDrawerNavigator({
	Home: AppStackNavigator,
	FanTipHistory: {
		screen: FanTipHistory,
		navigationOptions: {
			drawerLabel: 'FanTip History',
			drawerIcon: ({ tintColor }) => <Icon name="ios-cog" size={24} />,
		}
	},
	About: {
		screen: About,
		navigationOptions: {
			drawerLabel: 'About FanTipper',
			drawerIcon: ({ tintColor }) => <Icon name="ios-cog" size={24} />,
		}
	},
	SettingsScreen: {
		screen: SettingsScreen,
		navigationOptions: {
			drawerLabel: 'Account Settings',
			drawerIcon: ({ tintColor }) => <Icon name="ios-cog" size={24} />,
		}
	}
})

export default createSwitchNavigator({
	AuthLoading: AuthLoadingScreen,
	Auth: AuthStackNavigator,
	App: AppDrawerNavigator
})

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

// import App from './index.android.js';

// export default App;