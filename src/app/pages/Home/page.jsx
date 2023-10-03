import Background from "../../../components/Background/Background";
import HeaderPattern from '../../../components/Header/HeaderPattern';
import HomeInfo from '../../../components/HomeInfo/HomeInfo';

const HomeScreen = () => {
    return (
      <div>
          <HeaderPattern/>
          <HomeInfo/>
          <Background top="0" backgroundColor=" rgba(30, 5, 64, 0.60)"/>
      </div>
    )
  }
  
  export default HomeScreen