import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Quote from "./pages/Quote";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/request-quote" element={<Quote />} />
                  <Route path="/schedule-repair" element={<Quote />} />
                </Routes>

                <Footer />
              </>
            }
          />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
