import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from '../pages/Home/Home.js'
import Menu from '../pages/Menu/Menu.js';
import NotFound from '../pages/404/NotFound';
// import Test from './test';
import Contact from "../pages/Contact/Contact";
import RGPD from '../pages/RGPD/RGPD';
import Login from '../pages/Users/Login.js';
import ForgotPW from '../pages/Users/ForgotPW.js';
import Account from '../pages/Users/Account.js';
import Register from '../pages/Users/Register.js';
import AuthenticatedRoute from '../contexts/AuthenticatedRoute.js';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import ResetPW from '../pages/Users/ResetPW.js';

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <>
            <ScrollToTop />
            <AnimatePresence initial={false} mode={"wait"}>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />

                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/ForgotPW' element={<ForgotPW />} />
                    <Route path='/ResetPW' element={<ResetPW />} />

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
            </AnimatePresence>
        </>

    )
}
export default AnimatedRoutes