import { Canvas, useFrame } from "@react-three/fiber";
import HomeText from "../components/HomeText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Rocket } from "../components/Rocket";
import { Earth } from "../components/Earth";
import { Fireworks } from "../components/Fireworks";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useEffect, useRef, useState } from "react";
import { SiReact, SiVite, SiTailwindcss, SiNodedotjs, SiFramer, SiThreedotjs } from "react-icons/si";
import { FaGithub, FaInstagram, FaLinkedin, FaRegCopy } from "react-icons/fa";
import Loader from "../components/Loader";
import profileImage from "../assets/Profile.png";
import SocialIcon from "../components/SocialIcon";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const sectionRef = useRef(null);
  const touchStartY = useRef(0);
  const copyTimeoutRef = useRef(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [progressPct, setProgressPct] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const targetProgress = useMotionValue(0);
  const smoothProgress = useSpring(targetProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.8,
  });

  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const steps = [
    "About Me",
    "Build With",
    "Social Links",
    "Contact Me",
  ];
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dash.bumchin@gmail.com");
    setIsCopied(true);
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 1400);
  };
  const stepDescriptions = [
     <div className="flex flex-col items-center sm:flex-row">
                  {!isMobile && <img className="w-32 rounded-full" src={profileImage} alt="Dash Bumchin" />}
                  <div className="mt-2 flex flex-col sm:ml-6 sm:mt-0">
                    <h4 className="text-lg">Dashzevge Bumchin</h4>
                  <p className="mt-2 block text-sm font-thin">
                    <strong>Full-stack developer</strong> for <strong>8+ years</strong>,
                    developing reliable <strong>web and enterprise applications</strong> from idea to production.
                  </p>
                  </div>
      </div>,
      <div className="inline-flex items-center justify-center gap-3 px-4 py-2">
                  <div className="flex items-center justify-center gap-8 text-3xl">
                  <SiReact className="text-cyan-300" title="React" aria-label="React" />
                  <SiVite className="text-purple-300" title="Vite" aria-label="Vite" />
                  <SiTailwindcss className="text-sky-300" title="Tailwind CSS" aria-label="Tailwind CSS" />
                  <SiFramer className="text-yellow-300" title="Framer Motion" aria-label="Framer Motion" />
                  <SiNodedotjs className="text-green-300" title="Node.js" aria-label="Node.js" />
                  <SiThreedotjs className="text-red-400" title="Three.js" aria-label="Three.js" />
                </div>
      </div>,
      <div className="inline-flex items-center justify-center gap-3 px-4 py-2">
                  <div className="flex items-center justify-center gap-20 pl-10 text-3xl">
                    <SocialIcon
                      href="https://github.com/Dashzevge"
                      Icon={FaGithub}
                      label="GitHub"
                      className="text-blue-500 hover:text-blue-700"
                    />
                    <SocialIcon
                      href="https://www.instagram.com/dashzevgebumchin/"
                      Icon={FaInstagram}
                      label="Instagram"
                      className="text-pink-500 hover:text-pink-700"
                    />
                    <SocialIcon
                      href="https://www.linkedin.com/in/dash-bumchin"
                      Icon={FaLinkedin}
                      label="LinkedIn"
                      className="text-[#0A66C2] hover:text-blue-900"
                    />
                  </div>
        </div>,
    <div className="mt-2 flex flex-col gap-1 text-sm text-neutral-200">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex flex-wrap items-center gap-2">
          <span className="text-white/70">Email:</span>{" "}
          <a
            href="mailto:dash.bumchin@gmail.com"
            target="_self"
            rel="noreferrer"
            className="text-white hover:text-white/80 underline-offset-2 hover:underline"
          >
            dash.bumchin@gmail.com
          </a>
        </span>
        <span className="relative inline-flex items-center">
          {isCopied && (
            <span className="pointer-events-none absolute -top-6 right-0 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-black shadow">
              Copied!
            </span>
          )}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="rounded-md border border-white/20 bg-white/10 p-1 text-white/90 transition hover:bg-white/20"
            aria-label="Copy email"
            title="Copy email"
          >
            <FaRegCopy className="text-sm" />
          </button>
        </span>
      </div>
      <div>
        <span className="text-white/70">Cell Phone:</span>{" "}
        <a
          href="tel:+12524585472"
          className="text-white hover:text-white/80 underline-offset-2 hover:underline"
        >
          +1 (252) 458-5472
        </a>
      </div>
    </div>,
  ];

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const nextIndex = Math.min(
      steps.length - 1,
      Math.floor(latest * steps.length)
    );
    setStepIndex(nextIndex);
    setProgressPct(Math.round(latest * 100));
  });

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const clamp = (value) => Math.min(1, Math.max(0, value));

    const handleWheel = (event) => {
      event.preventDefault();
      const clampedDelta = Math.max(-60, Math.min(60, event.deltaY));
      const next = clamp(targetProgress.get() + clampedDelta * 0.0006);
      targetProgress.set(next);
    };

    const handleTouchStart = (event) => {
      touchStartY.current = event.touches?.[0]?.clientY ?? 0;
    };

    const handleTouchMove = (event) => {
      event.preventDefault();
      const currentY = event.touches?.[0]?.clientY ?? 0;
      const delta = touchStartY.current - currentY;
      const next = clamp(targetProgress.get() + delta * 0.002);
      targetProgress.set(next);
      touchStartY.current = currentY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [targetProgress]);

  const rocketScale = isMobile ? 0.002 : 0.005;
  const earthScale = 0.01 + (Math.min(progressPct, 100) / 100) * 0.125; // 0.01 -> 0.135 (50% bigger final size)
  const earthPosition = isMobile ? [0.9, 1.55, -2.15] : [4.35, 2.7, -3.0];
  const orbitRadius = isMobile ? 0.28 : 0.5;
  const rocketDockPosition = [
    earthPosition[0],
    earthPosition[1] + orbitRadius * 0,
    earthPosition[2],
  ];

  // Rocket approaches Earth first, then Rocket.jsx switches to orbit.
  const from = isMobile ? [0, -1.0, 0] : [-2.5, -1.5, 0.5];
  const to = [earthPosition[0] + orbitRadius + 1, earthPosition[1], earthPosition[2]];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="fixed inset-0 flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space select-none"
    >
      <HomeText />
      <ParallaxBackground scrollProgress={smoothProgress} />
      <div
        className="absolute bottom-10 left-6 z-20 flex w-72 flex-col gap-3 md:bottom-14 md:left-10 md:w-75"
        style={isMobile ? { transform: "scale(0.6)", transformOrigin: "left bottom" } : undefined}
      >
        <div className="relative w-full overflow-hidden rounded-full bg-white/10 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-full bg-white/20"
            style={{ width: progressWidth }}
          />
          <span className="relative z-10 flex items-center justify-between gap-3 font-semibold">
            <span className="inline-flex items-center gap-2">
              <span className="relative inline-flex h-5 w-5 items-center justify-center">
                <span
                  className={`absolute inline-flex h-full w-full rounded-full ${
                    progressPct >= 100
                      ? "animate-ping bg-yellow-400 opacity-75"
                      : "animate-ping bg-green-400 opacity-75"
                  }`}
                ></span>
                <span className="relative z-10">
                  {progressPct >= 100 ? "🏁" : "🚀"}
                </span>
              </span>
              {!isMobile && (
                <span className="whitespace-nowrap">
                  {progressPct >= 100 ? "Arrived Destination" : "Scroll to launch"}
                </span>
              )}
            </span>
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold tracking-[0.2em] text-white">
              {progressPct}%
            </span>
          </span>
        </div>
        <div className="relative h-1 w-full rounded-full bg-white/20">
          <motion.div
            className="absolute left-0 top-0 h-full rounded-full bg-white"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
      <div className="absolute bottom-10 right-6 z-20 w-64 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200 backdrop-blur md:bottom-14 md:right-10 md:w-100">
        {!isMobile && (
          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
            Step {stepIndex + 1} / {steps.length}
          </div>
        )}
        {!isMobile && (
          <div className="mt-1 text-lg font-semibold text-white">
            {steps[stepIndex]}
          </div>
        )}
        {stepDescriptions[stepIndex]}
      </div>
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas>
           <Suspense fallback={<Loader />}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[3, 4, 2]} intensity={1.2} />
              <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.1}>
                <Earth position={earthPosition} scale={earthScale} />
              </Float>
              {progressPct >= 99 && (
                <group>
                  <pointLight
                    position={[0, 0.6, 0.4]}
                    intensity={1.4}
                    color="#ffbb66"
                    distance={6}
                  />
                  <Fireworks
                    position={[0, 0, 0]}
                    scale={isMobile ? 0.45 : 0.06}
                  />
                </group>
              )}
              <Rocket
                scale={rocketScale} // scale the rocket appropriately
                scrollProgress={smoothProgress} // pass scroll progress
                from={from} // starting position
                to={to} // approach point before orbit
                orbitCenter={earthPosition}
                orbitRadius={orbitRadius}
                orbitStartAt={0.72}
                orbitTurns={1.8}
                dockPosition={rocketDockPosition}
                dockAt={0.995}
                rotFrom={-0.2} // face right on load
                rotTo={Math.PI / 2} // keep facing right
              />
            {/* <OrbitControls enableZoom={false} /> */}
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

export default Home;
