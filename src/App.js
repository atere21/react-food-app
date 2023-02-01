import React from "react";
import './index.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
    </div>
  );
}

export default App;
