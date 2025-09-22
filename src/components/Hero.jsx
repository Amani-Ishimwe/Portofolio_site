import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  const roles = [
    'FRONTEND DEVELOPER',
    'BACKEND DEVELOPER',
    'UI/UX DESIGNER'
  ]

  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let typingSpeed = isDeleting ? 80 : 120

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex, roles])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
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
                  <span className="gradient-text font-semibold">
                    {text}
                    <span className="animate-pulse">|</span>
                  </span>
                </span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto lg:mx-0">
              Passionate about building scalable web applications and creating
              engaging user experiences.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href="https://github.com/Amani-Ishimwe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/amani-ishimwe-409825331/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-white" />
              </a>
              <a 
                href="https://x.com/AmaniIsh2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ color: 'white' }}
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a 
                href="https://www.instagram.com/amani_ishimwe008/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>

          {/* Right Content - Oval Portrait Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-[28rem] md:w-96 md:h-[32rem] overflow-hidden shadow-2xl border-1 border-primary-500 rounded-full">
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
