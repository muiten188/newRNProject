import React, { Component } from 'react'
import { View, Image } from 'react-native'
import FastImage from 'react-native-fast-image'
import styles from './styles';
class FastImageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            loaded: false,
            error: false
        }
    }

    onLoadStart() {

    }

    onProgress(event) {

    }

    onLoadEnd() {
        this.setState({
            isLoading: false,
            loaded: true,
            error: false
        })
    }

    onError() {
        this.setState({
            isLoading: false,
            loaded: false,
            error: true
        })
    }

    render() {
        const { children, backgroundImg, styleImg, styleContainer } = this.props
        return (
            <View style={styles.image}>
                <FastImage
                    style={this.state.loaded ? { flex: 1 } : {}}
                    onLoadStart={this.onLoadStart.bind(this)}
                    onProgress={this.onProgress.bind(this)}
                    onLoadEnd={this.onLoadEnd.bind(this)}
                    source={{
                        uri: 'https://unsplash.it/400/400?image=32',
                        priority: FastImage.priority.normal,

                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                {this.state.isLoading ? <Image
                    style={{ resizeMode: "stretch" }}
                    source={require('../../resources/image/7ce8ec37-6405-48e7-bef6-5af44b0bca53.jpg')}></Image>
                    : null}
            </View>

        )
    }
}

export default FastImageComponent;