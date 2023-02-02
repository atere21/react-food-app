import React from "react";
import './index.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
       <HeadlineCards/>
       <Food/>
    </div>
  );
}

export default App;
