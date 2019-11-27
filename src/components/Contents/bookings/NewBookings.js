import React, { Component } from "react";
import Button from "../../Elements/Button";

import Input from "../../Elements/Input";

class NewBooking extends Component {
  state = {
    name: "",
    email: "",
    contact: "",
    vehicle: "",
    vehicleNo: "",
    pickupLocation: "",
    dropLocation: "",
    journeyDate: "",
    deptTime: "",
    tripType: ""
  };

  render() {
    const {
      name,
      email,
      contact,
      vehicle,
      vehicleNo,
      pickupLocation,
      dropLocation,
      journeyDate,
      deptTime,
      tripType
    } = this.state;

    const handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value
      });
    };

    return (
      <div>
        <h4 className="title">Booking Details</h4>
        <div className="row-inputs">
          <div className="row1">
            <Input
              id="name"
              value={name}
              onChange={e => handleChange(e)}
              placeholder="Full Name"
              type="text"
            />
            <Input
              id="email"
              value={email}
              onChange={e => handleChange(e)}
              placeholder="Email Address"
              type="email"
            />
            <Input
              id="contact"
              value={contact}
              onChange={e => handleChange(e)}
              placeholder="Phone No."
              type="number"
            />
            <Input
              id="vehicle"
              value={vehicle}
              onChange={e => handleChange(e)}
              placeholder="Vehicle"
              type="text"
            />
            <Input
              id="vehicleNo"
              value={vehicleNo}
              onChange={e => handleChange(e)}
              placeholder="Vehicle No"
              type="text"
            />
          </div>

          <div className="row2">
            <Input
              id="pickupLocation"
              value={pickupLocation}
              onChange={e => handleChange(e)}
              placeholder="Pickup Location"
              type="text"
            />
            <Input
              id="dropLocation"
              value={dropLocation}
              onChange={e => handleChange(e)}
              placeholder="Drop Location"
              type="text"
            />
            <Input
              id="journeyDate"
              value={journeyDate}
              onChange={e => handleChange(e)}
              placeholder="Date of Journey"
              type="date"
            />
            <Input
              id="deptTime"
              value={deptTime}
              onChange={e => handleChange(e)}
              placeholder="Time of Departure"
              type="time"
            />
            <Input
              id="tripType"
              value={tripType}
              onChange={e => handleChange(e)}
              placeholder="Type of Trip"
              type="text"
            />
          </div>
        </div>

        <Button position="right" value="Book" />
      </div>
    );
  }
}

export default NewBooking;
