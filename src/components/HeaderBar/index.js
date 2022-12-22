import * as React from 'react';
import {ProgressBar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import color from '../../constant/color';
import styles from './styles';

const HeaderBar = () => {
  const progress = useSelector(state => state.userData.progress);

  return (
    <ProgressBar
      progress={progress}
      color={color.lightgrey}
      style={styles.progressStyle}
    />
  );
};

export default HeaderBar;