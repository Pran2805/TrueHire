import { Search } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import AfterHeroPage from "./AfterHeroPage";

const HeroPage = () => {
  const { colors } = useTheme();

  const sideIcons = [
    { name: "Behance", logo: "/behance.png" },
    { name: "Slack", logo: "/slack.png" },
    { name: "Google", logo: "/google.png" },
    { name: "Apple", logo: "/apple.png" },
    { name: "Dribbble", logo: "/dribble.png" },
    { name: "Webflow", logo: "/webflow.png" },
  ];

  const footerLogos = [
    { name: "behance", logo: "/behance.png" },
    { name: "slack", logo: "/slack.png" },
    { name: "google", logo: "/google.png" },
    { name: "dribble", logo: "/dribble.png" },
    { name: "webflow", logo: "/webflow.png" },
  ];

  return (
    <>
      <Navbar />
      <main className="relative bg-white/10 max-h-screen text-center px-4 py-12">
        <div className="hidden md:flex absolute top-1/2 left-4 transform -translate-y-1/2 flex-col items-center gap-4">
          {sideIcons.slice(0, 3).map((icon, index) => (
            <motion.div
              key={icon.name}
              className="flex flex-col items-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                boxShadow: "0px 0px 12px rgba(0, 200, 255, 0.7)",
              }}
            >
              <img src={icon.logo} alt={icon.name} className="w-8 h-8" />
              {index !== 2 && <div className="w-px h-6 bg-gray-400 mt-2"></div>}
            </motion.div>
          ))}
        </div>
        <div className="hidden md:flex absolute top-1/2 right-4 transform -translate-y-1/2 flex-col items-center gap-4">
          {sideIcons.slice(3).map((icon, index) => (
            <motion.div
              key={icon.name}
              className="flex flex-col items-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              whileHover={{
                scale: 1.2,
                rotate: -10,
                boxShadow: "0px 0px 12px rgba(255, 100, 150, 0.7)",
              }}
            >
              <img src={icon.logo} alt={icon.name} className="w-8 h-8" />
              {index !== 2 && <div className="w-px h-6 bg-gray-400 mt-2"></div>}
            </motion.div>
          ))}
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Your new job, vacancies <br className="hidden md:block" /> all over the world
        </h1>
        <p className="text-gray-600 max-w-md md:max-w-xl mx-auto mb-8 text-sm md:text-base">
          The best place to discover & apply to the coolest startup jobs. More than{" "}
          <strong>672800</strong> current vacancies from <strong>17750</strong> sites available to you.
        </p>
        <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md max-w-md md:max-w-xl mx-auto overflow-hidden">
          <input
            type="text"
            placeholder="Job title, Salary, or Companies..."
            className="flex-1 px-4 py-3 text-sm md:text-base text-gray-700 focus:outline-none"
          />
          <button
            className={clsx(
              colors.primary,
              colors.primaryHover,
              "text-white px-4 md:px-6 py-2 md:py-3 rounded-full m-1 transition cursor-pointer text-sm md:text-base"
            )}
          >
            Explore Now
          </button>
        </div>
        <div className="relative mt-10 flex justify-center">
          <img
            src="/hero.png"
            alt="Team working"
            className="w-72 md:w-[500px] h-auto"
          />
          <span className="absolute top-6 left-[25%] bg-yellow-300 text-black px-2 py-1 rounded-full text-[10px] md:text-xs shadow-md">
            Developer
          </span>
          <span className="absolute top-16 left-[5%] bg-pink-400 text-white px-2 py-1 rounded-full text-[10px] md:text-xs shadow-md">
            UI/UX Designer
          </span>
          <span className="absolute bottom-8 right-[10%] bg-green-400 text-white px-2 py-1 rounded-full text-[10px] md:text-xs shadow-md">
            Engineer
          </span>
        </div>
        <div className={clsx(colors.primary, "w-full py-4 mt-10")}>
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            {footerLogos.map(({ name, logo }) => (
              <div key={name} className="flex items-center gap-2 md:gap-3">
                <img
                  src={logo}
                  alt={name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
                <span className="text-white text-xs md:text-sm capitalize">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <AfterHeroPage />
    </>
  );
};

export default HeroPage;
