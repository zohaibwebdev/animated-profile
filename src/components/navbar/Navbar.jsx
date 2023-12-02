import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Zohaib Dev
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
