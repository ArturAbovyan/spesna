import { HeroSection, Features, About, Services, Testimonials} from "../../component/organism/Home/";
import {useEffect} from "react"

import Aos from 'aos';
import 'aos/dist/aos.css'; ;

function Home(){
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
            <div>
                <div data-aos="fade-up"><HeroSection/></div> 
                <div data-aos="fade-up"><Features/></div> 
                <div data-aos="fade-left"><About/></div> 
                <div data-aos="fade-up-right"><Services/></div> 
                <div data-aos="fade-up-left"><Testimonials/></div> 
            </div>
    )
}

export default Home