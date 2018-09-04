import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/rootReducer';
//import createSagaMiddleware from 'redux-saga';
//import rootSaga from './sagas/rootSaga';

//const sagaMiddleware = createSagaMiddleware();
export default createStore(rootReducer,
    //applyMiddleware(sagaMiddleware)
);
//sagaMiddleware.run(rootSaga);