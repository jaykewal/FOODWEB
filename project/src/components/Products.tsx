import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Arabica Coffee",
      image: "https://img.freepik.com/premium-photo/frame-coffee-beans-color-sackcloth-background_947206-3757.jpg",
      price: "₹899/kg",
      rating: 4.8,
      description: "Single-origin Arabica coffee beans from the hills of Karnataka",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Premium Robusta Coffee",
      image: "https://img.freepik.com/premium-photo/coffee-beans-background_781284-1901.jpg?w=2000",
      price: "₹799/kg",
      rating: 4.9,
      description: "It’s known for having a stronger, bolder, and bitter flavor profile compared to Arabica coffee.",
      badge: "Premium"
    },
    {
      id: 3,
      name: "Liberica Coffee",
      image: "https://thecoffeeguru.net/storage/2023/03/liberica-coffee-beans.webp",
      price: "₹599/kg",
      rating: 4.7,
      description: "The bean comes from Liberia, an African country.",
      badge: "Shopkeeper's Choice"
    },
    {
      id: 4,
      name: "Basmati Rice",
      image: "https://5.imimg.com/data5/FN/QP/MY-30750260/mogra-basmati-rice-500x500.jpg",
      price: "₹650/kg",
      rating: 4.6,
      description: "Basmati is a variety of long, slender-grained aromatic rice.",
      badge: "Export Quality"
    },
    {
      id: 5,
      name: "Wada Kolam Rice",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/12/473795390/HU/VJ/BU/137252608/lachkari-wada-kolam-rice-1000x1000.png",
      price: "₹450/kg",
      rating: 4.9,
      description: "Wada Kolam rice, known for its aromatic scent, fluffy texture.",
      badge: "Premium"
    },
    {
      id: 6,
      name: "Idali Rice",
      image: "https://tse3.mm.bing.net/th/id/OIP.SGAkPxpfNFn3VZTPeBwKUgHaHa?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      price: "₹280/kg",
      rating: 4.5,
      description: "Idli or idly is a type of savoury rice cake, originating from South India.",
      badge: "Healthy"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-orange-600"></span> Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium food products, sourced directly from the finest farms across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                    {/* <button className="bg-white text-gray-800 p-3 rounded-full hover:bg-orange-600 hover:text-white transition-colors">
                      <Eye size={20} />
                    </button>
                    <button className="bg-white text-gray-800 p-3 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                      <ShoppingCart size={20} />
                    </button> */}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                  {/* <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-sm hover:scale-105">
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            View All Products
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Products;