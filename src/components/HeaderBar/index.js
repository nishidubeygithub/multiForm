import * as React from 'react';
import {ProgressBar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import color from '../../constant/color';
import styles from './styles';

const HeaderBar = () => {
  const progress = useSelector(state => state.userData.progress);
  //console.log('Progressbar------>', progress);
  return (
    <ProgressBar
      style={styles.progressStyle}
      progress={progress}
      color={color.lightgrey}
    />
  );
};

export default HeaderBar;
