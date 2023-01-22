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
                    <div className='card-container d-flex flex-wrap justify-content-center'>
                        {
                            Object.values(this.state.gallerys).filter(item => item.gallery_img && item.gallery_img !== '').map((item, index) => {
                                return (
                                    <div className={`card d-flex ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                                        <div className='card-img-container m-4'>
                                            <img src={item.gallery_img} className='card-img'></img>
                                        </div>
                                        <div className='card-desc m-4'>
                                            <h2 className=''>{item.gallery_title}</h2>


                                            <p className=''>
                                                Copy code
                                                {item.gallery_content}
                                            </p>
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