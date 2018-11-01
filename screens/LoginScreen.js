import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';


class LoginScreen extends Component {
//export default class ProfilePage extends Component {

	/** the clear out the header from login screen **/
	static navigationOptions = {
		//header: null,
		BottomNavigator: true
	}

	render() {
		return (
			<View style={styles.container}>
				
				<Text>this is the login screen</Text>
				<Button title="Go to Home screen"
					onPress={() => this.props.navigation.navigate('Home')} />

			</View>

		);
	}
}

export default LoginScreen;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#00d278',
		alignItems: 'center',
		justifyContent: 'center'
	}
});