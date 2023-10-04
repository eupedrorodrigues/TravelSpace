import Background from '../../../components/Background/Background';
import FormLogin from '../../../components/Forms/FormsLogin/FormLogin';
import React from 'react'

const Login = () => {

  return (
    <div>
        <FormLogin/>
        <Background top="0" backgroundColor=" rgba(30, 5, 64, 0.60)"/>
    </div>
  )
}

export default Login