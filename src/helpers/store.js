import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import authentication from '../reducers/authentication';

const loggerMiddleware = createLogger();

export default createStore(
    authentication,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);