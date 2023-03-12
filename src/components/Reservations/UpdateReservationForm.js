import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { hostname } from "../../config";
import * as Yup from "yup";
import axios from "axios";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr"); // Définir l'heure locale française pour Moment.js

const UpdateReservationForm = (props) => {
    const [hours, setHours] = useState(null);
    const { reservationIdToUpdate, onUpdateSuccess } = props;

    useEffect(() => {
        axios.get(`${hostname}front/hours`).then((response) => {
            setHours(response.data);
        });
        const token = localStorage.getItem("token");
        if (token) {
            const fetchUserData = async () => {
                try {
                    const response = await fetch(`${hostname}front/authenticate`, {
                        method: "POST",
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

    const reservationSchema = Yup.object().shape({
        date: Yup.date()
            .required("La date est requise")
            .min(new Date(), "Vous ne pouvez pas choisir une date passée")
            .test("is-opening-day", "Le restaurant est fermé à cette date", (date) => {
                // Get the selected date and format the first letter to uppercase so it match with database
                const dayOfWeek = moment(date).format("dddd").toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
                // Return all open days
                const openingDays = Object.values(hours).filter(day => day.lunch_opening_time !== "FERME").map(day => day.day_of_week);
                // Verify if day selected is not a closed day
                const isOpeningDay = openingDays.some(day => day === dayOfWeek);
                // Boolean
                return isOpeningDay;
            }),
        time: Yup.string()
            .required("L'heure est obligatoire")
            .test("is-valid-time", "Le restaurant est fermé à cette heure", function (value) {
                const selectedDate = this.parent.date; // Récupérer la date sélectionnée dans le parent object
                const dayOfWeek = moment(selectedDate).format("dddd").toLowerCase().replace(/^\w/, (c) => c.toUpperCase()); // Obtenir le jour de la semaine pour la date sélectionnée
                const openingDays = Object.values(hours)
                    .filter(day => day.lunch_opening_time !== "FERME")
                    .map(day => day.day_of_week);
                const openingHours = hours[openingDays.indexOf(dayOfWeek)];
                if (openingHours.lunch_opening_time === "FERME" || openingHours.dinner_opening_time === "FERME") {
                    return true;
                }
                if (value) {
                    const openingHoursLunch = {
                        openingTime: moment(openingHours.lunch_opening_time, "HH:mm"),
                        closingTime: moment(openingHours.lunch_closing_time, "HH:mm")
                    };
                    const openingHoursDinner = {
                        openingTime: moment(openingHours.dinner_opening_time, "HH:mm"),
                        closingTime: moment(openingHours.dinner_closing_time, "HH:mm")
                    };
                    const selectedTime = moment(value, "HH:mm"); // Convertir la chaîne d'heure en objet moment
                    // Vérifier si l'heure sélectionnée est pendant les horaires d'ouverture pour le déjeuner ou pour le dîner
                    const isDuringLunchHours = selectedTime >= openingHoursLunch.openingTime && selectedTime < openingHoursLunch.closingTime;
                    const isDuringDinnerHours = selectedTime >= openingHoursDinner.openingTime && selectedTime < openingHoursDinner.closingTime;
                    if (!isDuringLunchHours && !isDuringDinnerHours) {
                        return false; // Si l'heure n'est pas pendant les horaires d'ouverture pour le déjeuner ou pour le dîner, la validation ne passe pas
                    }
                    return true; // Sinon, la validation passe
                }
            }),
        number_of_people: Yup.number()
            .required("Le nombre de couvert est obligatoire.")
            .min(1, "Au moins une personne est requise")
            .max(15, "Veuillez prendre contact avec le restaurant pour plus de 15 couverts"),
        comment: Yup.string()
            .min(5, "Votre message doit contenir plus de 5 caractères")
            .max(250, "Votre message doit contenir moins de 250 caractères")
    });

    return (
        <motion.div className="container form-border shadow rounded p-3 row d-flex justify-content-center col-xl-6 bg-dark mx-auto mb-5 col-12 col-md-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Formik
                initialValues={{
                    date: "",
                    time: "",
                    number_of_people: "",
                    comment: ""
                }}
                validationSchema={reservationSchema}
                onSubmit={(values) => {
                    const client_id = localStorage.getItem('client_id');
                    const reservation_id = reservationIdToUpdate
                    const { date, time, number_of_people, comment } = values;
                    const requestBody = {
                        date,
                        time,
                        number_of_people,
                        comment,
                        reservation_id,
                        client_id
                    };
                    axios
                        .post(`${hostname}front/updateReservation`, requestBody, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`,
                            },
                        })
                        .then((response) => {
                            onUpdateSuccess()
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }}
            >
                {({ errors, touched }) => (
                    <Form className="d-flex flex-column justify-content-center align-items-center">
                        <div className="form-group mb-3 col-12">
                            <label htmlFor="date">Date :</label>
                            <Field name="date" type="date" className={`form-control ${errors.date && touched.date ? "is-invalid" : ""}`} />
                            <ErrorMessage name="date" component="div" className="text-danger" />
                        </div>
                        <div className="form-group mb-3 col-12">
                            <label htmlFor="time">Heure :</label>
                            <Field name="time" type="time" className={`form-control ${errors.time && touched.time ? "is-invalid" : ""}`} />
                            <ErrorMessage name="time" component="div" className="text-danger" />
                        </div>
                        <div className="form-group mb-3 col-12">
                            <label htmlFor="number_of_people">Nombre de personnes :</label>
                            <Field name="number_of_people" type="number" placeholder="Renseignez ici le nombre de couvert" className={`form-control ${errors.number_of_people && touched.number_of_people ? "is-invalid" : ""}`} />
                            <ErrorMessage name="number_of_people" component="div" className="text-danger" />
                        </div>
                        <div className="form-group mb-3 col-12">
                            <label htmlFor="comment">Commentaire :</label>
                            <Field name="comment" as="textarea" placeholder='Exemple : "Je suis allérgique aux produits laitier"' className={`form-control ${errors.comment && touched.comment ? "is-invalid" : ""}`} />
                            <ErrorMessage name="comment" component="div" className="text-danger" />
                        </div>
                        <button type="submit" className="btn sub-btn btn-lg col-5">Réserver</button>
                    </Form>
                )}
            </Formik>
        </motion.div>
    );

}
export default UpdateReservationForm
