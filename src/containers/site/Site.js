import React, { Component } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";

class Site extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/Contact' element={<Contact />} />          */}
                </Routes>

            </div>

        );
    }

}

export default Site;