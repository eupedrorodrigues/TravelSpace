import React from 'react';
import Logo from '../../Logo/Logo'
import styles from './FormLogin.module.css'
import Button from '../../Button/Button';
import Options from '../FormsHeader/FormsHeader'

const FormLogin = () => {
  return (
    <div className={styles.Body}>
        <header>
          <Logo/>
        </header>
        <div className={styles.wrapper}>
          <div className={styles.FormBox}>
            <Options/>
            <form>
              <div className={styles.InputBox}>
                <input 
                  type='Email'
                  required 
                />
                <label>Email</label>
              </div>
              <div className={styles.InputBox}>
                <input 
                  type='password'
                  required
                />
                <label>Senha</label>
              </div>
              <Button marginTop="1rem" width="100%" height="2.3rem">Entrar</Button>
            </form>
            <p className={styles.Forgot}>Esqueceu a senha?</p>
          </div>
        </div>
    </div>
  )
}

export default FormLogin