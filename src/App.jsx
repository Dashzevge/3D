import { Suspense, lazy } from "react";
import Navbar from "./pages/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Achievements = lazy(() => import("./pages/Achievements"));

const App = () => {

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen
        bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
      </div>
      <div className="w-full">
        <nav>
          <Navbar />
        </nav>
        <Suspense fallback={<div className="px-6 py-10 text-sm text-neutral-400">Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="container mx-auto max-w-7xl">
                  <Home />
                </div>
              }
            />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
