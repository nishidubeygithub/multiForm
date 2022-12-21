import { StyleSheet } from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  inputText: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.lightgrey,
    borderRadius: 2,
    margin: 8,
    backgroundColor: color.white,
    width: 320,
},
  errorText: {
    color: 'red',
    fontSize: 14,
    marginLeft:40
},
textInput: {
  marginHorizontal: '10%',
  marginTop: 10,
  marginBottom: 2,
  width:340
},
});

export default styles;
