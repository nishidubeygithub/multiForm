import React, {useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';

import InputField from '../../../components/InputField';
import {userCompanyData} from '../../../redux/action/Action';
import {NameValid, LastNameValid} from '../../../utils/rejexValidate';
import styles from './styles';
import AppButton from '../../../components/AppButton';
import HeaderImages from '../../../components/HeaderImages';
import Heading from '../../../components/Heading';
import string from '../../../string/index';
import ModalData from '../../../components/ModalData';
import HeaderBar from '../../../components/HeaderBar';
import {incProgressBar} from '../../../redux/action/Action';
import {resetModal} from '../../../redux/action/Action';

const ThankYouScreen = ({navigation}) => {
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

  const closeModal = () => {
    dispatch(resetModal());
    setModalVisible(false);
    setCompanyName({companyname: ''});
    setJobTitle({jobtitle: ''});
    navigation.navigate('WelcomeScreen');
  };

  return (
    <SafeAreaView>
      <HeaderImages />
      <HeaderBar />
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
        <AppButton
          buttonText="REQUEST DEMO"
          onPress={() => {
            dispatch(
              userCompanyData(companyname, jobtitle),
              dispatch(incProgressBar()),
              buttonClick(),
            );
          }}
        />

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => 'closed'}>
          <View style={styles.modalcontainer}>
            <View style={styles.modal}>
              <Text style={styles.modaldata}>Data</Text>
              <ModalData name="Development-" text={data.userDevelopment} />
              <ModalData name="Department-" text={data.userDepartment} />
              <ModalData name="Email-" text={data.userInfoData.email} />
              <ModalData name="Phone-" text={data.userInfoData.phone} />
              <ModalData name="First Name-" text={data.userName.firstname} />
              <ModalData name="Last Name-" text={data.userName.lastname} />
              <ModalData
                name="Company Name-"
                text={data.userCompanyData.companyName}
              />
              <ModalData
                name="Job Title-"
                text={data.userCompanyData.jobTitle}
              />
              <View style={styles.buttonStyle}>
                <Button title="Close" onPress={closeModal} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default ThankYouScreen;
