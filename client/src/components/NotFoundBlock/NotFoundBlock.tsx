import React from 'react';
import styles from './styles.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено.
      </h1>
    </div>
  );
};

export default NotFoundBlock;
