import React from 'react';
import Logo from '../../Logo/Logo'
import styles from './FormLogin.module.css'
import Button from '../../Button/Button';
import Link from 'next/link';

const FormLogin = () => {
  return (

    <div className={styles.Body}>
        <header>
          <Logo/>
        </header>
        <div className={styles.wrapper}>
          <div className={styles.FormBox}>
            <div className={styles.Options}>
              <h6>Login</h6> {/* Criar redirecionamento */}
              <h6>Registre-se</h6> {/* Criar redirecionamento */}
            </div>
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
              <Button/>
            </form>
            <p className={styles.Forgot}>Esqueceu a senha?</p>
          </div>
        </div>
    </div>
  )
}

export default FormLogin