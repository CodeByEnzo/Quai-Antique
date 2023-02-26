import React, { useState, useEffect } from 'react';
import "./reservation.css";
import { motion } from 'framer-motion';
import { hostname } from '../../../config';

function Reserved() {
    // Get the user's data to display them
    const [userData, setUserData] = useState(null);
    const [isReservationDeleted, setIsReservationDeleted] = useState(false);

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
                    setIsReservationDeleted(false); // reset the state to false after fetching the data
                } catch (error) {
                    console.error("Error fetching user data", error);
                }
            };
            fetchUserData();
        }
    }, [isReservationDeleted]); // add isReservationDeleted as a dependency to recall the function when the state changes

    // To cancel a reservation
    const handleCancelReservation = async event => {
        
        const userId = localStorage.getItem("userId")
        const reservationId = event.target.dataset.reservationid;
        if (window.confirm("Êtes-vous sûr de vouloir annuler cette réservation ?")) {
            const response = await fetch(`${hostname}front/cancelReservation`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: userId, reservation_id: reservationId })
            });
            const data = await response.json();
            if (data.status === 'success') {
                setIsReservationDeleted(true); // set the state to true if the reservation was successfully deleted
                alert('Votre réservation à été annulé')
            } else if (data.status === 'error') {
                console.log(data.message);
            }
        }
    };


    return (
        <motion.main
            className='mb-5 pb-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
<h3 className='text-center'> Vos réservations </h3>
            {isReservationDeleted && <div className="alert alert-success col-9 text-center mx-auto">Votre réservation à été annulé</div>}

            <div className='container-fluid d-flex justify-content-center'>
                <div className=" rounded col-12 col-md-6 col-xl-4">
                    <div className="container ">
                        {userData?.reservations?.length > 0 ? (
                            <div>
                                {userData.reservations.map(reservation => (
                                    <section className='form-border rounded bg-dark shadow p-2 my-3' key={reservation.reservation_id}>
                                        <div className="form-group mt-3">
                                            <label>Date :</label>
                                            <div>
                                                <p>{reservation.date}</p>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Heure :</label>
                                            <div>
                                                <p>{reservation.time}</p>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Nombre de personnes :</label>
                                            <div>
                                                <p>{reservation.number_of_people}</p>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Commentaire :</label>
                                            <div>
                                                <p>{reservation.comments}</p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-center mt-3'>
                                            <button className="btn sub-btn mx-2">Modifier</button>
                                            <button className="btn sub-btn mx-2"
                                                onClick={handleCancelReservation}
                                                data-reservationid={reservation.reservation_id}>
                                                Annuler
                                            </button>
                                        </div>
                                    </section>
                                ))}
                            </div>
                        ) : (
                            <p className='text-center'>Aucune réservation trouvée</p>
                        )}
                    </div>
                </div>
            </div>

        </motion.main>
    );
}


export default Reserved;