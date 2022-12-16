import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import AppButton from '../../components/AppButton';

const StackScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Great! What department do you work in ?
        </Text>
        <View style={styles.mainHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <AppButton name="MARKETING" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <AppButton name="SALES" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <AppButton name="DEVELOPMENT" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StackScreen;
