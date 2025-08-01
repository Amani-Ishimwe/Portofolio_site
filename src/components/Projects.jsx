import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaEthereum } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiSolidity } from 'react-icons/si'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'ai-ml', label: 'AI/ML' }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icons: [<FaReact />, <FaNodeJs />, <SiMongodb />],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'DeFi Dashboard',
      description: 'A decentralized finance dashboard for tracking cryptocurrency portfolios, yield farming, and DeFi protocols.',
      image: '/api/placeholder/400/250',
      category: 'blockchain',
      technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum'],
      icons: [<FaReact />, <SiSolidity />, <FaEthereum />],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by machine learning algorithms for customer support and automated responses.',
      image: '/api/placeholder/400/250',
      category: 'ai-ml',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      icons: [<FaPython />, <FaReact />],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Firebase'],
      icons: [<FaReact />, <SiTypescript />],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'API Gateway Service',
      description: 'A microservices API gateway built with Node.js for handling authentication, rate limiting, and request routing.',
      image: '/api/placeholder/400/250',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
      icons: [<FaNodeJs />],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'NFT Marketplace',
      description: 'A decentralized NFT marketplace for creating, buying, and selling digital art and collectibles.',
      image: '/api/placeholder/400/250',
      category: 'blockchain',
      technologies: ['React', 'Solidity', 'IPFS', 'MetaMask'],
      icons: [<FaReact />, <SiSolidity />, <FaEthereum />],
      github: '#',
      live: '#',
      featured: true
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Explore my latest work across different technologies and domains
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === category.id
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="card group cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <div className="w-full h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl text-primary-400">{project.icons[0]}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex gap-2">
                    <a 
                      href={project.github}
                      className="w-10 h-10 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <FaGithub className="text-white" />
                    </a>
                    <a 
                      href={project.live}
                      className="w-10 h-10 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-dark-300 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-dark-800 text-dark-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full">
                  Featured Project
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <p className="text-lg text-dark-300 mb-6">
          Interested in working together? Let's discuss your project!
        </p>
        <button className="btn-primary">
          Get In Touch
        </button>
      </div>
    </div>
  )
}

export default Projects 