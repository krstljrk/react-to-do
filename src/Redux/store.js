

import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './toDoSlice';

export default configureStore({
    reducer : {
        todos: toDoReducer
    }
})










/*import { createStore } from 'redux';
import toDosReducer from './reducers';


const store = createStore(toDosReducer);

export default store;
*/