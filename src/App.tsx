import { Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop";
import Footer from "./layouts/footer/Footer";
import Navbar from "./layouts/navbar/Navbar";
import { Newsletter } from "./layouts/newsletter/Newsletter";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Layout from "./layouts/Layout";
import ProjectsPage from "./pages/Projects";
import AboutPage from "./pages/About";
import QuoteCard from "./layouts/QuoteCard";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="home" element={<Navigate to="/" replace />} />
    //     <Route path="/about" element={<AboutPage />} />
    //     <Route path="/skills" element={<Skills />} />
    //     <Route path="/projects" element={<ProjectsPage />} />
    //     {/* <Route path="/services" element={<Services />} /> */}
    //     <Route path="/contact" element={<Contact />} />
    //   </Route>
    // </Routes>

    <>
      <Navbar />
      <Home />
      <AboutPage />
      <Skills />
      <Contact />
      <ProjectsPage />
      <Newsletter />
      <QuoteCard />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
