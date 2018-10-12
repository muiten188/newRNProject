import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Alert,
    View,
    Text,
    Image,
    Dimensions,
    RefreshControl,
    ScrollView,
    TouchableOpacity,
    Platform,
    Animated
} from "react-native";
import { bindActionCreators } from "redux";
//import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";
import styles from './styles'
import Swiper from 'react-native-swiper';
import Ripple from 'react-native-material-ripple';
import * as homeAction from '../../store/actions/home'
import ProgressBar from '../../conponent/progressBar';
import Header from '../../conponent/header'
import GearIndicator from '../../conponent/gearsIndicator';
import Button from '../../theme/button';
import Background from '../../theme/background'
import FastImageComponent from '../../conponent/fastImage';
import Shimmer from 'react-native-shimmer';
// Tells the library to detect iBeacon
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            refreshing: false,
            shimmer: true
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    componentWillMount() {
        this.props.homeAction.retrieveNowPlayingMovies();
        this.props.homeAction.retrievePopularMovies();
        if (this.state.isRefreshed && this.setState({ refreshing: false }));
        // setTimeout(() => {
        //     this.setState({ shimmer: false });
        // }, 5000);
    }



    componentWillReceiveProps(nextProps) {
        if (nextProps.homeReducer.listNowFilm && nextProps.homeReducer.listPopularMovies) {
            this.setState({ isLoading: false });
        }
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses// this is the same id field from the static navigatorButtons definition
            Alert.alert('NavBar', event.id);
        }
    }

    render() {
        const { incrementAsync } = this.props.homeAction;
        const { listNowFilm, listPopularMovies } = this.props.homeReducer;
        const { counter } = this.props.homeReducer;
        return (
            this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
                <Background>
                    <Shimmer animating={this.state.shimmer}>
                        <View style={{ width: '100%', height: 200 }}>
                            <FastImageComponent></FastImageComponent>
                        </View>
                    </Shimmer>

                    <Header></Header>
                    <Button></Button>
                    <GearIndicator />
                    <ScrollView
                        ref='PTRListView'
                        style={styles.container}
                    >
                        {/* <Text>Đây là home containner: {counter}</Text>
                        <Ripple onPress={() => {
                            incrementAsync();
                            // this.props.navigator.push({
                            //     screen: 'newProject.Home2',
                            //     title: 'Pushed Screen'
                            // });
                        }}>
                            <Text>Increment</Text>
                        </Ripple> */}
                        <View>
                            <Swiper
                                autoplay
                                autoplayTimeout={4}
                                showsPagination={false}
                                height={248}>
                                {listPopularMovies.map((info, index) => (
                                    <View key={index}>
                                        <Image source={{ uri: `https://image.tmdb.org/t/p/w780/${(info.backdrop_path || info.poster_path)}` }} style={styles.imageBackdrop} />
                                        {/* <LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']} style={styles.linearGradient} /> */}
                                        <View style={styles.cardContainer}>
                                            <Image source={{ uri: `https://image.tmdb.org/t/p/w185/${info.poster_path}` }} style={styles.cardImage} />
                                            <View style={styles.cardDetails}>
                                                <Text style={styles.cardTitle} numberOfLines={2}>
                                                    {info.original_title}
                                                </Text>
                                                <View style={styles.cardGenre}>
                                                    <Text style={styles.cardGenreItem}>Action</Text>
                                                </View>
                                                <View style={styles.cardNumbers}>
                                                    <View style={styles.cardStar}>
                                                        {/* {iconStar} */}
                                                        <Text style={styles.cardStarRatings}>8.9</Text>
                                                    </View>
                                                    <Text style={styles.cardRunningHours} />
                                                </View>
                                                <Text style={styles.cardDescription} numberOfLines={3}>
                                                    {info.overview}
                                                </Text>
                                                <TouchableOpacity activeOpacity={0.9} >
                                                    <View style={styles.viewButton}>
                                                        <Text style={styles.viewButtonText}>View Details</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </Swiper>
                            <ScrollView style={{ marginTop: 10, height: 250 }} horizontal showsHorizontalScrollIndicator={false}>
                                {listPopularMovies.map((info, index) => {
                                    return (
                                        <TouchableOpacity key={index} activeOpacity={0.8}>
                                            <View style={{
                                                height: 231,
                                                width: 135,
                                                backgroundColor: 'white',
                                                flexDirection: 'column',
                                                marginRight: 10,
                                                borderRadius: 3
                                            }}>
                                                <Image source={{ uri: `https://image.tmdb.org/t/p/w185/${info.poster_path}` }} style={{
                                                    width: 135,
                                                    height: 184,
                                                    borderTopLeftRadius: 3,
                                                    borderTopRightRadius: 3
                                                }} />
                                                <View style={{
                                                    flex: 1,
                                                    justifyContent: 'center'
                                                }}>
                                                    <Text style={{
                                                        color: 'black',
                                                        fontSize: 13,
                                                        fontWeight: '500',
                                                        textAlign: 'center',
                                                        paddingHorizontal: 1
                                                    }} numberOfLines={2}>
                                                        {info.original_title}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                            <ScrollView style={{ height: 250 }} horizontal showsHorizontalScrollIndicator={false}>
                                {listNowFilm.map((info, index) => {
                                    return (
                                        <TouchableOpacity key={index} activeOpacity={0.8}>
                                            <View style={{
                                                height: 231,
                                                width: 135,
                                                backgroundColor: 'white',
                                                flexDirection: 'column',
                                                marginRight: 10,
                                                borderRadius: 3
                                            }}>
                                                <Image source={{ uri: `https://image.tmdb.org/t/p/w185/${info.poster_path}` }} style={{
                                                    width: 135,
                                                    height: 184,
                                                    borderTopLeftRadius: 3,
                                                    borderTopRightRadius: 3
                                                }} />
                                                <View style={{
                                                    flex: 1,
                                                    justifyContent: 'center'
                                                }}>
                                                    <Text style={{
                                                        color: 'black',
                                                        fontSize: 13,
                                                        fontWeight: '500',
                                                        textAlign: 'center',
                                                        paddingHorizontal: 1
                                                    }} numberOfLines={2}>
                                                        {info.original_title}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                            <ScrollView style={{ height: 250 }} horizontal showsHorizontalScrollIndicator={false}>
                                {listNowFilm.map((info, index) => {
                                    return (
                                        <TouchableOpacity key={index} activeOpacity={0.8}>
                                            <View style={{
                                                height: 231,
                                                width: 135,
                                                backgroundColor: 'white',
                                                flexDirection: 'column',
                                                marginRight: 10,
                                                borderRadius: 3
                                            }}>
                                                <Image source={{ uri: `https://image.tmdb.org/t/p/w185/${info.poster_path}` }} style={{
                                                    width: 135,
                                                    height: 184,
                                                    borderTopLeftRadius: 3,
                                                    borderTopRightRadius: 3
                                                }} />
                                                <View style={{
                                                    flex: 1,
                                                    justifyContent: 'center'
                                                }}>
                                                    <Text style={{
                                                        color: 'black',
                                                        fontSize: 13,
                                                        fontWeight: '500',
                                                        textAlign: 'center',
                                                        paddingHorizontal: 1
                                                    }} numberOfLines={2}>
                                                        {info.original_title}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>

                            <View style={styles.browseList}>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <View style={styles.browseListItem}>
                                        {/* {iconPlay} */}
                                        <Text
                                            style={styles.browseListItemText}
                                        >
                                            Now Playing
								</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <View style={styles.browseListItem}>
                                        {/* {iconTop} */}
                                        <Text style={styles.browseListItemText}>
                                            Top Rated
								</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <View style={styles.browseListItem}>
                                        {/* {iconUp} */}
                                        <Text
                                            style={styles.browseListItemText}
                                        >
                                            Upcoming
								</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </Background>
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