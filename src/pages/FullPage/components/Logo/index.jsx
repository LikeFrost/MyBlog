import React from 'react';
import { Link } from 'ice';
import styles from './index.module.scss';

export default function Logo({ image, text, distext, url }) {
  return (
    <div className="logo">
      <div className={styles.logo}>
        {image && <img src={image} alt="logo" />}
        <span className={styles.text}>{text}</span>
        <span className={styles.distext}>{distext}</span>
      </div>
    </div>
  );
}
