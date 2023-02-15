import React, { useState } from 'react';
import Site from './containers/site/Site';
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const loader = document.getElementById("pre-loader");
    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
            setLoading(false);
        }, 1500);
    }
    return (
        !loading && (
            <div className="App">
                <BrowserRouter>
                    <Site />
                </BrowserRouter>
            </div>
        )
    );
}

export default App;
