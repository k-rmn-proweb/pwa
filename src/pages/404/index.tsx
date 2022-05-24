import { Alert } from 'antd';
import './index.css';

function Error404() {
  return <Alert message={404} type="error" />;
}

export default Error404;
