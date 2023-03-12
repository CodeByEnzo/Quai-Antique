import React from 'react'
import { NavLink } from 'react-router-dom'
import insta from "../../assets/images/insta.png"
import FB from "../../assets/images/FB.png"
import './footer.css'
import HoursTab from '../HoursTab/HoursTab'
import { motion } from 'framer-motion';

const Footer = (props) => (

    <>
        <motion.footer className='text-center footer'
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeOut" }}>
            <div className='row no-gutters d-flex align-items-center justify-content-center text-center p-3'>
                <div className='col-6 col-md-3 p-3'>
                    <a href='https://www.facebook.com' className='d-block ' target="_blank">
                        <img src={FB} alt='facebook' className='socials' />
                    </a>
                </div>
                <div className='col-6 col-md-3 p-3'>
                    <a href='https://www.instagram.com' className='d-block ' target="_blank">
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
                <HoursTab></HoursTab>
            </div>
            <p className='text-center'>Le Quai Antique - Tout droits réservés</p>

        </motion.footer>
    </>

)

export default Footer;