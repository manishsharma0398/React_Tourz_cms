import React from "react";
import { Switch, Route } from "react-router-dom";

import RecentBookings from "./bookings/RecentBookings";
import NewBookings from "./bookings/NewBookings";
import AddVehicle from "./vehicles/AddVehicle";
import Vehicles from "./vehicles/Vehicles";

const Contents = () => {
  return (
    <div className="contents">
      <Switch>
        <Route exact path="/home/overview">
          overview
        </Route>
        <Route exact path="/home/bookings/recent-bookings">
          <RecentBookings />
        </Route>
        <Route exact path="/home/bookings/new-booking">
          <NewBookings />
        </Route>
        <Route exact path="/home/vehicles/vehicles">
          <Vehicles />
        </Route>
        <Route exact path="/home/vehicles/add">
          <AddVehicle />
        </Route>
        <Route exact path="/home/users/users">
          User
        </Route>
        <Route exact path="/home/users/add">
          Add Users
        </Route>
      </Switch>
    </div>
  );
};

export default Contents;
