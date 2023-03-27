import React, { useState, useEffect } from "react";
import { getAllManufactureres, getManufacturerDetails } from "../API";
import "./header.css";
function Apps() {
  const [manufacturer, setManufacturers] = useState([]);
  const [selectManufacturers, setSelectManufacturers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllManufactureres();
      setManufacturers(data);
      console.log(setManufacturers);
    };
    fetchData();
  }, []);

  const handleRowClick = async () => {
    const data = await getManufacturerDetails();
    setSelectManufacturers(data);
    console.log(selectManufacturers);
  };
  return (
    <div className="App">
      <table>
        <thead>
          <tr className="headingColumn">
            <th>Name</th>
            <th>Country</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody className="dataCloumn">
          {manufacturer.map((manufacturer) => (
            <tr
              key={manufacturer.Mfr_ID}
              onClick={() => handleRowClick(manufacturer.Mfr_ID)}
            >
              <td>{manufacturer.Mfr_Name}</td>
              <td>{manufacturer.Country}</td>
              <td>{manufacturer.VehicleTypes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="popup">
        <h2>{selectManufacturers.Mfr_Name}</h2>
        <p>Registration Name: {selectManufacturers.RegistrationName}</p>
        <p>Current Head:{selectManufacturers.CurrentHead}</p>
        <p>Designation: {selectManufacturers.HeadDesignation}</p>
        <p> Addess:{selectManufacturers.Addess}</p>
        <p>State: {selectManufacturers.State}</p>
      </div>
    </div>
  );
}
export default Apps;
