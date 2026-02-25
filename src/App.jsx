import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/css/Aakash_module.css";
import "./assets/css/Aakash.css";
import Navbar from "./componenets/Navbar";
import "./assets/css/Gallary.css";
import Aakash_gallary from "./componenets/Aakash_gallary.jsx";
import Bloga from "./componenets/Bloga.jsx";
import "./assets/css/Bloga.css";
import Footera from "./componenets/Footera.jsx";
import "./assets/css/Footera.css";
import Featurea from "./componenets/Featurea.jsx";
import "./assets/css/Featurea.css";
import Event_vendor from "./componenets/Event_vendor.jsx";
import "./assets/css/Event_vendor.css";
import Explore from "./componenets/Explore.jsx";
import "./assets/css/Explore.css";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage.jsx";
import Corporateevents from './components/Corporateevents.jsx';
import Venuetypes from "./components/Venuetypes.jsx";
import Venues from "./components/Venues.jsx";


function App() {
  return (
    <>
      {/* Page1 */}


      <Navbar />
      <Hero />
      <LandingPage />
      <Explore />
      <Event_vendor />
      <Featurea />
      <Aakash_gallary />
      <Bloga />
      <Footera />


      {/* Page2 */}


      {/* <Navbar />
      <Corporateevents />
      <Explore />
      <Aakash_gallary />
      <Footera /> */}


      {/* Page3 */}


      {/* <Navbar />
      <Venuetypes />
      <Footera /> */}


      {/* <Navbar />
      <Venues />
      <Footera /> */}
    </>
  );
}

export default App;
