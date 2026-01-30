import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#about">
          Skills
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Achievements
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Projects
        </a>
      </li>
       <li className="nav-li">
        <a className="nav-link" href="#contact">
          Resume
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20  w-full backdrop-blur-lg bg-primary/30">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-2">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-bold text-white"
          >
          <img  
            src="/satellite.svg"
            alt="Satellite logo"
            className=" h-10 w-10 brightness-0 invert"
          />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
