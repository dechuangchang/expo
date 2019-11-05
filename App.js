
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/pages/Home'
import Setting from './src/pages/Setting'
import Item from './src/pages/Item'


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Setting: {
    screen: Setting,
  },
  Item: {
    screen: Item,
  },
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
    backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    },
  }
});

export default createAppContainer(AppNavigator);