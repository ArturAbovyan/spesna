import '../style.scss'

import Grid from '@mui/material/Unstable_Grid2';

import {SubHeading} from "../../../atom" 
import LinkIcon from '@mui/icons-material/Link';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CampaignIcon from '@mui/icons-material/Campaign';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

import {useEffect} from "react"

import data from "../../../../assets/data/home/service.json"

import Aos from 'aos';
import 'aos/dist/aos.css'; ;

function Services() {
    useEffect(()=>{
        Aos.init({
            once: true,
            duration:20000})
    },[])

    const items =[
        {
            icon:  <VerifiedUserIcon sx={{
                color:"#081158",
                fontSize: '50px'
            }}/>,
            header: data.design,
            text: data.design_text
        },
        {
            icon:  <RocketLaunch sx={{
                color:"#081158",
                fontSize: '50px'
            }}/>,
            header: data.seo,
            text: data.seo_text 
        },
        {
            icon:  <CampaignIcon sx={{
                color:"#081158",
                fontSize: '50px'
            }}/>,
            header: data.internet,
            text: data.internet_text 
        },
        {
            icon:  <LinkIcon sx={{
                color:"#081158",
                fontSize: '50px'
            }}/>,
            header: data.backLinks,
            text: data.backLinks_text 
        },
        
        {
            icon:  <HistoryEduIcon sx={{
                color:"#081158",
                fontSize: '50px'
            }}/>,
            header: data.social,
            text: data.social_text 
        },
        {
            icon:  <MilitaryTechIcon sx={{
                color:"#081158",
                fontSize: '50px'
            }}/>,
            header: data.latest,
            text: data.latest_text 
        }
    ]
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
                sx={{margin:'0 0 auto 0', width:"100% !important",}}
            >
                <Grid mobile={8} tablet={8} laptop={4} desktop={5} className='rowDiv'>
                    <SubHeading>{data.sub_heading}</SubHeading>
                    <h1 className='heading'>{data.header}</h1>
                </Grid>
                    <Grid
                        container 
                        direction="row"
                        spacing={{ mobile: 1, tablet: 5, laptop:4 , desktop: 8}}
                        justifyContent="center"
                        alignItems="center" 
                    >
                        {items.map((el, index)=>(
                            <Grid
                            direction='column' 
                            item 
                            mobile={8} 
                            tablet={7} 
                            laptop={3} 
                            desktop={2} 
                            className="rowDiv" 
                            key={index+"_services"} wrap="nowrap" 
                            sx={{flexDirection:'row',  margin:'0 5% 2% 5%', border:'1px solid #efefef'}}
                            data-aos="fade-up"
                            >
                                
                                {el.icon}
                                <div>
                                    <div className='serviceFont'>{el.header}</div>
                                    <div className="paragraph">{el.text}</div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
            </Grid>
        </div>
    )
}

export default Services