import "./users.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hostname } from "../../../config";
import UpdateProfileForm from "../../../components/Profile/UpdateProfileForm";


const Profile = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch(`${hostname}front/authenticate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    try {
                        if (data && data.user) { // Vérifier si les données utilisateur sont présentes
                            setUserData(data);
                            localStorage.setItem('client_id', data.user.id);
                        } else {
                            // Si le token a expiré ou est invalide, rediriger vers une page de connexion ou demander à l'utilisateur de se reconnecter
                            window.location.href = "/login";
                            alert('Votre session à éxpiré, veuillez vous reconnecter.')
                        }
                    } catch (error) {
                        console.error("Error parsing JSON data", error);
                    }
                })
                .catch(error => {
                    console.error("Error fetching user data", error);
                });
        } else {
            // Si le token n'est pas présent, rediriger vers une page de connexion ou demander à l'utilisateur de se reconnecter
            window.location.href = "/login";
            alert('Votre session à éxpiré, veuillez vous reconnecter.')
        }
    }, []);


        //Get the id of the reservation that will be update
        const handleUpdateClick = (event) => {
            setIsEditing(true);
        };
        //Undisplay inputs
        const cancelBTN = () => {
            setIsEditing(false)
        }

        const handleUpdateSuccess = () => {
            setIsEditing(false);
            // afficher un message de confirmation ou rafraîchir les données des réservations
        };


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
                                <UpdateProfileForm onUpdateSuccess={handleUpdateSuccess} userData={userData} />
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
                                                    <span>{userData.user.created_at}</span>
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