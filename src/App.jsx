import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home_page from "./PagesA/Home_page";
import Corporate_page from "./PagesA/Corporate_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Venuetypes from "./components/Venuetypes";
import Jay_shree_krishanPage from "./PagesA/Jay_shree_krishanPage";
import Sub_left_component1 from "./componenets/Sub_left_component1";

function App() {
  return (
    <>
    <Sub_left_component1 />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="CorporatePage" element={<Corporate_page />} />
          <Route path="VenueType" element={<Venuetypes />} />
          <Route path="/Jpage" element={<Jay_shree_krishanPage />}/>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
