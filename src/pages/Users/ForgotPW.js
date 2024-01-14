import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { hostname } from "../../config";

const ForgotPW = (props) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();

        // check if email
        if (!email) {
            setError('Veuillez saisir votre adresse e-mail.');
            setSuccess('');
            return;
        }
        // send request to reset paswword
        axios.post(`${hostname}front/forgotPW`, { email })
            .then(response => {
                setSuccess('Nous vous avons envoyé un lien sur votre boîte mail. Si vous ne le trouvez pas, vérifiez dans vos spams.');
                setError('');
                console.log(response)
            })
            .catch(error => {
                setError('Nous n\'avons pas pu trouver votre compte. Veuillez vérifier votre email.');
                setSuccess('');
            });
    }

    return (
        <motion.main
            className='main-margin'
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="container-fluid d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="form-border rounded bg-dark col-12 col-md-6 col-xl-4 p-2">
                    <label className="p-2">
                        Renseignez votre adresse e-mail et nous allons vous renvoyer un lien pour réinitialiser votre mot de passe.
                    </label>
                    <input
                        type="text"
                        placeholder="VotreAdresseEmail@exemple.com"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="btn sub-btn btn-lg d-block mx-auto mt-3">Envoyer</button>
                    {error && <div className="text-danger">{error}</div>}
                    {success && <div className="text-success">{success}</div>}
                </form>
            </div>
        </motion.main>
    )
};

export default ForgotPW;
