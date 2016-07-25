import * as ActionTypes from '../constants';
import fetch from 'isomorphic-fetch';
import socket from '../../../client/socket';
import baseURL from '../../baseURL';

export function setUser(user) {
  return {
    type: ActionTypes.SET_USER,
    _id: user._id,
    email: user.email,
    name: user.name,
    errors: user.errors,
  };
}

export function setPropertyForUser(prop, val) {
  return {
    type: ActionTypes.SET_PROPERTY_FOR_USER,
    prop,
    val,
  };
}

export function clearUser() {
  return {
    type: ActionTypes.RESET_STATE,
  };
}

export function getUser() {
  return (dispatch) => {
    fetch(`${baseURL}/api/user`, {
      credentials: 'include',
    })
    .then((res) => {
      if (res.status === 401) {
        throw new Error('Invalid username or password');
      } else if (res.status >= 400) {
        throw new Error(`Bad response from server ${res.status} ${res.statusText}`);
      }

      return res.json();
    })
    .then((res) => {
      if (res.error) {
        throw new Error(res.error.message);
      }
      dispatch(setUser(res));
    })
    .catch((err) => {
      console.log(err);
      dispatch(clearUser());
    });
  };
}

export function logoutUser(cb) {
  return (dispatch) => {
    return fetch(`${baseURL}/api/logout`, {
      credentials: 'include',
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error(`Bad response from server when trying to logout ${res.status} ${res.statusText}`);
      }

      return res.json();
    })
    .then((res) => {
      if (res.error) {
        throw new Error(res.error.message);
      }
      dispatch(clearUser());
      cb();
    })
    .catch((err) => {
      console.log(err.message);
    });
  };
}

export function registerUser(userData, cb) {
  return (dispatch) => {
    return fetch(`${baseURL}/api/register`, {
      credentials: 'include',
      method: 'post',
      body: JSON.stringify(userData),
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
        throw new Error(res.error.message);
      }
      dispatch(setUser(res));
      socket.connect(baseURL, { forceNew: true });
      cb(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };
}

export function loginUser(userData, cb) {
  return (dispatch) => {
    return fetch(`${baseURL}/api/login`, {
      credentials: 'include',
      method: 'post',
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
    .then((res) => {
      if (res.status === 401) {
        throw new Error('Invalid username or password');
      } else if (res.status >= 400) {
        throw new Error(`Bad response from server ${res.status} ${res.statusText}`);
      }

      return res.json();
    })
    .then((res) => {
      if (res.error) {
        throw new Error(res.error.message);
      }
      dispatch(setUser(res));
      socket.connect(baseURL, { forceNew: true });
      cb(res);
    })
    .catch((err) => {
      console.log(err);
      cb({
        errors: {
          base: err.message,
        },
      });
    });
  };
}
