import { StyleSheet } from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
  modal: {
    height: '50%',
    width: '80%',
    marginLeft: '10%',
    marginTop: '30%',
    margin: 20,
    marginBottom: '40%',
    backgroundColor: color.white,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1
  },
  modalcontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  modaldata: {
    fontSize: 12,
    paddingBottom: '10%',
  },
  buttonStyle: {
    padding: 10
  }
});
export default styles;
