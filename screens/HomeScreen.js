import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';


class HomeScreen extends Component {
//export default class ProfilePage extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>this is home screen</Text>
				<Button title="go back to login screen" 
						onPress={() => this.props.navigation.goBack()}/>

			</View>

		);
	}
}

export default HomeScreen;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#00d278',
		alignItems: 'center',
		justifyContent: 'center'
	}
});