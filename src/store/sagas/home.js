import { put, takeEvery, takeLatest, call } from 'redux-saga/effects'
import { createRequestSaga } from './common'
import api from '../api/index';
import { delay } from 'redux-saga';
function* incrementAsync() {
    yield put({ type: 'INCREMENT' })
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export const getNowPlayingMovies = createRequestSaga({
    request: api.home.getNowPlayingMovies,
    success: [
        (data) => {
            return { type: 'NowPlayingMovies', listPlayingMovies: data.results }
        }
    ]
})
export const getPopularMovies = createRequestSaga({
    request: api.home.getPopularMovies,
    success: [
        (data) => {
            return { type: 'PopularMovies', listPopularMovies: data.results }
        }
    ]
})
// root saga reducer
export default function* fetchWatcher() {
    yield takeLatest('INCREMENT_ASYNC', incrementAsync)
    yield takeEvery('retrieveNowPlayingMovies', getNowPlayingMovies)
    yield takeEvery('retrievePopularMovies', getPopularMovies)

}


