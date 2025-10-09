import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Amani-Ishimwe', label: 'GitHub', target: '_blank', rel: 'noopener noreferrer' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/amani-ishimwe-409825331/', label: 'LinkedIn', target: '_blank', rel: 'noopener noreferrer' },
    { icon: <FontAwesomeIcon icon={faXTwitter} />, href: 'https://x.com/AmaniIsh2', label: 'Twitter', target: '_blank', rel: 'noopener noreferrer' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/amani_ishimwe008/', label: 'Instagram', target: '_blank', rel: 'noopener noreferrer' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900/50 border-t border-dark-800/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/logo.svg"
                alt="Amani Samuel Logo"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <span className="text-2xl font-bold text-primary-500">Amani Samuel</span>
            </div>

            <p className="text-dark-300 leading-relaxed mb-6 max-w-md">
              A passionate full-stack developer specializing in modern web technologies. Let's build something amazing together!
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400" />
                <a href="mailto:amanisamuel10@gmail.com" className="text-dark-300 hover:text-white transition-colors">
                  amanisamuel10@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400" />
                <a href="tel:+250791515013" className="text-dark-300 hover:text-white transition-colors">
                  +250 791 515 013
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.target}
                  rel={social.rel}
                  className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <div className="text-white">{social.icon}</div>
                </a>
              ))}
            </div>

            {/* <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Stay Updated</h4>
              <div className="flex justify-center md:justify-start">
                <div className="flex w-full max-w-xs">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-dark-800 border border-dark-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-white placeholder-dark-400"
                  />
                  <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-300 text-sm">
              © {currentYear} Amani Samuel Ishimwe. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-dark-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-dark-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-dark-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-dark-400 text-sm">
              Made with  by Amani Samuel using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
