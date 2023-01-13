import React from "react";
import logo from "../../assets/images/LOGO-GOLD.png"
import { NavLink } from "react-router-dom";

const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-sm position-absolute z-3 w-100" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand " href="/">
                    <img src={logo} alt="logo du quai antique" width='70px' />
                </a>
                <button className="navbar-toggler bg-light text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-light" id="navbarNav">

                    <ul className="navbar-nav ms-auto text-end me-sm-5">
                        <li className="nav-item mt-5 mt-sm-0">
                            <NavLink to="/" className="nav-link fw-bold">Home</NavLink>
                        </li>
                        <li className="nav-item mt-5 mt-sm-0">
                            <NavLink to="/menu" className="nav-link fw-bold">Menu</NavLink>
                        </li>
                        <li className="nav-item mt-5 mt-sm-0">
                            <NavLink to="/Contact" className="nav-link fw-bold">Horaires</NavLink>
                        </li>
                        <li className="nav-item mt-5 mt-sm-0">
                            <NavLink to="/Contact" className="nav-link fw-bold">Contact</NavLink>
                        </li>
                        <li className="nav-item mt-5 mt-sm-0">
                            <a href="/" className="nav-link fw-bold">Log in</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </li> */}
                    </ul>

                </div>
            </div>
        </nav>


    </>
);

export default navbar;