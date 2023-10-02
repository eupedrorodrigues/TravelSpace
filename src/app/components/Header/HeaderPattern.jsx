import React from 'react';
import styles from './HeaderPattern.modules.css'
import Logo from '../Logo/Logo';

import Link from 'next/link';
const HeaderPattern = () => {
  return (
    <div className={styles.HeaderPattern}>
        <header className='logo'>
         
            <div className='links'>
                <Link href='/pages/Login'>Home</Link>
                <Link href=''>Serviços</Link>
                <Link href=''>Sobre nós</Link>
                <button className='ContatoButton'>Contato</button>
            </div>
            
        </header>
    </div>
  )
}

export default HeaderPattern