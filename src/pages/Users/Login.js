import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { addItem } from "../../services/LocalStorage";
import { hostname } from "../../config";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Login = () => {
    

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    //treat the token
    const handleSubmit = async event => {
        event.preventDefault();
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
                        {error && (
                            <div className="text-danger">{error}</div>
                        )}
                    </div>
                    <div className="form-group mt-3">
                        <NavLink to="/ForgotPW" className="text-light ms-1">Mot de passe oublié ?</NavLink>
                    </div>
                    <button type="submit" className="btn sub-btn btn-lg d-block mx-auto mt-3">Se connecter</button>
                </form>
            </div>
        </motion.main>

    )
};
export default Login;



