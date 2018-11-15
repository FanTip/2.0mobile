import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';

class MessagesScreen extends Component {
		static navigationOptions = {
		header: null,
		tabBarVisible: true
	}

	render() {
		return (
			<View style={styles.container}>
				
				<Text>All your DM goess here</Text>

			</View>

		);
	}
}

export default MessagesScreen;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#00d278',
		alignItems: 'center',
		justifyContent: 'center'
	}
});