import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    'Frontend Developer',
    'Backend Developer', 
    'UI/UX Designer'
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
              I bring ideas to life with code.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href="https://github.com/Amani-Ishimwe" 
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/amani-ishimwe-409825331/" 
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-white" />
              </a>
              <a 
                href="https://x.com/AmaniIsh2" 
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="text-white" />
              </a>
              <a 
                href="https://www.instagram.com/amani_ishimwe10/" 
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary-500">
              <img 
                src="/Copy.jpg" 
                alt="Amani Samuel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
