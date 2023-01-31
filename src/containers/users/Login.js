import "./users.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";


const Login = () => {
    const [credentials, setCredentials] = useState({
        login: '',
        password: ''
    });
    const { login, setLogin } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            if (data.success) {
                setLogin(true);
                navigate.replace('/Account');
            } else {
                // Afficher une erreur à l'utilisateur si les informations de connexion sont incorrectes
                console.error(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="main-margin">
            <h1 className="text-center">Connexion</h1>
            <div className="container-fluid d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="form-border rounded col-12 col-md-6 col-xl-4 p-2">
                    <div className="form-group mt-3">
                        <label htmlFor="login">Nom d'utilisateur ou adresse e-mail</label>
                        <input
                            type="text"
                            name="login"
                            className="form-control"
                            value={credentials.login}
                            onChange={e => setCredentials({ ...credentials, [e.target.name]: e.target.value })}
                            id="login"
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
                    </div>
                    <button type="submit" className="btn sub-btn btn-lg d-block mx-auto mt-3">Se connecter</button>
                </form>
            </div>
        </main>
    );
};

export default Login;