import React, { Component } from 'react';
import "./Home.css";
import { hostname } from '../../config';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';


class Home extends Component {
    //Display pictures with their descriptions
    state = {
        gallerys: [],
        bannerData: {},
    };

    componentDidMount() {
        // Fetch for the gallery
        fetch(`${hostname}/front/gallerys`)
            .then(response => response.json())
            .then(data => this.setState({ gallerys: data }))
            .catch(error => console.error('Erreur lors de la récupération des données de la galerie:', error));

        // Fetch for the banner
        fetch(`${hostname}/front/banner`)
            .then(response => response.json())
            .then(data => this.setState({ bannerData: data }))
            .catch(error => console.error('Erreur lors de la récupération des données de la bannière:', error));
        console.log(this.state.bannerData)
    }


    render() {
        const isLoggedIn = !!localStorage.getItem('email');
        const { bannerData } = this.state;
        return (
            <motion.main
                id='Home'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* <div className='bg-dark container-fluid d-flex flex-column justify-content-center align-items-center p-5 mt-5'>

                    <div>
                        <h1>{bannerData.Name}</h1>
                        <p>{bannerData.AltText}</p>
                        <p>{bannerData.Image}</p>
                        <img src={`${bannerData.Image}`} alt={bannerData.AltText} />
                    </div>
                </div> */}
                <motion.div
                    className='banner'
                    initial={{ x: "100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img className='img-banner' src={`${bannerData.Image}`} alt={bannerData.AltText} />
                    <div className='text-banner'>
                        <h1 className='title-banner'>Le Quai Antique</h1>
                        <p className='under-text-banner'>Spécialités savoyardes </p>
                    </div>
                </motion.div>
                {/* Div will show only if user is not connected */}
                {!isLoggedIn &&
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className='container-fluid d-flex flex-column justify-content-center align-items-center p-5'>
                        <p className='text-dark'>Pas encore de compte ? Crée un compte et résèrve une table dès maintenant !</p>
                        <button className='book-btn'>
                            <NavLink to="/register" className="text-light text-decoration-none">Créer un compte</NavLink>
                        </button>

                    </motion.div>
                }
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className='home-content d-flex justify-content-center'>
                    <div className='card-container row d-flex flex-wrap justify-content-around p-5'>
                        {Object
                            .values(this.state.gallerys)
                            .filter(item => item.gallery_img && item.gallery_img !== '')
                            .map((item, index) => {
                                return (
                                    <div key={item.gallery_id} className={` row col-12 col-xl-10 mt-5 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                                        <div className='card-img-container col-8 col-md-6 mx-auto'>

                                            <div className='border-img'>
                                                <img src={item.gallery_img} className='card-img' alt={item.gallery_content}></img>
                                            </div>

                                        </div>
                                        <div className='card-desc col-8 col-md-6 mx-auto mt-md-5'>
                                            <h2 className={index % 2 === 0 ? "text-end h2Home" : "text-start h2Home"}>{item.gallery_title}</h2>
                                            <p className={index % 2 === 0 ? "text-end" : "text-start "}>{item.gallery_content}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </motion.div>
            </motion.main>
        )
    }
}

export default Home;