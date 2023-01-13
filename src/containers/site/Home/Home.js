
import React, { Component } from 'react';
import "./Home.css";

class Home extends Component {
    componentDidMount = () => {
        document.title ="Restaurant Le Quai Antique"
    }
    render() {
        return (
            <>
                <div className='Home'>
                    <div className='banner'>
                        <div className='img-banner'></div>
                        <div className='text-banner'>
                            <h1 className='title-banner'>Le Quai Antique</h1>
                            <p className='under-text-banner'>Spécialités savoyardes </p>
                        </div>
                    </div>
                    <div className='home-content m-0 mt-5 vh-100 d-flex justify-content-center'>
                        <div className='card-container container-fluid row d-flex justify-content-around vw-100'>
                            <span className='card-img-container col-12 col-md-4 m-1 mx-auto my-sm-5'>
                                <span className='card-img'> img</span>
                            </span>
                            <span className='card-desc col-11 col-md-4 m-1 my-sm-5'>
                                <h2 className=''>le titre</h2>
                                <p className=''>le paragraphe</p>
                                <p className=''>le paragraphe</p>
                                <p className=''>le paragraphe</p>
                                <p className=''>le paragraphe</p>
                                <p className=''>le paragraphe</p>
                                <p className=''>le paragraphe</p>
                            </span>


                        </div>

                    </div>
                </div>
            </>


        );
    }
}

export default Home;