import {createStore} from 'redux';
import TaskReducer from './reducers/tasks';

const initialState = {
    data: [],
};

const store = createStore(TaskReducer, initialState ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;