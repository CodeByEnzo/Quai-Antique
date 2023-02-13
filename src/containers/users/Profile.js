import "./users.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Profile = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    //page transitions
    const [isVisible, setIsVisible] = useState(true);
    const handleExitComplete = () => {
        setIsVisible(false);
    };

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
                                        {/* {props.user.username} */}
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        <strong>Adresse e-mail :</strong>
                                        {/* {props.user.email}: */}
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