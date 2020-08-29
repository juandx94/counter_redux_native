import {INCREMENT, DECREMENT} from '../types/types';

export const actionIncrement = () => {
  return {
    type: INCREMENT,
  };
};

export const actionDecrement = () => ({
  type: DECREMENT,
});
