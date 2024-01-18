import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hostname } from "../../config";
import UpdateProfileForm from "../UpdateProfileForm/UpdateProfileForm";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/Auth";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();
    const [userData, setUserData] = useState({
        user: {
            id: "",
            username: "",
            email: "",
            number: "",
            password: "",
            created_at: "",
        },
        reservations: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    redirectToLogin();
                    return;
                }

                const response = await fetch(`${hostname}front/authenticate`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                if (data && data.user) {
                    setUserData(data);
                    localStorage.setItem('client_id', data.user.id);
                } else {
                    redirectToLogin();
                    showErrorMessage('Votre session a expiré, veuillez vous reconnecter.');
                }
            } catch (error) {
                console.error('Error during data fetching:', error);
                showErrorMessage('Une erreur est survenue. Veuillez réessayer.');
            }
        };
        fetchData();
    }, []);

    const redirectToLogin = () => {
        navigate('/login');
        showErrorMessage('Votre session a expiré, veuillez vous reconnecter.');
    };

    const showErrorMessage = (message) => {
        console.error(message);
    };



    const initialUserValues = {
        username: userData ? userData.user.username : "",
        email: userData ? userData.user.email : "",
        number: userData ? userData.user.number : "",
        password: userData ? userData.user.password : "",
        created_at: userData ? userData.user.created_at : "",
    };


    //Get the id of the reservation that will be update
    const handleUpdateClick = () => {
        setIsEditing(true);
    };
    //Hide inputs and show profil informations
    const cancelBTN = () => {
        setIsEditing(false)
    }
    // undisplay inputs and show profil with update infos
    const handleUpdateSuccess = (updatedUserData) => {
        setIsEditing(false);
        setUserData(updatedUserData);
    };

    //Display the date with FR format
    const formattedCreatedAt = userData.user.created_at ? new Date(userData.user.created_at).toLocaleString() : "Loading...";

    return (
        <motion.div
            className='mb-5 pb-5'

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="container">
                <div className='container-fluid d-flex justify-content-center align-items-center'>
                    {isEditing ? (
                        <span className='container-fluid d-flex flex-column align-items-center'>
                            <h3 className='text-center'> Modifiez vos informations </h3>
                            <UpdateProfileForm onUpdateSuccess={handleUpdateSuccess} initialUserValues={initialUserValues} />


                            <span className='bg-dark mt-3 rounded'>
                                <button
                                    className="btn sub-btn btn-lg"
                                    type="submit"
                                    onClick={cancelBTN}>
                                    Annuler les modifications
                                </button>
                            </span>

                        </span>
                    ) : (
                        <span className="col-12">
                            <h3 className='text-center'>Votre profile</h3>
                            <div className="form-border rounded col-12 col-md-8 col-xl-5 p-2 bg-dark shadow mx-auto">
                                <div className="col-12">
                                    <p>
                                        <strong>Nom d'utilisateur : </strong>
                                        <span>
                                            {userData ? (
                                                <span>{userData.user.username}</span>
                                            ) : (
                                                <span>Loading...</span>
                                            )}
                                        </span>
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        <strong>Adresse e-mail : </strong>
                                        <span>
                                            {userData ? (
                                                <span>{userData.user.email}</span>
                                            ) : (
                                                <span>Loading...</span>
                                            )}
                                        </span>
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        <strong>Créé le  : </strong>
                                        <span>
                                            {userData ? (
                                                <span>{formattedCreatedAt}</span>
                                            ) : (
                                                <span>Loading...</span>
                                            )}
                                        </span>
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        <strong>Numéro de téléphone  : </strong>
                                        <span>
                                            {userData ? (
                                                <span>{userData.user.number}</span>
                                            ) : (
                                                <span>Loading...</span>
                                            )}
                                        </span>
                                    </p>
                                </div>

                                <div className='d-flex justify-content-center mt-3'>
                                    <button
                                        type="submit"
                                        className="btn sub-btn"
                                        onClick={handleUpdateClick}
                                    >
                                        Modifier
                                    </button>
                                </div>
                            </div>
                        </span>

                    )}
                </div>
            </div>

        </motion.div>
    )
};
export default Profile;