import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home_page from "./PagesA/Home_page";
import Corporate_page from "./PagesA/Corporate_page";
import Jay_shree_krishanPage from "./PagesA/Jay_shree_krishanPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Venuetypes from "./components/Venuetypes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="CorporatePage" element={<Corporate_page />} />
          <Route path="VenueType" element={<Venuetypes />} />
          <Route path="JAypage" element={<Jay_shree_krishanPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
