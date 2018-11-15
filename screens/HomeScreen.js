import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { Header, Left, Right, Icon } from 'native-base'

class HomeScreen extends Component {
		static navigationOptions = {
		header: null,
		tabBarVisible: true
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.font}> Welcome to Fan Tipper, </Text>
				<Text style={styles.font}> the world's first social  </Text>
				<Text style={styles.font}> tipping platform. </Text>
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