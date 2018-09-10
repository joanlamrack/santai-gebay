/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  TextInput,
  View
} from 'react-native';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resizeMode: "cover",
      remote: 'https://source.unsplash.com/daily?chill',
      text: ""
    }
  }

  render() {

    return (
      <Fragment>
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
          <Image
            style={{
              backgroundColor: '#ccc',
              flex: 1,
              resizeMode: this.state.resizeMode,
              position: 'absolute',
              zIndex: -1,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
            source={{ uri: this.state.remote }}
          >

          </Image>
        </View>
        <View style={{
          flex: 1,
          backgroundColor: 'transparent',
          justifyContent: 'center',
        }}>
          <TextInput
            style={{ height: 40 ,backgroundColor:"#FFFFFF"}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({ text })}
          />
          <Text> {this.state.text}</Text>
        </View>
      </Fragment>


    );
  }
}

AppRegistry.registerComponent('App', () => App);
