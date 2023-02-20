import React, { Component } from 'react';
import "./reservation.css";
import { motion } from 'framer-motion';
import ResevervationForm from './ResevervationForm';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '',
            numberOfPeople: '',
            comments: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        // Envoyer les informations de réservation au backend pour enregistrer la réservation
    }

    render() {
        return (
            <motion.main
                className='main-margin'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className='text-center'> Réserver une table </h1>
                <ResevervationForm/>
            </motion.main>
        );
    }
}

export default Reservation;
