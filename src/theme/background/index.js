import React, { Component } from 'react'

import { connect } from 'react-redux'
import { View, ImageBackground } from 'react-native'
import styles from './styles';
class Background extends Component {
    render() {
        const { children, backgroundImg, styleImg, styleContainer } = this.props
        return (
            <View
                style={[styles.backgroundContainer, styleContainer ? styleContainer : {}]}
            >
                {backgroundImg ? <ImageBackground style={[styles.backgroundImage, styleImg ? styleImg : { resizeMode: 'contain' }]} source={backgroundImg}>
                    {children}
                </ImageBackground> : children}

            </View>
        )
    }
}

export default Background;