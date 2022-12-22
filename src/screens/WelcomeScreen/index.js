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
import {useDispatch} from 'react-redux';
import styles from './styles';
import AppButton from '../../components/AppButton';
import {userDevelopment} from '../../redux/action/Action';
import HeaderImages from '../../components/HeaderImages';
import string from '../../string/index';
import Heading from '../../components/Heading';
import HeaderBar from '../../components/HeaderBar';
import {incProgressBar} from '../../redux/action/Action';

const WelcomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <HeaderImages />
      <HeaderBar />
      <View style={styles.container}>
        <Heading text={string.welcome} />
        <AppButton
          buttonText="APP DEVELOPMENT"
          onPress={() => {
            dispatch(userDevelopment('App Development')),
              dispatch(incProgressBar());
            navigation.navigate('DepartmentScreen');
          }}
        />

        <AppButton
          buttonText="WEB DEVELOPMENT"
          onPress={() => {
            dispatch(userDevelopment('Web Development')),
              dispatch(incProgressBar());
            navigation.navigate('DepartmentScreen');
          }}
        />

        <AppButton
          buttonText="BACKEND DEVELOPMENT"
          onPress={() => {
            dispatch(userDevelopment('Backend Development')),
              dispatch(incProgressBar());
            navigation.navigate('DepartmentScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
