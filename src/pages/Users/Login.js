import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { addItem } from "../../services/LocalStorage";
import { hostname } from "../../config";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [attemptAccount, setAttemptAccount] = useState({
        error: 0,
        message: ""
    });
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async event => {
        event.preventDefault();
        // if user has reached max login attempts, display error message and return
        let errorCount = attemptAccount.error + 1;
        if (errorCount > 5) {
            setAttemptAccount({
                error: errorCount,
                message: 'Vous avez atteint le nombre maximum de tentatives de connexion. Veuillez réessayer dans 5 minutes.'
            });
            setTimeout(() => {
                setAttemptAccount(prevState => ({ ...prevState, error: 0 }));
            }, 300000);
            return;
        }
        // if user has not reached max login attempts, try to login
        try {
            const response = await fetch(`${hostname}front/userLogin`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            if (data.status === 'success') {
                setIsAuthenticated(true);
                addItem("token", data.data.token);
                addItem("email", credentials.email);
                navigate('/Account');
            } else if (data.status === 'error') {
                setError(data.message);
            }
        } catch (error) {
            setError(error.message);
        }
        setAttemptAccount(prevState => ({ ...prevState, error: errorCount }));
    };


return (
    <motion.main
        className='main-margin'

        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
    >
        <h1 className="text-center">Connexion</h1>
        <div className="container-fluid d-flex justify-content-center">
           {/* Hide input form if user has reached max login attempts */}
            {attemptAccount.error > 5 && (
                <p>
                    {attemptAccount.message}
                </p>)}
             {(attemptAccount.error <= 5) && (
                <form onSubmit={handleSubmit} className="form-border rounded bg-dark col-12 col-md-6 col-xl-4 p-2">
                    <div className="form-group mt-3">
                        <label htmlFor="email">Adresse e-mail</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, [e.target.name]: e.target.value })}
                            id="email"
                            placeholder="Entrez votre adresse e-mail"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, [e.target.name]: e.target.value })}
                            id="password"
                            placeholder="Entrez votre mot de passe"
                        />
                        {/* Show error message */}
                        {error && (
                            <div className="text-danger">{error}</div>
                        )}
                    </div>
                    <div className="form-group mt-3">
                        <NavLink to="/ForgotPW" className="text-light ms-1">Mot de passe oublié ?</NavLink>
                    </div>
                    <button type="submit" className="btn sub-btn btn-lg d-block mx-auto mt-3">Se connecter</button>
                </form>
            )}
        </div>
    </motion.main>

)
};
export default Login;



