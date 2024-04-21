import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import { ThemeProvider } from 'styled-components';
import {theme} from "./styles/theme.js"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store} from "./redux/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
    <BrowserRouter basename="/rental_camp_car">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
             <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
  </>
  
);
