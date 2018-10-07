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

const _setRoot = (bottomTabs) => {
  // const state = store.getState()
  let rootScreen = 'gigabankclient.Authentication'
  // if (chainParse(state, ['auth', 'accessToken'])) {
  //     rootScreen = 'gigabankclient.HomeScreen'
  // }
  // Navigation.setRoot({
  //     root: {
  //         stack: {
  //             id: 'mainStack',
  //             children: [
  //                 {
  //                     component: {
  //                         // name: 'gigabankclient.AddCard'
  //                         // name: 'gigabankclient.AddCardSuccess'
  //                         // name: 'gigabankclient.AddCardFail'
  //                         // name: 'gigabankclient.WithDraw',
  //                         // name: 'gigabankclient.WithDrawSearch'
  //                         // name: 'gigabankclient.WithDrawInfo'
  //                         // name: 'gigabankclient.WithDrawAuthen'
  //                         // name: 'gigabankclient.ChargePhone'
  //                         // name: 'gigabankclient.EnterPassword'
  //                         // name: 'gigabankclient.ChargePhoneAuthen'
  //                         // name: 'gigabankclient.AlertScreen'

  //                         // name: 'gigabankclient.BuyCardResult',
  //                         // id: 'BuyCardResult'

  //                         // name: 'gigabankclient.BuyCardCodes',
  //                         // id: 'BuyCardCodes'

  //                         // name: 'gigabankclient.HomeScreen',
  //                         // id: 'HomeScreen'

  //                         name: rootScreen,
  //                     }
  //                 }
  //             ]
  //         },

  //     }
  // })
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

export const run = () => {
  registerScreens(store)
//   Navigation.setDefaultOptions({
//     animations: {
//         push: {
//           content: {
//               x: {
//                   from: 1000,
//                   to: 0,
//                   duration: 300,
//                   interpolation: 'accelerate',
//               },
//           }
//       },
//         pop: {
//           content: {
//               x: {
//                   from: 0,
//                   to: 1000,
//                   duration: 300,
//                   interpolation: 'accelerate',
//               },
//           }
      
//       },
//     },
//     topBar: {
//         visible: false,
//         animate: false,
//         drawBehind: false,
//         elevation: 2,
//     },
//     layout: {
//     },
//     statusBar: {
//         drawBehind: false,
//         backgroundColor: 'transparent',
//         visible: true
//     },
//     bottomTabs: {
//         titleDisplayMode: 'alwaysShow'
//     }
// })

  // Navigation.events().registerAppLaunchedListener(() => {
  //     Navigation.setDefaultOptions({
  //         animations: {
  //             push: {
  //               content: {
  //                   x: {
  //                       from: 1000,
  //                       to: 0,
  //                       duration: 300,
  //                       interpolation: 'accelerate',
  //                   },
  //               }
  //           },
  //             pop: {
  //               content: {
  //                   x: {
  //                       from: 0,
  //                       to: 1000,
  //                       duration: 300,
  //                       interpolation: 'accelerate',
  //                   },
  //               }
            
  //           },
  //         },
  //         topBar: {
  //             visible: false,
  //             animate: false,
  //             drawBehind: false,
  //             elevation: 2,
  //         },
  //         layout: {
  //         },
  //         statusBar: {
  //             drawBehind: false,
  //             backgroundColor: 'transparent',
  //             visible: true
  //         },
  //         bottomTabs: {
  //             titleDisplayMode: 'alwaysShow'
  //         }
  //     })
  //     // console.log('Before Promise', new Date().getTime())
  //     // Promise.all([
  //     //     _persist(store)
  //     // ]).then((values) => {
  //     //     // Apply language after restore store
  //     //     // const state = store.getState()
  //     //     // // const language = languageSelector(state)
  //     //     // // I18n.locale = language.toLowerCase()

  //     //     // const bottomTabs = values[0]
  //     //     // _setRoot(bottomTabs)
  //     //     // _listenNetworkConnection()
  //     // })
  // })
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'newProject.Home',
      title: 'Home',
    },
  });
}