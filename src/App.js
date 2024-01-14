import React, { useState, useEffect } from 'react';
import Site from './pages/Site';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
    const [loading, setLoading] = useState(true);
    const loader = document.getElementById("pre-loader");

    useEffect(() => {
        if (loader) {
            setTimeout(() => {
                loader.style.display = "none";
                setLoading(false);
            }, 800);
        }
    }, [loader]);

    return (
        <div className="App">
            {!loading && (
                <motion.div
                    className="content-container"
                    initial={{ scale: 2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut", }}
                >
                    <BrowserRouter>
                        <Site />
                    </BrowserRouter>
                </motion.div>
            )}
        </div>
    );
}

export default App;
