import React, { useState } from 'react';
import axios from 'axios';
import { hostname } from '../../config';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccess(false);
        try {
            const response = await axios.post(`${hostname}front/register`, {
                username,
                email,
                password
            }, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setSuccess(true);
            setUsername('');
            setEmail('');
            setPassword('');
            
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    //page transitions
    const [isVisible, setIsVisible] = useState(true);
    const handleExitComplete = () => {
        setIsVisible(false);
    };

    return isVisible ? (
        <AnimatePresence onExitComplete={handleExitComplete}>
            <motion.main
                className='main-margin'

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
            <h1 className='text-center'>Créer un comtpe</h1>
            <div className='container-fluid d-flex justify-content-center'>
                <form method='post' onSubmit={handleSubmit} className="form-border rounded col-12 col-md-6 col-xl-4 p-2">
                    <div className='col-12'>

                        {error && (
                            <div className="alert alert-danger text-center" role="alert">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="alert alert-success text-center" role="alert">
                                    Inscription réussie !
                                    <NavLink to="/login" className="fw-bold nav-link">
                                        Connectez-vous
                                    </NavLink>
                            </div>
                        )}
                    </div>
                    <div className="form-group my-3">
                        <label>Nom d'utilisateur:</label>
                        <input className="form-control" name='username' type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                    </div>
                    <div className="form-group my-3">
                        <label>Adresse e-mail:</label>
                            <input className="form-control" name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" />
                    </div>
                    <div className="form-group my-3">
                        <label>Mot de passe:</label>
                        <input className="form-control" name='password' type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn sub-btn btn-lg btn-block my-2">S'enregistrer</button>
                    </div>
                </form>
            </div>
            </motion.main>
        </AnimatePresence>
    ) : null;
}

export default Register;
