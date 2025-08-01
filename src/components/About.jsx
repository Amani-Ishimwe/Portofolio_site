import { FaCode, FaPalette, FaBrain, FaLink, FaDatabase, FaServer } from 'react-icons/fa'

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
    },
    {
      icon: <FaBrain />,
      title: 'AI Engineering',
      description: 'Developing machine learning models and AI solutions using Python, TensorFlow, and PyTorch.'
    },
    {
      icon: <FaLink />,
      title: 'Blockchain Development',
      description: 'Building decentralized applications and smart contracts using Solidity and Web3 technologies.'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Development',
      description: 'Designing and optimizing database systems with SQL, NoSQL, and cloud database solutions.'
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
            <span className="gradient-text">Digital Reality</span>
          </h3>
          
          <p className="text-lg text-dark-300 leading-relaxed">
            I'm a passionate full-stack developer with expertise spanning from frontend development to blockchain technology. 
            With over 5 years of experience in the tech industry, I've worked on diverse projects that have shaped my 
            understanding of modern software development.
          </p>
          
          <p className="text-lg text-dark-300 leading-relaxed">
            My journey in technology started with a curiosity about how things work on the web, which evolved into a 
            deep passion for creating innovative solutions. I believe in writing clean, maintainable code and staying 
            up-to-date with the latest technologies and best practices.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-dark-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-dark-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">30+</div>
              <div className="text-dark-300">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Right Content - Image/Visual */}
        <div className="relative">
          <div className="relative w-full h-96 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-800/50 to-dark-900/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl font-bold text-white">AS</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Amani Samuel</h4>
                <p className="text-dark-300">Full-Stack Developer</p>
              </div>
            </div>
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