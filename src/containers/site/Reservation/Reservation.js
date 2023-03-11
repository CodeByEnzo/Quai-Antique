
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import ResevervationForm from '../../../components/Reservations/ResevervationForm';
import axios from 'axios';
import { hostname } from '../../../config';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '', time: '', number_of_people: '', comment: '', client_id: ''
        };
    }

    componentDidMount() {
        axios.get("http://localhost/SERVEURQUAI/front/hours").then((response) => {
            this.setState({ hours: response.data });
        });
    }
    handleSendReservation = (formData) => {
        const client_id = localStorage.getItem('client_id');
        const { date, time, number_of_people, comment } = formData;
        const requestBody = {
            date, time, number_of_people, comment, client_id
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
                <h3 className='text-center'> Réservez votre table </h3>
                <ResevervationForm />
            </motion.main>
        );
    }
}
export default Reservation;