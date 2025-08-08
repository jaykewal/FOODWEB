import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                FoodExport<span className="text-green-400">Hub</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for premium Indian food exports worldwide. Quality, authenticity, and sustainability in every product.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="#offers" className="text-gray-300 hover:text-orange-400 transition-colors">Offers</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Export Services</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Premium Coffee</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Basmati Rice</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Organic Spices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Black Pepper</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Cardamom</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Turmeric</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">info@foodexporthub.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <span className="text-gray-300">
                  123 Export House, MG Road<br />
                  Bangalore, Karnataka 560001
                </span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition-colors duration-300 font-semibold"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FoodExportHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;