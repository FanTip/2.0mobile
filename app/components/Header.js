import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground
} from 'react-native';

export default class Header extends Component {
	render() {
		return (

			<ImageBackground 
				source={require('../img/header.png')} 
				style={{flex: 1, width: null, alignSelf: 'stretch'}} >

				<View style={styles.header}>

					<View style={styles.profilepicWrap}>

						<Image style={styles.profilepic} source={require('../img/profilepic.jpg')} />
					</View>

					<Text style={styles.name}>JOHN DONE</Text>
					<Text style={styles.pos}> - app developer - </Text>


				</View>

			</ImageBackground>

		);
	}
}

const styles = StyleSheet.create({
	/**headerBackground: {
		flex: 1,
		width: null,
		alignSelf: 'stretch'
	},
	**/
	header: {
		flex: 1,
		alignSelf: 'center',
		justifyContent:  'center',
		padding: 20,
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	profilepicWrap: {
		width: 180,
		height: 180,
		borderRadius: 100,
		borderColor: 'rgba(0,0,0,0.4)',
		borderWidth: 16
	}, 
	profilepic: {
		flex: 1,
		width: null,
		alignSelf: 'stretch',
		borderRadius: 100,
		borderColor: '#fff',
		borderWidth: 4
	},
	name: {
		marginTop: 20,
		fontSize: 16,
		color: '#fff',
		fontWeight: 'bold'
	}, 
	pos: {
		fontSize: 14,
		color: '#0384c0',
		fontWeight: '300',
		fontStyle: 'italic'
	}
});