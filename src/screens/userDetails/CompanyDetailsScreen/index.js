import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import InputField from '../../../components/InputField';
import {userFullInfo} from '../../../redux/action/Action';
import styles from './styles';

const CompanyDetailsScreen = ({navigation}) => {
  const [companyname, setCompanyName] = useState('');
  const [jobtitle, setJobTitle] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.userData.userInfo);

  const buttonClick = () => {
    setModalVisible(!modalVisible);
  };
  const ClearData = () => {
    setModalVisible({visible: false});
    setCompanyName({companyname: ''});
    setJobTitle({jobtitle: ''});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Thanks! Just a few more details and we are done!
      </Text>

      <InputField
        placeholder="Company Name"
        style={styles.placeholderInput}
        value={companyname}
        autoCapitalize="words"
        onChangeText={val => setCompanyName(val)}
      />
      <InputField
        placeholder="Job Title"
        style={styles.placeholderInput}
        value={jobtitle}
        autoCapitalize="words"
        onChangeText={val => setJobTitle(val)}
      />
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          onPress={() => {
            dispatch(userFullInfo({companyname, jobtitle}), buttonClick());
          }}>
          <Text style={styles.textStyle}>REQUEST DEMO</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => 'closed'}>
        <View style={styles.modalText}>
        <Text style={styles.text}>Email:{data.email}</Text>
          <Text style={styles.text}>Phone:{data.phone}</Text>
          <Text style={styles.text}>First Name:{data.firstname}</Text>
          <Text style={styles.text}>Last Title:{data.lastname}</Text>
          <Text style={styles.text}>Company Name:{data.companyname}</Text>
          <Text style={styles.text}>Job Title:{data.jobtitle}</Text>
        </View>
        <Button title="Hide Modal" onPress={ClearData} />
      </Modal>
    </View>
  );
};

export default CompanyDetailsScreen;
