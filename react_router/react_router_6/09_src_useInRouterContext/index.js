import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Demo from './components/Demo';

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Demo></Demo>
  </div>
);

