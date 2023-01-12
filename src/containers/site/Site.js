import React, { Component } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Home from "./Home/Home";
import { Switch, Route } from "react-router-dom";


class Site extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Route path="/" render={() => <Home />} />
                <Route path="/contact" render={() => <h1>contact</h1>} />
            </>

        );
    }

}

export default Site;