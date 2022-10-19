import './style.scss'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { Link } from 'react-router-dom'
function Footer() {
    return(
        <ThemeProvider
            theme={createTheme({
                breakpoints: {
                    values: {
                        tablet: 768,
                        mobile: 420,
                        laptop: 1038,
                        desktop:1440
                    },
                },
            })}
            >
                <Grid 
                    container 
                    spacing={{ mobile: 1, tablet: 2, laptop:8 , desktop: 8}} 
                    justifyContent="center"
                    className="footer"
                    style={{
                        margin:'0'
                    }}
                >
                    <Grid mobile={8} tablet={6} laptop={4} desktop={3}>
                        <h3>
                            About Cololib
                        </h3>
                        <p>
                        Far far away, behind the word mountains, 
                        far from the countries Vokalia and Consonantia, 
                        there live the blind texts.
                        </p>
                    </Grid>
                    <Grid mobile={8} tablet={4} laptop={2} desktop={3}>
                        <h3>
                            Pages
                        </h3>

                        <Link to="" className='footerLink'>Blog</Link><br/>
                        <Link to="" className='footerLink'>About</Link><br/>
                        <Link to="" className='footerLink'>Contact</Link>
                    </Grid>
                    <Grid mobile={8} tablet={6} laptop={2} desktop={3}>
                        <h3>
                            Resources
                        </h3>
                        <Link to="" className='footerLink'>Blog</Link><br/>
                        <Link to="" className='footerLink'>About</Link><br/>
                        <Link to="" className='footerLink'>Contact</Link>
                    </Grid>
                    <Grid mobile={8} tablet={4} laptop={4} desktop={3}>
                        <h3 className='fooHeading'>
                            Contact
                        </h3>
                        <ul className="contact">
                            <li className="email">info@Cololib</li>
                            <li className="phone">+1 222 212 3819</li>
                            <li className="address">43 Raymouth Rd. Baltemoer, London 3910</li>
                        </ul>
                    </Grid>
                </Grid>
        </ThemeProvider>
    )
}

export default Footer

{/* <div className='footer'>
            <div className='footerDiv first'>
                <h3 className='heading'>
                    About Cololib
                </h3>
                <p>
                Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, 
                there live the blind texts.
                </p>
            </div>
            <div className='footerDiv'>
                <h3 className='heading'>
                    Pages
                </h3>

                <Link to="" className='footerLink'>Blog</Link><br/>
                <Link to="" className='footerLink'>About</Link><br/>
                <Link to="" className='footerLink'>Contact</Link>
            </div>
            <div className='footerDiv'>
                <h3 className='heading'>
                    Resources
                </h3>
                <Link to="" className='footerLink'>Blog</Link><br/>
                <Link to="" className='footerLink'>About</Link><br/>
                <Link to="" className='footerLink'>Contact</Link>
            </div>
            <div className='footerDiv contactDiv'>
                <h3 className='heading'>
                    Contact
                </h3>
                <ul className="contact">
                    <li className="email">info@Cololib</li>
                    <li className="phone">+1 222 212 3819</li>
                    <li className="address">43 Raymouth Rd. Baltemoer, London 3910</li>
                </ul>
            </div>
        </div> */}