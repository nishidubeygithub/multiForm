import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  mainHeader: {
    margin: 25,
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
});

export default styles;
