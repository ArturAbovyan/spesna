import '../style.scss'

import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'

import data from "../../../../assets/data/home/features.json"

import Grid from '@mui/material/Unstable_Grid2';

import {SubHeading} from "../../../atom" 
import LinkIcon from '@mui/icons-material/Link';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

function Features() {

    useEffect(()=>{
        Aos.init({
            once: true,
            duration:2000})
    },[])

    return(
        <div className='section'>
                <Grid 
                    container 
                    direction="column"
                    component='section'
                    spacing={{ mobile: 1, tablet: 5, laptop:4 , desktop: 8}} 
                    alignItems="center" 
                    justifyContent="center"
                    className='second'
                   
                >
                    <Grid mobile={8} tablet={8} laptop={4} desktop={5} className='rowDiv  aos-init aos-animate' data-aos="fade-down" >
                        <SubHeading>{data.sub_heading}</SubHeading>
                        <h1 className='heading'>{data.header}</h1>
                        <div className='paragraph'>{data.paragaraph}</div>
                    </Grid>
                    <Grid
                    container 
                    direction="row"
                    spacing={{ mobile: 1, tablet: 9, laptop:4 , desktop: 10}} 
                    justifyContent="center"
                    alignItems="center" 
                    >
                        <Grid mobile={8} tablet={7} laptop={3} desktop={2} className="rowDiv" data-aos="fade-right" >
                            <RocketLaunch sx={{
                                color:"#081158",
                                fontSize: '100px'
                            }}
                            />
                            <div className='serviceFont'>{data.marketing}</div>
                            <div className='paragraph'>{data.marketing_text}</div>
                        </Grid>
                        <Grid mobile={8} tablet={7} laptop={3} desktop={2} className="rowDiv" data-aos="fade-up" >
                            <LinkIcon sx={{
                                color:"#081158",
                                fontSize: '100px'
                                }}
                            />
                            <div className='serviceFont'>{data.digital}</div>
                            <div className='paragraph'>{data.digital_text}</div>
                        </Grid>
                        <Grid mobile={8} tablet={7} laptop={3} desktop={2} className="rowDiv" data-aos="fade-right">
                            <MilitaryTechIcon sx={{
                                color:"#081158",
                                fontSize: '100px'
                                }}
                            />
                            <div className='serviceFont'>{data.seo}</div>
                            <div className='paragraph'>{data.seo_text}</div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>    
    )
}

export default Features