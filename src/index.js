import React from 'react';
import { render } from 'react-dom';

/** Components */
import App from './App';

const targetNode = document.getElementById('root');

render(
  <App />,
  targetNode
);

/** Hot module replacement */
if(module.hot){
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(
      <NextApp />,
      targetNode
    );
  });
}