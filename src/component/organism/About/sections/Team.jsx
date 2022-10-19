import '../style.scss'

import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'

import data from "../../../../assets/data/about/team.json"

import Grid from '@mui/material/Unstable_Grid2';

import {SubHeading} from "../../../atom" 

import avatar1 from '../../../../assets/avatar/1.webp';
import avatar2 from '../../../../assets/avatar/2.webp';
import avatar3 from '../../../../assets/avatar/3.webp';

function Team() {

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
                        <Grid mobile={8} tablet={7} laptop={3} desktop={3} className="rowDiv" data-aos="fade-right" >
                            <img src={avatar1} alt="Avatar 1" />
                            <div className='name'>{data.name1}</div>
                            <div className='paragraph'>{data.position_1}</div>
                        </Grid>
                        <Grid mobile={8} tablet={7} laptop={3} desktop={3} className="rowDiv" data-aos="fade-up" >
                            <img src={avatar2} alt="Avatar 2" />
                            <div className='name'>{data.name2}</div>
                            <div className='paragraph'>{data.position_2}</div>
                        </Grid>
                        <Grid mobile={8} tablet={7} laptop={3} desktop={3} className="rowDiv" data-aos="fade-right">
                            <img src={avatar3} alt="Avatar 3" />
                            <div className='name'>{data.name3}</div>
                            <div className='paragraph'>{data.position_3}</div>
                        </Grid>
                        <Grid mobile={8} tablet={7} laptop={3} desktop={3} className="rowDiv" data-aos="fade-left">
                            <img src={avatar3} alt="Avatar 3" />
                            <div className='name'>{data.name4}</div>
                            <div className='paragraph'>{data.position_4}</div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>    
    )
}

export default Team