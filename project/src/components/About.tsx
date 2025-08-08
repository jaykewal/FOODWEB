import React from 'react';
import { Users, Award, Globe, Leaf } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "50K+", label: "Happy Customers" },
    { icon: <Globe className="w-8 h-8" />, number: "50+", label: "Countries Served" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Years Experience" },
    { icon: <Leaf className="w-8 h-8" />, number: "100%", label: "Organic Products" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                About <span className="text-orange-600">FoodExport</span>Hub
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are a leading exporter of premium Indian food products, connecting the authentic flavors of India with food lovers worldwide. Our commitment to quality and sustainability has made us a trusted partner for businesses and consumers globally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From the aromatic coffee plantations of Karnataka to the golden rice fields of Punjab, we source the finest products directly from farmers, ensuring fair trade practices and exceptional quality at every step.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="text-orange-600 mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500">
             <video
               className="w-full h-full object-cover"
               autoPlay
                loop
               muted
               playsInline
  >
            <source src="https://cdn.pixabay.com/video/2019/05/17/23759-337232393_large.mp4" type="video/mp4" />
             Your browser does not support the video tag.
             </video>
            </div>

            {/* <div className="absolute -bottom-8 -left-8 bg-orange-600 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">ISO 9001</div>
                <div className="text-sm">Certified Quality</div>
              </div>
            </div> */}
            {/* <div className="absolute -top-8 -right-8 bg-green-600 text-white p-6 rounded-2xl shadow-xl animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">FSSAI</div>
                <div className="text-xs">Licensed</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;