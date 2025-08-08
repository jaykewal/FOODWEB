import React from 'react';
import { ArrowRight, Leaf, Award, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 via-white to-green-50 min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-green-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                Premium
                <span className="text-orange-600 block">Food Exports</span>
                <span className="text-green-600 text-3xl lg:text-4xl">Worldwide</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience the finest quality coffee, rice, spices, and organic foods directly from Indian farms to your doorstep globally.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                Explore Products
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Get Quote
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="bg-white p-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110">
                  <Leaf className="text-green-600" size={28} />
                </div>
                <p className="mt-3 font-semibold text-gray-700">100% Organic</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-white p-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110">
                  <Award className="text-orange-600" size={28} />
                </div>
                <p className="mt-3 font-semibold text-gray-700">Premium Quality</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-white p-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110">
                  <Globe className="text-blue-600" size={28} />
                </div>
                <p className="mt-3 font-semibold text-gray-700">Global Shipping</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500">
             <video
               className="w-full h-full object-cover"
               autoPlay
               loop
               muted
               playsInline
             >
             <source src="https://cdn.pixabay.com/video/2024/06/07/215760_large.mp4" type="video/mp4" />
               Your browser does not support the video tag.
             </video>
            </div>

            {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl animate-float">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-gray-600 text-sm">Countries Served</div>
              </div>
            </div> */}
            {/* <div className="absolute -top-6 -left-6 bg-green-600 text-white p-4 rounded-2xl shadow-xl animate-float-delay">
              <div className="text-center">
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-xs">Certified</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;