import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from '../containers/site/Home/Home'
import Menu from '../containers/site/menu/Menu';
import NotFound from '../components/404/NotFound';
// import Test from './test';
import Contact from "../containers/site/Contact/Contact";
import RGPD from '../containers/site/RGPD/RGPD';
import Login from '../containers/site/users/Login';
import Account from '../containers/site/users/Account';
import Register from '../containers/site/users/Register';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop/ScrollToTop';

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence initial={false} mode={"wait"}>
            <ScrollToTop></ScrollToTop>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />

                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register />} />

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