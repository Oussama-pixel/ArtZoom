import React from "react";
import Home from "./pages/Home/Home";
import {BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Services from "./pages/services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="aboutUs" exact element={<AboutUs/>}/>
        <Route path="/services" exact element={<Services/>}/>
        <Route path="contactUs" exact element={<ContactUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
