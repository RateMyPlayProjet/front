import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Inscription from "./pages/Inscription/Inscription";
import Details from "./pages/Details/Details";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Inscription />} />
      <Route path="/game/1" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
