
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LogIn, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10',
        isScrolled ? 'bg-kartify-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">
            <span className="text-gradient">Kartify</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-neon-blue transition-colors duration-200">Home</a>
            <a href="#features" className="text-white hover:text-neon-blue transition-colors duration-200">Features</a>
            <a href="#contact" className="text-white hover:text-neon-blue transition-colors duration-200">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button className="bg-transparent hover:bg-white/10 text-white border border-neon-blue">
              Sign Up
            </Button>
            <Button className="bg-neon-blue text-kartify-black hover:bg-neon-blue/80 flex items-center gap-2">
              <LogIn className="h-4 w-4" /> Login
            </Button>
          </div>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 bg-kartify-dark/95 backdrop-blur-lg border-t border-white/10 p-4"
        >
          <nav className="flex flex-col space-y-4 mb-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-neon-blue transition-colors duration-200 py-2">Home</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-neon-blue transition-colors duration-200 py-2">Features</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-neon-blue transition-colors duration-200 py-2">Contact</a>
          </nav>
          
          <div className="flex flex-col space-y-4">
            <Button className="bg-transparent hover:bg-white/10 text-white border border-neon-blue w-full">
              Sign Up
            </Button>
            <Button className="bg-neon-blue text-kartify-black hover:bg-neon-blue/80 w-full flex items-center justify-center gap-2">
              <LogIn className="h-4 w-4" /> Login
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
