import "./users.css"
import React, { useState } from "react";
import Profile from "./Profile"
import Reserved from "../site/Reservation/Reserved";
import { motion, AnimatePresence } from "framer-motion";

const Account = (props) => {
    const [currentTab, setcurrentTab] = useState({ name: "profile" })
    const [tabs] = useState([
        { tabKey: 'profile', tabTitle: "Mon profile" },
        { tabKey: 'reservation', tabTitle: "Mes réservations" },

    ]);
    const handleTabs = (name) => {
        setcurrentTab({ name });
    };
    //page transitions
    const [isVisible, setIsVisible] = useState(true);
    const handleExitComplete = () => {
        setIsVisible(false);
    };

    return isVisible ? (
        <AnimatePresence onExitComplete={handleExitComplete}>
            <motion.main
                className='main-margin'

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
            <div className="tabs account">
                <ul>
                    {tabs.map((tab, index) => (
                        <li key={index} className={`tabs-pane ${currentTab.name === tab.tabKey ? "active" : ""}`}>
                            <h2 onClick={() => handleTabs(tab.tabKey)}>{tab.tabTitle}</h2>
                        </li>)
                    )}
                </ul>
            </div>
            <div className="tabs-content">
                {currentTab.name === "profile" && <Profile />}
                {currentTab.name === "reservation" && <Reserved />}
            </div>
            </motion.main>
        </AnimatePresence>
    ) : null


};
export default Account;