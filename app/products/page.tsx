'use client';

import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, Cpu, Zap, Wifi, Battery, Shield, Thermometer, Droplets, Activity } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function Products() {
  const products = [
    {
      name: 'IoT Environmental Monitor',
      image: '/sigmatronics-website-details/iot-monitor.jpg',
      description: 'Comprehensive environmental monitoring device with multiple sensors for air quality, temperature, humidity, and noise levels.',
      icon: Activity,
      color: '#f79d02',
      features: [
        'Multi-parameter sensing',
        'Wireless connectivity',
        'Battery-powered operation',
        'Cloud data integration',
        'Real-time alerts'
      ],
      specifications: {
        'Operating Temperature': '-20°C to 60°C',
        'Battery Life': 'Up to 2 years',
        'Connectivity': 'Wi-Fi, Bluetooth, LoRa',
        'Dimensions': '120mm x 80mm x 40mm',
        'Weight': '150g'
      }
    },
    {
      name: 'Smart Agriculture Sensor Hub',
      image: '/sigmatronics-website-details/agri-sensor.jpg',
      description: 'Advanced sensor hub for precision agriculture with soil moisture, temperature, and light sensors for optimal crop management.',
      icon: Droplets,
      color: '#0b3d91',
      features: [
        'Soil moisture monitoring',
        'Weather data integration',
        'Irrigation control',
        'Mobile app connectivity',
        'Data analytics dashboard'
      ],
      specifications: {
        'Sensor Types': 'Moisture, Temperature, Light',
        'Measurement Range': '0-100% moisture',
        'Accuracy': '±2% moisture',
        'Power Source': 'Solar + Battery',
        'Data Transmission': 'Cellular, Wi-Fi'
      }
    },
    {
      name: 'Industrial Vibration Monitor',
      image: '/sigmatronics-website-details/vibration-monitor.jpg',
      description: 'Professional vibration monitoring system for predictive maintenance in industrial equipment and machinery.',
      icon: Activity,
      color: '#f79d02',
      features: [
        'High-precision sensors',
        'Real-time vibration analysis',
        'Predictive maintenance alerts',
        'Industrial-grade durability',
        'Wireless data transmission'
      ],
      specifications: {
        'Frequency Range': '10 Hz - 10 kHz',
        'Accuracy': '±5% vibration',
        'IP Rating': 'IP67',
        'Operating Temp': '-40°C to 85°C',
        'Power': '24V DC Industrial'
      }
    },
    {
      name: 'Smart Water Quality Monitor',
      image: '/sigmatronics-website-details/water-monitor.jpg',
      description: 'Advanced water quality monitoring system for pH, turbidity, conductivity, and dissolved oxygen measurements.',
      icon: Droplets,
      color: '#0b3d91',
      features: [
        'Multi-parameter water analysis',
        'Real-time quality assessment',
        'Automated sampling',
        'Remote monitoring',
        'Compliance reporting'
      ],
      specifications: {
        'Parameters': 'pH, Turbidity, Conductivity, DO',
        'pH Range': '0-14',
        'Accuracy': '±0.1 pH units',
        'Sample Rate': '1-60 minutes',
        'Connectivity': 'Ethernet, Wi-Fi, 4G'
      }
    },
    {
      name: 'Energy Monitoring Gateway',
      image: '/sigmatronics-website-details/energy-gateway.jpg',
      description: 'Intelligent energy monitoring gateway for real-time power consumption analysis and optimization.',
      icon: Zap,
      color: '#f79d02',
      features: [
        'Multi-circuit monitoring',
        'Energy consumption analytics',
        'Peak demand management',
        'Remote control capabilities',
        'Historical data storage'
      ],
      specifications: {
        'Voltage Range': '100-480V AC',
        'Current Range': '0-100A per phase',
        'Accuracy': '±0.5% energy',
        'Communication': 'Modbus, BACnet, MQTT',
        'Memory': '32GB internal storage'
      }
    },
    {
      name: 'Wireless IoT Gateway',
      image: '/sigmatronics-website-details/iot-gateway.jpg',
      description: 'Versatile IoT gateway supporting multiple protocols for seamless device connectivity and data aggregation.',
      icon: Wifi,
      color: '#0b3d91',
      features: [
        'Multi-protocol support',
        'Edge computing capabilities',
        'Secure data transmission',
        'Remote management',
        'Scalable architecture'
      ],
      specifications: {
        'Protocols': 'MQTT, CoAP, Modbus, BACnet',
        'Connectivity': 'Wi-Fi, Ethernet, Cellular',
        'Processing': 'Quad-core ARM processor',
        'Security': 'TLS 1.3, AES-256 encryption',
        'Power': 'PoE or 12V DC'
      }
    }
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
              className="absolute w-2 h-2 bg-[#f79d02]/30 rounded-full"
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
              Our <span className="text-[#f79d02]">Products</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-200 max-w-4xl mx-auto mb-12"
            >
              Cutting-edge IoT devices and monitoring solutions designed for industrial, agricultural, and environmental applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#0b3d91] to-[#0a3576] flex items-center justify-center">
                <product.icon className="h-20 w-20" style={{ color: product.color }} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f79d02] transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-200 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: product.color }}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications Preview */}
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-sm font-semibold text-white mb-3">Specifications:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-slate-300">
                        <span className="font-medium">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 bg-gradient-to-r from-[#0b3d91] to-[#0a3576] hover:from-[#f79d02] hover:to-[#0b3d91] text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-center text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Inquire Now
                  </Link>
                  <button className="p-2 border border-white/20 rounded-lg hover:border-[#f79d02] transition-colors">
                    <Download className="h-4 w-4 text-slate-300 hover:text-[#f79d02]" />
                  </button>
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
          <h2 className="text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            We specialize in developing custom IoT devices and monitoring solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#f79d02] to-[#0b3d91] hover:from-[#0b3d91] hover:to-[#f79d02] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl hover:shadow-[#f79d02]/25 transform hover:-translate-y-1"
            >
              Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="mailto:info@sigmatronics.com"
              className="border-2 border-[#f79d02] text-[#f79d02] hover:bg-[#f79d02] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
