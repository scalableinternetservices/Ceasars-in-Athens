import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "../services/Services";
import ServiceEntry from "../services/ServiceEntry";
import history from '../../helpers/history';
import Bookings from "../bookings/Bookings";

export default class MyRoutes extends Component {
  debugger
  render() {
    console.log("hello")

    return (
      <Router history={history}>
        {/* <ScrollToTop> */}
        <Routes>
          <Route path="/" element={<Services />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceEntry />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
        {/* </ScrollToTop> */}
      </Router>
    )
  }
}