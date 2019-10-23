import React from 'react';
import Icon from '../icon';
import { Columns } from '../../types/columns';
import styles from './icon-button.module.css';

interface ButtonProps {
  active: string;
  iconName: Columns;
  onClick: () => void;
}

const Button = ({ onClick, active, iconName }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${active}`}>
      <Icon name={iconName} />
      <span className={styles.title}>{`Column${iconName === 'one-column' ? '' : 's'}`}</span>
    </button>
  );
};

export default Button;
