import Grid from "@mui/material/Unstable_Grid2";
import {Button, SubHeading} from "../../atom";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

import BackupIcon from '@mui/icons-material/Backup';
import CloseIcon from '@mui/icons-material/Close';

const Form = ()=> {
    const form = useRef();
    const [fileName, setFileName] = useState('')
    function handleFile(files) {
        console.log(files[0].name)
        setFileName(files[0].name)
    }
    // drag state
    const [dragActive, setDragActive] = React.useState(false);
    // ref
    const inputRef = React.useRef(null);

    // handle drag events
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files);
        }
    };

    // triggers when file is selected with click
    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files);
        }
    };




    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return(
        <div  data-aos="fade-up" className='section'>
            <form ref={form}  onDragEnter={handleDrag} onSubmit={sendEmail}>
                <Grid
                    container
                    direction="column"
                    component='section'
                    rowSpacing={{ mobile: 1, tablet: 2, laptop:3 , desktop: 3}}
                    alignItems="center"
                    justifyContent="center"
                    className="hero"
                    style={{
                        margin:'0',
                        padding:"10px",
                        width:"100%"
                    }}
                >
                    <Grid mobile={7} tablet={8} laptop={8} desktop={8} data-aos="fade-up" sx={{width:"100%"}}>
                        <Grid
                            container
                            direction="row"
                            columnSpacing={{ mobile: 1, tablet: 2, laptop:2 , desktop: 2}}
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{
                                padding: '0',
                            }}
                        >
                            <Grid mobile={12} tablet={6} laptop={6} desktop={6} data-aos="fade-up" sx={{textAlign: "start"}}>
                                <label className="textBlack">First Name</label><br/>
                                <input type="text" name="user_first_name" className="inp"/>
                            </Grid>
                            <Grid mobile={12} tablet={6} laptop={6} desktop={6} data-aos="fade-up" sx={{
                                textAlign:"start",
                                alignItems:"end",
                                width:"100%"
                            }}>
                                <label className="textBlack">Last Name</label><br/>
                                <input type="text" name="user_last_name" className="inp"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid mobile={12} tablet={8} laptop={8} desktop={8} data-aos="fade-up" sx={{
                        width:"100%",
                        textAlign:"start"
                    }}>
                        <label className="textBlack">Email Address</label><br/>
                        <input type="email" name="user_email" className="inp"/>
                    </Grid>
                    <Grid mobile={12} tablet={8} laptop={8} desktop={8} sx={{
                        justifyContent:"center",
                        width:"100%",
                        paddingLeft:"4px",
                        paddingRight:"0",
                    }}>
                        <input ref={inputRef} type="file" className="input-file-upload" name="user_cv" multiple={true} id="fileInput" onChange={handleChange} />
                        <label className="label-file-upload"  htmlFor="input-file-upload" for="fileInput" >
                            {fileName
                                ?
                                <div className='dragLabel'>
                                    <span>{fileName}</span>
                                    <button className='close' onClick={()=>{
                                        setFileName('')
                                    }
                                    }><CloseIcon sx={{color:"#7b7c7d"}}/></button>

                                </div>
                                :
                                <div>
                                    <div className='dragLabel'>
                                        <BackupIcon fontSize='large'sx={{
                                            marginRight:"2vw"
                                        }}/>
                                        <span> Drag and drop your CV file here or</span><br/>
                                    </div>
                                </div>}
                        </label>
                        { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
                    </Grid>
                    <Grid mobile={12} tablet={8} laptop={8} desktop={8} sx={{
                        justifyContent:"center",
                        textAlign:"start"
                    }}>
                        <label className="textBlack">Message</label><br/>
                        <TextareaAutosize
                            maxRows={5}
                            minRows={5}
                            aria-label="maximum height"
                            placeholder=""
                            defaultValue=""
                            name="message"
                            style={{
                                width: "100% ",
                                overflow: 'auto',
                                margin:"0",
                                padding: "0.375rem 0px 0.375rem 7px",
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

                    <Grid mobile={12} tablet={8} laptop={8} desktop={8}>
                        <Button type="submit" buttonSize={'medium'} buttonStyle={'primary--outline'} data-aos="fade-left">Send Message</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default  Form

