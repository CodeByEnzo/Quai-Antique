import "./users.css";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getItem } from "../../services/LocalStorage"
import { hostname } from "../../config";


const Profile = (props) => {


    //page transitions
    const [isVisible, setIsVisible] = useState(true);
    const handleExitComplete = () => {
        setIsVisible(false);
    };
    const email = getItem("email");
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
                        setUserData(data);
                    } catch (error) {
                        console.error("Error parsing JSON data", error);
                    }
                })
                .catch(error => {
                    console.error("Error fetching user data", error);
                });
        }
    }, []);



    return isVisible ? (
        <AnimatePresence onExitComplete={handleExitComplete}>
            <motion.main
                className='mb-5 pb-5'

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="container">
                    <h3 className="text-center">Profil de l'utilisateur</h3>
                    <div className='container-fluid d-flex justify-content-center'>
                        <div className="form-border rounded col-12 col-md-6 col-xl-4 p-2">
                            <div className="col-12">
                                <p>
                                    <strong>Nom d'utilisateur :</strong> 
                                    <div>
                                        {userData ? (
                                            <p>{userData.user.username}</p>
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                    </div>
                                </p>
                            </div>
                            <div className="col-12">
                                <p>
                                    <strong>Adresse e-mail :</strong>
                                    <div>
                                        {userData ? (
                                            <p>{userData.user.email}</p>
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                    </div>
                                </p>
                            </div>
                            <div className="col-12">
                                <p>
                                    <strong>Créé le  :</strong>
                                    <div>
                                        {userData ? (
                                            <p>{userData.user.created_at}</p>
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                    </div>
                                </p>
                            </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <button type="submit" className="btn sub-btn">Modifier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.main>
        </AnimatePresence>
    ) : null;
};
export default Profile;