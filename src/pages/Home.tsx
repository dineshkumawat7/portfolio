import { Button } from "../components/button/Button";
import Container from "../components/layout/Container";
import { FaHandSpock } from "react-icons/fa";
import { heroStatsData } from "../data/heroStatsData";
import { HeroStatCard } from "../components/home/HeroStatCard";
import { CountUp } from "../components/ui/countUp/CountUp";
import TextType from "../components/home/TextType";
import { SocialCard } from "../components/home/SocialCard";
import { FaGithub } from "react-icons/fa";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { LiveDateTime } from "../components/home/LiveDateTime ";

const GlowCard = ({ children, className = "" }: any) => (
  <div className={`relative ${className}`}>
    <div className="relative rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl">
      {children}
    </div>
  </div>
);

const Home = () => {
  return (
    <section className="relative bg-white dark:bg-neutral-950">
      <div
        className="relative inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] 
            dark:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[20px_20px]"
      >
        <Container>
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <h1 className="text-4xl text-gray-800 dark:text-white md:text-6xl font-bold leading-tight">
                    Hello, I’m <br />
                    <TextType
                      text={[
                        "Dinesh Kumawat",
                        "Software Engineer",
                        "Backend Developer",
                      ]}
                      typingSpeed={100}
                      pauseDuration={2000}
                      showCursor={true}
                      cursorCharacter=""
                      deletingSpeed={40}
                      textColors={["#31C950", "#432DD7", "#FFD230"]}
                    />
                  </h1>

                  <p className="text-gray-700 dark:text-white">
                    I'm a Software Engineer who loves building scalable,
                    high-performance applications. I specialize in backend
                    architecture, microservices, event-driven systems, and
                    cloud-native development. My focus is turning complex
                    problems into elegant, efficient solutions that deliver real
                    business impact.
                  </p>

                  <div className="mt-6">
                    <Button leftIcon={<FaHandSpock />}>Say Hello!</Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-10">
                    {heroStatsData.map((stat, index) => (
                      <HeroStatCard
                        key={index}
                        value={
                          <CountUp
                            from={0}
                            to={stat.value}
                            suffix={stat.suffix}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                          />
                        }
                        label={stat.label}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Dinesh Kumawat"
                  className="w-80 h-auto rounded-lg shadow-lg justify-center text-center mx-auto"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="text-center my-20">
                <div
                  className="
                    pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_15%_15%,rgba(110,231,183,0.07),
                    transparent_60%),radial-gradient(ellipse_50%_50%_at_85%_75%,rgba(139,92,246,0.07),transparent_60%)]"
                />
                <h1
                  className="text-center font-extrabold tracking-tight text-[#5a5a78] dark:text-gray-300 text-5xl lg:text-6xl mb-3"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  My{" "}
                  <span
                    className="text-transparent"
                    style={{
                      WebkitTextStroke: "1.5px oklch(70.4% 0.14 182.503)",
                    }}
                  >
                    World
                  </span>
                </h1>
                <p className="font-medium text-[20px] text-[#5a5a78] dark:text-gray-300 text-center mb-11 transition-colors duration-300 max-w-3xl mx-auto">
                  I’m Very Flexible With Time Zone Communications
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-30 items-center justify-items-center">
                {/* Left Profile Card */}
                <div className="w-full h-105">
                  <img
                    src="src\assets\gif\robot.gif"
                    alt="Dinesh Kumawat"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>

                {/* Center Timezone Card */}
                <div className="relative w-full h-105">
                  {/* Glow Layer */}
                  <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-fuchsia-500 via-blue-500 to-cyan-400 blur-2xl opacity-60" />

                  {/* Main Card */}
                  <div className="relative h-full w-full rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden">
                    <div className="h-full p-6 flex flex-col items-center justify-between">
                      <div className="text-xl text-zinc-300 font-medium text-center">
                        Jaipur, Rajasthan, India
                        <br />
                        UTC +05:30
                      </div>

                      <div className="h-44 w-44 rounded-full border-2 border-violet-400 shadow-[0_0_40px_rgba(139,92,246,0.8)]" />
                      <div className="text-xl text-zinc-300 font-medium text-center">
                        <LiveDateTime />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Social Card */}
                <div className="w-full h-105 rounded-3xl bg-linear-to-b from-cyan-600 to-blue-300 p-8 flex flex-col">
                  <h3 className="text-3xl font-bold text-center mb-8 text-white">
                    Find Me Here
                  </h3>

                  <div
                    className="flex-1 overflow-y-auto pr-1 grid grid-cols-2 gap-4 p-2
                    [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                  >
                    <SocialCard icon={FaGithub} label="GitHub" />
                    <SocialCard icon={FaInstagram} label="Instagram" />
                    <SocialCard icon={FaLinkedin} label="LinkedIn" />
                    <SocialCard icon={FaYoutube} label="YouTube" />
                    <SocialCard icon={FaTwitter} label="Twitter" />
                    <SocialCard icon={FaFacebook} label="Facebook" />
                    <SocialCard icon={FaDiscord} label="Discord" />
                    <SocialCard icon={FaEnvelope} label="Email" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Home;
