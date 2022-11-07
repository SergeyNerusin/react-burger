import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/app';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './services/store/index';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);