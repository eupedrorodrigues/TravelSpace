import FormRegister from '../../../components/Forms/FormsRegister/FormRegister';
import Background from '../../../components/Background/Background';

const Register = () => {
  return (
    <div>
      <FormRegister/>
      <Background top="0" backgroundColor=" rgba(30, 5, 64, 0.60)"/>
      <Background top="100vh" backgroundColor=" rgba(30, 5, 64, 0.60)"/>
    </div>
  )
}

export default Register