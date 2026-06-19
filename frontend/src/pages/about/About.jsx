import React from "react";
import { BookOpen, Users, Award, Globe } from "lucide-react"; // Optional: npm i lucide-react for nice icons

const About = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-height-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">
          Our Journey
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-200 tracking-tight">
          Empowering Minds Worldwide
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
          We believe that high-quality education shouldn't be a privilege. Our
          platform bridges the gap between ambition and achievement, providing
          accessible learning resources to students everywhere.
        </p>
      </section>

      <hr className="border-slate-800 max-w-5xl mx-auto" />

      {/* Stats Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/60 backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-purple-400">
              10M+
            </div>
            <div className="text-sm text-slate-400 mt-1">Active Learners</div>
          </div>
          <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/60 backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-purple-400">
              500+
            </div>
            <div className="text-sm text-slate-400 mt-1">Expert Courses</div>
          </div>
          <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/60 backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-purple-400">
              180+
            </div>
            <div className="text-sm text-slate-400 mt-1">Countries Reached</div>
          </div>
          <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/60 backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-purple-400">
              95%
            </div>
            <div className="text-sm text-slate-400 mt-1">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto bg-gradient-to-b from-transparent to-slate-900/50 rounded-3xl border border-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-100">
            Why We Do What We Do
          </h2>
          <p className="text-slate-400 mt-2">
            The principles guiding our mission daily.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/40 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Curated and built by industry professionals to keep you ahead of
              the curve.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/40 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Access</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Learn anytime, anywhere. All you need is an internet connection.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/40 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connect with peers, collaborate on tasks, and grow together.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/40 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Impact</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Gain verified skills and certs designed to help you stand out to
              employers.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to unlock your potential?
        </h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Join thousands of other motivated students today and take the next
          step toward mastering your field.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full shadow-lg shadow-purple-600/20 transition-all active:scale-95">
          Explore Resources
        </button>
      </section>
    </div>
  );
};

export default About;

// import React from "react";
// import "./about.css";

// const About = () => {
//   return (
//     <div className="about">
//       <div className="about-content">
//         <h2>About us</h2>
//         <p>
//           We are dedicated to providing high-quality education and accessible
//           learning resources to students worldwide, empowering them to achieve
//           their personal and professional goals.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
