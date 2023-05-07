import { Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Success from "./components/Success";
import Home from "./components/Home";

function App() {
  return (
    <div>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />

    </div>
  );
}

export default App;
