import React, { Component } from 'react';
import { AsyncStorage, Text,View,ImageBackground,Animated ,TouchableHighlight,} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state, ownProps) => {
  
  return {
    device:state.device
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({},dispatch)
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      bgImg:true,
      fadeAnim: new Animated.Value(0),    
    }
  }
  
 
  _onLogin = async ()=>{
    
    
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
    
    Animated.timing(                            // 随时间变化而执行的动画类型
      this.state.fadeAnim,                      // 动画中的变量值
      {
        toValue: 1, 
        duration: 1000,                        // 透明度最终变为1，即完全不透明
      }
    ).start();

  }
  
  render() {
    let {device} = this.props;
    console.log(device)
    return (
      <Animated.View                            // 可动画化的视图组件
        style={{
          opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
        }}
      >
       <View style={{display:'flex',width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}} >
          <ImageBackground ref='ss' style={{display:'flex',width:'100%',height:'100%'}} source={this.state.bgImg? require('../../assets/timg.jpeg'):require('../../assets/timg2.jpeg')}>
            <View style={{display:'flex',width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}} >
              <ThemeProvider>
                <Button type='outline' buttonStyle={{marginBottom:10}} title="Switch Image!!"  onPress={this._onLogin}/>
                <Button type='outline' buttonStyle={{marginTop:10}} title="Go to Home!!"  onPress={()=>{this.props.navigation.navigate('Home');}}/>
              </ThemeProvider>
              <Text>{`${JSON.stringify(device)}`}</Text>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>
      
    );
  }
};
export default  connect(mapStateToProps, mapDispatchToProps)(Home)