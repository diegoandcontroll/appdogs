import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <code>
        <span>{`--:{404 Page Not Found !}:--`}</span>
      </code>
    </div>
    
  )
}

export default NotFound
