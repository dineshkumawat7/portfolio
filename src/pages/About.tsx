import { Button } from "../components/button/Button";
import Container from "../layouts/Container";
import LogoLoop from "../components/logo-loop/LogoLoop";
import Radar from "../components/ui/Radar";
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import EducationCard from "../components/about/EducationCard";
import { educationData } from "../data/educationData ";
import resume from "../assets/doc/Dinesh-CV.pdf";
import { experienceData } from "../data/experienceData";
import ExperienceCard from "../components/about/ExperienceCard";
import {
  SiNextdotjs,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import SectionHeader from "../components/ui/SectionHeader";
import { IoBagCheckSharp } from "react-icons/io5";

export default function AboutPage() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiSpringboot />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];
  const handleDownload = () => {
    window.open(resume, "_blank"); // opens in new tab
  };
  return (
    <section className="relative bg-white dark:bg-black">
      <Container>
        <SectionHeader
          title="About"
          highlight="Me"
          description="Designing, building, and constantly learning — driven by curiosity and creativity."
        />
        <div className="w-full grid md:grid-cols-2 gap-20">
          {/* Left Image */}
          <div className="w-full">
            <h1
              className="font-extrabold tracking-tight text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              I'm{" "}
              <span
                className="font-bold bg-linear-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
              >
                Dinesh Kumawat
              </span>
            </h1>
            <p className="text-2xl font-bold mb-4">Software Developer</p>

            <p className="leading-relaxed mb-6 font-semibold">
              A Software Developer based in Jaipur, India, passionate about designing and building scalable, high-performance web
              applications that deliver real value to users.
              <br></br>
              My journey into software development started with curiosity about how websites and digital systems work behind the scenes.
              That curiosity gradually turned into a deep interest in software engineering, system design, and building full-stack
              applications that are both efficient and user-friendly.
              <br></br>
              I specialize in full-stack web development, focusing on creating clean, maintainable, and scalable code.
              I enjoy working across both frontend and backend systems — from designing intuitive user interfaces to building
              robust APIs and backend architectures.
              <br></br>
              Beyond coding, I enjoy solving real-world problems and turning ideas into practical digital solutions.
              I’m always excited to work on challenging projects that require creativity, logic, and technical depth.
              <br></br>
              My ultimate goal is to build impactful software products that are fast, scalable, and meaningful to users.
            </p>

          </div>

          {/* Right Content */}
          <div className="m-auto items-center justify-center">
            <div className="space-y-4 mb-6 font-semibold justify-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl 
                    bg-blue-500/20 text-blue-500">
                  <IoMdMail className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>
                    dkumawat7627@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl 
                    bg-green-500/20 text-green-500">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p>
                    +91 7627000907
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl 
                    bg-pink-500/20 text-pink-500">
                  <MdPlace className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p>
                    Jaipur, Rajasthan, India – 302012
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex gap-3">
              <Button onClick={handleDownload}>Download CV</Button>
              <Button>Hire Me</Button>
            </div>
            {/* Quote Card */}
            <div className="my-10 bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <p className="text-green-300 italic">
                “The cheapest, fastest, and most reliable components are those that aren’t there.”
              </p>
              <p className="text-right text-pink-400 mt-2">- Gordon Bell</p>
            </div>
          </div>
        </div>
        <div className="py-10">
          {/* Heading */}
          <h1 className="text-center text-4xl font-extrabold mb-2">
            Tech Stack
          </h1>
          <div className="relative h-50 overflow-hidden bg-transparent flex items-center justify-center py-30">
            {/* Basic horizontal loop */}
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={80}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              // fadeOut
              // fadeOutColor={isDark ? "#000000" : "#ffffff"}
              ariaLabel="Technology partners"
              className="text-gray-700 dark:text-gray-200"
            />
          </div>
          <div className="relative h-50 overflow-hidden bg-transparent flex items-center justify-center">
            {/* Basic horizontal loop */}
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="right"
              logoHeight={80}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              // fadeOut
              // fadeOutColor={isDark ? "#000000" : "#ffffff"}
              ariaLabel="Technology partners"
              className="text-gray-800 dark:text-white"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h1 className="text-center text-4xl font-extrabold mb-2">
            My Experience
          </h1>
          <p className="text-center text-lg font-semibold mb-10">
            Building practical skills through real-world projects, continuous learning, and creative problem-solving.
          </p>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 w-1 h-full bg-gray-300 dark:bg-gray-600"></div>

            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Circle Icon */}
                  <div className="absolute left-0 flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-400 rounded-full 
                      border-2 border-gray-300 dark:border-gray-600 shadow-md">
                    <span className="text-gray-500 dark:text-gray-700 text-xl"><IoBagCheckSharp /></span>
                  </div>
                  <ExperienceCard key={index} data={exp} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-15">
          <h1 className="text-center text-4xl font-extrabold mb-2">
            My Education
          </h1>
          <p className="text-center text-lg font-semibold mb-10">
            Education is not the learning of facts, but the training of the mind to think.
          </p>
          <div className="space-y-6">
            {educationData.map((item, index) => (
              <EducationCard
                key={index}
                image={item.image}
                degree={item.degree}
                university={item.university}
                duration={item.duration}
                status={item.status}
                result={item.result}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
