import * as ActionTypes from '../constants';
import initialState from '../../initialState';
import _ from 'lodash';

const hobbies = (state = initialState.hobbies, action) => {
  switch (action.type) {
    case ActionTypes.SET_HOBBIES :
      return action.hobbies;

    case ActionTypes.ADD_HOBBY :
      return [
        ...state,
        action.hobby,
      ];

    case ActionTypes.REPLACE_HOBBY : {
      const hobbyIndex = _.findIndex(state, { _id: action.hobby._id });
      if (hobbyIndex > -1) {
        return [
          ...state.slice(0, hobbyIndex),
          action.hobby,
          ...state.slice(hobbyIndex + 1),
        ];
      }
      return state;
    }

    default:
      return state;
  }
};

export default hobbies;
