import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AntDesign } from '@expo/vector-icons';
import Home from '../pages/Home'
import Setting from '../pages/Setting'
import Item from '../pages/Item'
import Login from '../pages/Login'
import ModalScreen from '../components/ModalScreen'


const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerShown:false,
      }),
    },
    Item: {
      screen: Item,
    },
    MyModal: {
      screen: ModalScreen,
      navigationOptions: ({ navigation }) => ({
        mode:'modal',
        headerMode: 'none',
        headerShown:false,
      }),
    }
  }
);
const SettingStack = createStackNavigator(
  {
    Setting: {
      screen: Setting,
      navigationOptions: ({ navigation }) => ({
        headerShown:false,
      }),
    },
    Item: {
      screen: Item,
    }
  }
);
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({
        tabBarLabel: ({ focused,tintColor})=>{
          return (
            <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <AntDesign name={'home'} size={20} color={tintColor} />
              <Text style={{color:tintColor}}>首 页</Text>
            </View>
          )
        },
      }),
    },
    Setting:{
      screen: SettingStack,
      navigationOptions: ({
        tabBarLabel: ({ focused,tintColor})=>{
          return (
            <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <AntDesign name={'setting'} size={20} color={tintColor} />
              <Text style={{color:tintColor}}>设 置</Text>
            </View>
          )
        },
      }),
    },
  },{
    lazy:true,
    initialRouteName:'Home',
    tabBarOptions: {
      activeTintColor: '#2c9678',
      inactiveTintColor: '#87723e',
      style: {
        backgroundColor: 'rgba(0,0,0,0.01)',
        borderTopWidth:0,
      },
      
    },
  }
)

const Routerstack = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    Content: {
      screen: TabNavigator,
    }
  },{
    initialRouteName:'Login'
  }
);
export default createAppContainer(Routerstack);