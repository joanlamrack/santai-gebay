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
	Text,
	TextInput,
	View,
	Button,
	Alert
} from "react-native";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			resizeMode: "cover",
			remote: "https://source.unsplash.com/daily?chill",
			username: "",
			password:""
		};
	}

	render() {
		return (
			<Fragment>
				<View
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%"
					}}
				>
					<Image
						style={{
							backgroundColor: "#ccc",
							flex: 1,
							resizeMode: this.state.resizeMode,
							position: "absolute",
							zIndex: -1,
							width: "100%",
							height: "100%",
							justifyContent: "center"
						}}
						source={{ uri: this.state.remote }}
					/>
				</View>
				<View
					style={{
						flex: 1,
						backgroundColor: "transparent",
						justifyContent: "center"
					}}
				>
					<TextInput
						style={{ height: 40, backgroundColor: "#FFFFFF", margin:5 }}
						placeholder="Username"
						
						onChangeText={username => this.setState({ username })}
					/>
					<TextInput
						style={{ height: 40, backgroundColor: "#FFFFFF", margin:5 }}
						placeholder="Password"
						onChangeText={password => this.setState({ password })}
					/>
					<Button
						onPress={() => {
							Alert.alert(this.state.username, this.state.password);
						}}
						style={{marginLeft:20, marginRight:20}}
						title="Sign In"
					/>
				</View>
			</Fragment>
		);
	}
}

AppRegistry.registerComponent("App", () => App);
