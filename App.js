


import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './src/utils/boot';
import Navigation from './src/router/index';
import configureStore from './src/redux/store/configureStore';
const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}