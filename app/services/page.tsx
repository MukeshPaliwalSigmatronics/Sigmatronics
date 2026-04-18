'use client';

import { motion } from 'framer-motion';
import { Cpu, Code, Zap, ArrowRight, CheckCircle, Smartphone, Cloud, Database, Shield, Settings, Wrench, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: 'Hardware Solutions',
      description: 'Custom hardware development from concept to production',
      color: '#f79d02',
      features: [
        'Embedded Systems Design',
        'PCB Design & Layout',
        'IoT Device Development',
        'Prototyping & Testing',
        'Industrial Automation',
        'Sensor Integration'
      ],
      details: [
        {
          title: 'Embedded Systems',
          desc: 'Custom microcontroller and microprocessor-based systems for industrial and consumer applications.',
          items: ['ARM Cortex-M Series', 'Real-time Operating Systems', 'Low-power Design', 'Wireless Connectivity']
        },
        {
          title: 'PCB Design',
          desc: 'Professional printed circuit board design and layout services for complex electronic systems.',
          items: ['Multi-layer PCBs', 'High-speed Design', 'Signal Integrity', 'Thermal Management']
        }
      ]
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack software solutions and custom application development',
      color: '#0b3d91',
      features: [
        'Web Applications',
        'Mobile Apps',
        'API Development',
        'Database Design',
        'Cloud Solutions',
        'UI/UX Design'
      ],
      details: [
        {
          title: 'Web Development',
          desc: 'Modern web applications built with latest technologies and frameworks.',
          items: ['React/Next.js', 'Node.js', 'Python/Django', 'Progressive Web Apps']
        },
        {
          title: 'Mobile Development',
          desc: 'Native and cross-platform mobile applications for iOS and Android.',
          items: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization']
        }
      ]
    },
    {
      icon: Zap,
      title: 'IoT Solutions',
      description: 'Complete IoT ecosystem development and integration',
      color: '#f79d02',
      features: [
        'IoT Platform Development',
        'Sensor Networks',
        'Data Analytics',
        'Cloud Integration',
        'Edge Computing',
        'Security Solutions'
      ],
      details: [
        {
          title: 'IoT Platforms',
          desc: 'Scalable IoT platforms for device management and data processing.',
          items: ['Device Management', 'Real-time Monitoring', 'Data Visualization', 'API Integration']
        },
        {
          title: 'Smart Systems',
          desc: 'Intelligent systems combining hardware, software, and AI capabilities.',
          items: ['Predictive Maintenance', 'Automated Controls', 'Remote Monitoring', 'AI Integration']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#0a3576] to-[#0b3d91]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f79d02]/10 to-transparent"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#f79d02]/40 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: 0
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-white mb-6"
            >
              Our <span className="text-[#f79d02]">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-200 max-w-4xl mx-auto mb-12"
            >
              Comprehensive technology solutions spanning hardware, software, and IoT systems designed to meet your unique business requirements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <service.icon className="h-16 w-16 mb-6" style={{ color: service.color }} />
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#f79d02] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-3 mb-8">
                {service.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-slate-200">
                    <CheckCircle className="h-5 w-5 text-[#f79d02] mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center text-[#f79d02] hover:text-white font-semibold group-hover:translate-x-2 transition-all duration-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, serviceIndex) => (
        <section key={service.title} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${serviceIndex % 2 === 0 ? 'bg-gradient-to-r from-[#f79d02]/5 to-transparent' : 'bg-gradient-to-l from-[#0b3d91]/5 to-transparent'}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <service.icon className="h-20 w-20 mx-auto mb-6" style={{ color: service.color }} />
            <h2 className="text-4xl font-bold font-heading text-white mb-6">{service.title}</h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">{service.description}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {service.details.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{detail.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{detail.desc}</p>

                <div className="space-y-3">
                  {detail.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-slate-200">
                      <CheckCircle className="h-5 w-5 text-[#f79d02] mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0b3d91] to-[#0a3576] rounded-2xl p-12 text-center shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive technology solutions can drive your success.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#f79d02] to-[#0b3d91] hover:from-[#0b3d91] hover:to-[#f79d02] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl hover:shadow-[#f79d02]/25 transform hover:-translate-y-1"
          >
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* IoT & Sensor Systems */}
      <section id="iot" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a3576]/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Zap className="h-16 w-16 text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">IoT & Sensor Systems</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Connected device ecosystems and intelligent data processing solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Real-time Monitoring',
              desc: 'Continuous data acquisition and monitoring systems for critical applications.',
              features: ['Live Data Streaming', 'Alert Systems', 'Remote Diagnostics', 'Performance Analytics']
            },
            {
              title: 'Edge Computing',
              desc: 'Distributed computing solutions for low-latency processing at the network edge.',
              features: ['Edge AI Processing', 'Local Data Processing', 'Offline Capabilities', 'Bandwidth Optimization']
            },
            {
              title: 'Cloud Integration',
              desc: 'Seamless connectivity between IoT devices and cloud platforms for data management.',
              features: ['Device Management', 'Data Synchronization', 'Scalable Architecture', 'Security Protocols']
            },
            {
              title: 'Data Analytics',
              desc: 'Advanced analytics and machine learning for IoT data insights and predictions.',
              features: ['Predictive Analytics', 'Anomaly Detection', 'Trend Analysis', 'Automated Reporting']
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0a3576]/50  p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-white flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white mb-8">
            Let's discuss how our services can help transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/solutions"
              className="border border-gray-600 text-white hover:bg-[#0a3576] px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Solutions
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}