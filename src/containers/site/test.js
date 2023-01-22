import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'

function Test() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost/SERVEURQUAI/front/products',
            );

            setData(result.data);
            console.log(result.data);
        };
        fetchData();
    }, [])

    return (
        <Fragment>
            <div className='test'>
                <h1>TEST</h1>
                {Object.values(data).map(item => (
                    <li key={item.id}>
                        <p> {item.title} </p>
                        <p> {item.content} </p>
                        <img className='img-fluid' src={item.product_image}></img>
                    </li>

                ))}
            </div>

        </Fragment>
    )
}

export default Test;


