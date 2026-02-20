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
function App() {
  return (
    <>
      <Navbar />
      <Event_vendor />
      <Featurea />
      <Aakash_gallary />
      <Bloga />
      <Footera />
    </>
  );
}

export default App;
