import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import color from '../../constant/color.js';
import styles from './styles.js';

const AppButton = props => {
  const {name} = props;
  return (
    <View style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};
export default AppButton;
