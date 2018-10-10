import React, { Component, PureComponent } from 'react';
import { Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { style,onPress } = this.props;
        return (
            <Ripple style={[ style ? { ...style } : { width: '100%', height: 50 }]} onPress={onPress}>
                <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['red', 'black']} style={styles.linearGradient}>
                    <Text style={styles.textButton}>
                        Button
                </Text>
                </LinearGradient>
            </Ripple>
        )
    }
}
