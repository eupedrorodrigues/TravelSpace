'use client';
import React,{ useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../Logo/Logo';
import styles  from './FormRegister.module.css';
import Button from '../../Button/Button';
import Options from '../FormsHeader/FormsHeader';

const FormRegister = () => {
  
  const router = useRouter();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const handleRegister = (e) => {
    if(!email || !password || !name || !country || !state || !city){
      alert('Error: Preencha todos os campos')
    }else{
      router.push('/pages/Login')
    }
  }


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
              <div className={styles.InputBox}>
                <input 
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    />
                    <label>País</label>
                </div>
              </div>
              <div className={styles.WrapperInputBox}>
                <div className={styles.InputXL}>
                    <input 
                        type='text'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                    <label>Estado</label>
                </div>
                <div className={styles.InputXR}>
                    <input 
                    type='text'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    />
                    <label>Cidade</label>
                </div>
              </div>
              <Button onCLick={handleRegister} marginTop="1rem" width="100%" height="2.3rem">Registre-se</Button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default FormRegister