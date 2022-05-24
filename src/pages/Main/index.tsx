import { Alert } from 'antd';
import { jsonPlaceholderHooks } from '../../store/api';
import ChangeLocale from './components/ChangeLocale';
import './index.css';

function Main() {
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

  return (
    <div>
      <div>
        <ChangeLocale />
      </div>
      <div>{content}</div>
    </div>
  );
}

export default Main;
