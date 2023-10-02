import React from 'react';
import styles from './HomeInfo.modules.css'

const HomeInfo = () => {
  return (
    <div className={styles.HomeInfo}>

        <div className='container'>
        <h1>BEM-VINDO AO ESPAÇO</h1>
        <p>Solicite seu orçamento para a viagem dos sonhos </p>
        <button className='SaibaMaisButton'>Saiba Mais</button>
        </div>
    </div>
  )
}

export default HomeInfo