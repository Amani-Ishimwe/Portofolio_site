import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    { icon: <FaEnvelope />, title: 'Email', value: 'amanisamuel10@gmail.com', link: 'mailto:amanisamuel10@gmail.com' },
    { icon: <FaPhone />, title: 'Phone', value: '+250 791 515 013', link: 'tel:+250791515013' },
    { icon: <FaMapMarkerAlt />, title: 'Location', value: 'Kigali, Rwanda', link: '#' }
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Amani-Ishimwe', label: 'GitHub', target:"_blank", rel:"noopener noreferrer" },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/amani-ishimwe-409825331/', label: 'LinkedIn', target:"_blank", rel:"noopener noreferrer" },
    { icon: <FontAwesomeIcon icon={faXTwitter} />, href: 'https://x.com/AmaniIsh2', label: 'Twitter', target: "_blank", rel: "noopener noreferrer" },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/amani_ishimwe008/', label: 'Instagram', target:"_blank", rel:"noopener noreferrer" }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const serviceID = 'service_vpltotq';
    const templateID = 'template_dx7ib5k';
    const publicKey = '-NbGLJC-isqrb5eVs';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString()
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch(error => {
        console.error('Email send error:', error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to start your next project? Let's discuss how I can help bring your ideas to life</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's <span className="gradient-text">Connect</span></h3>
            <p className="text-lg text-dark-300 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} className="flex items-center space-x-4 p-4 bg-dark-800/50 rounded-lg hover:bg-dark-800 transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-all duration-300">
                  <div className="text-primary-400 group-hover:text-white transition-colors">{info.icon}</div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{info.title}</h4>
                  <p className="text-dark-300">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target={social.target} rel={social.rel} className="w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label={social.label}>
                  <div className="text-white">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card">
          <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
              <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full px-4 py-3 bg-dark-800 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300" />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="w-full px-4 py-3 bg-dark-800 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300" />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-white font-medium mb-2">Subject *</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry" className="w-full px-4 py-3 bg-dark-800 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300" />
              {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">Message *</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} placeholder="Tell me about your project..." className="w-full px-4 py-3 bg-dark-800 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none" />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;