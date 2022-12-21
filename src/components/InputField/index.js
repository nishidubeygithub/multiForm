import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import color from '../../constant/color.js';
import styles from './styles.js';

const InputField = props => {
  const { error, placeholder } = props;
  return (
    <View>
     <TextInput {...props}
        style={styles.textInput}
          mode="outlined"
          label={placeholder}
          outlineColor="lightgrey" 
          selectionColor='blue'
          
          //activeUnderlineColor='red'
          theme={{ colors: { underlineColor:'blue'}}}/>
      
      <Text style={styles.errorText}>{error}</Text>
    </View>
  )
}

export default InputField;
