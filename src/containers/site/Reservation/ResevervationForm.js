import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import moment from 'moment';

const ReservationForm = (props) => (
    <div className="px-2 px-sm-5 mx-sm-5 row d-flex justify-content-center py-2">
        <form id="contactForm" className="form-border rounded p-3 row d-flex justify-content-center col-xl-5">

            <div className="mb-3 col-12 col-md-10">
                <label htmlFor="date" className="form-label">date</label>
                <input className="form-control"
                    id="date"
                    type="date"
                    name="date"
                    onChange={props.handleChange}
                    value={props.values.date}
                    onBlur={props.handleBlur}
                />
                {
                    props.touched.date &&
                    props.errors.date &&
                    <span className="text-danger">{props.errors.date}</span>
                }
            </div>
            <div className="mb-3 col-12 col-md-10">
                <label htmlFor="time" className="form-label">Time</label>
                <input className="form-control" id="time" type="time" placeholder="Time"
                    name="time"
                    onChange={props.handleChange}
                    value={props.values.time}
                    onBlur={props.handleBlur}

                />
                {
                    props.touched.time &&
                    props.errors.time &&
                    <span className="text-danger">{props.errors.time}</span>
                }
            </div>
            <div className="mb-3 col-12 col-md-10">
                <label htmlFor="number_of_people" className="form-label">Nombre de personne</label>
                <input
                    className="form-control"
                    id="number_of_people"
                    type="number"
                    placeholder="Nombre de personne"
                    name="number_of_people"
                    onChange={props.handleChange}
                    value={props.values.number_of_people}
                    onBlur={props.handleBlur}

                />
                {
                    props.touched.number_of_people &&
                    props.errors.number_of_people &&
                    <span className="text-danger">{props.errors.number_of_people}</span>
                }
            </div>
            <div className="mb-3 col-12 col-md-10">
                <label htmlFor="comment" className="form-label">Commentaire</label>
                <textarea
                    className="form-control"
                    id="comment"
                    type="text"
                    placeholder="Commentaire"
                    name="comment"
                    onChange={props.handleChange}
                    value={props.values.comment}
                    onBlur={props.handleBlur}
                ></textarea>
                {
                    props.touched.comment &&
                    props.errors.comment &&
                    <span className="text-danger">{props.errors.comment}</span>
                }
            </div>
            <div className="d-grid col-12 col-md-10">
                <button
                    className="btn sub-btn btn-lg"
                    type="submit"
                    onClick={props.handleSubmit}>
                    ENVOYER
                </button>
            </div>

        </form>
    </div>
)

export default withFormik({
    mapPropsToValues: () => ({
        date: "",
        time: "",
        number_of_people: "",
        comment: ""
    }),
    validationSchema: Yup.object().shape({
        date: Yup.string()
            .test('not-monday', "Les réservations ne sont pas autorisées les lundis.", function (value) {
                return moment(value, "YYYY-MM-DD").day() !== 1;
            })
            .test('not-past-date', "Vous ne pouvez pas réserver sur une date passée.", function (value) {
                return moment(value, "YYYY-MM-DD").isSameOrAfter(moment(), "day");
            })
            .required("La date est obligatoire"),

        time: Yup.string()
            .test(
                "is-between-12-14-or-19-21",
                "L'heure doit être entre 12h-14h ou 19h-21h",
                (value) => {
                    if (!value) {
                        return false;
                    }
                    const time = moment(value, "HH:mm");
                    const startMidi = moment("12:00", "HH:mm");
                    const endMidi = moment("14:00", "HH:mm");
                    const startSoir = moment("19:00", "HH:mm");
                    const endSoir = moment("21:00", "HH:mm");
                    return (
                        (time.isBetween(startMidi, endMidi) && time.hours() < 15) ||
                        (time.isBetween(startSoir, endSoir) && time.hours() < 22)
                    );
                }
            )
            .required("L'heure est obligatoire"),
        number_of_people: Yup.string()
            .matches(/^[0-9]+$/, "Le nombre de personnes doit être un nombre entier positif")
            .min(1, "Le nombre de personnes doit être au minimum 1")
            .max(15, "Le nombre de personnes doit être au maximum 15")
            .required("Le nombre de personnes est obligatoire"),
        comment: Yup.string()
            .min(10, "Votre message doit contenir plus de 50 caractères")
            .max(250, "Votre message doit contenir moins de 250 caractères")
    }),
    handleSubmit: (values, { props, resetForm }) => {
        const message = {
            date: values.name,
            time: values.time,
            number_of_people: values.time,
            content: values.comment
        };
        props.sendMail(message);
        resetForm();
    }
})(ReservationForm); 