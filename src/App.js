import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <h1>Appliaction</h1>
      <BrowserRouter>
        <Switch>
          <Route>
            <Dashboard path="/dashboard" />
          </Route>
          <Route>
            <Preferences path="/preferences" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
