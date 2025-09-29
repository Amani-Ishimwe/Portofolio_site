import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPaintBrush, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ui/ux', label: 'UI/UX Design' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Blog Management Api',
      description: 'A modern blog management API built with Node.js, Expressjs and MongoDB. Features include user authentication, post creation, and comment management.',
      image: '/nodejs.jpg',
      category: 'backend',
      technologies: [ 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      icons: [ <FaNodeJs />, <SiMongodb />],
      github: 'https://github.com/Amani-Ishimwe/blog-management-api.git',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Visitor Management System',
      description: 'A system for managing visitor check-ins',
      image: '/nestjs.jpg',
      category: 'backend',
      technologies: ['NestJs', 'Postgresql', 'PrismaORM'],
      icons: [<FaNodeJs />, <SiPostgresql />],
      github: 'https://github.com/Amani-Ishimwe/Visitor_Management_System-NestJs.git',
      live: 'https://visitormanagementsystem-nestjs-production.up.railway.app/api/docs',
      featured: true
    },
    {
      id: 3,
      title: 'Menya Bot',
      description: 'An intelligent chatbot powered by machine learning algorithms for customer support and automated responses.',
      image: '/menya.png',
      category: 'ui/ux',
      technologies: ['Figma'],
      icons: [<FaPaintBrush />],
      github: '#',
      live: 'https://www.figma.com/proto/JTZZaLW3PeucwDQvX5vRbh/Menya?node-id=57-1841&t=uXJVyZuUw8vDr8bV-1',
      featured: false
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image: '/nestjs.jpg',
      category: 'backend',
      technologies: ['Nestjs', 'PrismaORM', 'Postgresql'],
      icons: [<FaNodeJs />, <SiTypescript />, <SiPostgresql />],
      github: 'https://github.com/Amani-Ishimwe/Task-Management-System-NestJS.git',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Blog and Magazine',
      description: 'A platform for writers and readers to share and discover articles on various topics.',
      image: '/reactjsx.jpg',
      category: 'frontend',
      technologies: ['React','Tailwind CSS'],
      icons: [<FaReact />, <SiTailwindcss />],
      github: 'https://github.com/Amani-Ishimwe/BlogSphere_Frontend_ReactJs.git',
      live: 'https://elegant-marigold-f955c0.netlify.app/',
      featured: false
    },
    {
      id: 6,
      title: 'Citizen Engagement Platform',
      description: 'A platform for citizens to engage with their local government and access public services.',
      image: '/mern.jpg',
      category: 'fullstack',
      technologies: ['React','Tailwind CSS','Nodejs', 'Express','MongoDB'],
      icons: [<FaReact />, <SiTailwindcss />, <FaNodeJs />, <SiMongodb />],
      github: 'https://github.com/Amani-Ishimwe/CitizenEngagement.git',
      live: '#',
      featured: false
    },
    {
      id: 7,
      title: 'University Landing Page',
      description: 'A landing page that shows details about the campus such as activities, adm',
      image: '/html.jpg',
      category: 'frontend',
      technologies: ['React', 'Node.js', 'MongoDB'],
      icons: [<FaHtml5 />, <FaCss3 />],
      github: 'https://github.com/Amani-Ishimwe/university.git',
      live: 'https://shimmering-dasik-399777.netlify.app/',
      featured: false
    },
    {
      id: 8,
      title: 'Portfolio Website',   
      description: 'A personal portfolio website showcasing my projects, skills, and experience.',
      image: '/reactjsx.jpg',
      category: 'frontend',
      technologies: ['React', 'Tailwind CSS'],
      icons: [<FaReact />, <SiTailwindcss />],
      github: 'https://github.com/Amani-Ishimwe/Portofolio_site.git',
      live: 'https://amaniportofolio.netlify.app/',
      featured: false
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title text-primary-500">Featured Projects</h2>
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
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full flex gap-2">
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
