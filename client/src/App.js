import React from "react";
import Home from "./pages/Home/Home";
import {BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Services from "./pages/services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import TopBar from "./components/TopBar/TopBar";
import Adhesif from "./pages/Adhesif/Adhesif";

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="aboutUs" exact element={<AboutUs/>}/>
        <Route path="/services" exact element={<Services/>}/>
        <Route path="contactUs" exact element={<ContactUs/>}/>
        <Route path="/services/adhesif" exact element={<Adhesif/>}/>
      </Routes>
    </Router>
  );
}

export default App;
