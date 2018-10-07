import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation'
import configStore from './store'
import { YellowBox, NetInfo } from 'react-native'
import { persistStore } from 'redux-persist'
// import I18n from '~/src/I18n'
import { Provider } from 'react-redux';
import App from './containers'
import {store} from './store';
//export const store = configStore()
// const _persist = (store) => {
//     return new Promise(resolve => {
//         persistStore(store, undefined, () => {
//             resolve();
//         });
//     })
// }

export default class AppRoot extends Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     configStore(store => this.setState({ store }))
    // }

    render() {
        if (!store) {
            return (<Text>Initializing...</Text>)
        }
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
