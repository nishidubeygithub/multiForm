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
import { useDispatch } from 'react-redux';
import styles from './styles';
import AppButton from '../../components/AppButton';
import { userDevelopment } from '../../redux/action/Action';
import HeaderImages from '../../components/HeaderImages';
import string from '../../string/index';
import Heading from '../../components/Heading'

const WelcomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <HeaderImages />
      <View style={styles.container}>
        <Heading text={string.welcome} />
        <View style={styles.mainHeader}>
          <TouchableOpacity
            onPress={() => {
              dispatch(userDevelopment('App Development'))
              navigation.navigate('DepartmentScreen');
            }}>
            <AppButton name="APP DEVELOPMENT" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(userDevelopment('Web Development'))
              navigation.navigate('DepartmentScreen');
            }}>
            <AppButton name="WEB DEVELOPMENT" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(userDevelopment('Backend Development'))
              navigation.navigate('DepartmentScreen');
            }}>
            <AppButton name="BACKEND DEVELOPMENT" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
