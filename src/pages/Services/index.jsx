import {Service as ServicesSec, Stats} from "../../component/organism/Services";
import {useEffect} from "react";
import Aos from "aos";
import {Testimonials, Services as ServicesHome} from "../../component/organism/Home";

function Services(){
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div>
            <div data-aos="fade-up"><ServicesSec/></div>
            <div data-aos="fade-up-right"><ServicesHome/></div>
            <div data-aos="fade-up"><Stats/></div>
            <div data-aos="fade-up-left"><Testimonials/></div>
        </div>
    )
}


export default Services