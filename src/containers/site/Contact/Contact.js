import React, { Component } from "react";
import './Contact.css';
import Form from "./Form/Form";
import axios from "axios";
import { hostname } from "../../../config";
import { motion, AnimatePresence } from "framer-motion";

class Contact extends Component {
    state = {
        messageSent: false,
        isVisible: true
    }
    //Transition page
    handleExitComplete = () => {
        this.setState({ isVisible: false });
    };

    componentDidMount = () => {
        document.title = "Le Quai Antique - Contact"
    }
    //Send message to back end
    handleSendMail = (message) => {
        axios.post(`${hostname}front/sendMessage`, message)
            .then(response => {
                this.setState({ messageSent: true });
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { isVisible } = this.state;

        return isVisible ? (
            <AnimatePresence onExitComplete={this.handleExitComplete}>
                <motion.main
                    className='main-margin'

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                <h1 className="text-center">Contactez nous !</h1>
                {this.state.messageSent && <div className="alert alert-success col-9 text-center mx-auto">Votre message à été envoyé !</div>}
                <Form sendMail={this.handleSendMail} />
                </motion.main>
            </AnimatePresence>
        ) : null;
    }
}

export default Contact
