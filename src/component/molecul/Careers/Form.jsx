import "./style.scss"

import Grid from "@mui/material/Unstable_Grid2";
import {Button} from "../../atom";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import React, {useRef, useState} from "react";

import BackupIcon from '@mui/icons-material/Backup';
import CloseIcon from '@mui/icons-material/Close';
import SendMessage from "../../../hooks/service";
import {Alert, Snackbar} from "@mui/material";


const Form = ()=> {

    const form = useRef()
    // for notification
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // drag and drop
    const [fileName, setFileName] = useState('')

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        setFileName(newFile.name)
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
        }
    }

    // const fileRemove = (file) => {
    //     const updatedList = [...fileList];
    //     updatedList.splice(fileList.indexOf(file), 1);
    //     setFileList(updatedList);
    // }


    // for form submit
    const submitHandler = (e) => {
        e.preventDefault();
        SendMessage({form})
        handleOpen()

    };


    return(
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
                                <input type="text" name="user_first_name" className="inp"  required/>
                            </Grid>
                            <Grid mobile={12} tablet={6} laptop={6} desktop={6} data-aos="fade-up" sx={{
                                textAlign:"start",
                                alignItems:"end",
                                width:"100%"
                            }}>
                                <label className="textBlack">Last Name</label><br/>
                                <input type="text" name="user_last_name" className="inp" required/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid mobile={12} tablet={8} laptop={8} desktop={8} data-aos="fade-up" sx={{
                        width:"100%",
                        textAlign:"start"
                    }}>
                        <label className="textBlack">Email Address</label><br/>
                        <input type="email" name="user_email" className="inp"  required/>
                    </Grid>
                    <Grid mobile={12} tablet={8} laptop={8} desktop={8} sx={{
                        justifyContent:"center",
                        width:"100%",
                        paddingLeft:"4px",
                        paddingRight:"0",
                    }}>
                        <div
                            ref={wrapperRef}
                            className="drop-file-input"
                            onDragEnter={onDragEnter}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                        >
                            <label htmlFor="input_file" >
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
                                            <span> Drag and drop your CV file here</span><br/>
                                        </div>
                                    </div>}
                            </label>
                            <input type="file" multiple={true} name="cv-file" className="input_file" onChange={onFileDrop}/>
                        </div>
                    </Grid>
                    <Grid mobile={12} tablet={8} laptop={8} desktop={8} sx={{
                        justifyContent:"center",
                        textAlign:"start"
                    }}>
                        <label className="textBlack">Message</label><br/>
                        <TextareaAutosize
                            maxRows={5}
                            minRows={5}
                            required
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

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} sx={{position:"sticky"}}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default  Form

