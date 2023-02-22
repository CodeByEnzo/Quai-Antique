import React, { Component } from 'react';
import "./reservation.css";
import { motion } from 'framer-motion';
import ResevervationForm from './ResevervationForm';
import axios from 'axios';
import { hostname } from '../../../config';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '',
            numberOfPeople: '',
            comments: ''
        };
        this.handleSendReservation = this.handleSendReservation.bind(this);
    }

    handleSendReservation = (message) => {
        axios.post(`${hostname}front/makeReservation`, message)
            .then(response => {
                this.setState({ ReservationSent: true });
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <h3 className='text-center'> Réserver une table </h3>
                {this.state.ReservationSent && <div className="alert alert-success col-9 text-center mx-auto">Votre réservation est prise en compte</div>}
                <ResevervationForm sendReservation={this.handleReservation} />
            </motion.main>
        );
    }
}

export default Reservation;
