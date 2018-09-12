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
	View,
	Button,
	Alert
} from "react-native";

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			resizeMode: "cover",
			remote: "https://source.unsplash.com/98Elr-LIvD8/1600x900",
			username: "",
			password: "",
			email: "",
			signin: true
		};
	}

	render() {
		let TextInputStyle = {
			height: 50,
			backgroundColor: "rgba(1, 1, 1, 0.5)",
			margin: 10,
			fontSize: 20,
			borderRadius: 5,
			color: "#FFFFFF"
		};

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
						backgroundColor: "rgba(52, 52, 52, 0.8)",
						justifyContent: "center"
					}}
				>
					<Image
						style={{ resizeMode: "contain", width:"auto", height:200 }}
						source={require("../assets/img/santaigebay.png")}
					/>
					{!this.state.signin && (
						<TextInput
							style={TextInputStyle}
							placeholder="Email"
							onChangeText={email => this.setState({ email })}
							placeholderTextColor="gray"
						/>
					)}
					<TextInput
						style={TextInputStyle}
						placeholder="Username"
						onChangeText={username => this.setState({ username })}
						placeholderTextColor="gray"
					/>
					<TextInput
						style={TextInputStyle}
						placeholder="Kata Sandi"
						onChangeText={password => this.setState({ password })}
						placeholderTextColor="gray"
					/>
					<Button
						onPress={() => {
							Alert.alert(this.state.username, this.state.password);
						}}
						style={{ marginLeft: 20, marginRight: 20 }}
						title={this.state.signin ? "Masuk" : "Daftar"}
					/>
					<Button
						title={`${this.state.signin ? "Ga" : "Udah"} Punya Akun?`}
						onPress={() => this.setState({ signin: !this.state.signin })}
						color="#00000000"
					/>
				</View>
			</Fragment>
		);
	}
}

AppRegistry.registerComponent("Login", () => Login);
