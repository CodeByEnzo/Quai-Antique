import React, { useState } from 'react';
import axios from 'axios';
import { hostname } from '../../config';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Register() {
    const [isRegister, setIsRegister] = useState(false)

    const handleRegister = () => {
        setIsRegister(true)
    }


    const reservationSchema = Yup.object().shape({
        username: Yup.string()
            .min(5, "Le nom d'utilisateur doit avoir au moins 5 caractères")
            .max(20, "Le nom d'utilisateur ne doit pas dépasser 20 caractères")
            .required("Le nom d'utilisateur est obligatoire"),
        number: Yup.string()
            .min(9, "Minimum 10 chiffres")
            .max(15, "Maximum 15 chiffres")
            .matches(/^[0-9]+$/, "Le numéro doit contenir uniquement des chiffres")
            .required("Le numéro est obligatoire, nous l'utiliserons en cas de réservation."),
        email: Yup.string()
            .email("L'adresse e-mail doit être valide")
            .required("L'adresse e-mail est obligatoire"),
        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
                "Le mot de passe doit contenir au moins 1 minuscule, 1 majuscule, 1 caractère spécial et avoir une longueur minimale de 8 caractères"
            )
            .required("Le mot de passe est obligatoire"),
    });
    return (
        <motion.main
            className='main-margin'

            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <h1 className='text-center'>Créer un comtpe</h1>
            <div className='container-fluid d-flex justify-content-center'>
                {isRegister ? (
                    <div>
                        <p className="text-center">Votre compte à été créé.</p>
                        <NavLink to="/login" className="fw-bold nav-link text-center form-border rounded p-2 bg-dark">
                            Connectez-vous
                        </NavLink>
                    </div>
                ) : (
                    <Formik
                        className="form-border rounded bg-dark mb-5 col-12 col-md-6 col-xl-4 p-2"
                        initialValues={{ username: "", number: "", email: "", password: "" }}
                        validationSchema={reservationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            const { username, number, email, password } = values;
                            const requestBody = { username, number, email, password };
                            axios.post(`${hostname}front/register`, requestBody, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })
                                .then((response) => {
                                    if (response.status >= 200 && response.status < 300) {
                                        handleRegister();
                                    } else {
                                        console.log('Erreur lors de la création du compte');
                                    }
                                })
                                .catch((error) => {
                                    console.log(error.response.data);
                                    console.log(error.response.status);
                                    console.log(error.response.headers);
                                })
                                .finally(() => {
                                    setSubmitting(false);
                                });
                        }}

                        validateOnChange={true}
                    >
                        {({ errors, touched }) => (
                            <Form className="form-border rounded shadow p-3 row d-flex justify-content-center col-12 col-md-6 bg-dark">
                                <div className="form-group my-3">
                                    <label>Nom d'utilisateur:</label>
                                    <Field name='username' type="text" className={`form-control ${errors.date && touched.date ? "is-invalid" : ""}`} />
                                    <ErrorMessage name="username" component="div" className="text-danger" />
                                </div>
                                <div className="form-group my-3">
                                    <label>Numéro de téléphone:</label>
                                    <Field name='number' type="text" className={`form-control ${errors.date && touched.date ? "is-invalid" : ""}`} />
                                    <ErrorMessage name="number" component="div" className="text-danger" />
                                </div>
                                <div className="form-group my-3">
                                    <label>Adresse e-mail:</label>
                                    <Field name='email' type="email" className={`form-control ${errors.date && touched.date ? "is-invalid" : ""}`} />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                </div>
                                <div className="form-group my-3">
                                    <label>Mot de passe:</label>
                                    <Field name='password' type="password" className={`form-control ${errors.date && touched.date ? "is-invalid" : ""}`} />
                                    <ErrorMessage name="password" component="div" className="text-danger" />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button type="submit" className="btn sub-btn btn-lg btn-block my-2">S'enregistrer</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                )}
            </div>
        </motion.main>
    )
}

export default Register;