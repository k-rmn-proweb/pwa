import { Image, Alert, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { getPhotos, getAlbumById } from '../../store/api/jsonPlaceholderApi/hooks';
import Layout from '../../components/Layout';
import serviceRouter from '../../lib/router/service';

export default function Album() {
  const navigate = useNavigate();
  const { t } = useTranslation<string>();
  const { albumId = 0 } = useParams();
  const id = Number(albumId);
  const { data, error, isLoading } = getPhotos(id);
  const { data: album } = getAlbumById(id);
  let content = null;

  const handleBack = () => {
    navigate(serviceRouter.goToMain());
  };

  if (error) {
    content = <Alert message={error.toString()} type="error" />;
  } else if (isLoading) {
    content = t('global.loading');
  } else if (data?.length) {
    content = (
      <Image.PreviewGroup>
        <Row gutter={[24, 24]}>
          {data.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={4}>
              <Image src={`${item.url}.png`} />
            </Col>
          ))}
        </Row>
      </Image.PreviewGroup>
    );
  }

  return (
    <Layout title={album ? album.title : t('global.albumEmpty')} onBack={handleBack}>
      {content}
    </Layout>
  );
}
