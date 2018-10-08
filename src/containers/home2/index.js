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
// Tells the library to detect iBeacon
class Home2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'black'}}>
                <Text style={{color:'white'}}>Drawer</Text>
            </View>
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