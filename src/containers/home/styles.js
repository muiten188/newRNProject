import { Platform, StyleSheet } from 'react-native';
export default {
    container: {
        backgroundColor: 'black'
    },
    progressBar: {
        backgroundColor: '#0a0a0a',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listHeading: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 30
    },
    listHeadingLeft: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    listHeadingRight: {
        color: 'white',
        ...Platform.select({
            ios: {
                fontSize: 15
            },
            android: {
                fontSize: 16
            }
        })
    },
    browseList: {
        marginTop: 30,
        paddingHorizontal: 16,
        ...Platform.select({
            ios: {
                marginBottom: 60
            },
            android: {
                marginBottom: 30
            }
        })
    },
    browseListItem: {
        ...Platform.select({
            ios: {
                paddingVertical: 8
            },
            android: {
                paddingVertical: 10
            }
        }),
        flexDirection: 'row'
    },
    browseListItemText: {
        flex: 1,
        color: 'white',
        paddingLeft: 10,
        ...Platform.select({
            ios: {
                fontSize: 15,
                fontWeight: '500'
            },
            android: {
                fontSize: 16,
                fontWeight: '100'
            }
        })
    },



    linearGradient: {
		top: 0,
		left: 0,
		right: 0,
		height: 248,
		position: 'absolute'
	},
	imageBackdrop: {
		// flex: 1,
		height: 248,
		backgroundColor: 'black'
	},
	cardContainer: {
		position: 'absolute',
		top: 32,
		right: 16,
		left: 16,
		flexDirection: 'row'
	},
	cardImage: {
		height: 184,
		width: 135,
		borderRadius: 3
	},
	cardDetails: {
		paddingLeft: 10,
		flex: 1
	},
	cardTitle: {
		color: 'white',
		fontSize: 19,
		fontWeight: '500',
		paddingTop: 10
	},
	cardGenre: {
		flexDirection: 'row'
	},
	cardGenreItem: {
		fontSize: 11,
		marginRight: 5,
		color: 'white'
	},
	cardDescription: {
		color: '#f7f7f7',
		fontSize: 13,
		marginTop: 5
	},
	cardNumbers: {
		flexDirection: 'row',
		marginTop: 5
	},
	cardStar: {
		flexDirection: 'row'
	},
	cardStarRatings: {
		marginLeft: 5,
		fontSize: 12,
		color: 'white'
	},
	cardRunningHours: {
		marginLeft: 5,
		fontSize: 12
	},
	viewButton: {
		justifyContent: 'center',
		padding: 10,
		borderRadius: 3,
		backgroundColor: '#EA0000',
		width: 100,
		height: 30,
		marginTop: 10
	},
	viewButtonText: {
		color: 'white'
	}
}