import "./menu.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { hostname } from "../../../config";
import { motion, AnimatePresence } from "framer-motion";


function Menu() {
    const [entrees, setEntrees] = useState([]);
    const [plats, setPlats] = useState([]);
    const [desserts, setDesserts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${hostname}front/products`);
            const products = Object.values(result.data);
            setEntrees(products.filter(product => product.category_id == 1));
            setPlats(products.filter(product => product.category_id == 2));
            setDesserts(products.filter(product => product.category_id == 3));
        };
        fetchData();
    }, [])

    //page transitions
    const [isVisible, setIsVisible] = useState(true);
    const handleExitComplete = () => {
        setIsVisible(false);
    };

    return isVisible ? (
        <AnimatePresence onExitComplete={handleExitComplete}>
            <motion.main
                className='main-margin d-flex flex-column mx-auto pb-5'

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                
            >
            <h1 className='text-center'>La carte</h1>
            <h2 className='h2Menu row mt-5'>Entrées</h2>
            {entrees.map((product, index) => (
                <div className='row container border-bottom align-items-center' key={index}>
                    <p className='col-11 col-xl-8 mt-2' key={product.unique_id}>-{product.title}
                        <br />
                        <small>{product.content}</small></p>
                    <p className='col-1 col-xl-4 text-xl-center' key={product.unique_id}>{product.prix}€</p>
                </div>
            ))}

            <h2 className='h2Menu row mt-5'>Plats</h2>
            {plats.map((product, index) => (
                <div className='row container border-bottom align-items-center' key={index}>
                    <p className='col-11 col-xl-8 mt-2' key={product.unique_id}>-{product.title}
                        <br />
                        <small>{product.content}</small></p>
                    <p className='col-1 col-xl-4 text-xl-center' key={product.unique_id}>{product.prix}€</p>
                </div>
            ))}

            <h2 className='h2Menu row mt-5'>Desserts</h2>
            {desserts.map((product, index) => (
                <div className='row container border-bottom align-items-center' key={index}>
                    <p className='col-11 col-xl-8 mt-2' key={product.unique_id}>-{product.title}
                        <br />
                        <small>{product.content}</small>
                    </p>
                    <p className='col-1 col-xl-4 text-xl-center' key={product.unique_id}>{product.prix}€</p>
                </div>
            ))}
            </motion.main>
        </AnimatePresence>
    ) : null;
}

export default Menu;
