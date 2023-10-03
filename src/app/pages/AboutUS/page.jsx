import HeaderPattern from "../../../components/Header/HeaderPattern";
import Background from "../../../components/Background/Background";
import AboutUsComponent from "../../../components/AboutUs/AboutUsComponent";
import CopRight from "../../../components/coprightComponent/CopRight";

const AboutUs = () =>{
    return (
        <div>
            <HeaderPattern/>
            <AboutUsComponent/>
            <Background top="0" backgroundColor=" rgba(30, 5, 64, 0.60)"/>
            <Background top="100vh" backgroundColor=" rgba(30, 5, 64, 0.60)"/>
            <CopRight/>
        </div>
    )
}

export default AboutUs