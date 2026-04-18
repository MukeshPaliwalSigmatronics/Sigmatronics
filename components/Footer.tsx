import Link from 'next/link';
import { Mail, Phone, MapPin, ExternalLink, Cpu, Code, Zap, Users, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a3576] to-[#0b3d91] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f79d02] to-[#0b3d91] rounded-lg flex items-center justify-center">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sigmatronics</h3>
                <p className="text-xs text-slate-300">Innovation Private Limited</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Pioneering the future of technology with innovative hardware and software solutions that transform industries worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#f79d02] rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300">
                <ExternalLink size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#f79d02] rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300">
                <ExternalLink size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#f79d02] rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300">
                <ExternalLink size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#f79d02] rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center">
              <Code className="h-5 w-5 text-[#f79d02] mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-300 hover:text-[#f79d02] transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-[#f79d02] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-[#f79d02] transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-[#f79d02] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About Us
              </Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-[#f79d02] transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-[#f79d02] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Services
              </Link></li>
              <li><Link href="/solutions" className="text-slate-300 hover:text-[#f79d02] transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-[#f79d02] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Solutions
              </Link></li>
              <li><Link href="/products" className="text-slate-300 hover:text-[#f79d02] transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-[#f79d02] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Products
              </Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-[#f79d02] transition-colors duration-300 flex items-center group">
                <span className="w-1 h-1 bg-[#f79d02] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center">
              <Mail className="h-5 w-5 text-[#f79d02] mr-2" />
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-[#f79d02] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">info@sigmatronics.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-[#f79d02] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#f79d02] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">Mumbai, Maharashtra</p>
                  <p className="text-slate-300 text-sm">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-4 w-4 text-[#f79d02] mr-2" />
              <p className="text-slate-400 text-sm">
                © 2024 Sigmatronics Innovation Private Limited. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-[#f79d02] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-[#f79d02] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-slate-400 hover:text-[#f79d02] text-sm transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
