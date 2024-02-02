import "./legal.css"
import React from 'react';
import { motion } from "framer-motion";

const Legal = () => {
    return (
        <motion.main
            className='legal container px-5'

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1 className="text-center pb-5">Mentions légales</h1>
            <span className="pb-5">
                <p>
                    Le Quai Antique SARL au capital de 0 €
                    <br />
                    dont le siège social est situé :  00 Rue fictive 75000 Paris
                    <br />
                    représentée par Prenom Nom, en sa qualité de PDG
                    <br />
                    immatriculée au RCS de xxx xxx xxx xxx
                    <br />
                    n° de téléphone : 00 00 00 00 00
                    <br />
                    adresse mail : Lequaiantique@exemple.com
                    <br />
                    directeur de la publication : Prenom Nom
                    <br />
                </p>
                <p>
                    1.3 Hébergeur : Le Quai Antique est hébergé par INFOMANIAK.
                </p>
            </span>


        </motion.main>
    );
};

export default Legal