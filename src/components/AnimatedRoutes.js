import React, { Component } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from '../containers/site/Home/Home'
import Menu from '../containers/site/menu/Menu';
import NotFound from '../components/404/NotFound';
// import Test from './test';
import Contact from "../containers/site/Contact/Contact";
import RGPD from '../containers/site/RGPD/RGPD';
import Login from '../containers/users/Login';
import Account from '../containers/users/Account';
import Register from '../containers/users/Register';
import Reservation from '../containers/site/Reservation/Reservation';
import Reserved from '../containers/site/Reservation/Reserved';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
    )
}
export default AnimatedRoutes