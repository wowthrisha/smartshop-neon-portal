
import React, { useEffect, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Basic error boundary component
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error("Error in app:", error, info);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = (this as HTMLAnchorElement).getAttribute('href');
        const targetElement = document.querySelector(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-kartify-black">
      <Navbar />
      <ErrorBoundary fallback={<div className="min-h-screen bg-kartify-black flex items-center justify-center text-white">Something went wrong. Please refresh the page.</div>}>
        <Suspense fallback={<div className="min-h-screen bg-kartify-black flex items-center justify-center text-white">Loading...</div>}>
          <Hero />
          <Features />
          <ContactSection />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Index;
