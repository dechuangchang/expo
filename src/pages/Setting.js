import React, { Component } from 'react';
import { AppRegistry, Text,Button,View } from 'react-native';

export default class Setting extends Component {
  static navigationOptions = {
    title: 'Setting',
  };
  render() {
    return (
      <View>
        <Text>
        Setting
        </Text>
        
        <Button
          title="Go to Setting... again"
          onPress={() => this.props.navigation.push('Setting')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
};