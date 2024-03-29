import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './components/app/app';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './services/store/store';


const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router> 
  </React.StrictMode> 
);