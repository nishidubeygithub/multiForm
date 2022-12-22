import { StyleSheet } from 'react-native';
import color from '../../constant/color';
import Fonts from '../Fonts/index'

const styles = StyleSheet.create({
  inputText: {
    marginHorizontal: '10%',
    marginTop: 10,
    marginBottom: 2,
    width:340
  },
  errorText: {
    color: 'red',
    fontSize: Fonts.fontSize_9,
    marginLeft:40
},

});

export default styles;
