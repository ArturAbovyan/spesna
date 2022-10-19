import "../style.scss"

import expandMore from "../../../../assets/expandMore.png"

import data from "../../../../assets/data/careers/jobs.js"
import {useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Form from "../../../molecul/Careers/Form";




const Careers = () => {
    const [droped, setDroped] = useState()

    const handleDrop = (id) => {
        if (droped !== id) setDroped(id);
        else setDroped(null)
    }
    return(
        <div   className='section'>
            <Grid
                container
                component='section'
                direction="column"
                spacing={{ mobile: 0, tablet: 2, laptop:2 , desktop: 2}}
                alignItems="center"
                justifyContent="center"
                sx={{textAlign:"center"}}


            >
                {data.map((el, id)=>{
                    return(
                        <Grid mobile={10} tablet={10} laptop={9} desktop={7}  key={id}  className="careers">
                            <Grid
                                container
                                spacing={{ mobile: 0, tablet: 1, laptop:1 , desktop: 1}}
                                alignItems="center"
                                justifyContent="center"
                                direction="row"
                                style={{
                                    padding:"0"
                                }}
                            >
                                <Grid mobile={10} tablet={4} laptop={4} desktop={4} sx={{
                                    padding:"0",
                                    textAlign:"center",
                                    justifyContent:"center",
                                }}>
                                    <h1 className="jobType"> {el.type}</h1>
                                </Grid>
                                <Grid mobile={10} tablet={4} laptop={4} desktop={4} sx={{
                                    textAlign:"center",
                                    justifyContent:"center"
                                }}>
                                    <h3 className="jobName">{el.name}</h3>
                                </Grid>
                                <Grid mobile={10} tablet={4} laptop={4} desktop={4} sx={{
                                    textAlign:"center",
                                    justifyContent:"center"
                                }}>
                                    <button  className="moreBtn" data-aos="fade-left" onClick={()=>{
                                        handleDrop(id)
                                    }}><img src={expandMore} className="expandMore" alt="^"/></button>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                spacing={{ mobile: 1, tablet: 1, laptop:1 , desktop: 1}}
                                alignItems="center"
                                justifyContent="center"
                                style={{
                                    padding:"0 50px 0 50px"
                                }}
                            >
                                {droped === id ? <>
                                        <Grid mobile={10} tablet={10} laptop={10} desktop={10} dangerouslySetInnerHTML={{__html: el.description}} sx={{alignItems:"center", justifyContent:"center", textAlign:"center"}}/>
                                        <Form/>
                                    </>
                                    : null}
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}


export default  Careers