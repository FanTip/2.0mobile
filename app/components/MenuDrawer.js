import React, { Component } from "react";
import { 
	View, 
	Text, 
	Image,
	StyleSheet, 
	SafeAreaView, 
	ScrollView, 
	Dimensions
	 } from "react-native";

// import screens
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';

// import drawer
import { createDrawerNavigator, DrawerItems } from 'react-navigation';

// export default class MenuDrawer extends React.Component {
// 	render() {
// 		return (
// 			<AppDrawerNavigator />
// 		);
// 	}
// }
const CustomDrawerComponent = (props) => (
	<SafeAreaView style={{flex: 1}}>
	<View style={{
			height: 150, 
			backgroundColor: 'White',
			alignItems: 'center', 
			ustifyContent: 'center'}
		}>
	<Image source={require('../img/profilepic.jpg')} 
		   style={{
		   	height: 120, 
		   	width: 120, 
	  		borderRadius: 60 }} />
	</View>
		<ScrollView>
			<DrawerItems {...props} />
		</ScrollView>
	</SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
	Home:{ screen: HomeScreen },
	Settings:SettingsScreen
}, {
	contentComponent: CustomDrawerComponent
})

export default AppDrawerNavigator;