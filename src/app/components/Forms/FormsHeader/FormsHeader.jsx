import React from 'react';
import styles from './FormsHeader.module.css';
import Link from 'next/link';

const FormsHeader = () => {
  return (
    <div className={styles.WrapperOptions}>
        <div className={styles.Options}>
            <Link href='/pages/Login' legacyBehavior>
                <a>Login</a>
            </Link>
            <Link  href=''>Registre-se</Link> 
        </div>
    </div>
  )
}

export default FormsHeader