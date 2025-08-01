import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Leading development of enterprise-level applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Blockchain Developer',
      company: 'DeFi Innovations',
      period: '2022 - 2023',
      location: 'San Francisco, CA',
      description: 'Developed smart contracts and DeFi protocols using Solidity and Web3.js. Built decentralized applications for yield farming and liquidity pools.',
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React', 'Hardhat'],
      type: 'Contract'
    },
    {
      id: 3,
      title: 'AI/ML Engineer',
      company: 'DataTech Labs',
      period: '2021 - 2022',
      location: 'New York, NY',
      description: 'Built machine learning models for predictive analytics and natural language processing. Implemented AI solutions for customer service automation.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'FastAPI', 'Docker'],
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'Frontend Developer',
      company: 'WebSolutions Inc',
      period: '2020 - 2021',
      location: 'Austin, TX',
      description: 'Developed responsive web applications using React and modern JavaScript. Collaborated with design teams to implement pixel-perfect UI/UX.',
      technologies: ['React', 'TypeScript', 'CSS3', 'Git', 'Figma'],
      type: 'Full-time'
    },
    {
      id: 5,
      title: 'Backend Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      location: 'Seattle, WA',
      description: 'Built RESTful APIs and microservices using Node.js and Express. Implemented database solutions and authentication systems.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT'],
      type: 'Full-time'
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey in the technology industry
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-950 z-10"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="card group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary-400 font-medium">{exp.company}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      exp.type === 'Full-time' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
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

      {/* Education Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-white mb-12">
          Education & <span className="gradient-text">Certifications</span>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
              <FaBriefcase className="text-primary-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Computer Science</h4>
            <p className="text-primary-400 mb-2">University of Technology</p>
            <p className="text-dark-300 text-sm">Bachelor's Degree • 2015-2019</p>
          </div>

          <div className="card">
            <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
              <FaBriefcase className="text-primary-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">AWS Certified</h4>
            <p className="text-primary-400 mb-2">Solutions Architect</p>
            <p className="text-dark-300 text-sm">Professional Level • 2022</p>
          </div>

          <div className="card">
            <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
              <FaBriefcase className="text-primary-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Blockchain Developer</h4>
            <p className="text-primary-400 mb-2">Ethereum Foundation</p>
            <p className="text-dark-300 text-sm">Certification • 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience 