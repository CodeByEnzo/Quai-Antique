import React, { useState } from 'react';
import axios from 'axios';

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
            const response = await axios.post('http://localhost/SERVEURQUAI/front/register', {
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
        } catch (error) {
            setError(error.response.data.message);
        }
    }


    return (
        <main className='main-margin'>
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
                        </div>
                    )}
                </div>
                    <div className="form-group my-3">
                        <label>Nom d'utilisateur:</label>
                        <input className="form-control" name='username' type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                    </div>
                    <div className="form-group my-3">
                        <label>Adresse e-mail:</label>
                        <input className="form-control" name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} required />
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
        </main>
    )
}

export default Register;
