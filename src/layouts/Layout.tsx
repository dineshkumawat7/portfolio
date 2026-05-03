import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import ScrollToTop from "../components/ui/ScrollToTop";
import Footer from "./footer/Footer";
import QuoteCard from "./QuoteCard";
import { Newsletter } from "./newsletter/Newsletter";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Newsletter />
      <QuoteCard />
      <Footer />
    </>
  );
};

export default Layout;
