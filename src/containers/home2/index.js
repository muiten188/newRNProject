import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from './styles'
import MapView, { Polyline } from 'react-native-maps';
// Tells the library to detect iBeacon
class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrLocation: [
                { latitude: 37.8025259, longitude: -122.4351431 },
                { latitude: 37.7896386, longitude: -122.421646 },
                { latitude: 37.7665248, longitude: -122.4161628 }
            ]
        }
        setInterval(() => {
            var arrLocation = JSON.parse(JSON.stringify(this.state.arrLocation));
            var last = this.state.arrLocation.length - 1;
            var item = arrLocation[last];
            var newItem = { latitude: item.latitude, longitude: item.longitude + 0.0005 }
            arrLocation.push(newItem);
            this.setState({
                arrLocation: arrLocation
            })
        }, 2000)
    }
    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                mapType={"standard"}
                initialRegion={{
                    latitude: 37.8025259,
                    longitude: -122.4351431,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Polyline
                    coordinates={this.state.arrLocation}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={2}
                />
            </MapView>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        loginReducer: state.loginReducer,
        app_Reducer: state.app_Reducer
    };
}
// function mapToDispatch(dispatch) {
//     return {
//         appAction: bindActionCreators(appAction, dispatch)
//     };
// }
export default connect(mapStateToProps, null)(Home2);