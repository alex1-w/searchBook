import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SetupStore } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <BrowserRouter>
  <HashRouter>
    <Provider store={SetupStore}>
      <App />
    </Provider>
  </HashRouter>,
);
