import React, { Component,useState,useEffect } from 'react';
import "./reservation.css";
import { motion } from 'framer-motion';
import ResevervationForm from './ResevervationForm';
import axios from 'axios';
import { hostname } from '../../../config';
import { getItem } from '../../../services/LocalStorage';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '',
            number_of_people: '',
            comment: '',
            client_id: '',
        };


    }


    handleSendReservation = (formData) => {
        const userId = localStorage.getItem('userId');
        const { date, time, number_of_people, comment } = formData;
        const requestBody = {
            date,
            time,
            number_of_people,
            comment,
            userId
        };
        axios
            .post(`${hostname}front/reservation`, requestBody, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((response) => {
                this.setState({ ReservationSent: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                <ResevervationForm sendReservation={this.handleSendReservation} />
            </motion.main>
        );
    }
}

export default Reservation;
