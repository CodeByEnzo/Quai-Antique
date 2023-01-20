import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'

function Test() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'hhttps://jsonplaceholder.typicode.com/posts',
                // 'hhttp://localhost/SERVEURQUAI/front/products',
            );

            setData(result.data);
        };
        fetchData();
    })

    return (
        <Fragment>
            <div className='test'>
                <h1>TEST</h1>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <p> {item.title} </p>

                        </li>
                    ))}
                </ul>
            </div>

        </Fragment>
    )
}

export default Test;


