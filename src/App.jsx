import './App.css'
import ContactUs from './components/contact-us/ContactUs';
import Navbar from './components/navbar/Navbar';
import NewsLatter from './components/newsletter/NewsLatter'
import { ToastContainer, Bounce } from 'react-toastify';

function App() {
  return (
    <>
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
        <NewsLatter />
        <ContactUs />
      </div>
    </>
  )
}

export default App
