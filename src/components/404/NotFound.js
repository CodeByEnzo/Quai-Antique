import React, { Component } from 'react';
import './NotFound.css';
import { motion } from 'framer-motion';


export default class NotFound extends Component {
    render() {
        return (
            <motion.main
                className='NotFound'

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className='NotFound-content'>
                    <h1>Error 404</h1>
                    <p>This page doesn't exist...</p>

                <div className='NotFound-img'></div>
                </div>

            </motion.main>
        )
    }
}
