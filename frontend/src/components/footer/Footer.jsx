import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top/Main Footer Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left mb-8">
          {/* Column 1: Brand/Platform Info */}
          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-200 tracking-tight">
              E-Learning Platform
            </h3>
            <p className="mt-2 text-sm text-slate-500 max-w-xs mx-auto md:mx-0">
              Empowering global learners with premium courses and top-tier
              accessible resources.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex justify-center space-x-6 text-sm font-medium text-slate-400">
            <a
              href="#home"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#courses"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              Courses
            </a>
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Column 3: Social Interactions */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-slate-400 hover:text-purple-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-slate-400 hover:text-purple-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <AiFillTwitterSquare />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-slate-400 hover:text-purple-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <hr className="border-slate-900 my-6" />

        {/* Bottom Credits Area */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-3 sm:space-y-0">
          <p>&copy; 2026 E-Learning Platform. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by
            <a
              href="#portfolio"
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors underline decoration-purple-500/30 underline-offset-4"
            >
              Prabhansh Tiwari
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import "./footer.css";
// import {
//   AiFillFacebook,
//   AiFillTwitterSquare,
//   AiFillInstagram,
// } from "react-icons/ai";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer-content">
//         <p>
//           &copy; 2026 Your E-Learning Platform. All rights reserved. <br /> Made
//           with ❤️ <a href="">Prabhansh Tiwari</a>
//         </p>
//         <div className="social-links">
//           <a href="">
//             <AiFillFacebook />
//           </a>
//           <a href="">
//             <AiFillTwitterSquare />
//           </a>
//           <a href="">
//             <AiFillInstagram />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
