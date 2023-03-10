import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import "../../containers/site/Contact/Contact.css";

const ContactForm = (props) => (
    <div className="px-2 px-sm-5 mx-sm-5 row d-flex justify-content-center py-2">
        <form id="contactForm"
            className="
            form-border 
            rounded
            shadow
            p-3 row
            d-flex
            justify-content-center
            col-xl-7
            bg-dark">

            <div className="mb-3 col-12 col-md-10">
                <label htmlFor="name" className="form-label">Name</label>
                <input className="form-control" id="name" type="text" placeholder="Name"
                    name="name"
                    onChange={props.handleChange}
                    value={props.values.name}
                    onBlur={props.handleBlur}
                />
                {
                    props.touched.name && props.errors.name && <span className="text-danger">{props.errors.name}</span>
                }
            </div>
            <div className="mb-3 col-12 col-md-10">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input className="form-control" id="email" type="email" placeholder="Email Address"
                    name="email"
                    onChange={props.handleChange}
                    value={props.values.email}
                    onBlur={props.handleBlur}

                />
                {
                    props.touched.email && props.errors.email && <span className="text-danger">{props.errors.email}</span>
                }
            </div>
            <div className="mb-3 col-12 col-md-10">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" type="text" placeholder="Message"
                    name="message"
                    onChange={props.handleChange}
                    value={props.values.message}
                    onBlur={props.handleBlur}
                ></textarea>
                {
                    props.touched.message && props.errors.message && <span className="text-danger">{props.errors.message}</span>
                }
            </div>
            <div className="d-grid col-12 col-md-10">
                <button className="btn sub-btn btn-lg" type="submit" onClick={props.handleSubmit}>ENVOYER</button>
            </div>

        </form>
    </div>
)

export default withFormik({
    mapPropsToValues: () => ({
        name: "",
        email: "",
        message: ""
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(5, "Le nom doit contenir au minimum 5 caract??res")
            .required("Le nom est obligatoire"),
        email: Yup.string()
            .email("L'email n'a pas le bon format")
            .required("L'email est obligatoire)"),
        message: Yup.string()
            .min(50, "Votre message doit contenir plus de 50 caract??res")
            .max(250, "Votre message doit contenir moins de 250 caract??res")
    }),
    handleSubmit: (values, { props, resetForm }) => {
        const message = {
            name: values.name,
            email: values.email,
            content: values.message
        };
        props.sendMail(message);
        resetForm();
    }
})(ContactForm); 