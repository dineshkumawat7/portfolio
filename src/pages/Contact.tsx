import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa6";
import ContactForm from "../components/contact/ContactForm";
import ContactInfoCard from "../components/contact/ContactInfoCard";
import Container from "../components/layout/Container";
import Iframe from "../components/ui/Iframe";
import { footerSocialLinks } from "../data/footerSocialLinks";
import { FaMapMarkerAlt } from "react-icons/fa";

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

const Contact = () => {
  return (
    <div className="relative bg-white dark:bg-neutral-950">
      <Container>
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div
            className="pointer-events-none absolute inset-0
            bg-[radial-gradient(ellipse_55%_40%_at_15%_15%,rgba(110,231,183,0.07),transparent_60%),radial-gradient(ellipse_50%_50%_at_85%_75%,rgba(139,92,246,0.07),transparent_60%)]"
          />
          <h1
            className="text-center font-extrabold tracking-tight text-[#5a5a78] dark:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            Let's Work{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px oklch(70.4% 0.14 182.503)" }}
            >
              Together
            </span>
          </h1>
          <p className="font-medium text-[20px] text-[#5a5a78] dark:text-gray-300 text-center mb-11 transition-colors duration-300 max-w-3xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say
            hello, feel free to get in touch!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 py-10">
          {/* LEFT SIDE (ENHANCED CONTENT) */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Got an Idea?
                <br />
                <span className="bg-linear-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Let’s Build It.
                </span>
              </h2>

              <p className="text-gray-400 text-lg mt-4">
                I help turn ideas into clean, modern, and high-performing
                digital experiences. Tell me what you're thinking — I’ll help
                shape it.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-2xl bg-white/5 border border-gray-300">
                🚀 Fast Delivery
                <p className="text-gray-400 text-xs mt-1">
                  Quick turnaround without compromising quality
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-gray-300">
                🎯 Clean UI
                <p className="text-gray-400 text-xs mt-1">
                  Modern, minimal and user-focused design
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-gray-300">
                ⚡ Performance
                <p className="text-gray-400 text-xs mt-1">
                  Optimized for speed and scalability
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-gray-300">
                🤝 Collaboration
                <p className="text-gray-400 text-xs mt-1">
                  Transparent and friendly communication
                </p>
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">How it works</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>1. 📩 You send your idea</p>
                <p>2. 💡 We discuss & refine</p>
                <p>3. 🛠️ I build your solution</p>
                <p>4. 🚀 You launch & grow</p>
              </div>
            </div>

            {/* Mini testimonial */}
            {/* <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
              “Great communication and super clean work. Delivered exactly what
              I needed!”
              <p className="text-xs text-gray-500 mt-2">— Happy Client</p>
            </div> */}

            {/* CTA badge */}
            <div>
              <span className="inline-block px-4 py-2 bg-white/10 border border-gray-300 rounded-full text-sm">
                Let’s build something great together ✨
              </span>
            </div>
          </div>
          <div className="p-5 lg:p-10 border border-gray-300 dark:border-white/10 rounded-2xl dark:bg-[#0f172a]/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.1)]">
            <div>
              <h2
                className="font-extrabold tracking-tight text-gray-300 text-4xl mb-3"
                style={{ letterSpacing: "-0.03em" }}
              >
                <span
                  className="text-transparent uppercase"
                  style={{
                    WebkitTextStroke: "1.5px oklch(70.4% 0.14 182.503)",
                  }}
                >
                  Get in touch
                </span>
              </h2>
              <p className="font-medium text-sm text-[#5a5a78] dark:text-gray-300 mb-8">
                Have a question or project in mind? I'd love to hear from you.
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
        <div>
          <div className="text-center py-10">
            <h2 className="text-4xl font-bold text-gray-900">
              Other Ways To Reach Me
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Prefer email, phone, or social media? Here are all the ways you
              can connect with me.
            </p>
          </div>
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-16">
            {CONTACT_INFO.map((info) => (
              <ContactInfoCard key={info.id} {...info} />
            ))}
          </div>

          {/* Social Media Section */}
          <div className="my-10 bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
            <div className="mx-auto text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Connect With Me
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
                Follow me on social media for updates on my latest projects and
                insights
              </p>

              {/* Social Links */}
              <div className="flex justify-center items-center gap-6">
                {footerSocialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      aria-label={social.label}
                      title={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-15 w-15 text-4xl text-gray-600 items-center justify-center rounded-full border border-stroke text-dark 
                                   hover:border-primary hover:bg-primary hover:text-teal-500 dark:border-dark-3 dark:text-white dark:hover:border-primary transition-all duration-300  transform hover:scale-110"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 mb-2">
            Find Me Here
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Coding from the heart of <strong>Jaipur, Rajasthan</strong>. Always
            open for collaboration and new opportunities.
          </p>
          {/* Map Container */}
          <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl mt-2">
            <Iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1234567890123!2d75.78712345678901!3d26.91234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c69a123456789%3A0xabcdef1234567890!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen={true}
            />
          </div>
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Jaipur, Rajasthan
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
              I'm based in Jaipur and available for remote work, meetings, and
              collaborations. Whether you prefer a virtual meeting or an
              in-person discussion, I'm flexible and ready to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1844!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db66a8c0%3A0x000000000!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-gray-100 hover:text-gray-100 font-medium rounded-sm hover:bg-blue-700 transition-colors duration-200 text-center text-sm sm:text-base"
                aria-label="View on Google Maps"
              >
                View on Google Maps
              </a>

              <a
                href="tel:+917627000907"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-900 hover:text-gray-900 font-medium rounded-sm hover:bg-gray-300 transition-colors duration-200 text-center text-sm sm:text-base"
                aria-label="Call me"
              >
                Call Me
              </a>
            </div>
          </div>
        </div>
      </Container>
      {/* CTA Section */}
      <section className="w-full bg-linear-to-r from-blue-600 to-purple-600 py-12 mt-10">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start a Project?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8">
            Let's turn your ideas into reality. I'm excited to work with you!
          </p>
          <a
            href="#contact-form"
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-700 hover:text-gray-700 font-medium rounded-sm hover:bg-gray-300 
                                    transition-colors duration-200 text-center text-sm sm:text-base"
            aria-label="Scroll to contact form"
          >
            Send Me a Message
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
