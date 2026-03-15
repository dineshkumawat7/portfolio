import { Button } from "../components/button/Button";
import Container from "../components/layout/Container";
import { FaHandSpock } from "react-icons/fa";
import TextType from "../components/text-type/TextType";
import { heroStatsData } from "../data/heroStatsData";
import { HeroStatCard } from "../components/ui/hero-stat-card/HeroStatCard";
import { CountUp } from "../components/ui/count-up/CountUp";

const Home = () => {
  return (
    <section className="relative bg-white dark:bg-neutral-950">
      <Container>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] 
            dark:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[20px_20px]"
        >
          <div className="flex items-center justify-center">
            <div className="w-full">
              <h1 className="text-4xl text-black dark:text-white md:text-6xl font-bold leading-tight">
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
                cloud-native development. My focus is turning complex problems
                into elegant, efficient solutions that deliver real business
                impact.
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
          <div>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              alt="Dinesh Kumawat"
              className="w-80 h-auto rounded-lg shadow-lg justify-center text-center mx-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
