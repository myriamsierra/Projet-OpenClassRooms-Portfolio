import React from 'react';
import ReactDOM from 'react-dom'; 
import RouterConfig from './utils/router-config/routerConfig.jsx'; 
import { ThemeProvider } from './utils/theme-provider/dark-mode.jsx'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> 
      <RouterConfig /> 
    </ThemeProvider>
  </React.StrictMode>
);



