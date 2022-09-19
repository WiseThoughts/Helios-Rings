import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Collection from "./Collection";
import Contact from "./Contact.js";
import "../style/App.css";

function App() {



  return (
  <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>


  </div>
  );
}

export default App;
