'use client'
import React from 'react';
import styles from './HomeInfo.modules.css'
import { useRouter } from 'next/navigation';

const HomeInfo = () => {
  const router = useRouter();
  return (
    <div className={styles.HomeInfo}>
        <div className='container'>
          <h1>BEM-VINDO AO ESPAÇO</h1>
          <p>Solicite seu orçamento para a viagem dos sonhos </p>
          <button onClick={() => router.push('/pages/Login')} className='SaibaMaisButton'>Saiba Mais</button>
        </div>
    </div>
  )
}

export default HomeInfo