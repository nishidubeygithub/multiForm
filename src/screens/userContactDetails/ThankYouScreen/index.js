import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import InputField from '../../../components/InputField';
import { userCompanyData } from '../../../redux/action/Action';
import { NameValid, LastNameValid } from '../../../utils/rejexValidate';
import styles from './styles';
import ButtonComponent from '../../../components/ButtonComponent';
import HeaderImages from '../../../components/HeaderImages';
import Heading from '../../../components/Heading';
import string from '../../../string/index';
import ModalData from '../../../components/ModalData'

const CompanyDetailsScreen = ({ navigation }) => {
  const [companyname, setCompanyName] = useState('');
  const [jobtitle, setJobTitle] = useState('');
  const [companynameValid, setCompanyNameValid] = useState('');
  const [jobtitleValid, setJobTitleValid] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.userData);

  const validCompanyName = () => {
    NameValid().test(companyname)
      ? setCompanyNameValid('')
      : setCompanyNameValid('Enter correct name');
  };

  const validJobTitleName = () => {
    LastNameValid().test(jobtitle)
      ? setJobTitleValid('')
      : setJobTitleValid('Enter correct name');
  };


  const buttonClick = () => {
    setModalVisible(!modalVisible);
  };
  const ClearData = () => {
    setModalVisible({ visible: false });
    setCompanyName({ companyname: '' });
    setJobTitle({ jobtitle: '' });
    navigation.navigate('WelcomeScreen')
  };

  return (
    <SafeAreaView>
      <HeaderImages />
      <View style={styles.container}>
        <Heading text={string.thanks} />
        <InputField
          placeholder="Company Name"
          value={companyname}
          onBlur={validCompanyName}
          autoCapitalize="words"
          onChangeText={val => setCompanyName(val)}
          error={companynameValid}
        />
        <InputField
          placeholder="Job Title"
          value={jobtitle}
          onBlur={validJobTitleName}
          autoCapitalize="words"
          onChangeText={val => setJobTitle(val)}
          error={jobtitleValid}
        />
        <ButtonComponent
          buttonText="REQUEST DEMO"
          onPress={() => {
            dispatch(userCompanyData(companyname, jobtitle), buttonClick());
          }} />

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => 'closed'}>
          <View style={styles.modalcontainer}>
            <View style={styles.modal}>
              <Text style={styles.modaldata}>Data</Text>
              <ModalData name='Development-' text={data.userDevelopment} />
              <ModalData name='Department-' text={data.userDepartment} />
              <ModalData name='Email-' text={data.userInfoData.email} />
              <ModalData name='Phone-' text={data.userInfoData.phone} />
              <ModalData name='First Name-' text={data.userName.firstname} />
              <ModalData name='Last Name-' text={data.userName.lastname} />
              <ModalData name='Company Name-' text={data.userCompanyData.companyName} />
              <ModalData name='Job Title-' text={data.userCompanyData.jobTitle} />
              <View style={styles.buttonStyle}>
                <Button title='Close' onPress={ClearData} />
              </View>

            </View>
          </View>
        </Modal>


      </View>
    </SafeAreaView>
  );
};

export default CompanyDetailsScreen;
