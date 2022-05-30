import React from 'react';
import { PageHeader } from 'antd';
import ChangeLanguage from '../ChangeLanguage';
import bem from '../../lib/bem';
import './index.scss';

interface ILayout {
  title: string;
  onBack?: () => void;
  children: React.ReactNode;
}

function Layout({ children, onBack, title }: ILayout) {
  const layoutBem = bem('layout');
  return (
    <div className={layoutBem()}>
      <PageHeader className={layoutBem('header')} title={title} onBack={onBack} extra={[<ChangeLanguage key="1" />]} />
      <div className={layoutBem('content')}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  onBack: undefined,
};

export default Layout;
