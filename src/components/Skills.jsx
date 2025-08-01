import { useState } from 'react'
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaAws,
  FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaEthereum
} from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiTensorflow, SiSolidity } from 'react-icons/si'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'devops', label: 'DevOps' }
  ]

  const skills = [
    // Frontend
    { name: 'React', icon: <FaReact />, category: 'frontend', level: 95, color: '#61DAFB' },
    { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend', level: 90, color: '#3178C6' },
    { name: 'JavaScript', icon: <FaJs />, category: 'frontend', level: 95, color: '#F7DF1E' },
    { name: 'HTML5', icon: <FaHtml5 />, category: 'frontend', level: 90, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, category: 'frontend', level: 85, color: '#1572B6' },
    { name: 'Figma', icon: <FaFigma />, category: 'frontend', level: 80, color: '#F24E1E' },
    
    // Backend
    { name: 'Node.js', icon: <FaNodeJs />, category: 'backend', level: 90, color: '#339933' },
    { name: 'Python', icon: <FaPython />, category: 'backend', level: 85, color: '#3776AB' },
    
    // Database
    { name: 'MongoDB', icon: <SiMongodb />, category: 'database', level: 85, color: '#47A248' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'database', level: 80, color: '#336791' },
    { name: 'MySQL', icon: <FaDatabase />, category: 'database', level: 85, color: '#4479A1' },
    
    // AI/ML
    { name: 'TensorFlow', icon: <SiTensorflow />, category: 'ai-ml', level: 75, color: '#FF6F00' },
    { name: 'Python ML', icon: <FaPython />, category: 'ai-ml', level: 80, color: '#3776AB' },
    
    // Blockchain
    { name: 'Solidity', icon: <SiSolidity />, category: 'blockchain', level: 70, color: '#363636' },
    { name: 'Ethereum', icon: <FaEthereum />, category: 'blockchain', level: 75, color: '#627EEA' },
    
    // DevOps
    { name: 'Docker', icon: <FaDocker />, category: 'devops', level: 80, color: '#2496ED' },
    { name: 'AWS', icon: <FaAws />, category: 'devops', level: 75, color: '#FF9900' },
    { name: 'Git', icon: <FaGitAlt />, category: 'devops', level: 90, color: '#F05032' }
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          My technical expertise spans across multiple domains, from frontend to blockchain development
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index} 
            className="card group cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
              >
                {skill.icon}
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-3">{skill.name}</h4>
              
              {/* Progress Bar */}
              <div className="w-full bg-dark-800 rounded-full h-2 mb-2">
                <div 
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
              </div>
              
              <span className="text-sm text-dark-300">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">18+</div>
          <div className="text-dark-300">Technologies</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">7</div>
          <div className="text-dark-300">Categories</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">5+</div>
          <div className="text-dark-300">Years Experience</div>
        </div>
      </div>
    </div>
  )
}

export default Skills 