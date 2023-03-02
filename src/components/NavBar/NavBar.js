import React, { useContext, useState, useEffect } from 'react';
import Auth from '../../contexts/Auth';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/LOGO-GOLD.png';


export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)
    const toggleMenuSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    const handleLogin = () => {
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
            if (window.innerWidth > 800) {
                setToggleMenu(false);
            }
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return (
        <div className={`${toggleMenu ? "showNav navContainer" : ""}`}>
            <NavLink to='/' className={(nav) => (nav.isActive ? "item position-absolute logo" : "item position-absolute logo")}>
                <li>
                    <img src={logo} alt="logo du quai antique" width="70px" />
                </li>
            </NavLink>
            <nav>
                {(toggleMenu || largeur > 800) && (
                    // <ul className=' fw-bold list '>
                    <ul className={`${toggleMenu ? "list" : "listClose"}`}>
                        <NavLink to='/' className={(nav) => (nav.isActive ? "active" : "item")}>
                            <li> Acceuil </li>
                        </NavLink >
                        <NavLink to='/menu' className={(nav) => (nav.isActive ? "active" : "item")}>
                            <li> La carte </li>
                        </NavLink >
                        <NavLink to='/Contact' className={(nav) => (nav.isActive ? "active" : "item")}>
                            <li> Contact </li>
                        </NavLink >
                        {(!isAuthenticated && (
                            <>
                                <NavLink to='/Login' className={(nav) => (nav.isActive ? "active" : "item")}>
                                    <li> Se connecter </li>
                                </NavLink >
                                <NavLink to='/Register' className={(nav) => (nav.isActive ? "active" : "item")}>
                                    <li> S'enregistrer </li>
                                </NavLink >
                            </>
                        )) || (
                                <>
                                    <NavLink to='/Account' className={(nav) => (nav.isActive ? "active" : "item")}>
                                        <li> Mon compte </li>
                                    </NavLink >
                                    <li className='mt-2'>
                                        <button className="btn btn-danger" onClick={handleLogin}>Deconnexion</button>
                                    </li>
                                </>
                            )}
                        <li>

                        </li>


                    </ul>
                )}
                <button onClick={toggleMenuSmallScreen} className='btn-toggle'>
                    <span className='burgerBar'></span>
                </button>
            </nav>
        </div>
    )
}
