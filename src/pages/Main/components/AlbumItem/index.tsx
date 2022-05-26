import React, { KeyboardEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IAlbum } from '../../../../store/api/jsonPlaceholderApi/types';
import { getUserById } from '../../../../store/api/jsonPlaceholderApi/api';
import serviceRouter from '../../../../lib/router/service';

interface IAlbumItem {
  data: IAlbum;
}

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
      openAlbum();
    }
  };

  return (
    <div role="button" tabIndex={0} onKeyDown={handleKeyDown} onClick={handleClick}>
      <div>
        {t('global.album')}: {data.title}
      </div>
      <div>{`${t('global.author')}: ${user ? user.name : t('global.authorEmpty')}`}</div>
    </div>
  );
}
