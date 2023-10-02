'use client'
import styles from './Background.module.css'
import React, { useState } from "react";

const Background = ({backgroundColor, top}) => {

  const [stylestop, setStylestop] = useState({
    top: top,
  });

  const [stylesfilter, setStylesfilter] = useState({
    backgroundColor: backgroundColor,
  });

  return (
    <div style={stylestop} className={styles.Background}>
      <div style={stylesfilter} className={styles.BackFilter}></div>
    </div>
  );
}

export default Background