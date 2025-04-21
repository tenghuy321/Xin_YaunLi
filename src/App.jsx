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
import BusinessRegistration from "./pages/BusinessRegistration";
import Compliance from "./pages/Compliance";
import { useEffect, useState } from 'react';
// import Aos from 'aos';
import Loading from "./components/Loading";
import BusinessLicensing from "./pages/BusinessLicensing";
import RegulatoryAdvisory from "./pages/RegulatoryAdvisory";
import AuditPreparation from "./pages/AuditPreparation";
import Accounting from "./pages/Accounting";

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
          <Route index element={<Navigate to="business-registration" replace />} />
          <Route path="business-registration" element={<BusinessRegistration />} />
          <Route path="tax-declaration-compliance" element={<Compliance />} />
          <Route path="accounting-bookkeeping" element={<Accounting />} />
          <Route path="audit-preparation" element={<AuditPreparation />} />
          <Route path="business-licensing" element={<BusinessLicensing />} />
          <Route path="regulatory-advisory" element={<RegulatoryAdvisory />} />
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
