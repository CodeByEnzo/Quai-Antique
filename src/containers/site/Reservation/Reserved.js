import React, { useState, useEffect } from 'react';
import "./reservation.css";
import { motion } from 'framer-motion';
import { hostname } from '../../../config';


function Reserved() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const fetchUserData = async () => {
                try {
                    const response = await fetch(`${hostname}front/authenticate`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    });
                    const data = await response.json();
                    setUserData(data);
                } catch (error) {
                    console.error("Error fetching user data", error);
                }
            };
            fetchUserData();
        }
    }, []);

    return (
        <motion.main
            className='mb-5 pb-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h3 className='text-center'> Réservation </h3>
            <div className='container-fluid d-flex justify-content-center'>
                <div className="form-border rounded col-12 col-md-6 col-xl-4 p-2">
                    <div className="container ">
                        <div className="form-group mt-3">
                            <label>Date :</label>
                            <div>
                                {userData ? (
                                    <p>{userData.reservations[0].date}</p>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label>Heure :</label>
                            <div>
                                {userData ? (
                                    <p>{userData.reservations[0].time}</p>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label>Nombre de personnes :</label>
                            <div>
                                {userData ? (
                                    <p>{userData.reservations[0].number_of_people}</p>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label>Commentaires :</label>
                            <div>
                                {userData ? (
                                    <p>{userData.reservations[0].comments}</p>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <button className="btn sub-btn mx-2">Modifier</button>
                            <button className="btn sub-btn mx-2">Annuler</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center my-2'>
                <button className="btn sub-btn mx-2">Ajouter</button>
            </div>

        </motion.main>
    );
}

export default Reserved;