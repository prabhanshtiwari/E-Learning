import React from "react";
import { Quote } from "lucide-react"; // Optional: npm i lucide-react (or substitute with an SVG)

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      position: "Frontend Graduate",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Full Stack Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "MERN Stack Student",
      message:
        "The community support here is incredible. Whenever I got stuck, there was always someone to guide me.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "UI/UX Engineer",
      message:
        "The hands-on projects gave me the confidence I needed to build my own real-world web applications.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    },
  ];

  return (
    <section className="bg-slate-950 text-slate-100 py-20 px-6 max-w-7xl mx-auto font-sans">
      {/* Section Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/5 rounded-full blur-2xl pointer-events-none"></div>
        <span className="text-purple-400 font-semibold tracking-wider uppercase text-xs">
          Success Stories
        </span>
        <h2 className="text-3xl font-extrabold text-slate-100 mt-2 tracking-tight">
          What our students say
        </h2>
        <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
          Real feedback from developers who leveled up their skills and
          transformed their workflows.
        </p>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonialsData.map((e) => (
          <div
            className="group relative bg-slate-900 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-purple-500/30 hover:bg-slate-900/80 transition-all duration-300 shadow-xl shadow-black/10"
            key={e.id}
          >
            {/* Ambient hover accent line */}
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500/40 transition-all duration-500"></div>

            <div>
              {/* Decorative Quote Icon */}
              <div className="text-slate-700 group-hover:text-purple-500/20 transition-colors duration-300 mb-4">
                <Quote
                  size={28}
                  className="rotate-180 transform"
                  fill="currentColor"
                />
              </div>

              {/* Message */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 italic group-hover:text-slate-300 transition-colors">
                "{e.message}"
              </p>
            </div>

            {/* Student Info Footer */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60 mt-auto">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700/50 group-hover:border-purple-500/40 transition-colors shrink-0">
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="truncate">
                <p className="text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors truncate">
                  {e.name}
                </p>
                <p className="text-xs text-slate-500 truncate">{e.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

// import React from "react";
// import "./testimonials.css";

// const Testimonials = () => {
//   const testimonialsData = [
//     {
//       id: 1,
//       name: "John Doe",
//       position: "Student",
//       message:
//         "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
//       image:
//         "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       position: "Student",
//       message:
//         "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
//     },
//     {
//       id: 3,
//       name: "Alex Johnson",
//       position: "Student",
//       message:
//         "The community support here is incredible. Whenever I got stuck, there was always someone to guide me.",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
//     },
//     {
//       id: 4,
//       name: "Emily Davis",
//       position: "Student",
//       message:
//         "The hands-on projects gave me the confidence I needed to build my own real-world web applications.",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
//     },
//   ];
//   return (
//     <section className="testimonials">
//       <h2>What our students say</h2>
//       <div className="testmonials-cards">
//         {testimonialsData.map((e) => (
//           <div className="testimonial-card" key={e.id}>
//             <div className="student-image">
//               <img src={e.image} alt="" />
//             </div>
//             <p className="message">{e.message}</p>
//             <div className="info">
//               <p className="name">{e.name}</p>
//               <p className="position">{e.position}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
