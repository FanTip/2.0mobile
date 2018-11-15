import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Button,
	ImageBackground
} from 'react-native';

class SplashScreen extends Component {
	static navigationOptions = {
		header: null
	}
	
	render() {
		return (
			<ImageBackground 
				source={require('../app/img/FanTipper-App-2-00-AppSplash.jpg')} 
				style={styles.imageBackground}>
				<View style={styles.container}>
					<Button title="LOG IN" onPress={() => 
						this.props.navigation.navigate('LoginScreen')}
							accessibilityLabel="Touch here to login to FanTipper" 
							color="#841584" />
					<Button title="SIGN UP" onPress={() => 
						this.props.navigation.navigate('RegisterScreen')} />
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
	}
});