import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);