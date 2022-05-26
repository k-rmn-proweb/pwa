import React, { KeyboardEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAlbum } from '../../../../store/api/jsonPlaceholderApi/types';
import serviceRouter from '../../../../lib/router/service';

interface IAlbumItem {
  data: IAlbum;
}

export default function AlbumItem({ data }: IAlbumItem) {
  const navigate = useNavigate();

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
      <div>{data.title}</div>
    </div>
  );
}
