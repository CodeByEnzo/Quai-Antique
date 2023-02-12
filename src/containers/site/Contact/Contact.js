import React, { Component } from "react";
import './Contact.css';
import Form from "./Form/Form";
import axios from "axios";
import { hostname } from "../../../config";

class Contact extends Component {
    state = {
        messageSent: true
    }

    componentDidMount = () => {
        document.title = "Le Quai Antique - Contact"
    }

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
            <main className="contact container-fluid main-margin">
                <h1 className="text-center">Contactez nous !</h1>
                {this.state.messageSent && <div className="alert alert-success col-9 text-center mx-auto">Votre message à été envoyé !</div>}
                <Form sendMail={this.handleSendMail} />
            </main>
        )
    }
}

export default Contact
