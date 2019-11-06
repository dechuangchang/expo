import React, { Component } from 'react';
import { Image,View,Text } from 'react-native';
export default class LogoTitle extends React.Component {
  
  render() {
    let {title} = this.props;
    return (
      <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center', alignItems:'center'}}>
        <Text style={{marginRight:10}}>{title}</Text>
        <Image
          source={require('../../assets/kaixin_activity_48px_1108171_easyicon.net.png')}
          style={{ width: 20, height: 20 }}
        />
      </View>
    );
  }
}

