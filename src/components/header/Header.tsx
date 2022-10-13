import * as React from 'react';

import styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles.headerWrapper}>
      <p>logo</p>
      <p>switch</p>
    </div>
  );
}
