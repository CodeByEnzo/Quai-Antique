import React from 'react'
import insta from "../../assets/images/insta.png"
import FB from "../../assets/images/FB.png"
import './footer.css'
import { NavLink } from 'react-router-dom'

const Footer = (props) => (

    <>
        <footer className='text-center footer'>
            <div className='row no-gutters align-items-center text-center p-3'>
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
                    <div className="nav-item mt-5 mt-sm-0">
                        <NavLink to="/Contact" className="nav-link fw-bold">Contact</NavLink>
                    </div>
                </div>
                <div className='col-6 col-md-3 p-3'>
                    <div className="nav-item mt-5 mt-sm-0">
                        <NavLink to="/RGPD" className="nav-link fw-bold">Politique de confidentialité</NavLink>
                    </div>
                </div>
            </div>
            <p className='text-center'>Le Quai Antique - Tout droits réservés</p>

        </footer>
    </>

)

export default Footer;