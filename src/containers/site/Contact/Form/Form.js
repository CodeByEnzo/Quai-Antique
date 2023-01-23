import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import "../Contact.css"

const Form = (props) => (
    <div className="px-2 px-sm-5 mx-sm-5 row d-flex justify-content-center">
        <form id="contactForm" className="form-border rounded p-3 row d-flex justify-content-center col-xl-5">

            <div className="mb-3 col-12 col-md-10">
                <label className="form-label" for="name">Name</label>
                <input className="form-control" id="name" type="text" placeholder="Name"
                    name="name"
                    onChange={props.handleChange}
                    value={props.values.name}
                    Blur={props.handleBlur}
                />
                {
                    props.touched.name && props.errors.name && <span style={{color:"red"}}>{props.errors.name}</span>
                }
            </div>

            <div className="mb-3 col-12 col-md-10">
                <label className="form-label" for="email">Email Address</label>
                <input className="form-control" id="email" type="email" placeholder="Email Address"
                    name="email"
                    onChange={props.handleChange}
                    value={props.values.email}
                    Blur={props.handleBlur}

                />
                {
                    props.touched.email && props.errors.email && <span className="text-danger">{ props.errors.email }</span>   
                }
            </div>


            <div className="mb-3 col-12 col-md-10">
                <label className="form-label" for="message">Message</label>
                <textarea className="form-control" id="message" type="text" placeholder="Message"
                    name="message"
                    onChange={props.handleChange}
                    value={props.values.message}
                    Blur={props.handleBlur}
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
            .min(5, "Le nom doit contenir au minimum 5 caractères")
            .required("Le nom est obligatoire"),
        email: Yup.string()
            .email("L'email n'a pas le bon format")
            .required("L'email est obligatoire)"),
        message: Yup.string()
            .min(50, "Votre message doit contenir plus de 50 caractères")
            .max(250, "Votre message doit contenir moins de 250 caractères")
    }),
    handleSubmit: (values, {props}) => {
        const message = {
            name: values.name,
            email: values.email,
            content: values.message
        }
        props.sendMail(message);
    }
})(Form); 