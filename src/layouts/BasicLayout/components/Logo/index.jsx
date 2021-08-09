import React from 'react';
import { Link } from 'ice';
import styles from './index.module.scss';
import { ResponsiveGrid } from '@alifd/next';

const {Cell}=ResponsiveGrid;

export default function Logo({ image, text, distext, url }) {
  return (
    <ResponsiveGrid className="logo">
      <Cell className={styles.logo} colSpan={12}>
        {image && <img src={image} alt="logo" />}
        <span className={styles.text}>{text}</span>
        <span className={styles.distext}>{distext}</span>
      </Cell>
    </ResponsiveGrid>
  );
}
