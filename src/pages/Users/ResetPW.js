import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hostname } from '../../config';

const ResetPW = () => {
    const location = useLocation();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [token, setToken] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');
        if (token) {
            setToken(token);
        }
    })

    const isPasswordValid = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas.');
            setSuccess('');
            return;
        }
        if (!isPasswordValid(newPassword)) {
            setError('Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial.');
            setSuccess('');
            return;
        }

        axios.post(
            `${hostname}front/resetPW`,
            { newPassword },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then(response => {
                setSuccess('Mot de passe réinitialisé avec succès ! Redirection en cours...');
                setTimeout(() => {
                    navigate('/Login');
                }, 5000);
                setError('');
            })
            .catch(error => {
                setError('Erreur lors de la réinitialisation du mot de passe.');
                setSuccess('');
            });
    };


    return (
        <motion.main
            className='main-margin'
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="container-fluid d-flex justify-content-center">
                {token ? (
                    <form onSubmit={handleResetPassword} className="form-border rounded bg-dark col-12 col-md-6 col-xl-4 p-2">
                        <label className="p-2">
                            Renseignez votre nouveau mot de passe.
                        </label>
                        <input className='form-control' type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                        <label className="p-2">
                            Confirmez votre nouveau mot de passe.
                        </label>
                        <input className='form-control' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <button type="submit" className="btn sub-btn btn-lg d-block mx-auto mt-3">Envoyer</button>
                        {error && <div className="text-danger">{error}</div>}
                        {success && <div className="text-success">{success}</div>}
                    </form>
                ) : (
                    error && <div className="text-danger">{error}</div>
                )}
            </div>
        </motion.main>
    );
};

export default ResetPW;
