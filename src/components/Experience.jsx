import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Blink Technologies",
      period: "2025 - Present",
      location: "Remote",
      description:
        "A tech company that focuses on delivering cutting-edge solutions to clients worldwide.",
      technologies: ["Figma", "Adobe XD", "Framer"],
      type: "Part-time",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* ====== Work Experience Section ====== */}
      <div className="text-center mb-16">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey in the tech industry
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-950 z-10"></div>

              {/* Content Card */}
              <div
                className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-8"
                    : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="card group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        exp.type === "Full-time"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-dark-300 text-sm">
                      <FaCalendarAlt className="mr-2 text-primary-400" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-dark-300 text-sm">
                      <FaMapMarkerAlt className="mr-2 text-primary-400" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-dark-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-dark-800 text-dark-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== Education & Certifications Section ====== */}
      <section className="relative mt-24 py-20 overflow-hidden bg-dark-900 rounded-3xl shadow-xl">
        {/* Background grid (like Hero section) */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] animate-[pulse_6s_infinite]" />
        </div>

        {/* Section Title */}
        <h3 className="text-3xl font-bold text-center text-white mb-16">
          Education & <span className="text-primary-500">Certifications</span>
        </h3>

        {/* ===== Education Section ===== */}
        <div className="mb-20 text-center">
          <h4 className="text-2xl font-semibold text-primary-400 mb-8">
            Education
          </h4>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              className="card w-72 bg-dark-800/50 rounded-2xl p-6 shadow-lg hover:shadow-primary-500/30"
              animate={{ x: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FaGraduationCap className="text-primary-400 text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Software Programming & Embedded Systems
              </h4>
              <p className="text-primary-400 mb-2">Rwanda Coding Academy</p>
              <p className="text-dark-300 text-sm">High School • 2024–present</p>
            </motion.div>
          </div>
        </div>

        {/* ===== Certifications Section ===== */}
        <div className="text-center">
          <h4 className="text-2xl font-semibold text-primary-400 mb-8">
            Certifications
          </h4>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Certification 1 */}
            <motion.div
              className="card w-72 bg-dark-800/50 rounded-2xl p-6 shadow-lg hover:shadow-primary-500/30"
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FaCertificate className="text-primary-400 text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Posinnove Certified
              </h4>
              <p className="text-primary-400 mb-2">UI/UX Design</p>
              <p className="text-dark-300 text-sm">Beginner Level • 2024</p>
            </motion.div>

            {/* Certification 2 */}
            <motion.div
              className="card w-72 bg-dark-800/50 rounded-2xl p-6 shadow-lg hover:shadow-primary-500/30"
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FaCertificate className="text-primary-400 text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Udacity Certified
              </h4>
              <p className="text-primary-400 mb-2">Software Developer</p>
              <p className="text-dark-300 text-sm">Beginner • 2024</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
