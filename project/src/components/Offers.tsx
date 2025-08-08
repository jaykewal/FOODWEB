import React from 'react';
import { Clock, Gift, Truck, Percent } from 'lucide-react';

const Offers = () => {
  const offers = [
    {
      title: "Flash Sale",
      discount: "30% OFF",
      description: "On all coffee products",
      validTill: "Valid till 31st Dec",
      bgColor: "from-red-500 to-pink-500",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Bulk Order",
      discount: "25% OFF",
      description: "Orders above ₹5000",
      validTill: "Minimum 10kg",
      bgColor: "from-blue-500 to-indigo-500",
      icon: <Gift className="w-8 h-8" />
    },
    {
      title: "Free Shipping",
      discount: "₹0 Delivery",
      description: "On orders above ₹1000",
      validTill: "Pan India delivery",
      bgColor: "from-green-500 to-teal-500",
      icon: <Truck className="w-8 h-8" />
    }
  ];

  return (
    <section id="offers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Latest <span className="text-orange-600">Offers</span> & Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't miss out on our exclusive deals and seasonal offers on premium food products
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${offer.bgColor} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    {offer.icon}
                  </div>
                  <Percent className="w-6 h-6 opacity-60" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <div className="text-4xl font-bold mb-3">{offer.discount}</div>
                <p className="text-lg mb-2 opacity-90">{offer.description}</p>
                <p className="text-sm opacity-75">{offer.validTill}</p>
                
                <button className="mt-6 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 w-full">
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special announcement banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">🎉 Special Export Offer!</h3>
            <p className="text-xl mb-6">Get 40% discount on bulk orders for international shipping. Limited time offer!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Contact for Export
              </button>
              <span className="text-lg font-semibold">Call: +91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;