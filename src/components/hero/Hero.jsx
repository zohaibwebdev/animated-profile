import "./hero.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: mirror,
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <motion.div className="hero">
      <motion.div className="wrapper">
        <motion.div
          className="textContainer"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={variants}>Zohaib Hassan</motion.h2>
          <motion.h1 variants={variants}>
            Web Developer and UI/UX Designer
          </motion.h1>
          <motion.div className="buttons" variants={variants}>
            <button>See Latest Works</button>
            <button>Contact Me</button>
          </motion.div>
          <motion.img
            variants={variants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slideText"
      >
        WEB DEVELOPER WEB DESIGNER WEBSITE BUILDER
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="zohaib" />
      </div>
    </motion.div>
  );
};

export default Hero;
