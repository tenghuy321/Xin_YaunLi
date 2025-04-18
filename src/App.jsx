import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import OurProfile from "./pages/OurProfile";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurService from "./pages/OurService";
import Gallery from "./pages/Gallery";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import './i18n';
import Entity from "./pages/Entity";
import Compliance from "./pages/Compliance";
import Business from "./pages/Business";
import { useEffect, useState } from 'react';
// import Aos from 'aos';
import Loading from "./components/Loading";
import QualifiedInvestment from "./pages/QualifiedInvestment";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if(isLoading){
    return <Loading />
  }
  

  return (
    <main>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services/*" element={<OurService />}>
          <Route index element={<Navigate to="entity-setup" replace />} />
          <Route path="entity-setup" element={<Entity />} />
          <Route path="compliance-duties" element={<Compliance />} />
          <Route path="business-advisory" element={<Business />} />
          <Route path="qualified-investment" element={<QualifiedInvestment />} />
        </Route>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our-profile" element={<OurProfile />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
