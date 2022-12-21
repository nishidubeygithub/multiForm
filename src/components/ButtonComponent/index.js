import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles'


const ButtonComponent = ({ buttonText, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}>
            <Text style={styles.textStyle}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

export default ButtonComponent;