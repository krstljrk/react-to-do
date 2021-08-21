import { createStore } from 'redux';
import toDosReducer from './reducers';


const store = createStore(toDosReducer);

export default store;
