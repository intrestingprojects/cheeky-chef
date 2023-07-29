import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "../Css/Common.css"
import "../Css/Navbar.css"

import HomePage from "./HomePage";
import Navbar from "./Navbar";
import BlogPage from './BlogPage/BlogPage';
import NotFound from './NotFound';
import SignUp from "./SignUp";

function Body() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default Body;
