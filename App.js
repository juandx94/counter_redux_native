/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <SafeAreaView style={{flex: 1, backgroundColor: '#222'}}>
          <HomeScreen />
        </SafeAreaView>
      </Provider>
    </>
  );
};
export default App;
