import React, { Component } from 'react';
import { AppRegistry, Text, Button,View } from 'react-native';
import LogoTitle from '../components/LogoTitle'
import {Feather} from 'react-native-vector-icons';
export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <LogoTitle title={navigation.getParam('title')}/>,
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#333"
        />
      ),
      headerStyle:{
        borderBottomWidth:0,
      }
    };
  }
  componentDidMount(){
    
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>
          {navigation.getParam('text')}
        </Text>
        <Button
          title="Update the title"
          onPress={() => navigation.setParams({ 
            title: 'Updated!',
            text:'Hello'
          })}
        />
      </View>
      
    );
  }
};