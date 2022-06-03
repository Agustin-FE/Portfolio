import React from "react";
import "./App.css";
import Cover from "./components/cover/Cover";
import About from "./components/about/About";
import Info from "./components/info/Info";
import Slider from "./components/slider/Slider"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div>
      <Cover />
      <About />
      <Slider/>
      <Info />
      <Footer/>
    </div>
  );
}

export default App;
