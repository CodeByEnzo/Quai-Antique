import './menu.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
    const [entrees, setEntrees] = useState([]);
    const [plats, setPlats] = useState([]);
    const [desserts, setDesserts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/SERVEURQUAI/front/products')
            .then(res => {
                const products = Object.values(res.data);
                setEntrees(products.filter(product => product.category_id === 1));
                setPlats(products.filter(product => product.category_id === 2));
                setDesserts(products.filter(product => product.category_id === 3));
            });
    }, []);

    return (
        <div className='menu container px-5'>
            <h1 className='h1Menu'>La carte</h1>
            <h2 className='h2Menu row mt-5'>Entrées</h2>
            {entrees.map(product => (
                <div className='row container border-bottom align-items-center'>
                    <p className='col-11 col-xl-8 mt-2' key={product.id}>-{product.title}<br /><small>{product.content}</small></p>
                    <p className='col-1 col-xl-4 text-xl-center' key={product.id}>{product.prix}€</p>
                </div>

            ))}

            <h2 className='h2Menu row git add . mt-5'>Plats</h2>
            {plats.map(product => (
                <div className='row container border-bottom align-items-center'>
                    <p className='col-11 col-xl-8 mt-2' key={product.id}>-{product.title}<br /><small>{product.content}</small></p>
                    <p className='col-1 col-xl-4 text-xl-center' key={product.id}>{product.prix}€</p>
                </div>
            ))}

            <h2 className='h2Menu row mt-5'>Desserts</h2>
            {desserts.map(product => (
                <div className='row container border-bottom align-items-center'>
                    <p className='col-11 col-xl-8 mt-2' key={product.id}>-{product.title}<br /><small>{product.content}</small></p>
                    <p className='col-1 col-xl-4 text-xl-center' key={product.id}>{product.prix}€</p>
                </div>
            ))}
        </div>
    );
};

export default Menu