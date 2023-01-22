import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import "./Home.css";

class Home extends Component {
    state = {
        gallerys: [],
    }

    componentDidMount() {
        axios.get("http://localhost/SERVEURQUAI/front/gallerys")
            .then(res => {
                const gallerys = res.data;
                this.setState({ gallerys });
            });
    }

    render() {
        return (
            <div className='Home'>
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
                                                <img src={item.gallery_img} className='card-img'></img>
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
            </div>
        );
    }
}

export default Home;