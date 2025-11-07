import ReactDOM from 'react-dom/client';
import React from "react"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie'
import store from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <CookiesProvider defaultSetOptions={{ path: '/' }} >
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  
);

reportWebVitals();
