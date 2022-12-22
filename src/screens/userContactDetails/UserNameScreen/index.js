import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import InputField from '../../../components/InputField';
import {NameValid, LastNameValid} from '../../../utils/rejexValidate';
import styles from './styles';
import {userName} from '../../../redux/action/Action';
import AppButton from '../../../components/AppButton';
import HeaderImages from '../../../components/HeaderImages';
import Heading from '../../../components/Heading';
import string from '../../../string/index';
import HeaderBar from '../../../components/HeaderBar';
import {incProgressBar} from '../../../redux/action/Action';

const UserNameScreen = ({navigation}) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [firstnameValid, setFirstNameValid] = useState('');
  const [lastnameValid, setLastNameValid] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.userData.userInfo);

  const validFirstName = () => {
    NameValid().test(firstname)
      ? setFirstNameValid('')
      : setFirstNameValid('Enter valid name');
  };

  const validLastName = () => {
    NameValid().test(firstname)
      ? setLastNameValid('')
      : setLastNameValid('Enter valid name');
  };
  const buttonClick = () => {
    dispatch(userName(firstname, lastname));
    dispatch(incProgressBar());
    if (firstname === '' && lastname === '') {
      alert('Empty name');
    } else {
      navigation.navigate('ThankYouScreen');
    }
  };
  return (
    <SafeAreaView>
      <HeaderImages />
      <HeaderBar />
      <View style={styles.container}>
        <Heading text={string.name} />
        <InputField
          placeholder="First Name"
          value={firstname}
          onBlur={validFirstName}
          autoCapitalize="words"
          onChangeText={val => setFirstName(val)}
          error={firstnameValid}
        />
        <InputField
          placeholder="Last Name"
          value={lastname}
          onBlur={validLastName}
          autoCapitalize="words"
          onChangeText={val => setLastName(val)}
          error={lastnameValid}
        />
        <AppButton buttonText="NEXT" onPress={buttonClick} />
      </View>
    </SafeAreaView>
  );
};

export default UserNameScreen;
