import { motion } from 'motion/react';
import { Instagram, Facebook, Youtube, ArrowRight, Mail, ArrowUpRight } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { PRODUCTS, COLLECTIONS, INSPIRATION } from './constants';

export default function App() {
  const popularProducts = PRODUCTS.filter(p => p.section === 'popular');
  const latestProducts = PRODUCTS.filter(p => p.section === 'latest');
  const wearableProducts = PRODUCTS.filter(p => p.section === 'wearables');
  const trendingProducts = PRODUCTS.filter(p => p.section === 'trending');

  return (
    <div className="min-h-screen selection:accent-bg selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2000"
            alt="Fashion Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-6"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">
            New Collection 2026
          </p>
          {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 leading-none"> */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter  mb-6 leading-none">
            Tasheen Lifestyle
          </h1>
          <p className="text-sm md:text-base font-medium tracking-widest uppercase opacity-90 max-w-lg mx-auto mb-8">
            Modern style for everyday wear
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 accent-bg text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all w-full sm:w-auto">
              Browse Products
            </button>
            <button className="px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-100 transition-all w-full sm:w-auto">
              View Collections
            </button>
          </div>
        </motion.div>
      </section>

      {/* Trending Styles (Horizontal Scroll) */}
      <section id="trending" className="py-20 border-b border-current/5">
        <div className="px-6 mb-10 flex items-center justify-between max-w-[1400px] mx-auto">
          <h2 className="text-xl font-bold uppercase tracking-tighter">Trending Styles</h2>
          <button className="text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
            Explore All <ArrowRight size={12} />
          </button>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar gap-6 px-6 pb-4 max-w-[1400px] mx-auto">
          {trendingProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              className="min-w-[200px] md:min-w-[250px]"
            />
          ))}
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-6 py-20 space-y-32">
        {/* Popular Products Grid */}
        <section id="products">
          <div className="mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-2">Popular Products</h2>
            <p className="text-[10px] uppercase tracking-widest opacity-50 font-semibold">Our most loved essentials</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-10">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Featured Collections */}
        <section id="collections" className="py-20 -mx-6 px-6 bg-current/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-2">Featured Collections</h2>
              <p className="text-[10px] uppercase tracking-widest opacity-50 font-semibold">Curated styles for every occasion</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COLLECTIONS.map((collection, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative h-[450px] group overflow-hidden cursor-pointer"
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">{collection.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest opacity-80 mb-6">{collection.tagline}</p>
                    <button className="px-6 py-3 border border-white text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500">
                      Explore Style
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Arrivals Grid */}
        <section id="latest">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-2">Latest Arrivals</h2>
              <p className="text-[10px] uppercase tracking-widest opacity-50 font-semibold">Fresh from the studio</p>
            </div>
            <button className="hidden md:block text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
              Browse All New
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-10">
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Style Inspiration */}
        <section id="lookbook">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-2">Style Inspiration</h2>
            <p className="text-[10px] uppercase tracking-widest opacity-50 font-semibold">How to wear Vantage</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INSPIRATION.map((item, idx) => (
              <div key={idx} className="relative aspect-[3/4] group overflow-hidden cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white pb-1 flex items-center gap-2">
                    {item.title} <ArrowUpRight size={12} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Wearables Grid */}
        <section id="wearables" className="py-20 -mx-6 px-6 bg-current/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-2">Premium Wearables</h2>
              <p className="text-[10px] uppercase tracking-widest opacity-50 font-semibold">Shoes, Scents, and Accessories</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-10">
              {wearableProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="pt-20 pb-10 px-6 border-t border-current/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tighter uppercase">Tasheen Lifestyle</h2>
              <p className="text-xs opacity-60 leading-relaxed max-w-xs">
                Tasheen Lifestyle is a modern fashion brand dedicated to providing high-quality, stylish, and wearable garments for the youth.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="opacity-60 hover:opacity-100 hover:accent-text transition-all"><Instagram size={18} /></a>
                <a href="#" className="opacity-60 hover:opacity-100 hover:accent-text transition-all"><Facebook size={18} /></a>
                <a href="#" className="opacity-60 hover:opacity-100 hover:accent-text transition-all"><Youtube size={18} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Collections', 'Products', 'About', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-xs opacity-60 hover:opacity-100 hover:accent-text transition-all">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Categories</h4>
              <ul className="space-y-3">
                {['Clothing', 'Shoes', 'Perfumes', 'Accessories'].map((cat) => (
                  <li key={cat}>
                    <a href="#products" className="text-xs opacity-60 hover:opacity-100 hover:accent-text transition-all">
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Newsletter</h4>
              <p className="text-xs opacity-60 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <div className="flex items-center gap-2 border-b border-current/20 pb-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent text-xs w-full focus:outline-none"
                />
                <button className="opacity-60 hover:opacity-100 hover:accent-text transition-all">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-current/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[9px] uppercase tracking-widest opacity-40">
              © 2026 Vantage Fashion. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[9px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="text-[9px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
