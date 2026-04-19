import { footerSocialLinks } from "../../data/footerSocialLinks";
import BlogCard from "./BlogCard";
import { FaPhoneVolume } from "react-icons/fa6";
import Container from "../../components/layout/Container";
import { Link } from "../../components/ui/Link";

const blogPosts = [
  {
    id: 1,
    href: "/#",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=150&q=80",
    date: "Jan 15, 2026",
    title:
      "I think really important to design things with a human-centered approach, and to really understand who you're designing for.",
  },
  {
    id: 2,
    href: "/#",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=150&q=80",
    date: "Jan 12, 2026",
    title: "Recognizing the need is the primary condition for design.",
  },
  {
    id: 3,
    href: "/#",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=150&q=80",
    date: "Jan 12, 2026",
    title: "Recognizing the need is the primary condition for design.",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-neutral-950 border-t border-gray-200 dark:border-slate-800">
      {/* Main Content Container */}
      <Container>
        <div className="flex flex-wrap -mx-4 gap-10 sm:gap-0">
          {/*Column-1 - FooterBrand Section */}
          <div className="w-full px-4 sm:w-2/3 lg:w-5/12">
            <div className="mb-5">
              {/* Logo */}
              <a href="/#" className="inline-block">
                <span className="font-bold text-3xl text-teal-500">DINESH</span>
              </a>
            </div>
            {/* Description */}
            <p className="text-sm dark:text-white">
              A passionate Software Engineer dedicated to building robust,
              scalable, and efficient software solutions. I enjoy solving
              complex problems and turning innovative ideas into reality through
              code.
            </p>

            {/* Contact Phone */}
            <p
              className="mt-5 flex items-center gap-3 w-fit px-4 py-2 rounded-xl 
                bg-linear-to-r from-teal-500 to-cyan-500 
                text-white text-sm sm:text-lg font-semibold
                shadow-md hover:shadow-xl hover:scale-105
                transition-all duration-300 cursor-pointer"
            >
              <span className="text-primary shrink-0 animate-phone">
                <FaPhoneVolume className="text-2xl" />
              </span>
              <span className="truncate">+91 7627000907</span>
            </p>

            {/* Social Icons */}
            <div className="mt-5 w-full">
              <h4 className="text-base sm:text-lg font-semibold text-dark dark:text-white">
                Follow Us On
              </h4>
              <div className="flex items-center gap-2 sm:gap-3 mt-5">
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
                      className="flex h-10 w-10 text-2xl items-center justify-center rounded-full border border-stroke text-dark 
                      hover:border-primary hover:bg-primary hover:text-teal-500 transition-all duration-300 dark:border-dark-3
                    dark:text-white dark:hover:border-primary"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/*Column-2 - Link Groups */}
          {/* Resources Link Group */}
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <h4 className="text-base mb-5 sm:text-lg font-semibold text-dark dark:text-white">
              Resources
            </h4>
            <ul className="flex flex-col gap-2 cursor-pointer">
              <li>
                <Link href="/#">Download Resume</Link>
              </li>
              <li>
                <Link href="/#">Tech Blog</Link>
              </li>
              <li>
                <Link href="/#">User Flow</Link>
              </li>
              <li>
                <Link href="/#">Contact & Support</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Group */}
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <h4 className="text-base mb-5 sm:text-lg font-semibold text-dark dark:text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 cursor-pointer">
              <li>
                <Link href="/#">Home</Link>
              </li>
              <li>
                <Link href="/#">About Me</Link>
              </li>
              <li>
                <Link href="/#">Projects</Link>
              </li>
              <li>
                <Link href="/#">Services</Link>
              </li>
            </ul>
          </div>

          {/*Column-3 - Latest Blog Section */}
          <div className="w-full px-4 md:w-2/3 lg:w-4/12 xl:w-3/12">
            <h4 className="text-base mb-5 sm:text-lg font-semibold text-dark dark:text-white">
              Latest blog
            </h4>
            <div className="flex flex-col gap-6 sm:gap-8">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  href={post.href}
                  image={post.image}
                  date={post.date}
                  title={post.title}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Divider Line */}
        <div className="border-t border-gray-200 dark:border-slate-800"></div>
        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center justify-between lg:flex-row gap-2 py-5">
          {/* Left Side: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-black dark:text-white">
              Copyright © 2026 Technology. All Rights Reserved
            </p>
          </div>

          {/* Right Side: Credits */}
          <div className="text-center md:text-right">
            <p className="text-sm text-black dark:text-white">
              Designed and Developed by{" "}
              <Link
                href="/home"
                className="font-semibold text-teal-500 dark:text-teal-500!"
              >
                Dinesh Kumawat
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
