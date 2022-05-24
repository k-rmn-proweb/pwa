import { Alert } from 'antd';
import { jsonPlaceholderHooks } from '../../store/api';
import './index.css';

function App() {
  const { useGetUsersQuery } = jsonPlaceholderHooks;
  const { isLoading, data, error } = useGetUsersQuery(undefined);
  let content = null;

  if (error) {
    content = <Alert message={error.toString()} type="error" />;
  } else if (isLoading) {
    content = 'Loading...';
  } else if (data?.length) {
    content = data.map((item) => <div key={item.id}>{item.name}</div>);
  }

  return <div className="App">{content}</div>;
}

export default App;
