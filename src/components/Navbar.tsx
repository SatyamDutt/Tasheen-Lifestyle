import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Palette } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Collections', href: '#collections' },
  { name: 'Products', href: '#products' },
  { name: 'Wearables', href: '#wearables' },
  { name: 'Lookbook', href: '#lookbook' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('theme2');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const themes = ['theme1', 'theme2', 'theme3'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tighter uppercase"
          >
            {/* VANTAGE */}
            Tasheen Lifestyle
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold opacity-60 hover:opacity-100 hover:accent-text transition-all uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] border border-current opacity-60 hover:opacity-100 hover:accent-border hover:accent-text transition-all">
              Explore Products
            </button>
            <button className="px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] accent-bg text-white hover:opacity-90 transition-all">
              View Collections
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleTheme}
              className="p-2 opacity-60 hover:opacity-100 hover:accent-text transition-all"
              title="Change Theme"
            >
              <Palette size={18} />
            </button>
            <button className="p-2 opacity-60 hover:opacity-100 hover:accent-text transition-all">
              <Search size={18} />
            </button>
            <button
              className="lg:hidden p-2 opacity-60 hover:opacity-100 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass border-b border-current/5 absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-bold opacity-60 hover:opacity-100 hover:accent-text transition-all uppercase tracking-[0.2em]"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-current/10">
                <button className="w-full px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] border border-current opacity-60">
                  Explore Products
                </button>
                <button className="w-full px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] accent-bg text-white">
                  View Collections
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
