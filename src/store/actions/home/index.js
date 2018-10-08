

export function incrementAsync(){
    return { type: 'INCREMENT_ASYNC' }
}
export function retrieveNowPlayingMovies(page) {
    return { type: 'retrieveNowPlayingMovies' }
	// return function (dispatch) {
	// 	return axios.get(`${TMDB_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&page=${page}`)
	// 	.then(res => {
	// 		dispatch(retrieveNowPlayingMoviesSuccess(res));
	// 	})
	// 	.catch(error => {
	// 		console.log('Now Playing', error); //eslint-disable-line
	// 	});
	// };
}
export function retrievePopularMovies(page) {
    return { type: 'retrievePopularMovies' }
	// return function (dispatch) {
	// 	return axios.get(`${TMDB_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`)
	// 	.then(res => {
	// 		dispatch(retrievePopularMoviesSuccess(res));
	// 	})
	// 	.catch(error => {
	// 		console.log('Popular', error); //eslint-disable-line
	// 	});
	// };
}