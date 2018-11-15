import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput
} from 'react-native';

class RegisterScreen extends Component {
	static navigationOptions = {
		//header: null,
		//BottomNavigator: true,
		//tabBarVisible: true
	}

	render() {
		return (
			<View style={styles.container}>
				<Text> Register screen </Text>
				<Button title="REGISTER"
					onPress={() => this.props.navigation.navigate('Home')} />

			</View>

		);
	}
}

export default RegisterScreen;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#00d278',
		alignItems: 'center',
		justifyContent: 'center'
	}
});