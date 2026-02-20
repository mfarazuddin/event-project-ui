import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import './assets/css/Aakash.css'
import Navbar from './componenets/Navbar'
import LandingPage from './components/LandingPage.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LandingPage />
    </div>
  );
}

export default App;