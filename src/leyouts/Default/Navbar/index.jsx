import { useNavigate, Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import './style.scss'
import {useEffect, useState} from "react";

import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export function Navbar() {
    const [navClass, setNavClass] = useState('navBar');
    const [linkClass, setLinkClass] = useState('navLink')

    const [navType, setNavType] = useState(()=>{
        if(window.innerWidth > 768){
            return "desktop"
        }
        else return  "mobile"
    })

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const setClassHandler = (e)=>{
        if(window.scrollY >= 10){
            setNavClass("scrolled");
            setLinkClass("linkScrolled")
        }
        else if (window.scrollY < 10){
            setNavClass("navBar");
            setLinkClass('navLink')
        }
    }
    const setNavTypeHandler = (e) => {
        if(window.innerWidth <= 768){
            setNavType('mobile')
        }
        else {
            setNavType('desktop')
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", setClassHandler)
        window.addEventListener("resize",setNavTypeHandler)

    }, [])
    const navigate = useNavigate()
    if (navType === "desktop"){
        return (
            <div className={navClass}>
                <img src={logo} alt="logo" id='logo' onClick={()=>navigate('/')}/>
                <div className='navLinkDiv'>
                    <Link to='/about'
                        className={linkClass}
                        id='about'
                    >About</Link>
                    <Link to='/services'
                        className={linkClass}
                        id='blog'
                    >Services</Link>
                    <Link to='/careers'
                        className={linkClass}
                        id='careers'
                    >Careers</Link>
                    <Link to='/contact-us'
                        className={linkClass}
                        id='contact-us'
                    >Contact Us</Link>
                </div>
            </div>
        )
    }
    else return(
        <div className={navClass}>
            <img src={logo} alt="logo" id='logo' onClick={()=>navigate('/')}/>
            <div className='navLinkDiv'>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon fontSize={"large"} sx={{
                        color:"rgba(0, 0, 0, 0.7);"
                    }}/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to='/about'
                              className={linkClass}
                        >About</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to='/services'
                              className={linkClass}
                              id='blog'
                        >Services</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to='/careers'
                              className={linkClass}
                              id='careers'
                        >Careers</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to='/contact-us'
                              className={linkClass}
                              id='contact-us'
                        >Contact Us</Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )


}