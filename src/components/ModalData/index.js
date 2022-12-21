import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const ModalData = ({ ...props }) => {
    return (
        <View>
            <Text style={styles.textInput}>{props.name}
                {props.text}
            </Text>
        </View>

    );
};

export default ModalData;