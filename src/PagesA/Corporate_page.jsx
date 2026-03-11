import React from "react";
import Navbar from "../componenets/Navbar";
import Explore from "../componenets/Explore";
import Aakash_gallary from "../componenets/Aakash_gallary";
import Footera from "../componenets/Footera";
import Corporateevents from "../components/Corporateevents";
function Corporate_page(){
    return (
        <>
        <Navbar />
        <Corporateevents />
        <Explore />
        <Aakash_gallary />
        <Footera />
        </>
    )
}export default Corporate_page;