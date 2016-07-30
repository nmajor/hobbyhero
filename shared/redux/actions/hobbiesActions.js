import * as ActionTypes from '../constants';
import fetch from 'isomorphic-fetch';
// import socket from '../../../client/socket';
import baseURL from '../../baseURL';

export function setHobbies(hobbies) {
  return {
    type: ActionTypes.SET_HOBBIES,
    hobbies,
  };
}

export function addHobby(hobby) {
  return {
    type: ActionTypes.ADD_HOBBY,
    hobby,
  };
}

export function replaceHobby(hobby) {
  return {
    type: ActionTypes.REPLACE_HOBBY,
    hobby,
  };
}

export function createHobby(props, cb) {
  return (dispatch) => {
    return fetch(`${baseURL}/api/hobbies`, {
      credentials: 'include',
      method: 'post',
      body: JSON.stringify(props),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error(`Bad response from server ${res.status} ${res.statusText}`);
      }

      return res.json();
    })
    .then((res) => {
      if (res.error) {
        cb(res);
        throw new Error(res.error.message);
      }
      dispatch(addHobby(res));
      cb(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };
}
