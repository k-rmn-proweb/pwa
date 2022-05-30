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
  onUpdate: (wb) => {
    Modal.confirm({
      title: 'Установить обновление?',
      content: 'После установки обновлений, приложение автоматичеки перезагрузиться',
      centered: true,
      maskClosable: true,
      onOk: () => {
        wb.messageSkipWaiting();
      },
    });
  },
});

// GPS
// reportWebVitals(console.log);
