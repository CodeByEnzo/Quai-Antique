import React, { Component } from 'react';
import './menu.css'
import axios from 'axios'

class menu extends Component {
    state = {
        products: null
    }
    componentDidMount = () => {
        axios.get(`http://localhost/SERVEURQUAI/front/products`)
            .then(response => {
                this.setState({ products: Object.values(response.data) });
            })
    }
    render() {
        return (

            <div className='menu'>
                <h1>Le menu</h1>
                <div className='container'>
                    {
                        this.state.products &&
                        this.state.products.map(product => {
                            return <h1>{product.id} - {product.title}</h1>
                        })
                    }

                </div>

            </div>
        )
    }
}

export default menu;