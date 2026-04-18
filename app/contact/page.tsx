'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name} - ${formData.subject}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:info@sigmatronics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@sigmatronics.com',
      description: "Send us an email and we'll respond within 24 hours",
      color: '#f79d02'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 XXXXX XXXXX',
      description: 'Mon-Fri from 9am to 6pm IST',
      color: '#0b3d91'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mumbai, Maharashtra, India',
      description: 'Our headquarters and development center',
      color: '#f79d02'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Weekend support available for urgent matters',
      color: '#0b3d91'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#0a3576] to-[#0b3d91]">
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f79d02]/10 to-transparent"></div>
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#f79d02]/30 rounded-full"
              initial={{ x: Math.random() * 100 + '%', y: Math.random() * 100 + '%', scale: 0 }}
              animate={{ scale: [0, 1, 0], opacity: [0, 0.5, 0] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-white mb-6"
            >
              Get In <span className="text-[#f79d02]">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-200 max-w-3xl mx-auto mb-12"
            >
              Ready to transform your business with innovative IoT solutions? Let's discuss how we can help you achieve your goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <info.icon className="h-12 w-12 mx-auto mb-4" style={{ color: info.color }} />
              <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
              <p className="text-slate-200 font-medium mb-2">{info.details}</p>
              <p className="text-slate-400 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center mb-8">
              <MessageSquare className="h-8 w-8 text-[#f79d02] mr-3" />
              <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-200 text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#f79d02] focus:ring-2 focus:ring-[#f79d02]/20 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-slate-200 text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#f79d02] focus:ring-2 focus:ring-[#f79d02]/20 transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-200 text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#f79d02] focus:ring-2 focus:ring-[#f79d02]/20 transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-slate-200 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#f79d02] focus:ring-2 focus:ring-[#f79d02]/20 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-200 text-sm font-medium mb-2">Subject *</label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f79d02] focus:ring-2 focus:ring-[#f79d02]/20 transition-all"
                >
                  <option value="" className="bg-[#0a3576]">Select a subject</option>
                  <option value="Product Inquiry" className="bg-[#0a3576]">Product Inquiry</option>
                  <option value="Service Consultation" className="bg-[#0a3576]">Service Consultation</option>
                  <option value="Partnership Opportunity" className="bg-[#0a3576]">Partnership Opportunity</option>
                  <option value="Technical Support" className="bg-[#0a3576]">Technical Support</option>
                  <option value="Custom Solution" className="bg-[#0a3576]">Custom Solution</option>
                  <option value="Other" className="bg-[#0a3576]">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-200 text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#f79d02] focus:ring-2 focus:ring-[#f79d02]/20 transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0b3d91] to-[#0a3576] hover:from-[#f79d02] hover:to-[#0b3d91] text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#f79d02]/25 transform hover:-translate-y-1"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
              <MapPin className="h-8 w-8 text-[#f79d02] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Location</h3>
              <div className="space-y-3 text-slate-200">
                <p className="font-medium">Sigmatronics Innovation Private Limited</p>
                <p>Mumbai, Maharashtra</p>
                <p>India - 400001</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f79d02]/20 to-[#0b3d91]/20 backdrop-blur-sm border border-[#f79d02]/30 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#f79d02] mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-200 text-sm">10+ years of IoT expertise</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#f79d02] mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-200 text-sm">End-to-end solution provider</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#f79d02] mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-200 text-sm">Custom hardware & software development</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#f79d02] mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-200 text-sm">24/7 technical support</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Response</h3>
              <p className="text-slate-200 mb-4">
                We typically respond to all inquiries within 24 hours during business days.
                For urgent technical support, our team is available round the clock.
              </p>
              <div className="flex items-center text-[#f79d02]">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-medium">Average response time: 4 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
