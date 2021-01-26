import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../helpers/store';
import App from '../App';

it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(    
        <Provider store={store}>
            <App />
        </Provider>, 
    div);
});