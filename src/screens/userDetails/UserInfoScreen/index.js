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

const UserInfoScreen = ({navigation}) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.userData.userInfo);

  const buttonClick = () => {
    dispatch(userFullInfo({firstname, lastname}));
    {
      navigation.navigate('CompanyDetailsScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Could you tell us a bit more about yourself ?
      </Text>
      <View>
        <InputField
          placeholder="First Name"
          style={styles.placeholderInput}
          value={firstname}
          autoCapitalize="words"
          onChangeText={val => setFirstName(val)}
        />
      </View>
      <View>
        <InputField
          placeholder="Last Name"
          style={styles.placeholderInput}
          value={lastname}
          autoCapitalize="words"
          onChangeText={val => setLastName(val)}
        />
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity onPress={buttonClick}>
          <Text style={styles.textStyle}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInfoScreen;
