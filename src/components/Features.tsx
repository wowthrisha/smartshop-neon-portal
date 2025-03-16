
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Smartphone, 
  BarChart2, 
  Cpu, 
  CreditCard, 
  MapPin, 
  BadgeDollarSign, 
  Search, 
  Lightbulb,
  Layers
} from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="h-8 w-8 text-neon-blue" />,
    title: "AI-Powered Recommendations",
    description: "Smart product suggestions based on shopping history, preferences, and popular items.",
    color: "blue"
  },
  {
    icon: <MapPin className="h-8 w-8 text-neon-purple" />,
    title: "AR Navigation",
    description: "Augmented reality navigation to easily locate products in the store.",
    color: "purple"
  },
  {
    icon: <BadgeDollarSign className="h-8 w-8 text-neon-pink" />,
    title: "Real-time Discounts",
    description: "Instantly view personalized offers and store-wide promotions.",
    color: "pink"
  },
  {
    icon: <Search className="h-8 w-8 text-neon-green" />,
    title: "Product Scanning",
    description: "Scan items to view detailed information, reviews, and specifications.",
    color: "green"
  },
  {
    icon: <CreditCard className="h-8 w-8 text-neon-blue" />,
    title: "Contactless Payments",
    description: "Secure and fast checkout via NFC or QR codes for a seamless experience.",
    color: "blue"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-neon-purple" />,
    title: "Mobile App Integration",
    description: "Complementary customer app for enhanced in-store and online shopping.",
    color: "purple"
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-neon-pink" />,
    title: "Advanced Analytics",
    description: "Detailed sales data and customer insights for better business decisions.",
    color: "pink"
  },
  {
    icon: <Layers className="h-8 w-8 text-neon-green" />,
    title: "Smart Inventory Management",
    description: "Automated stock tracking and replenishment through IoT-enabled shelves.",
    color: "green"
  },
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`bg-kartify-card hover:bg-kartify-dark border border-kartify-lightgray p-6 rounded-xl transition-all duration-300 hover:border-neon-${feature.color} group`}
    >
      <div className={`mb-4 p-3 rounded-lg bg-kartify-dark inline-block`}>
        {feature.icon}
      </div>
      <h3 className={`text-xl font-semibold mb-2 text-white group-hover:text-neon-${feature.color} transition-colors`}>
        {feature.title}
      </h3>
      <p className="text-white/70 group-hover:text-white/90 transition-colors">
        {feature.description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative bg-kartify-black py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-gradient-green">Revolutionary</span> Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Our smart retail management system combines cutting-edge technology with 
            user-friendly design to transform the shopping experience.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 bg-gradient-to-r from-kartify-dark to-kartify-card p-8 rounded-2xl border border-kartify-lightgray"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Smart Retail for <span className="text-gradient">Smart Businesses</span>
              </h3>
              <p className="text-white/70 mb-4">
                Kartify combines AI-driven recommendations, real-time stock updates, and seamless checkout 
                options with a powerful admin dashboard for store managers and IoT-enabled smart shelves for 
                automated inventory management.
              </p>
              <div className="flex items-center space-x-2">
                <Cpu className="h-5 w-5 text-neon-blue" />
                <span className="text-neon-blue">Cutting-edge technology</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <ShoppingCart className="h-5 w-5 text-neon-purple" />
                <span className="text-neon-purple">Enhanced shopping experience</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="h-64 w-full bg-kartify-card rounded-xl overflow-hidden border border-neon-blue/30 neon-border p-4 flex items-center justify-center">
                <div className="text-center">
                  <Layers className="h-12 w-12 text-neon-blue mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Complete Ecosystem</h4>
                  <p className="text-white/70">Mobile app, admin dashboard, and IoT integration</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
