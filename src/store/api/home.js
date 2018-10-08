import { get, post } from './common'
export default {
    getNowPlayingMovies: () => {
        return get('/3/movie/now_playing', { api_key: '0439a50b5f94f2cdfebccda59f54a52b' })
    },
    getPopularMovies: () => {
        return get('/3/movie/popular', { api_key: '0439a50b5f94f2cdfebccda59f54a52b' })
    }
}