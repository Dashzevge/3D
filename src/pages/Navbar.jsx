import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Frameworks } from "../components/Frameworks";
const SatelliteLogo = "/satellite.svg";
import skillsBackground from "../assets/projects/skills_background.jpg";
import achievementsBackground from "../assets/projects/achievements.jpg";
import projectsBackground from "../assets/projects/project-3.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/skills", label: "Skills" },
      { to: "/achievements", label: "Achievements" },
      { to: "/projects", label: "Projects" },
    ],
    []
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (event) => {
      if (!navRef.current) return;
      if (navRef.current.contains(event.target)) return;
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  const navBackgroundMap = useMemo(
    () => ({
      "/skills": skillsBackground,
      "/achievements": achievementsBackground,
      "/projects": projectsBackground,
    }),
    []
  );

  const navTitleMap = useMemo(
    () => ({
      "/skills": "Skills",
      "/achievements": "Achievements",
      "/projects": "Projects",
    }),
    []
  );

  const navBackground = navBackgroundMap[location.pathname];
  const navTitle = navTitleMap[location.pathname];
  const showFrameworks = location.pathname === "/skills";

  return (
    <nav
      ref={navRef}
      className="
        mb-10 pb-4
        relative overflow-hidden
        bg-transparent
      "
    >
      <div className={navBackground ? "relative" : ""}>
        {navBackground && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${navBackground})` }}
            />
            <div className="absolute inset-0 bg-neutral-950/60" />
          </>
        )}

        <div className="py-10 px-60 relative z-10">
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center"
                aria-label="Go to home"
              >
                <img
                  src={SatelliteLogo}
                  alt="Satellite"
                  className="h-12 w-12 object-contain invert"
                />
              </Link>
              {/* Hamburger Menu */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="
                    text-2xl text-cyan-300
                    rounded-md p-2
                    hover:bg-cyan-400/10
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-cyan-300/70
                  "
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  aria-controls="mobile-nav"
                >
                  {isOpen ? <FiX /> : <FiMenu />}
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center space-x-6">
              {links.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={[
                      "text-lg font-semibold transition-colors",
                      "hover:text-cyan-300 focus-visible:outline-none",
                      "focus-visible:ring-2 focus-visible:ring-cyan-300/70 rounded-sm px-1",
                      active ? "text-cyan-300" : "text-neutral-200",
                    ].join(" ")}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Resume */}
            <div className="hidden md:flex items-center">
              <motion.a
                href="/Dash Bumchin.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex items-center gap-2
                  rounded-lg border border-neutral-200/60
                  px-4 py-2 text-sm font-semibold
                  text-neutral-200
                  bg-transparent
                  hover:bg-cyan-300 hover:text-neutral-900
                  transition-colors focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-cyan-300/70
                "
                aria-label="Download resume"
              >
                Resume <FiDownload className="text-lg" />
              </motion.a>
            </div>
          </div>
        </div>

        {showFrameworks && (
          <div className="absolute top-6 right-1 z-40 hidden lg:block pointer-events-none">
            <div className="h-[160px] w-[240px] opacity-70">
              <Frameworks />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
                md:hidden relative z-10 overflow-hidden
                bg-neutral-950/60 backdrop-blur
                border-t border-cyan-400/20
              "
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.06 },
                  },
                }}
                className="flex flex-col items-start space-y-4 px-4 pt-4 pb-6"
              >
                {links.map((link) => {
                  const active = isActive(link.to);
                  return (
                    <motion.div
                      key={link.to}
                      variants={{ hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0 } }}
                    >
                      <Link
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className={[
                          "text-lg font-semibold transition-colors",
                          "hover:text-cyan-300 focus-visible:outline-none",
                          "focus-visible:ring-2 focus-visible:ring-cyan-300/70 rounded-sm px-1",
                          active ? "text-cyan-300" : "text-neutral-200",
                        ].join(" ")}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={{ hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0 } }}
                  className="mt-4 flex items-center gap-4"
                >
                  <motion.a
                    href="/Dash Bumchin.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      inline-flex items-center gap-2
                      rounded-lg border border-neutral-200/60
                      px-4 py-2 text-sm font-semibold
                      text-neutral-200
                      bg-transparent
                      hover:bg-cyan-300 hover:text-neutral-900
                      transition-colors focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-cyan-300/70
                    "
                    aria-label="Download resume"
                  >
                    Resume <FiDownload className="text-lg" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {navBackground && navTitle && (
          <div className="relative z-10 h-[200px] sm:h-[300px]">
            <div className="h-full flex max-w-5xl px-5 sm:px-0 pb-4 mx-auto items-end">
              <h1 className="font-black text-[2.6em] xs:text-[3.2em] sm:text-[8em] leading-[0.95em] sm:leading-none text-left lowercase break-words w-full text-white">
                {navTitle}
              </h1>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
