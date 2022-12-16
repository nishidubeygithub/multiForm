import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
  },
  headerText: {
    margin: 30,
    fontSize: 35,
    fontWeight: '500',
    marginLeft: 20,
  },
  placeholderInput: {
    padding: 20,
    width: 350,
  },
  buttonStyle: {
    borderWidth: 1,
    margin: 20,
    padding: 10,
    height: 70,
    width: 380,
    fontSize: 80,
    fontWeight: 'bold',
    borderRadius: 30,
    backgroundColor: color.pink,
    alignItems: 'center',
    borderColor: color.white,
  },
  textStyle: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: color.white,
  },
  modalText: {
    marginTop: 500,
  },
});
export default styles;
