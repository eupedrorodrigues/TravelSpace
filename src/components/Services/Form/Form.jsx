import React from 'react'
import styles from './Form.module.css'
import Button from '@/components/Button/Button'

const Form = () => {
  return (
    <div className={styles.fatherBox}>
        <div className={styles.textForm}>
          <div className={styles.text1}>
            <h1>Está precisando de ajuda?</h1>
            <p>Entre em contato com nós.</p>
            <p>Empresa Lider do mercado de viagens espaciais!</p>  
          </div>
          <div className={styles.text2}>
            <h1>Estamos localizados:</h1>
            <p>R. Guilherme Pinto, 114 - Graças, Recife - PE, 52011-210</p>
          </div>
        </div>
        <div className={styles.formBox}>
            <form className={styles.form}>
              <div className={styles.InputBox}>
                <input 
                  type='Email'
                  required 
                />
                <label>Email</label>
              </div>
              <div className={styles.InputBox}>
                <input 
                  type='Text'
                  required
                />
                <label>Descrição</label>
              </div>
              <div className={styles.InputBox}>
                <input 
                  type='Text'
                  required
                />
                <label>Assunto</label>

                <Button marginTop="3rem" width="30%" height="2.3rem">Enviar</Button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Form