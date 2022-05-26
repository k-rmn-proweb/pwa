import React from 'react';
import { PageHeader } from 'antd';
import ChangeLanguage from '../ChangeLanguage';

interface ILayout {
  title: string;
  onBack?: () => void;
  children: React.ReactNode;
}

function Layout({ children, onBack, title }: ILayout) {
  return (
    <div>
      <PageHeader className="site-page-header" title={title} onBack={onBack} extra={[<ChangeLanguage />]} />
      <div>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  onBack: undefined,
};

export default Layout;
