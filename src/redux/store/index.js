import {combineReducers, createStore} from 'redux';
//Reducers
import counterReducer from '../reducers';

const AppReducers = combineReducers({
  counterReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

const store = createStore(rootReducer);
console.log(store.getState());
export default store;
