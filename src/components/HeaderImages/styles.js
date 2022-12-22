import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '6%',
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftStyle: {
    width: 30,
    height: 30,
    marginTop: 5,
  },
  cancelStyle: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  line: {
    width: '95%',
    height: 6,
    marginVertical: 40,
    marginLeft: '4%',
    borderRadius: 6,
    backgroundColor: 'lightgreen',
    marginBottom: 50,
  },
});

export default styles;
