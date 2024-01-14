import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { hostname } from "../../config";
import * as Yup from "yup";
import axios from "axios";

const UpdateProfileForm = ({ onUpdateSuccess, initialUserValues }) => {


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const fetchUserData = async () => {
                try {
                    const response = await fetch(`${hostname}front/authenticate`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    });
                    const data = await response.json();
                    localStorage.setItem('client_id', data.user.id);

                } catch (error) {
                    console.error("Error fetching user data", error);
                }
            };
            fetchUserData();
        }
    }, []);

    const ChangeProfileSchema = Yup.object().shape({
        username: Yup.string()
            .required("Un nom d'utilisateur est requis")
            .min(5, "Votre nom d'utilisateur doit contenir au moins 5 caractères.")
            .max(20, "Votre nom d'utilisateur doit contenir moins de 20 caractères."),
        number: Yup.string()
            .min(9, "Minimum 10 chiffres")
            .max(15, "Maximum 15 chiffres")
            .matches(/^[0-9]+$/, "Le numéro doit contenir uniquement des chiffres")
            .required("Le numéro est obligatoire, nous l'utiliserons en cas de réservation."),
        email: Yup.string().email()
            .required("L'email est requis et doit être valide."),
        password: Yup.string()
            .required("Un mot de passe est requis.")
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un caractère spécial"
            )
    });

    return (
        <div className="container form-border shadow rounded p-3 row d-flex justify-content-center col-xl-6 bg-dark mx-auto col-12 col-md-10">
            <Formik
                initialValues={initialUserValues}
                validationSchema={ChangeProfileSchema}
                onSubmit={(values) => {
                    const { username, number, email, password } = values;
                    const client_id = localStorage.getItem("client_id");
                    const requestBody = {
                        username,
                        number,
                        email,
                        password,
                        client_id
                    };
                    axios
                        .post(`${hostname}front/userUpdateInfo`, requestBody, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`,
                            },
                        })
                        .then((response) => {
                            if (response.data && response.data.status === "success") {
                                const updatedUserData = {
                                    user: {
                                        id: response.data.client_id,
                                        email: response.data.email,
                                        username: response.data.username,
                                        number: response.data.number,
                                        password: response.data.password,
                                        created_at: initialUserValues.created_at
                                    },
                                };

                                onUpdateSuccess(updatedUserData);
                            } else {
                                // Mise à jour échouée, gérer l'erreur
                                console.error("Erreur de mise à jour du profil");
                            }
                        })
                        .catch((error) => {
                            // Gérer les erreurs de la requête
                            console.error("Erreur lors de la requête de mise à jour du profil", error);
                        });

                }}

            >
                {({ errors, touched }) => (
                    <Form className="d-flex flex-column justify-content-center align-items-center">
                        <div className="form-group mb-3 col-12">
                            <label htmlFor="username">Nom d'utilisateur :</label>
                            <Field name="username" type="text" placeholder="Nom d'utilisateur" className={`form-control ${errors.username && touched.username ? "is-invalid" : ""}`} />
                            <ErrorMessage name="username" component="div" className="text-danger" />
                        </div>
                        <div className="form-group mb-3 col-12">
                            <label htmlFor="number">Numéro de téléphone :</label>
                            <Field name="number" type="text" placeholder="Numéro de téléphone" className={`form-control ${errors.number && touched.email ? "is-invalid" : ""}`} />
                            <ErrorMessage name="number" component="div" className="text-danger" />
                        </div>
                        <div className="form-group mb-3 col-12">
                            <label htmlFor="email">Email :</label>
                            <Field name="email" type="email" placeholder="Email" className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`} />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <div className="form-group mb-3 col-12">
                            <label htmlFor="password">Mot de passe :</label>
                            <Field name="password" type="password" placeholder="Mot de passe" className={`form-control ${errors.password && touched.password ? "is-invalid" : ""}`} />
                            <ErrorMessage name="password" component="div" className="text-danger" />
                        </div>
                        <button type="submit" className="btn sub-btn btn-lg col-5">Valider</button>
                    </Form>
                )}
            </Formik>
        </div>
    );

}
export default UpdateProfileForm
