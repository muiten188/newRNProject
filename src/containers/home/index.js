import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from './styles'
import Ripple from 'react-native-material-ripple';
import * as homeAction from '../../store/actions/home'
// Tells the library to detect iBeacon
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {incrementAsync}=this.props.homeAction;
        debugger;
        const {counter}= this.props.homeReducer;
        return (
            <View style={{ flex: 1 }}>
                <Text>Đây là home containner: {counter}</Text>
                <Ripple onPress={() => {
                    incrementAsync();
                    // this.props.navigator.push({
                    //     screen: 'newProject.Home2',
                    //     title: 'Pushed Screen'
                    // });
                }}>
                    <Text>Increment</Text>
                </Ripple>
            </View>

        );
    }
}
function mapStateToProps(state, props) {
    return {
        homeReducer: state.homeReducer,
    };
}
function mapToDispatch(dispatch) {
    return {
        homeAction: bindActionCreators(homeAction, dispatch)
    };
}
export default connect(mapStateToProps, mapToDispatch)(Home);