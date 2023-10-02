import Background from '@/app/components/Background/Background'
import React from 'react'
import Logo from '@/app/components/Logo/Logo'
import HeaderPattern from '@/app/components/Header/HeaderPattern'
import HomeInfo from '@/app/components/HomeInfo/HomeInfo'
const HomeScreen = () => {
    return (
      <div>
          <HeaderPattern/>
          <HomeInfo/>
          <Background/>
      </div>
    )
  }
  
  export default HomeScreen