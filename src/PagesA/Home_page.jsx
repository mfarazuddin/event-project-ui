import React from "react";
import Navbar from "../componenets/Navbar";
import Hero from "../components/Hero";
import LandingPage from "../components/LandingPage";
import Explore from "../componenets/Explore";
import Event_vendor from "../componenets/Event_vendor";
import Featurea from "../componenets/Featurea";
import Aakash_gallary from "../componenets/Aakash_gallary";
import Bloga from "../componenets/Bloga";
import Footera from "../componenets/Footera";

function Home_page() {
  return (
    <>
<Navbar />
<Hero />
<LandingPage />
<Explore />
<Event_vendor />
<Featurea />
<Aakash_gallary />
<Bloga />
<Footera />

    </>
  );
};
export default Home_page;
