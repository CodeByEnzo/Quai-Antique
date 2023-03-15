import React, { useState } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from '../../components/Footer/Footer';
import Auth from '../../contexts/Auth';
import IsInitialAuthenticated from '../../services/AuthApi';
import AnimatedRoutes from '../../components/AnimatedRoutes';


function Site() {

    const [isAuthenticated, setIsAuthenticated] = useState(IsInitialAuthenticated());

    return (
        <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <NavBar />
            <AnimatedRoutes className="AnimatedRoutes" />
            <Footer/>
        </Auth.Provider >
    );
}


export default Site;