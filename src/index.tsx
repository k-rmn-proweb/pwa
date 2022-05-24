import React from 'react';
import ReactDOM from 'react-dom/client';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { initLocales } from './lib/locales';
import { store } from './store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

initLocales();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
