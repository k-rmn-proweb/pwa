import React, { KeyboardEventHandler } from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IAlbum } from '../../../../store/api/jsonPlaceholderApi/types';
import { getUserById } from '../../../../store/api/jsonPlaceholderApi/hooks';
import serviceRouter from '../../../../lib/router/service';

interface IAlbumItem {
  data: IAlbum;
}

const { Meta } = Card;

export default function AlbumItem({ data }: IAlbumItem) {
  const { t } = useTranslation<string>();
  const navigate = useNavigate();
  const { data: user } = getUserById(data.userId);

  const openAlbum = () => {
    navigate(serviceRouter.goToAlbum(data.id));
  };

  const handleClick = () => {
    openAlbum();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.code === 'Space' || event.keyCode === 32) {
      event.preventDefault();
      openAlbum();
    }
  };

  return (
    <Card hoverable role="button" onClick={handleClick} tabIndex={0} onKeyDown={handleKeyDown}>
      <Meta title={data.title} description={`${t('global.author')}: ${user ? user.name : t('global.authorEmpty')}`} />
    </Card>
  );
}
