import React from "react";
import VehicleList from "./vehicles.json";
import Button from "../../Elements/Button";
import Filter from "../../Elements/Filter";
import PageNo from "../../Elements/PageNo";

const Vehicles = () => {
  const statusChecker = status => {
    if (status === "On Trip") {
      return "pending";
    }
    if (status === "Confirmed") {
      return "confirm";
    }
    if (status === "Free") {
      return "confirm";
    }
    if (status === "On Leave") {
      return "cancel";
    }
  };
  return (
    <div>
      <div className="action">
        <Button position="left" value="New Booking" />
        <Filter />
      </div>

      <div className="pageNo-info">
        <p>Showing 10 of 50.</p>
      </div>

      <table className="booking-table">
        <thead>
          <tr className="table-head">
            <th>Vehicle ID</th>
            <th>Model</th>
            <th>Driver</th>
            <th>Vehicle Status</th>
            <th>Vehicle Number</th>
            <th>Date of Registration</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {VehicleList.vehicles.map((b, i) => {
            return (
              <tr key={b.id} className="table-contents">
                <td>{b.id}</td>
                <td>{b.src}</td>
                <td>{b.host}</td>
                <td>
                  {" "}
                  <span className={`status ` + statusChecker(b.status)}>
                    {b.status}
                  </span>{" "}
                </td>
                <td>{b.user}</td>
                <td>{b.date}</td>
                <td>
                  <span>...</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <PageNo />
    </div>
  );
};

export default Vehicles;
