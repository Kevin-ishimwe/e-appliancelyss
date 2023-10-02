import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Quote from "./pages/Quote";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/request-quote" element={<Quote />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
