import { Image, Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { getPhotos } from '../../store/api/jsonPlaceholderApi/api';
import './index.css';

export default function Album() {
  const { t } = useTranslation<string>();
  const { albumId = 0 } = useParams();
  const { data, error, isLoading } = getPhotos(Number(albumId));
  let content = null;

  if (error) {
    content = <Alert message={error.toString()} type="error" />;
  } else if (isLoading) {
    content = t('global.loading');
  } else if (data?.length) {
    content = (
      <Image.PreviewGroup>
        {data.map((item) => (
          <Image width={200} src={item.url} />
        ))}
      </Image.PreviewGroup>
    );
  }

  return <div>{content}</div>;
}
