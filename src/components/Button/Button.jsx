'use client'
import { useState } from 'react';
import styles from './Button.module.css';

const Button = ({ onCLick, children, width, height, marginTop}) => {

  const [stylesresize, setStylesresize] = useState({
    width: width,
    height: height,
    marginTop: marginTop,
  });

  return (
    <>
        <button onClick={onCLick} style={stylesresize} className={styles.Button}>{children}</button>
    </>
  )
}

export default Button