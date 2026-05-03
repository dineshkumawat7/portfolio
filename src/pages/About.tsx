import {
  SiNextdotjs,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Button } from "../components/button/Button";
import Container from "../components/layout/Container";
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
    <section className="relative bg-white dark:bg-black transition">
      <Container>
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div
            className="pointer-events-none absolute inset-0
            bg-[radial-gradient(ellipse_55%_40%_at_15%_15%,rgba(110,231,183,0.07),transparent_60%),radial-gradient(ellipse_50%_50%_at_85%_75%,rgba(139,92,246,0.07),transparent_60%)]"
          />
          <h1
            className="text-center font-extrabold tracking-tight text-[#5a5a78] dark:text-gray-300 text-5xl lg:text-6xl mb-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            About{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px oklch(70.4% 0.14 182.503)" }}
            >
              Me
            </span>
          </h1>
          <p className="font-medium text-[20px] text-[#5a5a78] dark:text-gray-300 text-center mb-11 transition-colors duration-300 max-w-3xl mx-auto">
            Designing, building, and constantly learning — driven by curiosity
            and creativity.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="relative w-full h-screen">
            <div className="absolute inset-0">
              <Radar
                speed={0.2}
                scale={1}
                ringCount={10}
                spokeCount={10}
                ringThickness={0.05}
                spokeThickness={0.01}
                sweepSpeed={1}
                sweepWidth={2}
                sweepLobes={1}
                color="#9f29ff"
                backgroundColor="#000000"
                falloff={2}
                brightness={1}
                enableMouseInteraction
                mouseInfluence={0.1}
              />
            </div>
            <div className="relative z-10 flex items-center justify-center h-full w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg w-72 h-96">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  alt="Profile"
                  className="w-full h-full object-cover transition duration-500"
                />
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div>
            <h1
              className="font-extrabold tracking-tight text-[#5a5a78] dark:text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              I'm{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px oklch(70.4% 0.14 182.503)" }}
              >
                Dinesh Kumawat
              </span>
            </h1>
            <p className="text-2xl font-bold mb-4">Software Developer</p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I’m a passionate software developer based in Jaipur, India,
              focused on building scalable, high-performance web applications. I
              enjoy turning complex problems into simple, elegant solutions
              through clean and efficient code.
              <br></br>
              With a strong interest in modern technologies, I continuously
              explore areas like cloud computing, system design, and full-stack
              development. I thrive on learning, experimenting, and creating
              impactful digital experiences that solve real-world challenges.
            </p>

            {/* Info */}
            <div className="mb-6 space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <IoMdMail className="text-teal-500 text-lg" />
                <span className="font-semibold text-black">Email:</span>
                <span className="break-all">dkumawat7627@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-teal-500 text-sm" />
                <span className="font-semibold text-black">Phone:</span>
                <span>+91 7627000907</span>
              </div>

              <div className="flex items-center gap-3">
                <MdPlace className="text-teal-500 text-lg" />
                <span className="font-semibold text-black">Location:</span>
                <span>Jaipur, Rajasthan, India – 302012</span>
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
                “The cheapest, fastest, and most reliable components are those
                that aren’t there.”
              </p>
              <p className="text-right text-pink-400 mt-2">- Gordon Bell</p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h1 className="text-center text-5xl font-extrabold mb-10">
            Teck <span className="text-teal-500">Stack</span>
          </h1>
          <div className="relative h-50 overflow-hidden bg-transparent flex items-center justify-center">
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
              className="text-gray-800 dark:text-white"
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
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-2">
            <span>💼</span>
            <span className="text-black">Experience</span>
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 w-1 h-full bg-purple-900"></div>

            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Circle Icon */}
                  <div className="absolute left-0 flex items-center justify-center w-10 h-10 bg-white rounded-full border-2 border-gray-600 shadow-md">
                    <span className="text-white">💼</span>
                  </div>
                  <ExperienceCard key={index} data={exp} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-15">
          <h1 className="text-center text-5xl font-extrabold mb-2">
            My Education
          </h1>
          <h3 className="text-center text-2xl font-bold mb-10 text-gray-600">
            Education is not the learning of facts, but the training of the mind
            to think.
          </h3>
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
