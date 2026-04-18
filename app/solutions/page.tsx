'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Zap, CheckCircle, Target, BarChart3, Users, Globe } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function Solutions() {
  const solutions = [
    {
      title: 'Smart Agriculture',
      icon: TrendingUp,
      color: '#f79d02',
      problem: 'Traditional farming faces challenges with resource optimization, crop monitoring, and yield prediction.',
      solution: 'IoT-enabled smart farming solutions with soil sensors, weather monitoring, and automated irrigation systems.',
      benefits: ['30% increase in crop yield', '50% reduction in water usage', 'Real-time crop health monitoring', 'Predictive maintenance alerts'],
      features: ['Soil moisture sensors', 'Weather stations', 'Automated irrigation', 'Mobile app dashboard'],
      stats: { projects: '15+', clients: '8', impact: '500+ acres' }
    },
    {
      title: 'Industrial Automation',
      icon: Shield,
      color: '#0b3d91',
      problem: 'Manufacturing processes lack real-time monitoring and predictive maintenance capabilities.',
      solution: 'Comprehensive industrial IoT solutions for equipment monitoring, process optimization, and predictive maintenance.',
      benefits: ['40% reduction in downtime', '25% improvement in efficiency', 'Early fault detection', 'Data-driven decision making'],
      features: ['Vibration sensors', 'Temperature monitoring', 'SCADA integration', 'Predictive analytics'],
      stats: { projects: '20+', clients: '12', impact: '95% uptime' }
    },
    {
      title: 'Healthcare Monitoring',
      icon: Users,
      color: '#f79d02',
      problem: 'Patient monitoring is limited to hospital settings with delayed response times.',
      solution: 'Wearable health monitoring devices and remote patient monitoring systems for continuous care.',
      benefits: ['Continuous vital signs monitoring', 'Early warning systems', 'Reduced hospital readmissions', 'Improved patient outcomes'],
      features: ['Wearable ECG monitors', 'Blood pressure sensors', 'Remote consultation', 'Emergency alerts'],
      stats: { projects: '8+', clients: '5', impact: '1000+ patients' }
    },
    {
      title: 'Smart Buildings',
      icon: Zap,
      color: '#0b3d91',
      problem: 'Building management systems are inefficient with high energy consumption and poor occupant comfort.',
      solution: 'Intelligent building automation systems for energy management, occupancy sensing, and environmental control.',
      benefits: ['35% energy savings', 'Improved occupant comfort', 'Automated facility management', 'Cost reduction'],
      features: ['Occupancy sensors', 'HVAC optimization', 'Lighting automation', 'Energy monitoring'],
      stats: { projects: '12+', clients: '6', impact: '40% savings' }
    },
    {
      title: 'Environmental Monitoring',
      icon: Globe,
      color: '#f79d02',
      problem: 'Environmental data collection is sporadic and lacks real-time analysis capabilities.',
      solution: 'Comprehensive environmental monitoring networks for air quality, water quality, and pollution tracking.',
      benefits: ['Real-time pollution alerts', 'Historical trend analysis', 'Regulatory compliance', 'Public health protection'],
      features: ['Air quality sensors', 'Water quality monitors', 'Noise level monitoring', 'Weather integration'],
      stats: { projects: '18+', clients: '10', impact: '50+ locations' }
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
              Industry <span className="text-[#f79d02]">Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-200 max-w-4xl mx-auto mb-12"
            >
              Transforming industries through innovative IoT solutions that solve real-world challenges and drive business growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <solution.icon className="h-12 w-12 mr-4" style={{ color: solution.color }} />
                  <h2 className="text-3xl font-bold text-white">{solution.title}</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-500/20 to-transparent border-l-4 border-red-500 pl-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-2">The Challenge</h3>
                    <p className="text-slate-300">{solution.problem}</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/20 to-transparent border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold text-green-300 mb-2">Our Solution</h3>
                    <p className="text-slate-300">{solution.solution}</p>
                  </div>

                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Key Benefits</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-slate-200">
                          <CheckCircle className="h-5 w-5 text-[#f79d02] mr-3 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#0b3d91]/80 to-[#0a3576]/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-slate-200">
                          <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: solution.color }}></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-[#f79d02]/20 to-[#f79d02]/10 border border-[#f79d02]/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-[#f79d02]">{solution.stats.projects}</div>
                      <div className="text-xs text-slate-300">Projects</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#0b3d91]/20 to-[#0b3d91]/10 border border-[#0b3d91]/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-[#0b3d91]">{solution.stats.clients}</div>
                      <div className="text-xs text-slate-300">Clients</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#f79d02]/20 to-[#f79d02]/10 border border-[#f79d02]/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-[#f79d02]">{solution.stats.impact}</div>
                      <div className="text-xs text-slate-300">Impact</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative h-96 bg-gradient-to-br from-[#0b3d91]/20 to-[#0a3576]/20 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <solution.icon className="h-32 w-32" style={{ color: solution.color }} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-slate-200 text-sm">End-to-end IoT solution</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0b3d91] to-[#0a3576] rounded-2xl p-12 text-center shadow-2xl"
        >
          <Target className="h-16 w-16 text-[#f79d02] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Discover how our industry-specific IoT solutions can revolutionize your operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#f79d02] to-[#0b3d91] hover:from-[#0b3d91] hover:to-[#f79d02] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl hover:shadow-[#f79d02]/25 transform hover:-translate-y-1"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-[#f79d02] text-[#f79d02] hover:bg-[#f79d02] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
