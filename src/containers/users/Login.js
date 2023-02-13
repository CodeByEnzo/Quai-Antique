import "./users.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { addItem } from "../../services/LocalStorage";
import { hostname } from "../../config";
import { motion } from "framer-motion";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    

    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`${hostname}front/userLogin`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            console.log(data)
            if (data.status === 'success') {
                setIsAuthenticated(true);
                addItem("token", data.data.token);// Stocker les données de l'utilisateur dans le local storage
                addItem("email", credentials.email);
                console.log(data.data.token)

                navigate('/Account');

            } else if(data.status === 'error') {
                    setError(data.message);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <motion.main
            className="main-margin"
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1 className="text-center">Connexion</h1>
            <div className="container-fluid d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="form-border rounded col-12 col-md-6 col-xl-4 p-2">
                    <div className="form-group mt-3">
                        <label htmlFor="login">Adresse e-mail</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, [e.target.name]: e.target.value })}
                            id="email"
                            placeholder="Entrez votre nom d'utilisateur ou adresse e-mail"
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
                            <div style={{ color: 'red' }}>{error}</div>
                        )}
                    </div>
                    <button type="submit" className="btn sub-btn btn-lg d-block mx-auto mt-3">Se connecter</button>
                </form>
            </div>
        </motion.main>
    );
};
export default Login;



