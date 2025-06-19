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
      <main className="relative bg-white/10 min-h-screen text-center px-4 py-12">
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col items-center gap-4">
          {sideIcons.slice(0, 3).map((icon, index) => (
            <motion.div
              key={icon.name}
              className={`flex flex-col items-center ${
                index % 2 === 0 ? "ml-4" : "mr-4"
              }`}
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

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center gap-4">
          {sideIcons.slice(3).map((icon, index) => (
            <motion.div
              key={icon.name}
              className={`flex flex-col items-center ${
                index % 2 === 0 ? "mr-4" : "ml-4"
              }`}
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

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Your new job, vacancies <br /> all over the world
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          The best place to discover & apply to the coolest startup jobs. More
          than <strong>672800</strong> current vacancies from{" "}
          <strong>17750</strong> sites available to you.
        </p>
        <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md max-w-xl mx-auto overflow-hidden">
          <input
            type="text"
            placeholder="Job title, Salary, or Companies..."
            className="flex-1 px-6 py-4 text-gray-700 focus:outline-none"
          />
          <button
            className={clsx(
              colors.primary,
              colors.primaryHover,
              "text-white px-6 py-3 rounded-full m-1 transition cursor-pointer"
            )}
          >
            Explore Now
          </button>
        </div>
        <div className="relative mt-12 flex justify-center">
          <img
            src="/hero.png"
            alt="Team working"
            className="w-[500px] h-auto"
          />
          <span className="absolute top-8 left-[30%] bg-yellow-300 text-black px-3 py-1 rounded-full text-xs shadow-md">
            Developer
          </span>
          <span className="absolute top-20 left-[12%] bg-pink-400 text-white px-3 py-1 rounded-full text-xs shadow-md">
            UI/UX Designer
          </span>
          <span className="absolute bottom-12 right-[20%] bg-green-400 text-white px-3 py-1 rounded-full text-xs shadow-md">
            Engineer
          </span>
        </div>

        <div className={clsx(colors.primary, "w-full py-4 mt-5")}>
          <div className="max-w-7xl mx-auto flex justify-center items-center gap-6 flex-wrap">
            {footerLogos.map(({ name, logo }) => (
              <div key={name} className="flex items-center gap-3">
                <img
                  src={logo}
                  alt={name}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-white text-xs">{name}</span>
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
