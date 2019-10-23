import React, { ReactNode } from 'react';
import styles from './content-layout.module.css';

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <div className={styles.content}>{children}</div>;
};

export default ContentLayout;
