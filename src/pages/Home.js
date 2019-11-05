import React, { Component } from 'react';
import { AppRegistry, Text, Button,View } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View>
        <Text>
          Home
        </Text>
        <Button
          title="Go to Setting"
          onPress={() => this.props.navigation.navigate('Setting')}
        />
        <Button
          title="Go to Item1"
          onPress={() => {
            this.props.navigation.navigate('Item', {
              title: 'title1',
              text: '这是商品1',
            });
          }}
        />
        <Button
          title="Go to Item2"
          onPress={() => {
            this.props.navigation.navigate('Item', {
              title: 'title1',
              text: '这是商品2',
            });
          }}
        />
        
      </View>
      
    );
  }
};