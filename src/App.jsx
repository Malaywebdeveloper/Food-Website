import React from "react";
import Layout from "./Component/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import PageNotFound from "./Component/Pages/PageNotFound";
import Contact from "./Component/Pages/Contact";
import Menu from "./Component/Pages/Menu";
import Navbar from "./Component/Navbar/Navbar";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
