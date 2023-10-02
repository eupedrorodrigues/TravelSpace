'use client'
import React from 'react'
import styles from './Button.module.css'
import { useState } from 'react'

const Button = ({children, width, height, marginTop}) => {

  const [stylesresize, setStylesresize] = useState({
    width: width,
    height: height,
    marginTop: marginTop,
  });

  return (
    <>
        <button style={stylesresize} className={styles.Button}>{children}</button>
    </>
  )
}

export default Button