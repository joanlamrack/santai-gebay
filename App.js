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

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			resizeMode: "cover",
			remote: "https://i1.wp.com/get.wallpapers8k.com/wallpapers/b/d/3/161113.jpg",
		};
	}

	render() {
		let TextInputStyle = {
			height: 50,
			backgroundColor: "white",
			padding:15,
			margin: 10,
			fontSize: 20,
			borderRadius: 35
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
						justifyContent: "center"
					}}
				>
					<TextInput
						style={TextInputStyle}
						placeholder="Search"
						onChangeText={username => this.setState({ username })}
						placeholderTextColor="gray"
						underlineColorAndroid='transparent'
					/>
					<FlatList
					data={[
						{
							hehe:"woi",
							id:"1"
						},
						{
							hehe:"woi2",
							id:"2"
						},
						{
							hehe:"woi",
							id:"1"
						},
						{
							hehe:"woi2",
							id:"2"
						},
						{
							hehe:"woi",
							id:"1"
						},
						{
							hehe:"woi2",
							id:"2"
						},
						{
							hehe:"woi",
							id:"1"
						},
						{
							hehe:"woi2",
							id:"2"
						},
						{
							hehe:"woi",
							id:"1"
						},
						{
							hehe:"woi2",
							id:"2"
						},
						{
							hehe:"woi",
							id:"1"
						},
						{
							hehe:"woi2",
							id:"2"
						},
						{
							hehe:"woi",
							id:"1"
						},
						{
							hehe:"woi2",
							id:"2"
						},
						{
							hehe:"woi",
							id:"1"
						},
						{
							hehe:"woi2",
							id:"2"
						},
						]}
					keyExtractor={(item)=>item.id}
					renderItem={
						(data)=>{
							return (
								<Text style={{color:"white", fontSize:30}}>{data.item.hehe}</Text>
							)
						}
					}
					></FlatList>
				</View>
			</Fragment>
		);
	}
}

AppRegistry.registerComponent("App", () => App);
