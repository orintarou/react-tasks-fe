import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// Use non-null assertion or a conditional check
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App/>);
} else {
  console.error('Root element not found');
}
