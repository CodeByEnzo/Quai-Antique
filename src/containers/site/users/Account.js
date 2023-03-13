import "./users.css"
import React, { useState } from "react";
import Profile from "./Profile"
import Reserved from "../Reservation/Reserved";
import Reservation from "../Reservation/Reservation";
import { motion } from "framer-motion";

const Account = (props) => {
    const [currentTab, setcurrentTab] = useState({ name: "profile" })
    const [tabs] = useState([
        { tabKey: 'profile', tabTitle: "Profile" },
        { tabKey: 'reservation', tabTitle: "Réservations" },
        { tabKey: 'reserved', tabTitle: "Réserver" },

    ]);
    const handleTabs = (name) => {
        setcurrentTab({ name });
    };


    return (
        <motion.main
            className='main-margin'

            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="tabs account">
                <ul id="ul-account">
                    {tabs.map((tab, index) => (
                        <li key={index} className={`tabs-pane ${currentTab.name === tab.tabKey ? "active" : ""}`}>
                            <h2 id="account-title" className="text-center" onClick={() => handleTabs(tab.tabKey)}>{tab.tabTitle}</h2>
                        </li>)
                    )}
                </ul>
            </div>
            <div className="tabs-content">
                {currentTab.name === "profile" && <Profile />}
                {currentTab.name === "reservation" && <Reserved />}
                {currentTab.name === "reserved" && <Reservation />}
            </div>
        </motion.main>
    )


};
export default Account;