import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';
import './components/Home.css';

const App = () => {
  //storing JWT token
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signUp" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        {/* <Route path="/dashboard" element={token ? <Dashboard token = {token} /> : <Login setToken={setToken} /> } />
         */}
        {/* Protect the dashboard route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute token={token}>
              <Dashboard token={token} setToken={setToken} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
