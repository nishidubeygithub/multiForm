import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import MainScreen from '../../task/task/src/screens/MainScreen/index.js';
import HomeStackNavigator from './src/navigators/HomeStackScreen';
import store, {persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
      </PersistGate> 
    </Provider>
    
  );
};

export default App;
