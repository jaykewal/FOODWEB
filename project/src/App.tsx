import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Offers from './components/Offers';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import Home from './components/Home';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Offers />
      <About />
      <Contact />
      <Footer />
      
      {/* <Home /> */}
      {/* other sections */}
      {/* <Navbar /> */}
      {/* Your other sections here */}
    </div>
    
  );
}

export default App;