import React from 'react';
import Logo from '../../Logo/Logo';
import styles  from './FormRegister.module.css';
import Button from '../../Button/Button';
import Options from '../FormsHeader/FormsHeader';

const FormRegister = () => {
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
              <div className={styles.InputBox}>
                <input 
                  type='text'
                  required
                />
                <label>Name</label>
              </div>
              <div className={styles.WrapperInputBox}>
                <div className={styles.InputXL}>
                    <input 
                        type='date'
                        required
                    />
                </div>
                <div className={styles.InputXR}>
                    <input 
                    type='text'
                    required
                    />
                    <label>Profissão</label>
                </div>
              </div>
              <div className={styles.WrapperInputBox}>
                <div className={styles.InputXL}>
                    <input 
                        type='text'
                        required
                    />
                    <label>País</label>
                </div>
                <div className={styles.InputXR}>
                    <input 
                    type='text'
                    required
                    />
                    <label>Cidade</label>
                </div>
              </div>
              <Button marginTop="1rem" width="100%" height="2.3rem">Registre-se</Button>
            </form>
            <p className={styles.Forgot}>Esqueceu a senha?</p>
          </div>
        </div>
    </div>
  )
}

export default FormRegister