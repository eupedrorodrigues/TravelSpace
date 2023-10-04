import styles from './HeaderPattern.modules.css'

import Link from 'next/link';
const HeaderPattern = () => {
  return (
    <div className={styles.HeaderPattern}>
        <header className='logo'>
         
            <div className='links'>
                <Link href='/pages/Home'>Home</Link>
                <Link href='/pages/Services'>Serviços</Link>
                <Link href='/pages/AboutUS'>Sobre nós</Link>
                <Link href='/pages/Services/Contact' className='ContatoButton'>Contato</Link>
            </div>
            
        </header>
    </div>
  )
}

export default HeaderPattern