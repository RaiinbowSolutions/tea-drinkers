import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

import ComingSoonComponent from './components/comingSoon.component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ComingSoonComponent />
    <p className='bottom'>View API at <a href="/.netlify/functions/api/hello-world" target="_blank">/.netlify/functions/api/hello-world</a></p>
  </React.StrictMode>
);

reportWebVitals();