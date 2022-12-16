import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import InputField from '../../../components/InputField';
import {EmailValid, PhoneValid} from '../../../utils/rejexValidate';
import styles from './styles';
import {userFullInfo} from '../../../redux/action/Action';

const LoginScreen = ({navigation}) => {
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
    dispatch(userFullInfo({email, phone}));
    if (email === '' && phone === '') {
      alert('Empty email and password');
    } else {
      navigation.navigate('UserInfoScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        What is the email and phone number that we can reach you the best!
      </Text>
      <InputField
        placeholder="Email Address"
        style={styles.placeholderInput}
        value={email}
        onBlur={validEmail}
        autoCapitalize="words"
        onChangeText={val => setEmail(val)}
      />
      <Text style={styles.error}>{emailValid}</Text>
      <InputField
        placeholder="Phone"
        style={styles.placeholderInput}
        value={phone}
        onBlur={validPhone}
        autoCapitalize="words"
        onChangeText={val => setPhone(val)}
      />
      <Text style={styles.error}>{phoneValid}</Text>
      <View style={styles.buttonStyle}>
        <TouchableOpacity onPress={buttonValidator}>
          <Text style={styles.textStyle}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
