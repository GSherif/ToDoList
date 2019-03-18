import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reduxStore from './reduxStore';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
