import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OurProfile from "./pages/OurProfile";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import OurService from "./pages/OurService";
import Career from "./pages/Career";
// import ContactUs from "./pages/Contact";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/our-profile" element={<OurProfile />} />
        <Route path="/our-services" element={<OurService />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
