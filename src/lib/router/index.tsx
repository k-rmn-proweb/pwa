import React from 'react';
import type { RouteObject } from 'react-router-dom';
import Main from '../../pages/Main';
import Album from '../../pages/Album';
import Page404 from '../../pages/404';
import { paths } from './paths';

export const routes: RouteObject[] = [
  { path: paths.MAIN, element: <Main /> },
  { path: paths.ALBUMS, element: <Main /> },
  { path: paths.ALBUM, element: <Album /> },
  { path: paths.NOTFOUND, element: <Page404 /> },
];
