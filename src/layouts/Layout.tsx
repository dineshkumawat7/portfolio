import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import ScrollToTop from "../components/ui/ScrollToTop";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
