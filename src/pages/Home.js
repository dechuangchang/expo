import React, { Component } from 'react';
import { AsyncStorage, Text, Button,View } from 'react-native';

import {AntDesign} from 'react-native-vector-icons';

export default class Home extends Component {
  static navigationOptions = {
    title: '首页',
    headerStyle:{
      borderBottomWidth:0,
    }
  };
  render() {
    return (
      <View style={{paddingTop:40}}>
        <Text>
          Home
        </Text>
    
        <AntDesign
        name={'doubleright'}
        size={30}
        />  
        <Button
          title="Go to MyModal"
          onPress={() => this.props.navigation.navigate('MyModal')}
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
        <Button
          title="Log0ut"
          onPress={() => {
            AsyncStorage.removeItem('userToken')
            this.props.navigation.navigate('Login');
          }}
        />
        
      </View>
      
    );
  }
};