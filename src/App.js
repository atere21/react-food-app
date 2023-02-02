import React from "react";
import './index.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
       <HeadlineCards/>
       <Food/>
       <Category/>
    </div>
  );
}

export default App;
