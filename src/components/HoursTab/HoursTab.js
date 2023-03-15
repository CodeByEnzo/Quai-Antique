
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { hostname } from '../../config';
import { motion, AnimatePresence } from "framer-motion";
import './HoursTab.css'


function HoursTab() {
    const [hours, setHours] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${hostname}front/hours`);
            const hours = result.data;
            setHours(hours);
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
            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}

            >
                <table className="table hoursTable">
                    <thead>
                        <tr>
                            <th scope="col">Jour</th>
                            <th scope="col">Ouvre</th>
                            <th scope="col">Ferme</th>
                            <th scope="col">Ouvre</th>
                            <th scope="col">Ferme</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hours && Object.keys(hours).map(key => (
                            <tr key={key}>
                                <th scope="row">{hours[key].day_of_week}</th>
                                <td>{hours[key].lunch_opening_time}</td>
                                <td>{hours[key].lunch_closing_time}</td>
                                <td>{hours[key].dinner_opening_time}</td>
                                <td>{hours[key].dinner_closing_time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </motion.div>
        </AnimatePresence>
    ) : null;
}

export default HoursTab;
