import '../style.scss'

import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'

import data from "../../../../assets/data/service/stats.json"

import Grid from '@mui/material/Unstable_Grid2';

import {SubHeading} from "../../../atom"
import LinkIcon from '@mui/icons-material/Link';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

function Stats() {
    useEffect(()=>{
        let number1 = document.querySelector('.number1'),
            numberTop1 = number1.getBoundingClientRect().top,
            start1 = +number1.innerHTML,
            end1 = +number1.dataset.max;
        let number2 = document.querySelector('.number2'),
            numberTop2 = number2.getBoundingClientRect().top,
            start2 = +number2.innerHTML,
            end2 = +number2.dataset.max;
        let number3 = document.querySelector('.number3'),
            numberTop3 = number3.getBoundingClientRect().top,
            start3 = +number3.innerHTML,
            end3 = +number3.dataset.max;
        let number4 = document.querySelector('.number4'),
            numberTop4 = number4.getBoundingClientRect().top,
            start4 = +number4.innerHTML,
            end4 = +number4.dataset.max;
        window.addEventListener('scroll', function onScroll() {
            if(window.pageYOffset >= numberTop1 - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                let interval1 = setInterval(function() {
                    number1.innerHTML = ++start1;
                    if(start1 == end1) {
                        clearInterval(interval1);
                    }
                }, 5);
                let interval2 = setInterval(function() {
                    number2.innerHTML = ++start2;
                    if(start2 == end2) {
                        clearInterval(interval2);
                    }
                }, 30);
                let interval3 = setInterval(function() {
                    number3.innerHTML = ++start3;
                    if(start3 == end3) {
                        clearInterval(interval3);
                    }
                }, 5);
                let interval4 = setInterval(function() {
                    number4.innerHTML = ++start4;
                    if(start4 == end4) {
                        clearInterval(interval4);
                    }
                }, 5);
            }
        });
    },[])
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
                    spacing={{ mobile: 1, tablet: 2, laptop:13 , desktop: 14}}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid mobile={8} tablet={5} laptop={3} desktop={3} className="rowDiv" data-aos="fade-up" >
                        <div className="number1 num" data-max={data.num1}>
                            {data.num1 - Math.trunc(data.num1/6) }
                        </div>
                    </Grid>
                    <Grid mobile={8} tablet={5} laptop={3} desktop={3} className="rowDiv" data-aos="fade-up" >
                        <div className="number2 num" data-max={data.num2}>
                            {data.num2 - Math.trunc(data.num2/2) }
                        </div>
                    </Grid>
                    <Grid mobile={8} tablet={5} laptop={3} desktop={3} className="rowDiv" data-aos="fade-up">
                        <div className="number3 num" data-max={data.num3}>
                            {data.num3 - Math.trunc(data.num3/2) }
                        </div>
                    </Grid>
                    <Grid mobile={8} tablet={5} laptop={3} desktop={3} className="rowDiv" data-aos="fade-up">
                        <div className="number4 num" data-max={data.num4}>
                            {data.num4 - Math.trunc(data.num4/6) }
                        </div>
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
}

export default Stats

