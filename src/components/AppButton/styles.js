import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  buttonStyle: {
   borderWidth: 1,
    margin:10,
    padding: 6,
    height: 55,
    width: 280,
    borderRadius: 30,
    backgroundColor: color.primary,
    alignItems: 'center',
    borderColor: color.white,
  },
  textStyle: {
    fontSize: 15,
    padding: 12,
    textAlign: 'center',
    fontWeight: '400',
    color: color.white,
  },
});

export default styles;
