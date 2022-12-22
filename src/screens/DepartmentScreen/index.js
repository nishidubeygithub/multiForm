import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from "react-redux"
import styles from './styles';
import { userDepartment } from '../../redux/action/Action';
import AppButton from '../../components/AppButton';
import HeaderImages from '../../components/HeaderImages';
import Heading from '../../components/Heading';
import string from '../../string/index'
import HeaderBar from '../../components/HeaderBar';
import { incProgressBar } from '../../redux/action/Action';

const DepartmentScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <HeaderImages />
      <HeaderBar />
      <View style={styles.container}>
      <Text style={styles.headerTxt}>
          Great! What department do you work in ?
        </Text>
        {/* <Heading text={string.department} /> */}
        <AppButton buttonText="MARKETING" onPress={() => {
          dispatch(userDepartment('Marketing')),
            dispatch(incProgressBar());
          navigation.navigate('UserDetailsScreen');
        }} />

        <AppButton buttonText="SALES"
          onPress={() => {
            dispatch(userDepartment('Sales')),
              dispatch(incProgressBar());
            navigation.navigate('UserDetailsScreen');
          }} />

        <AppButton buttonText="DEVELOPMENT" onPress={() => {
          dispatch(userDepartment('Development')),
            dispatch(incProgressBar());
          navigation.navigate('UserDetailsScreen');
        }} />

      </View>

    </SafeAreaView>
  );
};

export default DepartmentScreen;
