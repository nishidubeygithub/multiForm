import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import InputField from '../../../components/InputField';
import {EmailValid, PhoneValid} from '../../../utils/rejexValidate';
import styles from './styles';
import {userInfoData} from '../../../redux/action/Action';
import AppButton from '../../../components/AppButton';
import HeaderImages from '../../../components/HeaderImages';
import Heading from '../../../components/Heading';
import string from '../../../string/index';
import HeaderBar from '../../../components/HeaderBar';
import {incProgressBar} from '../../../redux/action/Action';

const UserDetailsScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneNoValid] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector(state => state.userData.userInfo);

  const validEmail = () => {
    EmailValid().test(email)
      ? setEmailValid('')
      : setEmailValid('Invalid email address');
  };

  const validPhone = () => {
    PhoneValid().test(phone)
      ? setPhoneNoValid('')
      : setPhoneNoValid('Invalid phone number');
  };

  const buttonValidator = () => {
    dispatch(userInfoData(email, phone));
    dispatch(incProgressBar());
    if (email === '' && phone === '') {
      alert('Empty email and password');
    } else {
      navigation.navigate('UserNameScreen');
    }
  };

  return (
    <SafeAreaView>
      <HeaderImages />
      <HeaderBar />
      <View style={styles.container}>
        <Heading text={string.user} />
        <InputField
          placeholder="Email Address"
          value={email}
          onBlur={validEmail}
          autoCapitalize="words"
          onChangeText={val => setEmail(val)}
          error={emailValid}
        />
        <InputField
          placeholder="Phone"
          value={phone}
          onBlur={validPhone}
          autoCapitalize="words"
          onChangeText={val => setPhone(val)}
          error={phoneValid}
        />
        <AppButton buttonText="NEXT" onPress={buttonValidator} />
      </View>
    </SafeAreaView>
  );
};

export default UserDetailsScreen;
