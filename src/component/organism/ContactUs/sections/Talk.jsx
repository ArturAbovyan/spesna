import { useEffect, useState} from 'react';

import TextareaAutosize from "@mui/material/TextareaAutosize";
import  {Button , SubHeading}  from '../../../atom'

import React, { useRef } from 'react';

import Grid from '@mui/material/Unstable_Grid2';

import Aos from 'aos';
import 'aos/dist/aos.css'

import '../style.scss'

import data from "../../../../assets/data/contact/talk.json";
import {Alert, Snackbar} from "@mui/material";
import SendMessage from "../../../../hooks/service";


function Talk (){

    useEffect(()=>{
        Aos.init({duration:3000})
    },[])

    const form = useRef()

    const [open, setOpen] = useState(false);



    const submitHandler = (e) => {
        e.preventDefault();
       SendMessage({form});
       handleOpen()

    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <div  data-aos="fade-up" className='section'>
            <form ref={form} onSubmit={submitHandler}>
                <Grid
                    container
                    direction="column"
                    component='section'
                    rowSpacing={{ mobile: 1, tablet: 2, laptop:3 , desktop: 3}}
                    alignItems="center"
                    justifyContent="center"
                    className="hero"
                    style={{
                        margin:'0'
                    }}
                >
                    <Grid mobile={8} tablet={6} laptop={5} desktop={5} data-aos="fade-up">
                        <SubHeading>{data.sub_heading}</SubHeading>
                        <h1 className='heading'>{data.header}</h1>
                        <Grid
                            container
                            direction="row"
                            columnSpacing={{ mobile: 1, tablet: 2, laptop:2 , desktop: 2}}
                            justifyContent="space-round"
                        >
                            <Grid mobile={12} tablet={6} laptop={6} desktop={6} data-aos="fade-up">
                                <label className="textBlack">First Name</label><br/>
                                <input type="text" name="user_first_name" className="inpTalk" required/>
                            </Grid>
                            <Grid mobile={12} tablet={6} laptop={6} desktop={6} data-aos="fade-up" sx={{
                                alignItems:"end"
                            }}>
                                <label className="textBlack">Last Name</label><br/>
                                <input type="text" name="user_last_name" className="inpTalk" required/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid mobile={8} tablet={6} laptop={5} desktop={5} data-aos="fade-up" sx={{padding:"0"}}>
                        <label className="textBlack">Email Address</label><br/>
                        <input type="email" name="user_email" className="inpTalk"  required/>
                    </Grid>

                    <Grid mobile={8} tablet={6} laptop={5} desktop={5} sx={{justifyContent:"center"}}>
                        <label className="textBlack">Message</label><br/>
                        <TextareaAutosize
                            maxRows={5}
                            minRows={5}
                            aria-label="maximum height"
                            placeholder=""
                            defaultValue=""
                            name="message"
                            required
                            style={{
                                width: "100% ",
                                overflow: 'auto',
                                margin:"0",
                                padding: "0.375rem 0.2vw 0.375rem 0.2vw",
                                marginTop:"1vh",
                                fontWeight: "400",
                                lineHeight: "1.5",
                                color: "#212529",
                                backgroundColor: "#fff",
                                backgroundClip: "padding-box",
                                appearance: "none",
                                borderRadius: "0.25rem",
                                border: "2px solid #b9bec3",
                                fontFamily: '"Open Sans", sans-serif'
                            }}
                        />
                    </Grid>
                    <Grid mobile={8} tablet={6} laptop={5} desktop={5}>
                        <Button type="submit" buttonSize={'medium'} buttonStyle={'primary--outline'} data-aos="fade-left">Send Message</Button>
                    </Grid>
                </Grid>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} sx={{position:"sticky"}}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Talk

//
