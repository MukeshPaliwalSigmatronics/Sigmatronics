'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Cpu, Code, Zap, CheckCircle, Star, Users, Award, Globe } from 'lucide-react';
import NextImage from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a3576] via-[#0b3d91] to-[#f79d02]">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#f79d02]/40 rounded-full"
                initial={{
                  x: Math.random() * 1920, // Use typical desktop width
                  y: Math.random() * 1080, // Use typical desktop height
                  scale: 0
                }}
                animate={{
                  y: [null, -100, 1080], // Use typical desktop height
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <NextImage
                  src="/sigmatronics-website-details/Sigmatronics_Logo_new.png"
                  alt="Sigmatronics Logo"
                  width={250}
                  height={80}
                  className="mx-auto lg:mx-0 mb-8 drop-shadow-lg"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight"
              >
                Pioneering <span className="text-[#f79d02]">Innovation</span> in Technology
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-slate-200 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Transforming industries through cutting-edge hardware, software, IoT solutions, and expert consultancy services.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#0b3d91] to-[#0a3576] hover:from-[#f79d02] hover:to-[#0b3d91] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#f79d02]/25 transform hover:-translate-y-1"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-[#f79d02] text-[#f79d02] hover:bg-[#f79d02] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-[#f79d02]/20 to-[#0b3d91]/20 rounded-full blur-3xl absolute -top-10 -right-10"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-6 rounded-xl text-center shadow-lg"
                    >
                      <Cpu className="h-12 w-12 text-[#f79d02] mx-auto mb-4" />
                      <h3 className="text-white font-semibold">Hardware</h3>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-6 rounded-xl text-center shadow-lg"
                    >
                      <Code className="h-12 w-12 text-[#f79d02] mx-auto mb-4" />
                      <h3 className="text-white font-semibold">Software</h3>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-6 rounded-xl text-center shadow-lg"
                    >
                      <Zap className="h-12 w-12 text-[#f79d02] mx-auto mb-4" />
                      <h3 className="text-white font-semibold">IoT</h3>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-6 rounded-xl text-center shadow-lg"
                    >
                      <Users className="h-12 w-12 text-[#f79d02] mx-auto mb-4" />
                      <h3 className="text-white font-semibold">Consultancy</h3>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Verticals Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Our Verticals</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover our comprehensive offerings designed to meet diverse technological needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            {
              icon: Cpu,
              title: 'Sigmatronics Hardware',
              desc: 'Cutting-edge hardware solutions from vending to IoT gateways.',
              link: '/products'
            },
            {
              icon: Code,
              title: 'Sigmatronics Software',
              desc: 'Innovative software platforms and IoT-enabled solutions.',
              link: '/services'
            },
            {
              icon: Zap,
              title: 'Sigmatronics Solutions',
              desc: 'Integrated hardware-software solutions for various industries.',
              link: '/solutions'
            },
            {
              icon: Users,
              title: 'Sigmatronics Consultancy',
              desc: 'Expert consultancy and development partnerships.',
              link: '/contact'
            },
            {
              icon: Globe,
              title: 'Sigmatronics Learnings',
              desc: 'Empowering innovators through tech education and internships.',
              link: '/contact'
            }
          ].map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-6 rounded-xl border border-[#f79d02]/30 hover:border-[#f79d02] shadow-lg hover:shadow-xl hover:shadow-[#f79d02]/20 transition-all duration-300 text-center transform hover:-translate-y-1"
            >
              <vertical.icon className="h-12 w-12 text-[#f79d02] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">{vertical.title}</h3>
              <p className="text-slate-300 mb-4">{vertical.desc}</p>
              <Link href={vertical.link} className="text-[#f79d02] hover:text-white font-medium transition-colors">Explore →</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-[#f79d02]/10 to-[#0b3d91]/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gradient-to-br from-[#0b3d91] to-[#0a3576] shadow-lg border border-[#f79d02]/30"
          >
            <div className="text-4xl font-bold text-[#f79d02] mb-2">50+</div>
            <div className="text-white font-medium">Projects Completed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gradient-to-br from-[#0b3d91] to-[#0a3576] shadow-lg border border-[#f79d02]/30"
          >
            <div className="text-4xl font-bold text-[#f79d02] mb-2">10+</div>
            <div className="text-white font-medium">Years Experience</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gradient-to-br from-[#0b3d91] to-[#0a3576] shadow-lg border border-[#f79d02]/30"
          >
            <div className="text-4xl font-bold text-[#f79d02] mb-2">100+</div>
            <div className="text-white font-medium">Happy Clients</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gradient-to-br from-[#0b3d91] to-[#0a3576] shadow-lg border border-[#f79d02]/30"
          >
            <div className="text-4xl font-bold text-[#f79d02] mb-2">24/7</div>
            <div className="text-white font-medium">Support</div>
          </motion.div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-[#0a3576] to-[#0b3d91]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Sigmatronics Hardware</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            From our inception, we've specialized in hardware solutions, designing everything from vending machines to advanced IoT gateways.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Hardware Portfolio</h3>
            <ul className="space-y-2 text-white">
              <li>• Vending Hardware</li>
              <li>• Water Solution Hardware</li>
              <li>• Solar Hardware (Inverters, Charge Controllers)</li>
              <li>• Automation Hardware</li>
              <li>• Dispensing Solution Hardware</li>
              <li>• Incinerator Hardware</li>
              <li>• Industrial Electrical Automation Hardware</li>
              <li>• Industrial IoT Automation Hardware</li>
              <li>• Home Automation Hardware</li>
              <li>And many more innovative designs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Proprietary IoT Gateways</h3>
            <p className="text-white mb-4">
              Our proprietary 2G/4G/Wi-Fi communication gateways are designed for all-purpose IoT solutions.
            </p>
            <h4 className="text-xl font-semibold text-white mb-2">Features:</h4>
            <ul className="space-y-2 text-white">
              <li>• Multi-protocol support (MQTT, HTTP, CoAP)</li>
              <li>• Secure data transmission</li>
              <li>• Low power consumption</li>
              <li>• Remote configuration and monitoring</li>
              <li>• Edge computing capabilities</li>
            </ul>
            <h4 className="text-xl font-semibold text-white mb-2 mt-4">Use Cases:</h4>
            <ul className="space-y-2 text-white">
              <li>• Smart agriculture for real-time crop monitoring</li>
              <li>• Industrial automation for predictive maintenance</li>
              <li>• Home automation for energy management</li>
              <li>• Environmental monitoring networks</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Innovative IoT Hardware Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-4 rounded-lg shadow-lg border border-[#f79d02]/20 hover:border-[#f79d02]/50 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Sensors</h4>
              <p className="text-slate-300">Intelligent sensors with onboard AI for real-time data processing and anomaly detection.</p>
            </div>
            <div className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-4 rounded-lg shadow-lg border border-[#f79d02]/20 hover:border-[#f79d02]/50 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-2">5G-Enabled Devices</h4>
              <p className="text-slate-300">Next-generation IoT devices leveraging 5G for ultra-low latency and high-speed connectivity.</p>
            </div>
            <div className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-4 rounded-lg shadow-lg border border-[#f79d02]/20 hover:border-[#f79d02]/50 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-2">Energy Harvesting Modules</h4>
              <p className="text-gray-400">Self-powered IoT devices using solar, kinetic, or thermal energy harvesting technologies.</p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="bg-[#0b3d91] hover:bg-[#f79d02] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            View All Hardware <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* Software Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-[#0b3d91] to-[#0a3576]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Sigmatronics Software</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Our software vertical delivers custom software solutions, websites, and IoT-enabled platforms.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'VendMonitor.com',
              desc: 'Comprehensive vending machine monitoring and management platform with real-time analytics.'
            },
            {
              name: 'NodeQue.com',
              desc: 'IoT node management and queuing system for efficient device communication.'
            },
            {
              name: 'MetaPlugs.com',
              desc: 'Modular IoT platform for integrating various smart devices and sensors.'
            },
            {
              name: 'JivanSecure.com',
              desc: 'Security-focused platform for IoT device authentication and data protection.'
            }
          ].map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0a3576]/50  p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
              <p className="text-gray-400">{platform.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            Explore Software Solutions <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a3576]/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Sigmatronics Solutions</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Integrated hardware-software solutions and future prospects across various domains.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Designed Solutions</h3>
            <ul className="space-y-2 text-white">
              <li>• Smart Vending Systems (Hardware + Software)</li>
              <li>• IoT-Based Water Management Solutions</li>
              <li>• Solar Power Monitoring and Control Systems</li>
              <li>• Industrial Automation Platforms</li>
              <li>• Home Energy Management Systems</li>
              <li>• Environmental Monitoring Networks</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Future Prospects</h3>
            <ul className="space-y-2 text-white">
              <li>• AI-Driven Predictive Maintenance</li>
              <li>• Blockchain-Enabled IoT Security</li>
              <li>• 6G-Ready Smart Infrastructure</li>
              <li>• Quantum Computing Integration</li>
              <li>• Autonomous Robotic Systems</li>
              <li>• Sustainable Energy Solutions</li>
            </ul>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/solutions"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            View All Solutions <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* Consultancy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Sigmatronics Consultancy</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Expert consultancy services partnering with tech firms to deliver comprehensive solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Website Consultancy & Development</h3>
            <p className="text-gray-400">Custom website design, development, and optimization services.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Hardware Consultancy & Development</h3>
            <p className="text-gray-400">Expert guidance on hardware design, prototyping, and manufacturing.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Software Consultancy & Development</h3>
            <p className="text-gray-400">Full-stack software development and system architecture consulting.</p>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a3576]/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Sigmatronics Learnings</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Empowering the next generation of innovators through comprehensive tech education and hands-on experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Internship Programs</h3>
            <p className="text-white mb-4">
              Gain real-world experience in hardware design, software development, and IoT solutions.
            </p>
            <ul className="space-y-2 text-white">
              <li>• Hardware Prototyping Internships</li>
              <li>• IoT Development Programs</li>
              <li>• Software Engineering Internships</li>
              <li>• Research and Innovation Projects</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Tech Learning Initiatives</h3>
            <p className="text-white mb-4">
              Comprehensive training programs to build industry-ready skills.
            </p>
            <ul className="space-y-2 text-white">
              <li>• Embedded Systems Training</li>
              <li>• IoT and Sensor Technologies</li>
              <li>• Cloud Computing and AI</li>
              <li>• Modern Web Development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">About Sigmatronics</h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white mb-6">
              Sigmatronics Innovation Private Limited is a leading technology company expanding across multiple verticals to deliver innovative solutions globally.
            </p>
            <p className="text-white mb-6">
              Founded with a vision to innovate, we have grown to become a trusted partner for businesses seeking cutting-edge hardware, software, and integrated solutions.
            </p>
            <NextImage
              src="/sigmatronics-website-details/company image.png"
              alt="Sigmatronics Company"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-white mb-6">
              To empower industries with smart, sustainable, and scalable technology solutions that drive innovation and efficiency.
            </p>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-white mb-6">
              To be the global leader in IoT and automation technologies, fostering a connected world through intelligent systems.
            </p>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Values</h3>
            <ul className="space-y-2 text-white">
              <li>• Innovation</li>
              <li>• Quality</li>
              <li>• Sustainability</li>
              <li>• Collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clients and Customers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a3576]/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Our Clients & Customers</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Trusted by leading organizations worldwide.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <NextImage src="/sigmatronics-website-details/Customers-logo/png" alt="Client 1" width={100} height={50} />
          <NextImage src="/sigmatronics-website-details/Customers-logo/png (1)" alt="Client 2" width={100} height={50} />
          <NextImage src="/sigmatronics-website-details/Customers-logo/png (2)" alt="Client 3" width={100} height={50} />
          <NextImage src="/sigmatronics-website-details/Customers-logo/png (3)" alt="Client 4" width={100} height={50} />
          <NextImage src="/sigmatronics-website-details/Customers-logo/png (4)" alt="Client 5" width={100} height={50} />
          <NextImage src="/sigmatronics-website-details/Customers-logo/png (5)" alt="Client 6" width={100} height={50} />
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Achievements & Recognitions</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <NextImage
              src="/sigmatronics-website-details/awards-recognitions-and-certificates/Entrepreneur of the Year (Innovation in Business).jpg"
              alt="Entrepreneur of the Year"
              width={200}
              height={150}
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-white">Entrepreneur of the Year</h3>
            <p className="text-gray-400">Innovation in Business</p>
          </div>
          <div className="text-center">
            <NextImage
              src="/sigmatronics-website-details/awards-recognitions-and-certificates/Social Entrepreneur of the Year.jpg"
              alt="Social Entrepreneur of the Year"
              width={200}
              height={150}
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-white">Social Entrepreneur of the Year</h3>
          </div>
          <div className="text-center">
            <NextImage
              src="/sigmatronics-website-details/awards-recognitions-and-certificates/Sigmatronics Award News.jpeg"
              alt="Award News"
              width={200}
              height={150}
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-white">Industry Recognition</h3>
          </div>
        </div>
      </section>

      {/* Brand Partners and Supporting Institutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a3576]/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Brand Partners & Supporting Institutions</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">RCOEM TBI</h3>
            <p className="text-gray-400">Technology Business Incubator at RCOEM</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">MSSU ISpark Foundation</h3>
            <p className="text-gray-400">Innovation and Startup Support</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Nasscom</h3>
            <p className="text-gray-400">National Association of Software and Services Companies</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Connect with Us in Real-Time</h2>
          <p className="text-xl text-white mb-8">
            Our team is ready to discuss how we can help transform your business with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="border border-gray-600 text-white hover:bg-[#0a3576] px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
