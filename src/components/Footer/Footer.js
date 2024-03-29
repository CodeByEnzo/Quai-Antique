import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import insta from "../../assets/images/insta.png";
import FB from "../../assets/images/FB.png";
import './footer.css';
import HoursTab from '../HoursTab/HoursTab';
import { hostname } from '../../config';

const Footer = () => {

    const [companyInfo, setCompanyInfo] = useState({});


    useEffect(() => {
        fetch(`${hostname}front/companyInfo`)
            .then(response => response.json())
            .then(data => setCompanyInfo(data));
    }, []);

    return (
        <footer className='bg-dark'>
            <div className='row d-flex justify-content-center align-items-center text-center'>
                <div className='col-5 col-md-3 p-5'>
                    <NavLink to='/Contact' className={"nav-link fw-bold d-inline"}>
                        <hr />
                        Contact
                        <hr />
                    </NavLink>
                </div>
                <div className='col-5 col-md-3 p-5'>
                    <NavLink to='/RGPD' className={"nav-link fw-bold d-inline"}>
                        <hr />
                        Politique de confidentialité
                        <hr />
                    </NavLink>
                </div>
                <div className='col-5 col-md-3 p-5'>
                    <NavLink to='/Legal' className={"nav-link fw-bold d-inline"}>
                        <hr/>
                        Mentions légales
                        <hr />
                    </NavLink>
                </div>
                <div className='col-5 col-md-3 px-5 nav-link'>
                    <hr />
                    <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                        <img src={FB} alt='facebook1' className='socials px-3' />
                    </a>
                    <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
                        <img src={insta} alt='instagram' className='socials px-3' />
                    </a>
                    <hr />
                </div>
                <div className='col-12 col-md-5 p-5 text-start'>
                    <HoursTab />
                </div>
                <div className='col-12 col-md-5 p-1 text-center'>
                    <h1>{companyInfo[1]?.name}</h1>
                    <h5>{companyInfo[1]?.adress}</h5>
                    <h5>{companyInfo[1]?.phone}</h5>
                    <h5>{companyInfo[1]?.email}</h5>
                </div>
            </div>
            <p className='text-center m-0 p-3'>
                Le Quai Antique - Par Enzo Capitanio - Tout droits réservés
            </p>
        </footer>
    );
}

export default Footer;