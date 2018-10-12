import React, { Component } from 'react'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'
import styles from './styles';
class FastImageComponent extends Component {
    render() {
        const { children, backgroundImg, styleImg, styleContainer } = this.props
        return (
            <FastImage
                style={styles.image}
                source={{
                    uri: 'https://unsplash.it/400/400?image=13',
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
        )
    }
}

export default FastImageComponent;