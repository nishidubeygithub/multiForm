import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import AppButton from '../../components/AppButton';

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Welcome! What are you looking for?{' '}
        </Text>
        <View style={styles.mainHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('StackScreen')}>
            <AppButton name="APP DEVELOPMENT" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('StackScreen')}>
            <AppButton name="WEB DEVELOPMENT" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('StackScreen')}>
            <AppButton name="BACKEND DEVELOPMENT" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
