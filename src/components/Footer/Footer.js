import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import insta from "../../assets/images/insta.png"
import FB from "../../assets/images/FB.png"
import './footer.css'
import HoursTab from '../HoursTab/HoursTab'

const Footer = () => {

    const [companyInfo, setCompanyInfo] = useState({});


    useEffect(() => {
        fetch('http://localhost/SERVEURQUAI/front/companyInfo')
            .then(response => response.json())
            .then(data => setCompanyInfo(data));
    }, []);

    return (
            <footer className='bg-dark'>
                <div className='row p-3 d-flex justify-content-center align-items-center'>
                    <div className='col-6 col-md-3 p-3'>
                    <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                            <img src={FB} alt='facebook' className='socials' />
                        </a>
                    </div>
                    <div className='col-6 col-md-3 p-3'>
                    <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt='instagram' className='socials' />
                        </a>
                    </div>
                    <div className='col-6 col-md-3 p-3'>
                        <NavLink to='/Contact' className={(nav) => (nav.isActive ? "nav-link fw-bold d-inline" : "nav-link fw-bold d-inline")}>
                            Contact
                        </NavLink>
                    </div>
                    <div className='col-6 col-md-3 p-3'>
                        <NavLink to='/RGPD' className={(nav) => (nav.isActive ? "nav-link fw-bold d-inline" : "nav-link fw-bold d-inline")}>
                            Politique de confidentialité
                        </NavLink>
                    </div>
                    <div className='col-12 col-md-6 p-3'>
                        <HoursTab />
                    </div>
                    <div className='col-12 col-md-6 p-3'>
                        <h1>{companyInfo[1]?.name}</h1>
                        <h5>{companyInfo[1]?.adress}</h5>
                        <h5>{companyInfo[1]?.phone}</h5>
                        <h5>{companyInfo[1]?.email}</h5>

                    </div>
                </div>
                <p className='text-center'>Le Quai Antique - Par Enzo Capitanio - Tout droits réservés</p>
            </footer>
    );
}

export default Footer;