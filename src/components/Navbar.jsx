import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav 
        id="main-nav" 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-[5%] flex justify-between items-center ${scrolled ? 'nav-scrolled py-5 bg-surface/95 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'}`}
      >
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl transition-colors duration-500" style={{ color: scrolled ? '#8e4e05' : '#ffffff' }}>filter_vintage</span>
          <div className="flex flex-col leading-none">
            <span className="font-display font-semibold text-xl lg:text-2xl tracking-[0.1em] transition-colors duration-500" style={{ color: scrolled ? '#1c1c17' : '#ffffff' }}>NIRGUNAM</span>
            <span className="text-[9px] uppercase tracking-[0.3em] transition-colors duration-500" style={{ color: scrolled ? '#4e4541' : 'rgba(255, 255, 255, 0.7)' }}>Sri Mata Group</span>
          </div>
        </div>
        <div className="hidden xl:flex items-center gap-10">
          <Link to="/" className={`text-[11px] font-semibold uppercase tracking-widest border-b-2 transition-all duration-500 ${location.pathname === '/' ? (scrolled ? 'border-secondary text-on-surface pb-1' : 'border-white text-white pb-1') : (scrolled ? 'border-transparent text-[#4e4541]' : 'border-transparent text-white/80')}`}>Home</Link>
          <Link to="/about" className={`text-[11px] font-semibold uppercase tracking-widest border-b-2 transition-all duration-500 ${location.pathname === '/about' ? (scrolled ? 'border-secondary text-on-surface pb-1' : 'border-white text-white pb-1') : (scrolled ? 'border-transparent text-[#4e4541]' : 'border-transparent text-white/80')}`}>About</Link>
          <Link to="/journey" className={`text-[11px] font-semibold uppercase tracking-widest border-b-2 transition-all duration-500 ${location.pathname === '/journey' ? (scrolled ? 'border-secondary text-on-surface pb-1' : 'border-white text-white pb-1') : (scrolled ? 'border-transparent text-[#4e4541]' : 'border-transparent text-white/80')}`}>Journey</Link>
          <Link to="/bhairavam" className={`text-[11px] font-semibold uppercase tracking-widest border-b-2 transition-all duration-500 ${location.pathname === '/bhairavam' ? (scrolled ? 'border-secondary text-on-surface pb-1' : 'border-white text-white pb-1') : (scrolled ? 'border-transparent text-[#4e4541]' : 'border-transparent text-white/80')}`}>Bhairavam</Link>
          <Link to="/yatra" className={`text-[11px] font-semibold uppercase tracking-widest border-b-2 transition-all duration-500 ${location.pathname === '/yatra' ? (scrolled ? 'border-secondary text-on-surface pb-1' : 'border-white text-white pb-1') : (scrolled ? 'border-transparent text-[#4e4541]' : 'border-transparent text-white/80')}`}>Yatra</Link>
          <Link to="/products" className={`text-[11px] font-semibold uppercase tracking-widest border-b-2 transition-all duration-500 ${location.pathname === '/products' ? (scrolled ? 'border-secondary text-on-surface pb-1' : 'border-white text-white pb-1') : (scrolled ? 'border-transparent text-[#4e4541]' : 'border-transparent text-white/80')}`}>Products</Link>
          <Link to="/spiritual-activities" className={`text-[11px] font-semibold uppercase tracking-widest border-b-2 transition-all duration-500 ${location.pathname === '/spiritual-activities' ? (scrolled ? 'border-secondary text-on-surface pb-1' : 'border-white text-white pb-1') : (scrolled ? 'border-transparent text-[#4e4541]' : 'border-transparent text-white/80')}`}>Spiritual Activities</Link>
          <Link to="/registration" className={`text-[11px] font-semibold uppercase tracking-widest border-b-2 transition-all duration-500 ${location.pathname === '/registration' ? (scrolled ? 'border-secondary text-on-surface pb-1' : 'border-white text-white pb-1') : (scrolled ? 'border-transparent text-[#4e4541]' : 'border-transparent text-white/80')}`}>Registration</Link>
        </div>
        <div className="flex items-center gap-6">
          <button className={`px-8 py-3 rounded-button text-[11px] uppercase font-bold tracking-widest transition-all duration-500 hidden xl:block ${scrolled ? 'text-on-surface border border-outline/20 bg-surface-container-high/50' : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-primary'}`}>
            Join Nirgunam
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden transition-colors duration-500" style={{ color: scrolled ? '#1c1c17' : '#ffffff' }}>
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-surface flex flex-col items-center justify-center gap-6" onClick={() => setMobileMenuOpen(false)}>
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="absolute top-8 right-[5%] text-[#1c1c17] hover:opacity-75 transition-opacity"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <Link to="/" className="text-xl font-display text-primary-container" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-xl font-display text-primary-container" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/journey" className="text-xl font-display text-primary-container" onClick={() => setMobileMenuOpen(false)}>Journey</Link>
          <Link to="/bhairavam" className="text-xl font-display text-primary-container" onClick={() => setMobileMenuOpen(false)}>Bhairavam</Link>
          <Link to="/yatra" className="text-xl font-display text-primary-container" onClick={() => setMobileMenuOpen(false)}>Yatra</Link>
          <Link to="/products" className="text-xl font-display text-primary-container" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/spiritual-activities" className="text-xl font-display text-primary-container" onClick={() => setMobileMenuOpen(false)}>Spiritual Activities</Link>
          <Link to="/registration" className="text-xl font-display text-primary-container" onClick={() => setMobileMenuOpen(false)}>Registration</Link>
          <button className="bg-primary-container text-white px-8 py-3 rounded-button text-xs uppercase font-bold mt-4">Join Nirgunam</button>
        </div>
      )}
    </>
  );
}
