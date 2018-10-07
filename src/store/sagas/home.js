import { put, takeEvery,takeLatest } from 'redux-saga/effects'
import {delay} from 'redux-saga';
function* incrementAsync() {
    yield put({ type: 'INCREMENT' })
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
  }
// root saga reducer
export default function* fetchWatcher() {
    yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}


