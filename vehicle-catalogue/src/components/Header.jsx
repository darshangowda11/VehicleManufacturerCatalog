import React from "react";
import "./header.css"
const Header = () => {
    return (
        <div className="header">
            <div className="search">
                <label htmlFor="search">Search:</label>
                <input type="text" placeholder="search.." id="search" />
            </div>
            <div className="title">
                <h1>Vehicale Manufacturers</h1>
            </div>
            <div className="filter">
                <label htmlFor="vehicle-type">Filter by vehicale Type:</label>
                <select id="vehicale-tupe">
                    <option value="All">All</option>
                    <option value="Car">passeneger Car</option>
                    <option value="LSV">LSV</option>
                    <option value="trailor">Trailor</option>
                </select>
            </div>
           
        </div>
    );
};
export default Header;
