import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import WelcomeScreen from '../../Projects/test/src/screens/WelcomeScreen';
import HomeStackNavigator from './src/navigators/HomeStackScreen';
import store, {persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <PaperProvider>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
      </PaperProvider>
      </PersistGate> 
    </Provider>
    
  );
};

export default App;
