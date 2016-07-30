import * as ActionTypes from '../constants';
import { combineReducers } from 'redux';
import initialState from '../../initialState';
import { reducer as formReducer } from 'redux-form';
// import _ from 'lodash';

import user from './user';
import hobbies from './hobbies';

const appReducer = combineReducers({
  form: formReducer,
  user,
  hobbies,
});

const rootReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.RESET_STATE) {
    state = initialState; // eslint-disable-line no-param-reassign
  }
  return appReducer(state, action);
};

export default rootReducer;
