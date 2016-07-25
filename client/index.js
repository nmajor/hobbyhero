import React from 'react';
import routes from '../shared/routes';
// import DevTools from '../shared/container/DevTools';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import store from './store';

// Pull in the styles for development
if (process.env.NODE_ENV !== 'production') {
  require('./assets/scss/style.scss'); // eslint-disable-line
}

const history = browserHistory;
const dest = document.getElementById('root');

render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), dest);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.'); // eslint-disable-line
  }
}

if (process.env.CLIENT) {
  render(
    <Provider store={store} key="provider">
      <div>
        <Router history={history} routes={routes} />
      </div>
    </Provider>,
    dest
  );
}
