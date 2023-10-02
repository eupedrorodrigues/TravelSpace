'use client';
import Background from '@/components/Background/Background'
import Card from '@/components/Services/Cards/Card'
import Form from '@/components/Services/Form/Form';
import React from 'react'

const Services = () => {
  return (
    <div>
        <Card backgroundColor="rgba(48, 7, 89, 0.30)"/>
        <Form/> 
        <Background top="0" backgroundColor=" rgba(30, 5, 64, 0.60)"/>
        <Background top="100vh" backgroundColor=" rgba(13, 1, 38, 0.8)"/>
        
    </div>
  )
}

export default Services