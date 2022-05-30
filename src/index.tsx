import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Modal } from 'antd';
import { initLocales } from './lib/locales';
import { store } from './store';
import App from './components/App';
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

serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    Modal.confirm({
      title: 'Установить обновление?',
      centered: true,
      maskClosable: true,
      onOk: () => {
        registration?.waiting?.postMessage({ type: 'SKIP_WAITING' });
      },
    });
  },
  onSuccess: () => {
    Modal.info({
      title: 'Приложение готово к автономной работе',
      centered: true,
      maskClosable: true,
    });
  },
});

// GPS
// reportWebVitals(console.log);
