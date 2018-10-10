import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Animated,
    Image, Easing
} from 'react-native'

const { height, windowWidth } = Dimensions.get('window')

class GearsIndicator extends Component {
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
        this.animatedValue = new Animated.Value(0)
    }

    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.spring
            }
        ).start(() => { this.spin() })
    }
    opacity() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.cubic
            }
        ).start(() => { this.opacity() })
    }

    componentDidMount() {
        this.spin()
        this.opacity();
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 0.5, 1],
            // outputRange: ['0deg', '360deg']
            outputRange: [0.5, 1, 0.5]
        })
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [-200, 100, -200]
        })
        return (
            <View style={styles.background}>
                <Animated.Image
                    style={[styles.gearOne, { transform: [{ scale: spin }], marginLeft }]}
                    source={require('../../resources/image/8d7ae2ed-f9cd-4ca1-93a6-7ce77856ca67.jpg')}
                />
                {/* <Animated.Image
                    style={styles.gearTwo}
                    source={require('../../resources/image/7ce8ec37-6405-48e7-bef6-5af44b0bca53.jpg')}
                />
                <Animated.Image
                    style={styles.gearThree}
                    source={require('../../resources/image/7ce8ec37-6405-48e7-bef6-5af44b0bca53.jpg')}
                />
                <Animated.Image
                    style={styles.gearFour}
                    source={require('../../resources/image/8d7ae2ed-f9cd-4ca1-93a6-7ce77856ca67.jpg')}
                />
                <Animated.Image
                    style={styles.gearFive}
                    source={require('../../resources/image/8d7ae2ed-f9cd-4ca1-93a6-7ce77856ca67.jpg')}
                /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#24589A',
        height: 130,
        alignItems: 'center',
        overflow: 'hidden'
    },
    gearOne: {
        width:100,
        height:100
    },
    gearTwo: {
        position: 'absolute',
        bottom: -25,
        left: 60
    },
    gearThree: {
        marginTop: 45
    },
    gearFour: {
        position: 'absolute',
        top: -35,
        right: 80
    },
    gearFive: {
        position: 'absolute',
        bottom: -25,
        right: 30
    }
})

module.exports = GearsIndicator