import React from 'react';
import styles from './index.module.scss'

function Contact() {
  return (
    <div>
      <div className={styles.tab}>
          <div className={styles.text1}>Finally ,</div>
          <div className={styles.text3}>For any question , please feel free to <a className={styles.text2} href="mailto:1342230493@qq.com"> get in touch.</a></div>
        </div>
    </div>
  );
}

export default Contact;
