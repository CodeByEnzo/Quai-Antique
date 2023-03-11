import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { hostname } from '../../../config';
import UpdateReservationForm from '../../../components/Reservations/UpdateReservationForm';
import axios from 'axios';


const Reserved = () => {
    const [userData, setUserData] = useState(null);
    const [isReservationDeleted, setIsReservationDeleted] = useState(false);
    const [ReservationSent, setReservationSent] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [reservationIdToUpdate, setReservationIdToUpdate] = useState(null);

    //Send request to display data    
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

    // To cancel a reservation from user
    const handleCancelReservation = async event => {
        const client_id = localStorage.getItem("client_id")
        const reservationId = event.target.dataset.reservationid;
        if (window.confirm("Êtes-vous sûr de vouloir annuler cette réservation ?")) {
            const response = await fetch(`${hostname}front/cancelReservation`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ client_id: client_id, reservation_id: reservationId })
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


    // To modify reservation from user
    useEffect(() => {
    }, [reservationIdToUpdate]);

    //Get the id of the reservation that will be update
    const handleUpdateClick = (event) => {
        setIsEditing(true);
        const reservationId = event.target.dataset.reservationid;
        setReservationIdToUpdate(reservationId);
    };
    //Undisplay inputs
    const cancelBTN = () => {
        setIsEditing(false)
    }
    // Request to back end
    const handleSendUpdateReservation = (formData) => {
        const client_id = localStorage.getItem('client_id');
        const updateReservationId = reservationIdToUpdate;
        const { date, time, number_of_people, comment } = formData;
        const requestBody = {
            date: date,
            time: time,
            number_of_people: number_of_people,
            comment: comment,
            client_id: client_id,
            reservation_id: updateReservationId
        };
        axios
            .post(`${hostname}front/updateReservation`, requestBody, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((response) => {
                setReservationSent(true);
                setIsEditing(false)
                alert('Votre réservation à été modifié')
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <motion.main
            className='mb-5 pb-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='container-fluid d-flex justify-content-center'>
                <div className=" rounded col-12 col-md-8 col-xl-6">
                    <div className="container-fluid">
                        {isEditing ? (
                            <span className='container-fluid d-flex flex-column align-items-center'>
                                <h3 className='text-center'> Modifiez votre réservation </h3>
                                <UpdateReservationForm reservationIdToUpdate={reservationIdToUpdate} reservationSent={cancelBTN} />
                                <span className='bg-dark mt-3 rounded'>
                                    <button
                                        className="btn sub-btn btn-lg"
                                        type="submit"
                                        onClick={cancelBTN}>
                                        Annuler les modifications
                                    </button>
                                </span>

                            </span>
                        ) : (
                            <span>
                                {userData?.reservations?.length > 0 ? (
                                        <div>
                                            <h3 className='text-center'>Vos réservation</h3>
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
                                                    <button
                                                        className="btn sub-btn mx-2"
                                                        onClick={handleUpdateClick}
                                                        data-reservationid={reservation.reservation_id}>
                                                        Modifier
                                                    </button>
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
                            </span>
                        )}
                    </div>
                </div>

            </div>

        </motion.main>
    );
}


export default Reserved;