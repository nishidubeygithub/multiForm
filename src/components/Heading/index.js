import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Heading = props => {
    const { text } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

export default Heading;