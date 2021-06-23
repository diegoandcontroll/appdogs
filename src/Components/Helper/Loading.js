import React from 'react';
import styles from './Loading.module.css';
const Loading = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.loader} ${styles.ball}`}>
        <div className={`${styles.upper} ${styles.ball}`}></div>
        <div className={`${styles.right} ${styles.ball}`}></div>
        <div className={`${styles.lower} ${styles.ball}`} ></div>
        <div className={`${styles.left} ${styles.ball}`}></div>
      </div>
</section>
  )
}

export default Loading
