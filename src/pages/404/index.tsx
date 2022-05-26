import { Alert } from 'antd';
import Layout from '../../components/Layout';

function Error404() {
  return (
    <Layout title="Progressive Web Applications">
      <Alert message={404} type="error" />
    </Layout>
  );
}

export default Error404;
