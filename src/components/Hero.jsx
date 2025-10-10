import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  const roles = [
    'SOFTWARE ENGINEER',
    'UI/UX DESIGNER',
    'GRAPHIC DESIGNER'
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
    <section
      className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden
      bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)]
      [background-size:40px_40px]
      before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]
      before:bg-[size:80px_80px] before:pointer-events-none"
    >
      <div className="space-y-8 max-w-3xl relative z-10">
        {/* Name and Role */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-shadow-lg">
            <span className="text-white">ISHIMWE</span>
            <br />
            <span className="text-primary-500 font-instrument italic">
              AMANI SAMUEL
            </span>
          </h1>

          <div className="h-16 flex items-center justify-center">
            <span className="text-xl md:text-2xl text-dark-300 ">
              I'm a{' '}
              <span className="text-primary-500 font-semibold font-instrument italic">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xl md:text-xl text-dark-300 max-w-2xl mx-auto">
          Passionate about building scalable web applications and creating
          engaging user experiences.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
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
    </section>
  )
}

export default Hero
