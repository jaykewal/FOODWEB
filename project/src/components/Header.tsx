import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        {/* <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray-600 border-b">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@foodexport.com</span>
            </div>
          </div>
          <div className="text-orange-600 font-medium">
            Free Shipping on Orders Above ₹1000
          </div>
        </div> */}

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-orange-600">
            FoodExport<span className="text-green-600">Hub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
            <a href="#products" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Products</a>
            <a href="#offers" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Offers</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-orange-600 transition-colors">Products</a>
              <a href="#offers" className="text-gray-700 hover:text-orange-600 transition-colors">Offers</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;