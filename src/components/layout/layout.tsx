import React from 'react';
import { useLocation } from 'react-router-dom';
import ContentLayout from '../content-layout';
import IconButton from '../icon-button';
import { Columns } from '../../types/columns';
import styles from './layout.module.css';

const getActiveButton = (numberColumns: Columns, currentColumns: string) =>
  numberColumns === currentColumns ? styles.active : '';

const Layout = () => {
  const { state } = useLocation();

  const [columns, setColumns] = React.useState('one-column');

  const formatTextTo = (numberColumns: Columns) => () => setColumns(numberColumns);

  return (
    <ContentLayout>
      <div className={styles['layout-container']}>
        <p>Please select number of columns:</p>
        <div className={styles['button-group']}>
          <IconButton
            onClick={formatTextTo('one-column')}
            active={getActiveButton('one-column', columns)}
            iconName="one-column"
          />
          <IconButton
            onClick={formatTextTo('two-columns')}
            active={getActiveButton('two-columns', columns)}
            iconName="two-columns"
          />
          <IconButton
            onClick={formatTextTo('three-columns')}
            active={getActiveButton('three-columns', columns)}
            iconName="three-columns"
          />
        </div>
        <p className={styles[columns]} contentEditable={true} suppressContentEditableWarning={true}>
          {state && state.text}
        </p>
      </div>
    </ContentLayout>
  );
};

export default Layout;
