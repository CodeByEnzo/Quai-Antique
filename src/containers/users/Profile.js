import "./users.css";
import React from "react";

const Profile = (props) => {
    return (
        <main className="mb-5">
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
                                {/* {props.user.email} */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};
export default Profile;