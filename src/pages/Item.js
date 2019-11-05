import React, { Component } from 'react';
import { AppRegistry, Text, Button,View } from 'react-native';
import LogoTitle from '../components/LogoTitle'
export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <LogoTitle title={navigation.getParam('title')}/>,
      title: navigation.getParam('title'),
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>
          {navigation.getParam('text')}
        </Text>
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ 
            title: 'Updated!' 
          })}
        />
      </View>
      
    );
  }
};