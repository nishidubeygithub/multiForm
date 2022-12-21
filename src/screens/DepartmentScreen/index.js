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

const DepartmentScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <HeaderImages />
      <View style={styles.container}>
        <Heading text={string.department} />
        <View style={styles.mainHeader}>
          <TouchableOpacity
            onPress={() => {
              dispatch(userDepartment('Marketing'))
              navigation.navigate('UserDetailsScreen');
            }}>
            <AppButton name="MARKETING" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              dispatch(userDepartment('Sales'))
              navigation.navigate('UserDetailsScreen');
            }}>
            <AppButton name="SALES" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              dispatch(userDepartment('Development'))
              navigation.navigate('UserDetailsScreen');
            }}>
            <AppButton name="DEVELOPMENT" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DepartmentScreen;
