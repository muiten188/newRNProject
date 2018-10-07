import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
export var store = null;
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['ui']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()
let middleware = [sagaMiddleware];
if (__DEV__) {
    middleware = [...middleware, logger];
} else {
    middleware = [...middleware];
}
// const enhancer = [autoRehydrate(), applyMiddleware(...middleware)]

export default function configureStore(callback, initialState = {}) {
    store = createStore(
        persistedReducer,
        initialState,
        applyMiddleware(...middleware)
    )
    sagaMiddleware.run(rootSaga)
    if (callback) {
        callback(store)
    }

    else {
        return store;
    }
}