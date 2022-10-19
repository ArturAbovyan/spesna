import { Navbar } from "./Navbar";
import Footer from "./Footer";
import {Outlet, useParams} from "react-router-dom"
import {useEffect} from "react";

function Default(){

    const routeParams = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [routeParams])

    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div> 
    )
}

export default Default