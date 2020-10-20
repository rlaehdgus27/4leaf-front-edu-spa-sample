import React from "react";
import AppRouter from "../Routes/AppRouter";
import { HashRouter as Router } from "react-router-dom";

const Client = () => {
  return (
    <Router>
      {" "}
      <AppRouter />
    </Router>
  );
};

export default Client;
