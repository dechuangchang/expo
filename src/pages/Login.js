import React, { Component } from 'react';
import { AsyncStorage, Text, Button,View,ImageBackground,Animated ,TouchableHighlight} from 'react-native';

import {AntDesign} from 'react-native-vector-icons';
export default class Home extends Component {
  constructor() {
    super();
    this.state={
      bgImg:true,
      fadeAnim: new Animated.Value(0),    
    }
  }
  
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'Home' : 'Login');
  };
  _onLogin = async ()=>{
    // await AsyncStorage.setItem('userToken','1234');
    // this.props.navigation.navigate('Home');
    
    Animated.timing(                            // 随时间变化而执行的动画类型
      this.state.fadeAnim,                      // 动画中的变量值
      {
        toValue: 0.2, 
        duration: 200,                          // 透明度最终变为1，即完全不透明
      }
    ).start(()=>{
      this.setState({
        bgImg:!this.state.bgImg,  
      },()=>{
        Animated.timing(                            // 随时间变化而执行的动画类型
          this.state.fadeAnim,                      // 动画中的变量值
          {
            toValue: 1, 
            duration: 200,                           // 透明度最终变为1，即完全不透明
          }
        ).start();
      })
    });
  }
  componentDidMount(){
    // console.log(this.refs.ss.setNativeProps({
    //   source:require('../../assets/timg2.jpeg')
    // }))
    Animated.timing(                            // 随时间变化而执行的动画类型
      this.state.fadeAnim,                      // 动画中的变量值
      {
        toValue: 1, 
        duration: 1000,                        // 透明度最终变为1，即完全不透明
      }
    ).start();

  }
  render() {
    const userToken =  AsyncStorage.getItem('userToken');
    return (
      <Animated.View                            // 可动画化的视图组件
        style={{
          opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
        }}
      >
       <View style={{display:'flex',width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}} >
          <ImageBackground ref='ss' style={{display:'flex',width:'100%',height:'100%'}} source={this.state.bgImg? require('../../assets/timg.jpeg'):require('../../assets/timg2.jpeg')}>
            <View style={{display:'flex',width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}} >
              
              <TouchableHighlight activeOpacity={0.5} underlayColor='rgba(0,0,0,0)' onPress={this._onLogin}>
                <Text style={{color:'red'}}>Switch Image</Text>
              </TouchableHighlight>
              <TouchableHighlight activeOpacity={0.5} underlayColor='rgba(0,0,0,0)' onPress={()=>{this.props.navigation.navigate(userToken ? 'Home' : 'Login');}}>
                <Text style={{color:'red',borderColor:'red',borderWidth:1}}>Go to Home</Text>
              </TouchableHighlight>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>
      
    );
  }
};