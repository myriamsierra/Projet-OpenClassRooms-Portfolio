import React from 'react';
import ReactDOM from 'react-dom'; 
import RouterConfig from './pages/router-config/routerConfig.jsx'; 
import { ThemeProvider } from './utils/dark-mode/dark-mode.jsx'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> 
      <RouterConfig /> 
    </ThemeProvider>
  </React.StrictMode>
);



