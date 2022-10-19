import {useEffect} from "react";
import {Testimonials} from "../../component/organism/Home/";
import {About as AboutFirst} from "../../component/organism/About/"
import {Careers as CareersSection} from "../../component/organism/Careers";
import 'aos/dist/aos.css';
import Aos from "aos";


function Careers(){
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div>
            <div data-aos="fade-up"><AboutFirst/></div>
            <div data-aos="fade-up-right"><CareersSection/></div>
            <div data-aos="fade-up-left"><Testimonials/></div>
        </div>
    )
}

export default Careers