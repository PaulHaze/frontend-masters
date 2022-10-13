import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';

export function Header() {
  return (
    <div className="w-full bg-white">
      <div className={styles.headerWrapper}>
        <Link href="/">
          <Image
            height={25}
            width={175}
            className="cursor-pointer"
            src="/logo-desktop.svg"
            alt="Frontend mentor logo"
          />
        </Link>
        <p>switch</p>
      </div>
    </div>
  );
}
