import { useState } from 'react'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc',
      company: 'TechStart Inc',
      rating: 5,
      text: 'Amani Samuel is an exceptional developer who delivered our e-commerce platform ahead of schedule. His expertise in React and Node.js is outstanding, and he consistently provided innovative solutions to complex problems.',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO, DeFi Ventures',
      company: 'DeFi Ventures',
      rating: 5,
      text: 'Working with Amani on our blockchain project was a game-changer. His knowledge of Solidity and smart contract development is top-notch. He helped us build a secure and scalable DeFi platform.',
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Product Manager, DataFlow',
      company: 'DataFlow',
      rating: 5,
      text: 'Amani\'s AI/ML expertise helped us implement a sophisticated recommendation system. His Python skills and understanding of machine learning algorithms are exceptional. Highly recommended!',
      avatar: 'ER'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Lead Developer, WebSolutions',
      company: 'WebSolutions',
      rating: 5,
      text: 'Amani is a true full-stack developer with excellent communication skills. He not only delivered high-quality code but also mentored our junior developers. His attention to detail is remarkable.',
      avatar: 'DT'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Founder, StartupXYZ',
      company: 'StartupXYZ',
      rating: 5,
      text: 'Amani helped us build our MVP from scratch. His expertise in modern web technologies and his ability to work under pressure made him an invaluable team member. We couldn\'t have done it without him.',
      avatar: 'LW'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          What clients say about working with me
        </p>
      </div>

      {/* Main Testimonial */}
      <div className="max-w-4xl mx-auto">
        <div className="card relative">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-primary-500/20">
            <FaQuoteLeft size={48} />
          </div>

          <div className="relative z-10">
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-xl" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl text-white text-center leading-relaxed mb-8 px-8">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{currentTestimonial.avatar}</span>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white">{currentTestimonial.name}</h4>
                <p className="text-primary-400">{currentTestimonial.position}</p>
                <p className="text-dark-300 text-sm">{currentTestimonial.company}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-500'
                  : 'bg-dark-700 hover:bg-dark-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-4 gap-8 mt-20">
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">100%</div>
          <div className="text-dark-300">Client Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">50+</div>
          <div className="text-dark-300">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">30+</div>
          <div className="text-dark-300">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">5.0</div>
          <div className="text-dark-300">Average Rating</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <p className="text-lg text-dark-300 mb-6">
          Ready to start your next project? Let's work together!
        </p>
        <button className="btn-primary">
          Get Started Today
        </button>
      </div>
    </div>
  )
}

export default Testimonials 