import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Envoyer les informations de l'utilisateur à votre backend pour l'enregistrer
    }

    return (
        <main className='main-margin'>
            <h1 className='text-center'>Créer un comtpe</h1>
            <div className='container-fluid d-flex justify-content-center'>
                <form onSubmit={handleSubmit} className="form-border rounded col-12 col-md-6 col-xl-4 p-2">
                    <div className="form-group my-3">
                        <label>Nom d'utilisateur:</label>
                        <input className="form-control" type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group my-3">
                        <label>Adresse e-mail:</label>
                        <input className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group my-3">
                        <label>Mot de passe:</label>
                        <input className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn sub-btn btn-lg">S'inscrire</button>
                    </div>
                </form>
            </div>

        </main>
    );
}
export default Register;