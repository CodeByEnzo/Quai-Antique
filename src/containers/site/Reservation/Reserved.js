import React, { useState, useEffect } from 'react';
import "./reservation.css";
import { motion } from 'framer-motion';

function Reserved() {
    // const [reservation, setReservation] = useState(null);

    // useEffect(() => {
    //     // Appeler l'API pour récupérer les informations de réservation du client connecté
    //     const fetchReservation = async () => {
    //         try {
    //             const response = await fetch("/api/reservations/current");
    //             const data = await response.json();
    //             setReservation(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchReservation();
    // }, []);

    // if (!reservation) {
    //     return <p>Loading...</p>;
    // }

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
                            {/* <p>{reservation.date}</p> */}
                        </div>
                        <div className="form-group mt-3">
                            <label>Heure :</label>
                            {/* <p>{reservation.time}</p> */}
                        </div>
                        <div className="form-group mt-3">
                            <label>Nombre de personnes :</label>
                            {/* <p>{reservation.number_of_people}</p> */}
                        </div>
                        <div className="form-group mt-3">
                            <label>Commentaires :</label>
                            {/* <p>{reservation.comments}</p> */}
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <button className="btn sub-btn mx-2">Modifier</button>
                            <button className="btn sub-btn mx-2">Annuler</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>
    );
}

export default Reserved;