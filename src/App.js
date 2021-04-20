import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home/Home";
import Order from './components/Dashboard/Order/Order';
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';
import Login from './components/Home/Login/Login';
import Service from './components/Dashboard/Service/Service';
import Review from './components/Dashboard/Review/Review';
import ServiceDetails from './components/Dashboard/ServiceDetails/ServiceDetails';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import NotFound from "./components/NotFound/NotFound";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <Home></Home>
        </Route>
        <Route path="/contact">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/orderList">
          <Service></Service>
        </Route>
        <Route path="/orderDetails">
          <ServiceDetails></ServiceDetails>
        </Route>        
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <Route path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <PrivateRoute path="/order/:name">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Order></Order>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
