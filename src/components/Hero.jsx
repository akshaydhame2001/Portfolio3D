import { motion } from "framer-motion";
import HeroBanner from "./HeroBanner";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas"; // Uncomment if needed

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Hero Section Content */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Akshay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Full Stack applications,
            <br className="sm:block hidden" /> and GenAI/ML models
          </p>

          {/* HeroBanner */}
          <div className="mt-5"></div>
        </div>
      </div>

      <div
        className="absolute inset-0 top-[150px] lg:top-[300px] w-full mx-auto flex flex-row justify-center items-center"
        style={{
          top: window.innerWidth < 380 && "310px",
        }}
      >
        <HeroBanner />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-16 bottom-20 w-full flex justify-end items-center pr-4">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
