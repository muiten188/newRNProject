import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// Tells the library to detect iBeacon
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Text>Đây là index container</Text>
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
export default connect(mapStateToProps, null)(App);