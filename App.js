import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';

import { TabNavigator } from 'react-navigation';


const MyApp = TabNavigator({
  welcome: {
    screen: WelcomeScreen,
  },
  auth: {
    screen: AuthScreen,
  },
  register: {
    screen: RegisterScreen
  },
  home: {
    screen: HomeScreen
  }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});



export default class App extends React.Component {
  render() {
    return (
      <MyApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
