import {StyleSheet} from 'react-native';
import color from '../../constant/color'

const styles  = StyleSheet.create({
 
  buttonStyle: {
    backgroundColor: '#a600ed',
    borderColor:color.white,
    borderRadius: 25,
    borderWidth: 1,
    margin: 10,
    width: '70%',
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle: {
    fontSize: 15,
    color: color.white,
    textAlign: 'center',
    padding: 13,
    
  },
});

export default styles;