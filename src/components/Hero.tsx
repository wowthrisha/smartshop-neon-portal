
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';
import { ChevronDown, ShoppingCart } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <ThreeScene />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 backdrop-blur-sm border border-neon-blue/30 mb-4"
          >
            <p className="text-sm text-neon-blue font-medium">Redefining Retail Management</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="text-white">Smart</span>{' '}
            <span className="text-gradient neon-glow">Retail Management</span>{' '}
            <span className="text-white">System</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            Enhance in-store shopping with AI-powered recommendations, real-time stock updates, 
            and seamless checkout options for a faster, smarter, and more efficient shopping experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-neon-blue hover:bg-neon-blue/80 text-kartify-black px-8 py-6 text-lg">
              <ShoppingCart className="mr-2 h-5 w-5" /> Get Started
            </Button>
            <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#features" className="flex flex-col items-center text-white/50 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="animate-bounce h-6 w-6" />
        </a>
      </motion.div>
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-kartify-black to-transparent z-5"></div>
    </section>
  );
};

export default Hero;
