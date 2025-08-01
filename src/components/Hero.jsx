import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    'Frontend Developer',
    'Backend Developer', 
    'UI/UX Designer',
    'AI Engineer',
    'Blockchain Developer',
    'Database Developer',
    'DevOps Engineer'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-shadow-lg">
                <span className="text-white">ISHIMWE</span>
                <br />
                <span className="gradient-text">AMANI SAMUEL</span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <span className="text-xl md:text-2xl text-dark-300">
                  I'm a{' '}
                  <span className="gradient-text font-semibold animate-pulse">
                    {roles[currentRole]}
                  </span>
                </span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto lg:mx-0">
              Crafting digital experiences with cutting-edge technology. 
              From frontend to blockchain, I bring ideas to life with code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary">
                View My Work
              </button>
              <button className="btn-outline flex items-center justify-center gap-2">
                <FaDownload />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="text-white" />
              </a>
            </div>
          </div>

          {/* Right Content - Animated Elements */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-pulse-slow opacity-20"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-dark-800 rounded-lg flex items-center justify-center animate-bounce-slow">
                <span className="text-primary-400 font-mono text-sm">NestJs</span>
              </div>
              
              <div className="absolute top-20 right-10 w-16 h-16 bg-dark-800 rounded-lg flex items-center justify-center animate-bounce-slow" style={{animationDelay: '0.5s'}}>
                <span className="text-primary-400 font-mono text-sm">Node.js</span>
              </div>
              
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-dark-800 rounded-lg flex items-center justify-center animate-bounce-slow" style={{animationDelay: '1s'}}>
                <span className="text-primary-400 font-mono text-sm">AI/ML</span>
              </div>
              
              <div className="absolute bottom-10 right-20 w-16 h-16 bg-dark-800 rounded-lg flex items-center justify-center animate-bounce-slow" style={{animationDelay: '1.5s'}}>
                <span className="text-primary-400 font-mono text-sm">Blockchain</span>
              </div>
              
              {/* Center Profile Placeholder */}
              <div className="absolute inset-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-600">AS</span>
                  </div>
                  <p className="text-white font-semibold">Amani Samuel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 