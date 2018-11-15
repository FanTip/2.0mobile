import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';

class About extends Component {
		static navigationOptions = {
		//header: null,
		tabBarVisible: true
	}

	render() {
		return (
			<View style={styles.container}>
				
				<Text>How does it work? (replace with the image)</Text>
				<Text>FanTipper is a new way to give and receive tips online.</Text>
				<Text>Think of it as a digitial replacement for the tip jar or the buskers hat.
				 We created it because we think the end of coins shouldn't be the end of generosity.</Text>
				
				<Text>Even in a cashless society, small change can still make a big difference.</Text>
				<Text style={styles.subtitle}>How do i give a tip?</Text>



			</View>

		);
	}
}

export default About;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: 'lightgrey',
		alignItems: 'center',
		justifyContent: 'center'
	},
	subtitle: {
		//fontFamily: 'ROBOTO'
		color: '#00d278',
		textTransform: 'uppercase'
	}
});