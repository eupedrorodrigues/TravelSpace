'use client';
import styles from './Card.module.css'
import React, { useState } from "react";

const Card = ({backgroundColor}) => {

  const [stylesfilter, setStylesfilter] = useState({
    backgroundColor: backgroundColor,
  });


  return (
    <div className={styles.cardBox0}>
      <div className={styles.cardBox1}>
        <div style={stylesfilter} className={styles.filter}>
        <div className={styles.fade}><h1 className={styles.text}>Mars</h1></div>
        </div>
      </div>
      <div className={styles.cardBox2}>
        <div style={stylesfilter} className={styles.filter}>
        <div className={styles.fade}><h1 className={styles.text}>Moon</h1></div>
        </div>
      </div>
      <div className={styles.cardBox3}>
        <div style={stylesfilter} className={styles.filter}>
          <div className={styles.fade}><h1 className={styles.text}>Galaxy</h1></div>
        </div>
      </div>
    </div>
  )
}

export default Card