import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';

class FanTipHistory extends Component {
		static navigationOptions = {
		//header: null,
		tabBarVisible: true
	}

	render() {
		return (
			<View style={styles.container}>
				
				<Text>FANTIP HISTORY</Text>

			</View>

		);
	}
}

export default FanTipHistory;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#00d278',
		alignItems: 'center',
		justifyContent: 'center'
	}
});