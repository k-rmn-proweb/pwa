import { Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import { jsonPlaceholderHooks } from '../../store/api';
import ChangeLanguage from './components/ChangeLanguage';
import './index.css';

function Main() {
  const { t } = useTranslation<string>();
  const { useGetUsersQuery } = jsonPlaceholderHooks;
  const { isLoading, data, error } = useGetUsersQuery(undefined);
  let content = null;

  if (error) {
    content = <Alert message={error.toString()} type="error" />;
  } else if (isLoading) {
    content = t('global.loading');
  } else if (data?.length) {
    content = data.map((item) => <div key={item.id}>{item.name}</div>);
  }

  return (
    <div>
      <div>
        <ChangeLanguage />
      </div>
      <div>{content}</div>
    </div>
  );
}

export default Main;
