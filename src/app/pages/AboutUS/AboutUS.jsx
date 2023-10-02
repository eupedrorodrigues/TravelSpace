import HeaderPattern from "@/app/components/Header/HeaderPattern"
import Background from "@/app/components/Background/Background"
import AboutUsComponent from "@/app/components/AboutUs/AboutUsComponent"
import  CopRight  from "@/app/components/coprightComponent/CopRight"

const AboutUs = () =>{
    return (
        <div>
            <HeaderPattern/>
            <Background/>
            <AboutUsComponent/>
            <CopRight/>
        </div>
    )
}

export default AboutUs