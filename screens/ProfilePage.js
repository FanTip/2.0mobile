import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	View
} from 'react-native';

import Header from './app/components/Header';

 class ProfilePage extends Component {
//export default class ProfilePage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header />

			</View>

		);
	}
}

export default ProfilePage;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#000',
	}

});

AppRegistry.registerComponent('ProfilePage', () => ProfilePage);