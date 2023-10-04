'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../Logo/Logo';
import styles from './FormLogin.module.css';
import Button from '../../Button/Button';
import Options from '../FormsHeader/FormsHeader';
import { useForm } from 'react-hook-form'

const FormLogin = () => {

  const router = useRouter();

  const handleLogin = (e) => {
     router.push('/pages/Services')
  }

  const {register, handleSubmit } = useForm()

  return (
    <div className={styles.Body}>
        <Logo/>
        <div className={styles.wrapper}>
          <div className={styles.FormBox}>
            <Options/>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className={styles.InputBox}>
                <input 
                  {...register("email")}
                  type='email'
                  required
                />
                <label>Email</label>
              </div>
              <div className={styles.InputBox}>
                <input 
                  {...register("password")}
                  type='password'
                  required
                />
                <label>Senha</label>
              </div>
              <input className={styles.inputSubmit} type='submit' value='Entrar'/>
            </form>
            <p className={styles.Forgot}>Esqueceu a senha?</p>
          </div>
        </div>
    </div>
  )
}

export default FormLogin