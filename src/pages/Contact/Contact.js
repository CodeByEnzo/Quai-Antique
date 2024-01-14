import React, { Component } from "react";
import './Contact.css';
import ContactForm from "../../components/ContactForm/ContactForm";
import axios from "axios";
import { hostname } from "../../config";
import { motion } from "framer-motion";

class Contact extends Component {
    state = {
        messageSent: false
    }

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

        return (
            <motion.main
                className='main-margin mx-3'

                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h1 className="text-center">Contactez nous !</h1>
                {this.state.messageSent && <div className="alert alert-success text-center col-12 col-sm-5 mx-auto">Votre message à été envoyé !</div>}
                <ContactForm sendMail={this.handleSendMail} />
            </motion.main>
        )
    }
}

export default Contact
