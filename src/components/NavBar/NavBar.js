import React from "react";
import logo from "../../assets/images/LOGO-GOLD.png"
import { NavLink } from "react-router-dom";

const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-md position-absolute z-3 w-100" data-bs-theme="dark">
            <div className="container-fluid p-2">
                <a className="navbar-brand " href="/">
                    <img src={logo} alt="logo du quai antique" width='70px' />
                </a>
                <button className="navbar-toggler bg-light text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-light" id="navbarNav">

                    <ul className="navbar-nav ms-auto text-end me-sm-5">
                        <li className="nav-item mt-5 mt-sm-0">
                            <NavLink to="/" className="nav-link fw-bold">Accueil</NavLink>
                        </li>
                        <li className="nav-item mt-5 mt-sm-0">
                            <NavLink to="/menu" className="nav-link fw-bold">La carte</NavLink>
                        </li>
                        <li className="nav-item mt-5 mt-sm-0">
                            <NavLink to="/Horaires" className="nav-link fw-bold">Horaires</NavLink>
                        </li>
                        <li className="nav-item mt-5 mt-sm-0">
                            <NavLink to="/Contact" className="nav-link fw-bold">Contact</NavLink>
                        </li>
                        <li className="nav-item mt-5 mt-sm-0">
                            <NavLink to="/Login" className="nav-link fw-bold">Se connecter</NavLink>
                        </li>
                        <li className="nav-item mt-5 mt-sm-0">
                            <NavLink to="/Register" className="nav-link fw-bold">S'enregistrer</NavLink>
                        </li>
                        <li className="nav-item mt-5 mt-sm-0">
                            <NavLink to="/Account" className="nav-link fw-bold">Mon compte</NavLink>
                        </li>
                        <li className="nav-item mt-5 mt-sm-0">
                            <button className="btn btn-danger">Deconnexion</button>
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