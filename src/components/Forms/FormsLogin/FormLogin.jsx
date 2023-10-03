'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../Logo/Logo';
import styles from './FormLogin.module.css';
import Button from '../../Button/Button';
import Options from '../FormsHeader/FormsHeader';

const FormLogin = () => {

  const router = useRouter();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    if(!email || !password){
      alert('Error: Preencha todos os campos');
    }else{
      router.push('/pages/Home')
    }
  }


  return (
    <div className={styles.Body}>
        <Logo/>
        <div className={styles.wrapper}>
          <div className={styles.FormBox}>
            <Options/>
            <form>
              <div className={styles.InputBox}>
                <input 
                  type='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email</label>
              </div>
              <div className={styles.InputBox}>
                <input 
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Senha</label>
              </div>
              <Button onCLick={handleLogin} marginTop="1rem" width="100%" height="2.3rem">Entrar</Button>
            </form>
            <p className={styles.Forgot}>Esqueceu a senha?</p>
          </div>
        </div>
    </div>
  )
}

export default FormLogin