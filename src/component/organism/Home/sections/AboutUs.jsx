import Grid from '@mui/material/Unstable_Grid2';

import aboutPicture from '../../../../assets/aboutPicture.webp'
import  {Button , SubHeading}  from '../../../atom'
import '../style.scss'

import {useEffect} from "react"

import data from "../../../../assets/data/home/about.json"

import Aos from 'aos';
import 'aos/dist/aos.css';
import {useNavigate} from "react-router-dom"; ;

function About() {
    const navigate = useNavigate();

    useEffect(()=>{
        Aos.init({
            once: true,
            duration:2000})
    },[])
    return (
        <div className="section">    
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
                <Grid mobile={8} tablet={8} laptop={6} desktop={5}>
                    <img src={aboutPicture} alt="About Div Picture" className='aboutPicture' data-aos="fade-left"/>
                </Grid>
                <Grid mobile={8} tablet={8} laptop={4} desktop={5}>
                    <div className='heroDiv'>
                        <SubHeading>{data.sub_heading}</SubHeading>
                        <h1 className='heading'>{data.header}</h1>
                        <p className='paragraph'>{data.paragaraph}</p>
                        <ul>
                            <li className="paragraph checkedLi">{data.li1}</li>
                            <li className="paragraph checkedLi">{data.li2}</li>
                            <li className="paragraph checkedLi">{data.li3}</li>
                        </ul>
                        <Button buttonSize={'medium'} buttonStyle={'primary--outline'} className="aboutBtn" onClick={()=>{
                            navigate('/about')
                        }}>{data.button} </Button>
                    </div>
                </Grid>
            </Grid>
            </div>    
    );
}


export default About