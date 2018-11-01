import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Button,
	ImageBackground
} from 'react-native';

class SplashScreen extends Component {
	/** the clear out the header from Splash screen **/
	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<ImageBackground 
				source={require('../app/img/FanTipper-App-2-00-AppSplash.jpg')} 
				style={styles.imageBackground}
				resizeMode='cover' >
				<View style={styles.container}>
					<Button title="Continue with Facebook" 
							onPress={() => this.props.navigation.navigate('Home')} 
							style={styles.button} />
					<Button title="Continue with Google" 
							onPress={() => this.props.navigation.navigate('Home')} 
							style={styles.button} />
					<Button title="Login with email" 
							onPress={() => this.props.navigation.navigate('Home')} 
							style={styles.button} />
					<Button title="Sign Up" 
							onPress={() => this.props.navigation.navigate('Login')} 
							style={styles.button} />

				</View>
			
			</ImageBackground>

		);
	}
}

export default SplashScreen;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',

	},
	imageBackground:{
		flex: 1,
		alignSelf: 'stretch',
		width: '100%',
		height: '100%'
	},
	button: {
		padding: 25,
		backgroundColor: '#00d278',
		borderColor: 'black',
		color: 'red'

	}
});