import './assets/style.scss'

import {BrowserRouter, Routes, Route, Navigate, useParams} from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import React, {useEffect} from "react";
import Default from "./leyouts/Default/index.jsx";

function App() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <ThemeProvider
                theme={createTheme({
                    breakpoints: {
                        values: {
                            tablet: 768,
                            mobile: 420,
                            laptop: 1024,
                            desktop:1440
                        },
                    },
                })}
        >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default/>}>
          <Route exact index element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/services' element={<Services/>}></Route>
          <Route exact path='/careers' element={<Careers/>}></Route>
          <Route exact path='/contact-us' element={<ContactUs/>}></Route>
          <Route exact path='*' element={<Navigate to="/"/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
