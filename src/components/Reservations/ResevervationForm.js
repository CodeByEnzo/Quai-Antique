import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { hostname } from "../../config";
import * as Yup from "yup";
import axios from "axios";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

const ReservationForm = () => {
    const [hours, setHours] = useState(null);
    const [reservationSent, setReservationSent] = useState(false)

    useEffect(() => {
        axios.get(`${hostname}front/hours`)
            .then((response) => {
                setHours(response.data);
            })
            .catch((error) => {
                console.error("Error fetching hours data", error);
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

                    if (response.status !== 200) {
                        alert('Votre session a expiré, veuillez vous reconnecter.');
                        window.location.href = "/login";
                        return;
                    }

                    const data = await response.json();

                    if (data && data.user) {
                        localStorage.setItem('client_id', data.user.id);
                    } else {
                        alert('Une erreur est survenue lors de la récupération des informations utilisateur.');
                        window.location.href = "/login";
                        return;
                    }
                } catch (error) {
                    console.error("Error fetching user data", error);
                }
            };
            fetchUserData();
        } else {
            alert('Votre session a expiré, veuillez vous reconnecter.');
            window.location.href = "/login";
        }
    }, []);

    const handleSentReservation = () => {
        setReservationSent(true)
    }
    const reservationSchema = Yup.object().shape({
        date: Yup.date()
            .required("Une date est requise.")
            .min(new Date(), "Vous ne pouvez pas choisir une date passée")
            .test("is-opening-day", "Le restaurant est fermé à cette date", (date) => {
                // Get the selected day of the week
                const dayOfWeek = moment(date).format("dddd").toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
                // Get the opening hours for the selected day of the week
                const openingHours = Object.values(hours).find((day) => day.day_of_week === dayOfWeek);
                // Check if the restaurant is closed for the selected day
                const isClosed = !openingHours || openingHours.lunch_opening_time === "FERME";
                // Return the validation result
                return !isClosed;
            }),
        time: Yup.string()
            .when("date", {
                // Only run validation if "date" field is present and valid
                is: (date) => date && moment(date).isValid(),
                // Validation function
                then: Yup.string().test("is-valid-time", "Le restaurant est fermé à cette heure", function (time) {
                    // Get selected date and day of week
                    const selectedDate = moment(this.parent.date);
                    const dayOfWeek = selectedDate.format("dddd").toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
                    // Get opening hours for the selected day of week
                    const openingHours = Object.values(hours).find((day) => day.day_of_week === dayOfWeek);
                    // Get lunch and dinner opening/closing times
                    const lunchOpeningTime = openingHours && moment(openingHours.lunch_opening_time, "HH:mm");
                    const lunchClosingTime = openingHours && moment(openingHours.lunch_closing_time, "HH:mm");
                    const dinnerOpeningTime = openingHours && moment(openingHours.dinner_opening_time, "HH:mm");
                    const dinnerClosingTime = openingHours && moment(openingHours.dinner_closing_time, "HH:mm");
                    // Get selected time
                    const selectedTime = moment(time, "HH:mm");
                    // Check if selected time is within lunch or dinner hours
                    const isWithinLunchHours = (selectedTime >= lunchOpeningTime && selectedTime <= lunchClosingTime);
                    const isWithinDinnerHours = (selectedTime >= dinnerOpeningTime && selectedTime <= dinnerClosingTime);
                    // Return validation result
                    return (isWithinLunchHours || isWithinDinnerHours);
                }),
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
        <div className="container form-border shadow rounded p-3 row d-flex justify-content-center col-xl-6 bg-dark mx-auto mb-5 col-12 col-md-8">
            {reservationSent ? (
                <p className="text-center">Votre réservervation est enregistrer</p>
            ) : (
                 <Formik
                initialValues={{ date: "", time: "", number_of_people: "", comment: "" }}
                validationSchema={reservationSchema}
                onSubmit={(values) => {
                    const client_id = localStorage.getItem('client_id');
                    const { date, time, number_of_people, comment } = values;
                    const requestBody = { date, time, number_of_people, comment, client_id };
                    axios
                        .post(`${hostname}front/reservation`, requestBody, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`,
                            },
                        })
                        .then((response) => { handleSentReservation() })
                        .catch((error) => { console.log(error); });
                }}
                validateOnChange={true}
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
             )}
           
        </div>
    );

}
export default ReservationForm

