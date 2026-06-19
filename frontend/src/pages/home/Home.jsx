import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Code, Laptop, Sparkles, ShieldCheck } from "lucide-react"; // Optional: npm i lucide-react
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 text-center">
        {/* Glow Ambient Lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Fine background mesh pattern lines for a developer-centric layout */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>

        <div className="relative max-w-4xl mx-auto flex flex-col items-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium tracking-wide mb-6">
            <Sparkles size={14} /> Next-Generation Learning Environment
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-white tracking-tight leading-[1.15]">
            Welcome to our <br className="hidden sm:inline" /> E-Learning
            Platform
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 font-medium tracking-wide">
            Learn, Grow, Excel.
          </p>

          <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-500 leading-relaxed">
            Gain immediate access to premium full-stack architectures,
            interactive modules, and guided career roadmaps tailored to turn
            theory into working code.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={() => navigate("/courses")}
              className="group flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-xl shadow-purple-600/20 transition-all active:scale-95 text-base"
            >
              Get Started
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <a
              href="#features"
              className="text-sm font-semibold text-slate-400 hover:text-slate-200 py-3 px-6 rounded-full transition-colors border border-transparent hover:border-slate-800"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Brand Separator */}
      <hr className="border-slate-900 max-w-7xl mx-auto" />

      {/* Platform Features Grid */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Built for modern tech builders
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Everything you need to level up your development workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-purple-500/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
              <Code size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-2">
              Hands-On Development
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Don't just watch videos. Build deployable applications using
              industry standard technologies and sandbox compilers.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-purple-500/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
              <Laptop size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-2">
              Flexible Environments
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tailor your learning timeline to fit your current schedule.
              Perfect for deep dives or remote weekend marathons.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-purple-500/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-2">
              Verified Curriculums
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every tracking step matches contemporary full-stack market
              criteria, ensuring your efforts map directly to modern developer
              roles.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Showcase Section */}
      <section className="bg-slate-900/20 border-t border-slate-900 py-12">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;

// import React from "react";
// import "./home.css";
// import { useNavigate } from "react-router-dom";
// import Testimonials from "../../components/testimonials/Testimonials";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div className="home">
//         <div className="home-content">
//           <h1>Welcome to our E-Learning Platform</h1>
//           <p>Learn, Grow, Excel</p>
//           <button
//             onClick={() => {
//               navigate("/courses");
//             }}
//             className="common-btn"
//           >
//             Get Started
//           </button>
//         </div>
//       </div>
//       <Testimonials />
//     </div>
//   );
// };

// export default Home;
