import React from "react";
import Bookings from "./bookings.json";
import Button from "../../../common/Elements/Button";
import Filter from "../../../common/Elements/Filter";
import PageNo from "../../../common/Elements/PageNo";

const RecentBookings = () => {
  const statusChecker = status => {
    if (status === "Pending") {
      return "pending";
    }
    if (status === "Confirmed") {
      return "confirm";
    }
    if (status === "Cancelled") {
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
            <th>Booking ID</th>
            <th>Source</th>
            <th>Host</th>
            <th>Booking Status</th>
            <th>User</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {Bookings.bookings.map((b, i) => {
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
                  <div className="actions">
                    <span className="dot top"></span>
                    <span className="dot middle"></span>
                    <span className="dot bottom"></span>
                  </div>
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

export default RecentBookings;
