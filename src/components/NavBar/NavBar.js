import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/LOGO-GOLD.png';
import Auth from '../../contexts/Auth';

const Navbar = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    const handleLogin = () => {
        setIsAuthenticated(false);
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg position-absolute z-3 w-100 ${navbarOpen ? 'bg-dark' : ''}`}>
                <div className="container-fluid p-2">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo du quai antique" width="70px" />
                    </a>
                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded={navbarOpen}
                        aria-label="Toggle navigation"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item mt-5 mt-sm-0 rounded">
                                <NavLink to="/" className="nav-link fw-bold text-light">
                                    Accueil
                                </NavLink>
                            </li>
                            <li className="nav-item mt-5 mt-sm-0 rounded">
                                <NavLink to="/menu" className="nav-link fw-bold text-light ">
                                    La carte
                                </NavLink>
                            </li>
                            <li className="nav-item mt-5 mt-sm-0 rounded">
                                <NavLink to="/Horaires" className="nav-link fw-bold text-light">Horaires</NavLink>
                            </li>
                            <li className="nav-item mt-5 mt-sm-0 rounded">
                                <NavLink to="/Contact" className="nav-link fw-bold text-light">Contact</NavLink>
                            </li>
                            {(!isAuthenticated && (
                                <>
                                    <li className="nav-item mt-5 mt-sm-0 rounded">
                                        <NavLink to="/Login" className="nav-link fw-bold text-light">Se connecter</NavLink>
                                    </li>
                                    <li className="nav-item mt-5 mt-sm-0 rounded">
                                        <NavLink to="/Register" className="nav-link fw-bold text-light">S'enregistrer</NavLink>
                                    </li>
                                </>
                            )) || (
                                    <>
                                        <li className="nav-item mt-5 mt-sm-0 rounded">
                                            <NavLink to="/Account" className="nav-link fw-bold text-light">Mon compte</NavLink>
                                        </li>
                                        <li className="mt-5 mt-sm-0">
                                            <button className="btn btn-danger" onClick={handleLogin}>Deconnexion</button>
                                        </li>
                                    </>
                                )}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;