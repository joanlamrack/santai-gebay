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
	FlatList,
	Dimensions
} from "react-native";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			picture:
				"https://images.unsplash.com/photo-1534713867097-96347e7b6a72?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=10f084d44af283b647533cb87f5ad588",
			title: "Sweet Child O'Mine",
			artist: "Gun N' Roses"
		};
	}

	render() {
		let height = Dimensions.get("window").width * 0.5;
		return (
			<View
				style={{
					padding: 5
				}}
			>
				<Image
					resizeMode="stretch"
					style={{ height: height, width: "50%" }}
					source={{ uri: this.state.picture }}
				/>
				<View>
					<Text
						style={{
							fontSize: 20
						}}
					>
						{this.state.title}
					</Text>
					<Text
						style={{
							fontSize: 20
						}}
					>
						{this.state.artist}
					</Text>
				</View>
			</View>
		);
	}
}

AppRegistry.registerComponent("App", () => App);
