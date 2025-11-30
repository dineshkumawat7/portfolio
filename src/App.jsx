import './App.css'
import ContactUs from './components/contact-us/ContactUs';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import NewsletterSection from './components/newsletter/NewsLatter'
import { ToastContainer, Bounce } from 'react-toastify';

function App() {
  return (
    <div className='bg-gray-100'>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Navbar />
      <NewsletterSection />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
