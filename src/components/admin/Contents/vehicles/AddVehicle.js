import React, { Component } from "react";
import Button from "../../../common/Elements/Button";

import Input from "../../../common/Elements/Input";

export class AddVehicle extends Component {
  state = {
    vehicleModel: "",
    driverName: "",
    driverContactNo: "",
    driverPOI: "",
    vehicleNo: "",
    vehicleOwner: "",
    vehicleNumber: "",
    vehicleOwnerContactNo: "",
    dateOfJoining: "",
    errors: {}
  };

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  render() {
    const {
      vehicleModel,
      driverName,
      driverContactNo,
      driverPOI,
      vehicleNo,
      vehicleOwner,
      vehicleNumber,
      vehicleOwnerContactNo,
      dateOfJoining,
      errors
    } = this.state;

    const handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value
      });
    };

    return (
      <div>
        <h4 className="title">Vehicle Details</h4>
        <div className="row-inputs">
          <div className="row1">
            <Input
              id="vehicleModel"
              value={vehicleModel}
              onChange={e => handleChange(e)}
              placeholder="Model Name"
              error={errors.vehicleModel}
              type="text"
            />
            <Input
              id="driverName"
              value={driverName}
              onChange={e => handleChange(e)}
              placeholder="Driver"
              error={errors.driverName}
              type="text"
            />
            <Input
              id="driverContactNo"
              value={driverContactNo}
              onChange={e => handleChange(e)}
              placeholder="Driver Phone Number"
              error={errors.driverContactNo}
              type="number"
            />
            <Input
              id="driverPOI"
              value={driverPOI}
              onChange={e => handleChange(e)}
              placeholder="Driver's Proof of Identification"
              error={errors.driverPOI}
              type="text"
            />
            <Input
              id="vehicleNo"
              value={vehicleNo}
              onChange={e => handleChange(e)}
              placeholder="Vehicle No"
              error={errors.vehicleNo}
              type="text"
            />
          </div>

          <div className="row2">
            <Input
              id="vehicleOwner"
              value={vehicleOwner}
              onChange={e => handleChange(e)}
              placeholder="Owner of Vehicle"
              error={errors.vehicleOwner}
              type="text"
            />
            <Input
              id="vehicleNumber"
              value={vehicleNumber}
              onChange={e => handleChange(e)}
              placeholder="Vehicle Number"
              error={errors.vehicleNumber}
              type="text"
            />
            <Input
              id="vehicleOwnerContactNo"
              value={vehicleOwnerContactNo}
              onChange={e => handleChange(e)}
              placeholder="Owner's Phone Number"
              error={errors.vehicleOwnerContactNo}
              type="number"
            />
            <Input
              id="dateOfJoining"
              value={dateOfJoining}
              onChange={e => handleChange(e)}
              placeholder="Date of Joining"
              error={errors.dateOfJoining}
              type="date"
            />
          </div>
        </div>

        <Button position="right" value="Add" />
      </div>
    );
  }
}

export default AddVehicle;
