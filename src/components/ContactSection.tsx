import React, { useState, useRef, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../index.css'; // Ensure you have the correct path to your CSS file

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'gurupavan2023_portfolio', // service ID
        'portfolio_contactform',   // template ID
        {
          name: formState.name,
          message: formState.message,
          time: new Date().toLocaleString(),
          email: formState.email,
        },
        '3ZltLMjLtEqvx1Dd8' // public key
      );
      setIsSubmitting(false);
      setSubmitStatus('success');
      setShowThankYou(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => {
        setShowThankYou(false);
        setSubmitStatus('idle');
      }, 4000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-500" size={24} />,
      label: "Email",
      value: "gurupavankumar9@gmail.com",
      link: "mailto:gurupavankumar9@gmail.com"
    },
    {
      icon: <Phone className="text-primary-500" size={24} />,
      label: "Phone",
      value: "+1 (409) 656-1965",
      link: "tel:+14096561965"
    },
    {
      icon: <MapPin className="text-primary-500" size={24} />,
      label: "Location",
      value: "Beaumont, Tx",
      link: "https://www.google.com/maps/search/?api=1&query=4400+S+M+L+King+Jr+Pkwy,+Beaumont,+TX+77705"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/g-v-s-p-kumar-appisetti-b6a70829a", icon: <FaLinkedin size={20} /> },
    { name: "GitHub", url: "https://github.com/Gurupavan5", icon: <FaGithub size={20} /> },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Let's start a conversation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Whether you have a question, project proposal, or just want to connect, 
              my inbox is always open. I'll try my best to get back to you as soon as possible!
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                      {item.label}
                    </h4>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-10 space-y-4 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
              <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                Find me on:
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ name, url, icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg shadow-sm hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
                  >
                    {icon}
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Send me a message
              </h3>

              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="inline-block p-4 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full mb-4">
                    <Send size={32} />
                  </div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
                    Message sent!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                      placeholder="<Name>"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-mono text-green-400 bg-gray-900 placeholder-green-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-green-400 transition-all duration-300"
                      placeholder="pavan@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                      placeholder="Hello, I'm Steve Jobs, and I want to talk about your project... 😊"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 text-white rounded-lg shadow-md transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary-500 hover:bg-primary-600 hover:shadow-lg transform hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send size={20} className="mr-2" />
                        Push
                      </span>
                    )}
                  </button>

                  {showThankYou && (
                    <div className="mt-4 flex justify-center space-x-2 text-green-500 text-lg select-none animate-pop">
                      <span>Thank you! 🎉</span>
                      <span className="animate-bounce">😊</span>
                      <span className="animate-bounce animation-delay-200">🙏</span>
                      <span className="animate-bounce animation-delay-400">✨</span>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
