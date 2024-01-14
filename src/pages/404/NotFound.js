import React, { Component } from 'react';
import './NotFound.css';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/LOGO-GOLD.png';

export default class NotFound extends Component {
    state = {
        isVisible: true,
    };

    handleExitComplete = () => {
        this.setState({ isVisible: false });
    };

    render() {
        const { isVisible } = this.state;

        return isVisible ? (
            <AnimatePresence onExitComplete={this.handleExitComplete}>
                <motion.main
                    className='main-margin'
                    
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={logo} className="NotFound-logo"></img>
                        <h1>Error 404</h1>
                        <p>This page doesn't exist...</p>
                    </div>
                </motion.main>
            </AnimatePresence>
        ) : null;
    }
}
