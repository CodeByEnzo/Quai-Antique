import React, { useState } from 'react';
import "./reservation.css";

function Reservation() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Envoyer les informations de réservation au backend pour enregistrer la réservation
    }

    return (
        <main className='main-margin'>
            <h1 className='text-center'> Réservation </h1>
            <div className='container-fluid d-flex justify-content-center'>
                <form onSubmit={handleSubmit} className="form-border rounded col-12 col-md-6 col-xl-4 p-2">
                    <div className="container ">
                        <div className="form-group mt-3">
                            <label htmlFor="date">Date</label>
                            <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} id="date" placeholder="Entrez la date de la réservation" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="time">Heure</label>
                            <input type="time" className="form-control" value={time} onChange={e => setTime(e.target.value)} id="time" placeholder="Entrez l'heure de la réservation" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="numberOfPeople">Nombre de personnes</label>
                            <input type="number" className="form-control" value={numberOfPeople} onChange={e => setNumberOfPeople(e.target.value)} id="numberOfPeople" placeholder="Entrez le nombre de personnes" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="comments">Commentaires</label>
                            <textarea className="form-control" value={comments} onChange={e => setComments(e.target.value)} id="comments" rows="3"></textarea>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <button type="submit" className="btn sub-btn">Réserver</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>

    );
}

export default Reservation;
