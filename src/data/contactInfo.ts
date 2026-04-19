import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa6";

const CONTACT_INFO = [
  {
    id: "email",
    icon: FaEnvelope,
    title: "Email",
    value: "dkumawat7627@gmail.com",
    link: "dkumawat7627@gmail.com",
    description: "Feel free to reach out anytime",
  },
  {
    id: "phone",
    icon: FaPhone,
    title: "Phone",
    value: "+91 (762) 700-0907",
    link: "tel:+917627000907",
    description: "Call me during business hours",
  },
  {
    id: "location",
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Jaipur, Rajasthan",
    link: "https://maps.google.com",
    description: "Based in Jaipur, India",
    external: true,
  },
  {
    id: "hours",
    icon: FaClock,
    title: "Working Hours",
    value: "9 AM - 6 PM IST",
    description: "Monday to Friday",
  },
];
