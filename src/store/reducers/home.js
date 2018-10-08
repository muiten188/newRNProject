const initialState = {
    counter: 0,
    listNowFilm: null
}
export const home = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'NowPlayingMovies':
            return {
                ...state,
                listNowFilm: action.listPlayingMovies
            }
        case 'PopularMovies':
            return {
                ...state,
                listPopularMovies: action.listPopularMovies
            }
        default:
            return state
    }
}
