import React, { useState } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Home from "./Home/Home";
import Menu from './menu/Menu';
import { Route, Routes } from "react-router-dom";
import NotFound from '../../components/404/NotFound';
// import Test from './test';
import Contact from "./Contact/Contact";
import Footer from '../../components/Footer/Footer';
import RGPD from './RGPD/RGPD';
import Login from '../users/Login';
import Account from '../users/Account';
import Register from '../users/Register';
import Reservation from './Reservation/Reservation';
import Reserved from './Reservation/Reserved';
import IsInitialAuthenticated from '../../services/AuthApi';
import Auth from '../../contexts/Auth';
import AuthenticatedRoute from '../../components/AuthenticatedRoute';

function Site() {

    const [isAuthenticated, setIsAuthenticated] = useState(IsInitialAuthenticated());


    return (
        <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/Reservation' element={<Reservation />} />
                <Route path='/Reserved' element={<Reserved />} />
                
                <Route path='/menu' element={<Menu />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/RGPD' element={<RGPD />} />
                {/* <Route path='/test' element={<Test />} /> */}

                <Route
                    path='/Account'
                    element={
                        <AuthenticatedRoute>
                            <Account />
                        </AuthenticatedRoute>
                    }
                />
                
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </Auth.Provider >

    );
}


export default Site;