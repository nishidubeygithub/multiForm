import React from 'react';
import {View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import image from '../../config/Image';

const HeaderImages = () => {
    const {goBack} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}> 
          <Image style={styles.leftStyle} source={image.leftarrow} />
        </TouchableOpacity>

        <Image style={styles.cancelStyle} source={image.cancel} />
      </View>
      <View style={styles.line}></View>
    </SafeAreaView>
  );
};

export default HeaderImages;