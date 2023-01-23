import "./users.css"
import React, { useState } from "react";
import Profile from "./Profile"
import Reservation from "../site/Reservation/Reservation"

const Account = (props) => {
    const [currentTab, setcurrentTab] = useState({ name: "profile" })
    const [tabs] = useState([
        { tabKey: 'profile', tabTitle: "Mon profile" },
        { tabKey: 'reservation', tabTitle: "Mes réservation" },

    ]);
    const handleTabs = (name) => {
        setcurrentTab({ name });
    };
    return (
        <>
            <main className="tabs account">
                <ul>
                    {tabs.map((tab, index) => (
                        <li key={index} className={`tabs-pane ${currentTab.name === tab.tabKey ? "active" : ""}`}>
                            <h2 onClick={() => handleTabs(tab.tabKey)}>{tab.tabTitle}</h2>
                        </li>)
                    )}
                </ul>
            </main>
            <div className="tabs-content">
                {currentTab.name === "profile" && <Profile />}
                {currentTab.name === "reservation" && <Reservation />}
            </div>
        </>
    )


};
export default Account;