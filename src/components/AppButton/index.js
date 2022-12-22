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

const AppButton = ({ buttonText, onPress }) => {
  return (
      <TouchableOpacity
          style={styles.buttonStyle}
          onPress={onPress}>
          <Text style={styles.textStyle}>{buttonText}</Text>
      </TouchableOpacity>
  );
};
export default AppButton;
