import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignUpPage/Signup";
import Account from "./components/AccountPage/Account";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/account" element={<Account />}></Route>
    </Routes>
  );
};

export default App;
