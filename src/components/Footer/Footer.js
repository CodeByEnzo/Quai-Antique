import React from 'react'
import insta from "../../assets/images/insta.png"
import FB from "../../assets/images/FB.png"
import './footer.css'

const Footer = (props) => (

    <>
        <footer className='text-center'>Le Quai Antique - Tout droits réservés</footer>
        <div className='row no-gutters align-items-center text-center'>
            <div className='col-3'>
                <a href='www.facebook.com' className='d-block ' target="_blank">
                    <img src={FB} alt='facebook' className='socials' />
                </a>
            </div>
            <div className='col-3'>
                <a href='www.instagram.com' className='d-block ' target="_blank">
                    <img src={insta} alt='instagram' className='socials' />
                </a>
            </div>

        </div>

    </>

)

export default Footer;