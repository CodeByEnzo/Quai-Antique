import React, { Component } from 'react';
import axios from 'axios';
import "./Home.css";
import { hostname } from '../../../config';
import { motion, AnimatePresence } from 'framer-motion';


class Home extends Component {
    state = {
        gallerys: [],
        isVisible: true
    }

    //Get the pictures on the back end
    componentDidMount() {
        axios.get(`${hostname}/front/gallerys`)
            .then(res => {
                const gallerys = res.data;
                this.setState({ gallerys });
            });
    }
    //Allow the page to show if next composant has disapear
    handleExitComplete = () => {
        this.setState({ isVisible: false });
    };

    render() {
        const { isVisible } = this.state;

        return isVisible ? (
            <AnimatePresence onExitComplete={this.handleExitComplete}>
                <motion.main
                    id='Home'

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='banner'>
                        <div className='img-banner'></div>
                        <div className='text-banner'>
                            <h1 className='title-banner'>Le Quai Antique</h1>
                            <p className='under-text-banner'>Spécialités savoyardes </p>
                        </div>
                    </div>
                    <div className='home-content d-flex justify-content-center'>
                        <div className='card-container row d-flex flex-wrap justify-content-around p-5'>
                            {
                                Object.values(this.state.gallerys).filter(item => item.gallery_img && item.gallery_img !== '').map((item, index) => {
                                    return (
                                        <div className={` row col-12 col-xl-10 mt-5 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
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
                    </div>
                    <div className='container-fluid d-flex justify-content-center p-5'>
                        {/* <a href=''><button className='book-btn'>Réservez maintenant</button></a> */}
                    </div>
                </motion.main>
            </AnimatePresence >
        ) : null;
    }
}

export default Home;