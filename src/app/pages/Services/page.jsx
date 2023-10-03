'use client';
import Form from '../../../components/Services/Form/Form';
import Background from '../../../components/Background/Background';
import Card from '../../../components/Services/Cards/Card';
import HeaderPattern from '@/components/Header/HeaderPattern';

const Services = () => {
  return (
    <div>
      <HeaderPattern/>
      <Card backgroundColor="rgba(48, 7, 89, 0.30)"/>
      <Form top="100vh"/> 
      <Background top="0" backgroundColor=" rgba(30, 5, 64, 0.60)"/>
      <Background top="100vh" backgroundColor=" rgba(13, 1, 38, 0.8)"/>
    </div>
  )
}

export default Services