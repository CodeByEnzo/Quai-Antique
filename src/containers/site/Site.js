import React, { Component } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Home from "./Home/Home";
import Menu from './menu/Menu';
import { Route, Routes } from "react-router-dom";
import NotFound from '../../components/404/NotFound';
import Test from './test';
import Contact from "./Contact/Contact";
import Footer from '../../components/Footer/Footer';
import RGPD from './RGPD/RGPD';
import Login from '../users/Login';
import Account from '../users/Account';
import Profile from '../users/Profile';
import Register from '../users/Register';
import Reservation from './Reservation/Reservation';


class Site extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/Login' element={<Login />} />
                    <Route path='/Account' element={<Account />} />
                    <Route path='/Profile' element={<Profile />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/Reservation' element={<Reservation />} />

                    <Route path='/menu' element={<Menu />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/RGPD' element={<RGPD />} />
                    <Route path='/test' element={<Test />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />

            </div>

        );
    }

}

export default Site;