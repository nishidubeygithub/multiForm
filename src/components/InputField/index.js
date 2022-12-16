import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import color from '../../constant/color.js';
import styles from './styles.js';

const InputField = props => {
  const {placeholder, style, value, onBlur, onChangeText, autoCapitalize} =
    props;
  return (
    <>
      <View style={styles.inputText}>
        <TextInput
          style={style}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
        />
      </View>
    </>
  );
};

export default InputField;
