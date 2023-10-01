import React from 'react';
import styles from './FormsHeader.module.css';
import Link from 'next/link';

const FormsHeader = () => {
  return (
    <div className={styles.WrapperOptions}>
        <div className={styles.Options}>
            <Link href='/pages/Login' className={styles.OpOne}>Login</Link>
            <Link  href='/pages/Register' className={styles.OpTwo}>Registre-se</Link> 
        </div>
    </div>
  )
}

export default FormsHeader