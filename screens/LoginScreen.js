import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput,
	AsyncStorage
} from 'react-native';

// Import Screens
import HomeScreen from './HomeScreen';

class LoginScreen extends Component {
    
    logIn = async() => {
    	await AsyncStorage.setItem('userToken', 'ace')
    	this.props.navigation.navigate('App') //take user to the App route
    }

	render() {
		return (
			<View style={styles.container}>
				
				<Text>Log In</Text>
				<Text>Don't have a FanTipper account?</Text>
			{/* change this to sign up page*/}
			{/* and remove the button icon for this, replace w/ underline*/}

				<Button title="LOG IN WITH FACEBOOK" />
				<TextInput title="whatttttt" 
			        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
     			   editable = {true}
    			    maxLength = {40}
  			    />
				<Button title="Complete Login" onPress={this.logIn} />

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