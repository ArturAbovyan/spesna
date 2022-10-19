import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Grid from '@mui/material/Unstable_Grid2';

import data from "../../../../assets/data/home/testimonials.json"

import {SubHeading} from "../../../atom" 

import avatar1 from '../../../../assets/avatar/1.webp';
import avatar2 from '../../../../assets/avatar/2.webp';
import avatar3 from '../../../../assets/avatar/3.webp';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.scss";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Testimonials() {

    const [elCount, setElCount] = useState(()=>{
        return window.innerWidth > 1024 
            ? 3
            : window.innerWidth >= 768 
            ? 2
            : 1 

    })


    const  handleResize = (event) => {
        const width = event.target.innerWidth
        if(width > 1024){
            setElCount(3)
        }
        else if(width > 768 && width<=1024){
            setElCount(2)
        }
        else{
            setElCount(1)
        }
    }


    useEffect(()=>{
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <div className="testimonials section">
             <Grid 
                    container 
                    direction="column"
                    component='section'
                    spacing={{ mobile: 1, tablet: 5, laptop:4 , desktop: 8}} 
                    alignItems="center" 
                    justifyContent="center"
                    className='second'
                    sx={{
                        margin:"0",
                        padding:"0",
                      
                    }}
                   
                >
                    <Grid mobile={8} tablet={8} laptop={4} desktop={5} className='rowDiv'>
                        <SubHeading>{data.sub_heading}</SubHeading>
                        <h1 className='heading'>{data.header}</h1>
                        <div className='paragraph'>{data.paragaraph}</div>
                    </Grid>
                    <Grid mobile={12} tablet={12} laptop={10} desktop={10} >
                        <Swiper
                            
                            slidesPerView={elCount}
                            spaceBetween={1}
                            slidesPerGroup={elCount}
                            loop={true}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="sliderDiv">
                                    <div className="paragraph comment">
                                        {data.slide1.comment}
                                    </div>

                                    <div className="userInfo">
                                        
                                        <img src={avatar1} alt="avatar" className="avatar"/>
                                        
                                        <div className="textInfo">
                                            <div>
                                                {data.slide1.name}
                                            </div>
                                            <div className='workInfo'>
                                                {data.slide1.position} 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sliderDiv">
                                    <div className="paragraph comment">
                                        {data.slide2.comment}
                                    </div>
                                    <div className="userInfo">
                                    <img src={avatar2} alt="avatar" className="avatar"/>
                                        <div className="textInfo">
                                            <div>
                                                {data.slide2.name}
                                            </div>
                                            <div className='workInfo'>
                                                {data.slide2.position}  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sliderDiv">
                                    <div className="paragraph comment">
                                        {data.slide3.comment}
                                    </div>
                                    <div className="userInfo">
                                    <img src={avatar3} alt="avatar" className="avatar"/>
                                        <div className="textInfo">
                                            <div>
                                                {data.slide3.name}
                                            </div>
                                            <div className='workInfo'>
                                                {data.slide3.position}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sliderDiv">
                                    <div className="paragraph comment">
                                        {data.slide4.comment}
                                    </div>
                                    <div className="userInfo">
                                    <img src={avatar1} alt="avatar" className="avatar"/>
                                        <div className="textInfo">
                                            <div>
                                                {data.slide4.name}
                                            </div>
                                            <div className='workInfo'>
                                                {data.slide4.position} 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sliderDiv">
                                    <div className="paragraph comment">
                                        {data.slide5.comment}
                                    </div>
                                    <div className="userInfo">
                                            <img src={avatar2} alt="avatar" className="avatar" />
                                        <div className="textInfo">
                                            <div>
                                                {data.slide5.name}
                                            </div>
                                            <div className='workInfo'>
                                                {data.slide5.position}  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sliderDiv">
                                    <div className="paragraph comment">
                                        {data.slide6.comment}
                                    </div>
                                    <div className="userInfo">
                                    <img src={avatar3} alt="avatar" className="avatar"/>
                                        <div className="textInfo">
                                            <div>
                                                {data.slide6.name}
                                            </div>
                                            <div className='workInfo'>
                                                {data.slide6.position} 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sliderDiv">
                                    <div className="paragraph comment">
                                        {data.slide7.comment}
                                    </div>
                                    <div className="userInfo">
                                    <img src={avatar1} alt="avatar" className="avatar"/>
                                        <div className="textInfo">
                                            <div>
                                                {data.slide7.name}
                                            </div>
                                            <div className='workInfo'>
                                                {data.slide7.position}  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sliderDiv">
                                    <div className="paragraph comment">
                                        {data.slide8.comment}
                                    </div>
                                    <div className="userInfo">
                                            <img src={avatar2} alt="avatar"  className="avatar"/>
                                        <div className="textInfo">
                                            <div>
                                                {data.slide8.name}
                                            </div>
                                            <div className='workInfo'>
                                                {data.slide8.position} 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sliderDiv">
                                    <div className="paragraph comment">
                                        {data.slide9.comment}
                                    </div>
                                    <div className="userInfo">
                                        <img src={avatar3} alt="avatar"  className="avatar"/>
                                        <div className="textInfo">
                                            <div>
                                                {data.slide9.name}
                                            </div>
                                            <div className='workInfo'>
                                                {data.slide9.position}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Grid>
                </Grid>
            
            
    </div>
  );
}