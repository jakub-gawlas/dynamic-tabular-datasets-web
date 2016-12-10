import React from 'react';
import { render } from 'react-dom';
import App from './App';

const targetNode = document.getElementById('root');

render(
  <App />,
  targetNode
);

if(module.hot){
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(
      <NextApp />,
      targetNode
    );
  });
}