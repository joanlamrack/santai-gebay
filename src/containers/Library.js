/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from "react";
import {
	AppRegistry,
	Image,
	TextInput,
	Text,
	View,
	Button,
	Alert,
	FlatList
} from "react-native";

export default class Library extends Component {

	render() {
		return (
			<Fragment>
				<View>
					<Text>Ini Library</Text>
				</View>
			</Fragment>
		);
	}
}

AppRegistry.registerComponent("Library", () => Library);
