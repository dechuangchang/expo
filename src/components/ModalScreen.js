import React, { Component } from 'react';
import { AppRegistry, Text, Button,View } from 'react-native';
export default class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => {
            console.log(this.props.navigation)
            this.props.navigation.goBack()
          }}
          title="Dismiss"
        />
      </View>
    );
  }
}