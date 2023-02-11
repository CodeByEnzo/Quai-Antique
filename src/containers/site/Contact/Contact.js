import React, { Component } from "react";
import './Contact.css';
import Form from "./Form/Form";
import axios from "axios";
import { hostname } from "../../../config";

class Contact extends Component {
    componentDidMount = () => {
        document.title = "Le Quai Antique - Contact"
    }

    handleSendMail = (message) => {
        axios.post(`${hostname}front/sendMessage`, message)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        return (
            <div className="contact container-fluid">
                <h1 className="text-center">Contactez nous !</h1>
                <Form sendMail={this.handleSendMail} />
            </div>
        )
    }
}

export default Contact