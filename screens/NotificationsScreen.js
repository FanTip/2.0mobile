import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';

class NotificationsScreen extends Component {
		static navigationOptions = {
		header: null,
		tabBarVisible: true
	}

	render() {
		return (
			<View style={styles.container}>
				
				<Text>Notification goes here</Text>

			</View>

		);
	}
}

export default NotificationsScreen;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#00d278',
		alignItems: 'center',
		justifyContent: 'center'
	}
});