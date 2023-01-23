import "./users.css";
import React, { useState } from "react";


const Login = (props) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Envoyer les informations de l'utilisateur à votre backend pour vérifier les informations de connexion
    }

    return (
        <main className="main-margin">
            <h1 className="text-center">Connexion</h1>
            <div className="container-fluid d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="form-border rounded col-12 col-md-6 col-xl-4 p-2">
                    <div className="form-group mt-3">
                        <label htmlFor="usernameOrEmail">Nom d'utilisateur ou adresse e-mail</label>
                        <input type="text" className="form-control" value={usernameOrEmail} onChange={e => setUsernameOrEmail(e.target.value)} id="usernameOrEmail" placeholder="Entrez votre nom d'utilisateur ou adresse e-mail" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="Entrez votre mot de passe" />
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <button type="submit" className="btn sub-btn btn-lg">SE CONNECTER</button>
                    </div>
                </form>
            </div>

        </main>

    );
}

export default Login;