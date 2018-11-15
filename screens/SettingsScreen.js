import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	AsyncStorage
} from 'react-native';

class SettingsScreen extends Component {
		static navigationOptions = {
		header: null,
		BottomNavigator: true
	}

	signOut = async() => {
    	AsyncStorage.clear()
    	this.props.navigation.navigate('AuthLoading') //take user to the AuthLoading route
    }

	render() {
		return (
			<View style={styles.container}>
				<Text>Settings</Text>
				<Button title="here to sign out"
					onPress={this.signOut} />
				<Button title="Go to Home screen"
					onPress={() => this.props.navigation.navigate('Home')} />
			</View>

		);
	}
}

export default SettingsScreen;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#00d278',
		alignItems: 'center',
		justifyContent: 'center'
	}
});