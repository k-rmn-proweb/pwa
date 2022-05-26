import { Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import { getAlbums } from '../../store/api/jsonPlaceholderApi/api';
import ChangeLanguage from './components/ChangeLanguage';
import AlbumItem from './components/AlbumItem';
import './index.css';

function Main() {
  const { t } = useTranslation<string>();
  const { isLoading, data, error } = getAlbums();
  let content = null;

  if (error) {
    content = <Alert message={error.toString()} type="error" />;
  } else if (isLoading) {
    content = t('global.loading');
  } else if (data?.length) {
    content = data.map((item) => <AlbumItem key={item.id} data={item} />);
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
