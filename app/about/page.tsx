'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Code, Cpu, Zap, Users, Award, TrendingUp, Globe, Shield, Lightbulb } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '100+', color: '#f79d02' },
    { icon: Award, label: 'Projects Completed', value: '50+', color: '#0b3d91' },
    { icon: TrendingUp, label: 'Years Experience', value: '10+', color: '#f79d02' },
    { icon: Globe, label: 'Countries Served', value: '5+', color: '#0b3d91' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology solutions',
      color: '#f79d02'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Delivering dependable, high-quality products and services',
      color: '#0b3d91'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Putting client needs at the center of everything we do',
      color: '#f79d02'
    },
    {
      icon: Lightbulb,
      title: 'Excellence',
      description: 'Striving for perfection in every project and interaction',
      color: '#0b3d91'
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#0a3576] to-[#0b3d91]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f79d02]/10 to-transparent"></div>
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#f79d02]/30 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: 0
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
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
              About <span className="text-[#f79d02]">Sigmatronics</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-200 max-w-3xl mx-auto mb-12"
            >
              Pioneering the future of technology with innovative hardware and software solutions that transform industries worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <stat.icon className="h-12 w-12 mx-auto mb-4" style={{ color: stat.color }} />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-heading text-white mb-8">Our Journey</h2>
            <div className="space-y-6 text-slate-200">
              <p className="text-lg leading-relaxed">
                Founded in 2009, Sigmatronics Innovation began with a simple yet powerful vision: to bridge the gap between
                cutting-edge technology and practical industry applications. What started as a small team of passionate engineers
                has evolved into a comprehensive technology solutions provider.
              </p>
              <p className="text-lg leading-relaxed">
                Our expertise spans across hardware design, software development, IoT integration, and system optimization.
                We've successfully delivered solutions for agriculture, manufacturing, healthcare, and smart infrastructure sectors,
                earning the trust of clients globally.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to innovate, combining embedded systems expertise with cloud computing and data analytics
                to deliver solutions that drive real business transformation and create lasting value.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#f79d02]/20 to-[#0b3d91]/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-6 rounded-xl text-center shadow-lg"
                >
                  <Code className="h-10 w-10 text-[#f79d02] mx-auto mb-3" />
                  <h3 className="text-white font-semibold text-sm">Software</h3>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-6 rounded-xl text-center shadow-lg"
                >
                  <Cpu className="h-10 w-10 text-[#f79d02] mx-auto mb-3" />
                  <h3 className="text-white font-semibold text-sm">Hardware</h3>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-6 rounded-xl text-center shadow-lg"
                >
                  <Zap className="h-10 w-10 text-[#f79d02] mx-auto mb-3" />
                  <h3 className="text-white font-semibold text-sm">IoT</h3>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#0b3d91] to-[#0a3576] p-6 rounded-xl text-center shadow-lg"
                >
                  <Users className="h-10 w-10 text-[#f79d02] mx-auto mb-3" />
                  <h3 className="text-white font-semibold text-sm">Consultancy</h3>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-[#f79d02]/5 to-[#0b3d91]/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-heading text-white mb-6">Our Values</h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            The principles that guide our innovation and drive our commitment to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <value.icon className="h-16 w-16 mx-auto mb-6" style={{ color: value.color }} />
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-slate-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0b3d91]/80 to-[#0a3576]/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl"
          >
            <Eye className="h-12 w-12 text-[#f79d02] mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-slate-200 text-lg leading-relaxed">
              To be the global leader in innovative technology solutions, empowering businesses worldwide
              to harness the full potential of IoT, AI, and connected systems for a smarter, more sustainable future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#f79d02]/80 to-[#0b3d91]/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl"
          >
            <Target className="h-12 w-12 text-white mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-slate-200 text-lg leading-relaxed">
              To deliver exceptional hardware and software solutions that solve real-world challenges,
              foster innovation, and create lasting partnerships with our clients through excellence,
              integrity, and technological expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a3576]/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Core Values</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            The principles that drive our innovation and guide our relationships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, title: 'Excellence', desc: 'Striving for perfection in every solution we deliver' },
            { icon: Users, title: 'Collaboration', desc: 'Working closely with clients as trusted partners' },
            { icon: Zap, title: 'Innovation', desc: 'Pushing boundaries with cutting-edge technologies' },
            { icon: Heart, title: 'Integrity', desc: 'Building trust through honest and ethical practices' }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0a3576]/50  p-6 rounded-xl border border-gray-700 text-center"
            >
              <value.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Our Expertise</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Comprehensive technology capabilities across hardware, software, and IoT domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Cpu,
              title: 'Hardware Engineering',
              skills: ['Embedded Systems Design', 'PCB Layout & Manufacturing', 'Sensor Integration', 'Prototyping & Testing']
            },
            {
              icon: Code,
              title: 'Software Development',
              skills: ['Full-Stack Web Applications', 'Cloud Architecture', 'API Development', 'Mobile Applications']
            },
            {
              icon: Zap,
              title: 'IoT & Analytics',
              skills: ['Real-time Data Processing', 'Edge Computing', 'Machine Learning', 'Predictive Analytics']
            }
          ].map((expertise, index) => (
            <motion.div
              key={expertise.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0a3576]/50  p-8 rounded-xl border border-gray-700"
            >
              <expertise.icon className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">{expertise.title}</h3>
              <ul className="space-y-2">
                {expertise.skills.map((skill) => (
                  <li key={skill} className="text-gray-400 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a3576]/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">Technology Stack</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Leveraging industry-leading technologies to build robust and scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            'React', 'Node.js', 'Python', 'AWS', 'Azure', 'Docker',
            'Kubernetes', 'MongoDB', 'PostgreSQL', 'TensorFlow', 'Arduino', 'Raspberry Pi'
          ].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#0a3576]/50  p-4 rounded-lg border border-gray-700 text-center hover:border-blue-500 transition-colors duration-200"
            >
              <span className="text-white font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}