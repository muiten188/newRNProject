// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from 'react';
// import { Text } from 'react-native';
//import AppRoot from './src';

// export default class App extends Component {
//   render() {
//     return (
//       <AppRoot />
//       // <Text>test</Text>
//     );
//   }
// }
import { Navigation } from 'react-native-navigation'
import registerScreens from './src/containers'
import configStore from './src/store';
import { YellowBox, NetInfo } from 'react-native'
import { persistStore } from 'redux-persist'


export const store = configStore()

const _persist = (store) => {
  return new Promise(resolve => {
    persistStore(store, undefined, () => {
      resolve();
    });
  })
}

// YellowBox.ignoreWarnings([
//     'Warning: Module SafeAreaManager requires',
// ]);

// _checkShowConnectionWarning = (connectionInfo) => {
//     if (connectionInfo.type == "none") {
//         showNoConnection()
//     } else {
//         hideNoConnection()
//     }
// }

// _listenNetworkConnection = () => {
//     console.log('Call Connection')
//     NetInfo.getConnectionInfo().then((connectionInfo) => {
//         console.log('Connection: ', connectionInfo);
//         this._checkShowConnectionWarning(connectionInfo)
//     })
//     NetInfo.addEventListener(
//         'connectionChange',
//         (connectionInfo) => {
//             console.log('Connection Change', connectionInfo)
//             this._checkShowConnectionWarning(connectionInfo)
//         }
//     )
// }

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};

export const run = () => {
  registerScreens(store)
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'newProject.Home',
      title: 'Home',
      navigatorStyle,
      navigatorStyle: {
        navBarHidden: true
      },
      leftButtons: [
        {
          id: 'sideMenu'
        }
      ],
      rightButtons: [
        {
          id: 'sideMenu2',
          icon: require('./src/resources/icon/web_hi_res_512.png'),
        },
        {
          id: 'back',
          icon: require('./src/resources/icon/web_hi_res_512.png'),
        }
      ],
    },
    drawer: {
      left: {
        screen: 'newProject.Home2'
      }
    }
  });
}