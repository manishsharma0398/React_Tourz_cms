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
        <Route exact path="/admin">
          overview
        </Route>
        <Route exact path="/admin/bookings/recent">
          <RecentBookings />
        </Route>
        <Route exact path="/admin/bookings/new">
          <NewBookings />
        </Route>
        <Route exact path="/admin/vehicles">
          <Vehicles />
        </Route>
        <Route exact path="/admin/vehicles/add">
          <AddVehicle />
        </Route>
        <Route exact path="/admin/users">
          User
        </Route>
        <Route exact path="/admin/users/add">
          Add Users
        </Route>
      </Switch>
    </div>
  );
};

export default Contents;
