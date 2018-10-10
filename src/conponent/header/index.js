import React from 'react';
import {
    View,
    Text,
    Platform
} from 'react-native';
import styles from './styles';
const Header = (headerText) => (
    <View style={styles.header}>
        <Text style={styles.headerText}>headerText</Text>
    </View>
);


export default Header;
