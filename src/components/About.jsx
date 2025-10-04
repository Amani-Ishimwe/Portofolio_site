import { FaCode, FaPalette, FaServer } from 'react-icons/fa'


const About = () => {
  const expertise = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern frameworks like React, Vue, and Angular.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications using Node.js, Python, and various databases.'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user experiences with Figma, Adobe XD, and modern design principles.'
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about technology and innovation, I specialize in creating cutting-edge digital solutions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Content */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white mb-6">
            Transforming Ideas Into{' '}
            <span className="text-primary-500">Digital Reality</span>
          </h3>
          
          <p className="text-lg text-dark-300 lead-relaxed">
            I’m a developer experienced in frontend, backend, and UI/UX design. Curious and eager to learn, I embrace new challenges to grow my skills.
          </p>

          <p className="text-lg text-dark-300 leading-relaxed">
             My tech journey began with curiosity about the web and grew into a passion for building clean, maintainable solutions while keeping up with the latest technologies.
          </p>


          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">5+</div>
              <div className="text-dark-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">1+</div>
              <div className="text-dark-300">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right Content - Your Photo */}
        <div className="relative">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="mockup.png" 
              alt="Amani Samuel" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertise.map((item, index) => (
          <div key={index} className="card group">
            <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-all duration-300">
              <div className="text-primary-400 group-hover:text-white transition-colors">
                {item.icon}
              </div>
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
            <p className="text-dark-300 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
