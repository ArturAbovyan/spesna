import { About as AboutSec, Testimonials} from "../../component/organism/Home/";
import {About as AboutFirst, Team} from "../../component/organism/About/"
import {useEffect} from "react"

import Aos from 'aos';
import 'aos/dist/aos.css'; ;

function About(){

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
        <div>
            <div data-aos="fade-up"><AboutFirst/></div> 
            <div data-aos="fade-left"><AboutSec/></div> 
            <div data-aos="fade-right"><Team/></div> 
            <div data-aos="fade-up-left"><Testimonials/></div> 
        </div>
    )
}

export default About