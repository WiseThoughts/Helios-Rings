import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Collection from "./Collection";
import Contact from "./Contact.js";
import "../style/App.css";
import Ring from "./Ring.js";
import { useState } from "react";

function App() {

  const [RingImage, SetRingImage] = useState()
  const [RingDes, SetRingDes] = useState()

  return (
  <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} RingImage={RingImage} RingDes={RingDes} />
        <Route path="/ring" element={<Ring />} RingImage={RingImage} RingDes={RingDes} />
        <Route path="/contact" element={<Contact />} />
    </Routes>


  </div>
  );
}

export default App;
