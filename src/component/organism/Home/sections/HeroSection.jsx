import Grid from '@mui/material/Unstable_Grid2';

import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'

import data from "../../../../assets/data/home/hero.json"
import heroPicture from '../../../../assets/heroPicture.png'
import  {Button , SubHeading}  from '../../../atom'
import '../style.scss'
import {useNavigate} from "react-router-dom";

function HeroSection() {
    const navigate = useNavigate();

    useEffect(()=>{
        Aos.init({
            once: true,
            duration:2000})
    },[])
    return (
        <div  data-aos="fade-up" className='section general'>
            <Grid 
                container 
                component='section'
                spacing={{ mobile: 1, tablet: 2, laptop:8 , desktop: 8}} 
                alignItems="center" 
                justifyContent="center"
                className="hero"
                style={{
                    margin:'0'
                }}
            >
                <Grid mobile={10} tablet={8} laptop={5} desktop={5} data-aos="fade-up">
                    <div className='heroDiv'>
                        <SubHeading>{data.sub_heading}</SubHeading>
                        <h1 className='heading'>{data.header} </h1>
                        <p className='paragraph'>{data.paragaraph}</p>
                        <div className="btnDiv">
                            <Button buttonSize={'medium'} buttonStyle={'primary--outline'} data-aos="fade-left" onClick={()=>{
                                navigate('/services')
                            }}>{data.button1}</Button>
                            <Button buttonSize={'medium'} buttonStyle={'normal--outline'}  data-aos="fade-right" style={{marginLeft:"2vw"}} onClick={()=>{
                                navigate('/contact-us')
                            }}>{data.button2}</Button>
                        </div>
                    </div>
                </Grid>
                <Grid mobile={8} tablet={8} laptop={5} desktop={5}>
                    <img src={heroPicture} alt="Hero Picture" className='heroPicture' data-aos="fade-up"/>
                </Grid>
            </Grid>
        </div>
    );
}


export default HeroSection