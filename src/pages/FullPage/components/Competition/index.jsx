import React from 'react';
import styles from './index.module.scss'
import pic_win from '/picture/win.png'

function Competition() {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.title}>Competition</div>
      </div>
      <img className={styles.img} src={pic_win} alt='pic_win'/>
    </>
  );
}

export default Competition;
