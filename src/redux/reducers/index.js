import initialState from './initialState';
import {INCREMENT, DECREMENT} from '../types/types';

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    default:
      return state;
  }
}
