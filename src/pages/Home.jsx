import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../index.css';

export default function Home() {
  const observerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 640, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(scrollInterval);
  }, []);

  const scrollTestimonials = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -640 : 640, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observerRef.current.observe(el));

    // Check initial scroll (handled in Navbar now)
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed/50 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-screen w-full flex flex-col justify-center items-start px-[5%] pt-32 pb-[420px] sm:pb-[350px] lg:pb-[320px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/img1.webp" />
            <img alt="Himalayan sunrise" className="w-full h-full object-cover" src="/heroimg.webp"/>
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl scroll-reveal mt-10 md:mt-0">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-white/80 font-bold mb-4 md:mb-6 block">Sri Mata Group</span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.95] text-white mb-2 md:mb-4">Nirgunam</h1>
          <h2 className="font-display text-2xl md:text-4xl italic font-light text-white/90 mb-6 md:mb-8">A Sacred Path to Inner Freedom</h2>
          <p className="font-body text-white/70 max-w-xl text-base lg:text-lg font-light leading-relaxed">
            A sacred gathering for genuine seekers walking toward Jeevanmukti, Brahmanandam, and the deepest joy of real inner freedom.
          </p>
        </div>
        
        {/* Bottom Elements: Buttons & Stats */}
        <div className="absolute bottom-12 left-[5%] right-[5%] flex flex-col w-[90%] z-10">
          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-stretch sm:items-center mb-8 sm:mb-10 scroll-reveal">
            <button className="bg-surface text-primary px-10 py-4 lg:py-5 rounded-button text-[12px] uppercase font-bold tracking-widest flex items-center justify-center gap-3 hover:bg-surface-container-high transition-all group w-full sm:w-auto">
              Begin Your Journey
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="bg-primary/20 border border-white/20 text-white px-10 py-4 lg:py-5 rounded-button text-[12px] uppercase font-bold tracking-widest backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all w-full sm:w-auto">
              Discover Bhairavam
            </button>
          </div>

          {/* Hero Stats */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/20 pt-6 sm:pt-8 text-white gap-6 md:gap-0 scroll-reveal">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-12 lg:gap-24 w-full md:w-auto">
            <div>
              <span className="block font-display text-3xl lg:text-4xl mb-1">3</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/50">Wings of Service</span>
            </div>
            <div>
              <span className="block font-display text-3xl lg:text-4xl mb-1">2026</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/50">Foundation Year</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block font-display text-3xl lg:text-4xl mb-1">∞</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/50">Open to All Seekers</span>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center gap-2 opacity-50">
            <span className="text-[9px] uppercase tracking-widest">Scroll to Explore</span>
            <span className="material-symbols-outlined text-sm animate-bounce">expand_more</span>
          </div>
          </div>
        </div>
      </header>

      {/* Three Pathways */}
      <section className="py-section-gap px-[5%] bg-surface">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Yatra */}
          <div className="scroll-reveal">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-8 museum-shadow group">
              <img alt="Yatra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPzKiDM1tzqRxpc6DNRpfwRy9Eww3lhGNV6fG0n4nKQTDxZJvLxQkmrJT7M2TtywQ6xaYevj2DDgLW0KZuEoi4aInh9h3HWvn9owpVGl7CLoo73MOxY9VQPJ2IcxI0mpmBA21qHk-wq2CNjY2CiHMz8tfzTjMbSFR5ZvF1kNf8cTvp9ycK4C7pfYXSKQDiNCq56va78_fskup1sGWwXQD0OXe1i-pGtnxZjsx_31ikXwc3JiGsRQEecEDlPcrVJPzB_lR7BLVSSMHr"/>
              <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-xl p-3 rounded-full border border-white/30">
                <span className="material-symbols-outlined text-white">temple_hindu</span>
              </div>
            </div>
            <h3 className="font-display text-3xl mb-4 text-primary-container">Yatra</h3>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8">Sacred pilgrimages and transformative journeys to the heart of the Himalayas.</p>
            <a className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-secondary group" href="#">
              Explore Yatra <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          {/* Bhairavam */}
          <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-8 museum-shadow group">
              <img alt="Bhairavam" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNQUqFI2yDsRb9Kb3IVOoWBqwVbFSmbRU7VEPr7l9r9_rz_MIRG6r_I_oYOd8vY4QQnI38yG0jF9-03smXFuV92VIcapH603Dpb1c6r3mSZn_QOwTN1hHhTyWbbIgDts78LubtH7rFeCByGD5EJyQSxmHhX1pTkUEovlt9HjgfudhOfFHUDonS9WBnNtmJRujaHic2FrwLseO83bmIEYRxv1TYLOIC8yyMQoSzu2lQC9--Wf5_rlmt6nwk9IpysSlBEteyGV2QjRWp"/>
              <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-xl p-3 rounded-full border border-white/30">
                <span className="material-symbols-outlined text-white">self_improvement</span>
              </div>
            </div>
            <h3 className="font-display text-3xl mb-4 text-primary-container">Bhairavam</h3>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8">The path beyond description. Ancient wisdom refined for the modern conscious mind.</p>
            <a className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-secondary group" href="#">
              Explore Bhairavam <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          {/* Activities */}
          <div className="scroll-reveal" style={{ transitionDelay: '400ms' }}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-8 museum-shadow group">
              <img alt="Activities" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeYe2qJVkBNRTu32aojzlEVc7p5fx3nNgQDr_RAY0JRepGyeXTuViUvp3SC4VCJ27dpUvqhzVkOr10-xZi3fAJK-m45v9P789XqNlwZH5iIkhAQWJSUTuDm-8zDWc_Q3kiqWFnn3lxetiPVYh6WaN5yukQA2ZTdM2sRNA4KNzQhvto6nGwwdU5Eded21jdvzpi13bxJb166ycQQNkdrwR3oQfoh1XwSr4M_0a24IjNjVvf3AgBY4qf4wwoZCanPHt-fygj5capt7iK"/>
              <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-xl p-3 rounded-full border border-white/30">
                <span className="material-symbols-outlined text-white">volunteer_activism</span>
              </div>
            </div>
            <h3 className="font-display text-3xl mb-4 text-primary-container">Spiritual Activities</h3>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8">Serving through conscious action, ritual devotion, and community meditation.</p>
            <a className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-secondary group" href="#">
              Explore Activities <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-section-padding px-[5%] bg-surface-container-lowest">
        <div className="flex flex-col lg:flex-row items-center gap-24 max-w-[1400px] mx-auto w-full">
          <div className="w-full lg:w-1/2 scroll-reveal">
            <div className="relative rounded-image overflow-hidden aspect-[4/5] minimal-shadow max-h-[700px] mx-auto">
              <img alt="Manish Nirgunam" className="w-full h-full object-cover" src="/aboutimg.webp"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <span className="text-[12px] uppercase tracking-[0.3em] text-secondary font-bold mb-8 block">The Founder</span>
            <h2 className="font-display text-5xl lg:text-[56px] leading-[1.1] mb-10 text-primary-container">Manish Nirgunam</h2>
            <div className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed font-light">
              <p>Manish Nirgunam lives in Bengaluru. He does not claim the title of a guru, teacher, or master. He sees himself as a reflecting spiritual being — connected to everything, completely free, and deeply humble.</p>
              <p>His journey began with a profound miracle at the Shiva temple in Tiruvannamalai. Since then, through sacred encounters, deep meditation, and the grace of extraordinary teachers, he has walked the path toward total inner freedom.</p>
            </div>
            <blockquote className="mt-12 border-l-2 border-secondary pl-10 py-2 italic font-display text-2xl text-primary-container leading-snug relative">
              "I am here as a giver, openly welcoming anyone who is truly seeking the ultimate truth."
              <footer className="mt-6 not-italic text-[11px] uppercase tracking-widest font-bold text-secondary">— Manish Nirgunam</footer>
            </blockquote>
            <button className="mt-12 bg-primary-container text-surface px-10 py-5 rounded-button text-[12px] uppercase font-bold tracking-widest hover:bg-primary transition-all">
              Read His Full Story
            </button>
          </div>
        </div>
      </section>

      {/* What is Bhairavam (Dark) */}
      <section className="py-section-padding px-[5%] stone-texture text-surface relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-24 items-center lg:items-start">
            <div className="w-full lg:w-5/12 scroll-reveal">
              <span className="text-[12px] uppercase tracking-[0.3em] text-secondary-container font-bold mb-8 block">The Practice</span>
              <h2 className="font-display text-5xl lg:text-[56px] leading-[1.1] mb-12">What is Bhairavam?</h2>
              <div className="space-y-8 font-body text-xl font-light opacity-80">
                <p>Bhairavam is not a belief, philosophy, or ritual. It is the raw presence behind all existence — beyond identity, thought, and the illusion of separation.</p>
                <p>When the mind has no movement and this feeling of lack loses all meaning — one is completely in Bhairavam. It is already alive inside you right now.</p>
              </div>
              <div className="mt-16 flex flex-wrap gap-8 text-secondary-container font-display text-2xl italic">
                <span>Timeless</span>
                <span className="opacity-30">·</span>
                <span>Speechless</span>
                <span className="opacity-30">·</span>
                <span>Directionless</span>
              </div>
            </div>
            <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-8 scroll-reveal" style={{ transitionDelay: '300ms' }}>
              <div className="bg-surface/5 border border-surface/10 p-10 rounded-card backdrop-blur-sm group hover:bg-surface/10 transition-all">
                <span className="material-symbols-outlined text-secondary-container mb-8 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>radio_button_checked</span>
                <h4 className="font-display text-3xl mb-4">Pulse of the Universe</h4>
                <p className="font-body text-sm opacity-60 leading-relaxed">Every creation and manifestation in this universe is a wave of Bhairavam.</p>
              </div>
              <div className="bg-surface/5 border border-surface/10 p-10 rounded-card backdrop-blur-sm group hover:bg-surface/10 transition-all">
                <span className="material-symbols-outlined text-secondary-container mb-8 text-4xl">flare</span>
                <h4 className="font-display text-3xl mb-4">The Silence Within</h4>
                <p className="font-body text-sm opacity-60 leading-relaxed">Bhairavam is where truly you are. The moment your mind completely shuts down.</p>
              </div>
              <div className="bg-surface/5 border border-surface/10 p-10 rounded-card backdrop-blur-sm group hover:bg-surface/10 transition-all">
                <span className="material-symbols-outlined text-secondary-container mb-8 text-4xl">grain</span>
                <h4 className="font-display text-3xl mb-4">Beyond Description</h4>
                <p className="font-body text-sm opacity-60 leading-relaxed">No label, concept, or definition can survive contact with it.</p>
              </div>
              <div className="bg-surface/5 border border-surface/10 p-10 rounded-card backdrop-blur-sm group hover:bg-surface/10 transition-all">
                <span className="material-symbols-outlined text-secondary-container mb-8 text-4xl">all_inclusive</span>
                <h4 className="font-display text-3xl mb-4">State of Oneness</h4>
                <p className="font-body text-sm opacity-60 leading-relaxed">When the mind has no movement — only pure completeness remains.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey of Nirgunam */}
      <section className="py-section-padding px-[5%] bg-surface-container-low">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 scroll-reveal">
            <div>
              <span className="text-[12px] uppercase tracking-[0.3em] text-secondary font-bold mb-6 block">Our 3 Wings</span>
              <h2 className="font-display text-5xl lg:text-[56px] leading-[1.1] text-primary-container">The Journey of Nirgunam</h2>
            </div>
            <a className="mt-8 md:mt-0 text-[11px] uppercase font-bold tracking-widest text-on-surface-variant flex items-center gap-2 hover:text-secondary transition-all" href="#">
              View All Wings <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group relative rounded-image overflow-hidden aspect-[4/3] scroll-reveal minimal-shadow">
              <img alt="Wing 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPZwojtkfZWLWws9MAQT4P_a873e00LpdIGRMsxOJ8wflAjZQfhXspPIz26saSkAC8MOltQPElXX7WsZWrUa1Ptf-jBo18refmep2KOBwHxF1uqDiIjHN9ECo364vsmYYM-BetOfpQtPxkPZMkGYGZWKX6kBd7bN9mJyRQPMiTtEqc_P91cYkJxn_kvAF8HENIE8ZpRsigF4GJ50sriYUJBua-xczCvZi2GtKJjZPpkTA0wBfKQ9SWB2cJJNNNblafroLRu336kdU"/>
              <div className="absolute inset-0 bg-primary/30 p-10 flex flex-col justify-end"><span className="text-[9px] uppercase tracking-[0.3em] text-surface/70 mb-2">Wing 01</span><h3 className="font-display text-4xl text-surface mb-2">Yatra</h3><p className="text-sm text-surface/80 font-light leading-relaxed opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">Sacred pilgrimages and transformative journeys to the heart of the Himalayas.</p></div>
            </div>
            <div className="group relative rounded-image overflow-hidden aspect-[4/3] scroll-reveal minimal-shadow" style={{ transitionDelay: '200ms' }}>
              <img alt="Wing 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw69PPqBOaZ03t2aB1fJNo-kCk06l1DMYsbwet1VWwPjEc9m2Vr08jB236_jAm4AOaV70WxfdmqVw7-07sNUGbOTsf3s30IpOZTxlEuF12_Aj3Z716kX6R366AiNzmxsdViGsXeE7rpuJgCShmO9JTlX4ddMEZJVAs7KNvRakYfRjmPhbiwfEeoOoQj7vHLLGF0x7KNk1X8K1-uFvhc2V9j-drecIvllgs533pkgCNVWWxv5G6g3WTnpJ9NhrgY98xD0IE5Sna5SLL"/>
              <div className="absolute inset-0 bg-primary/30 p-10 flex flex-col justify-end"><span className="text-[9px] uppercase tracking-[0.3em] text-surface/70 mb-2">Wing 02</span><h3 className="font-display text-4xl text-surface mb-2">Bhairavam</h3><p className="text-sm text-surface/80 font-light leading-relaxed opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">The path beyond description. Ancient wisdom refined for the modern conscious mind.</p></div>
            </div>
            <div className="group relative rounded-image overflow-hidden aspect-[4/3] scroll-reveal minimal-shadow" style={{ transitionDelay: '400ms' }}>
              <img alt="Wing 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9nMkGHy1eUFkJWPrvjBW6fH4yHw4IpClhTC8bKCtaNK8sTOJHanH_4l0A09y1ikBB4n2h6CpAhrqJTXGdCqid3TJlxRya5sEAzDID1C4CejMYP10JFPxUKLB_R5HK_BsHt-8duFYzXQcel0ZED1pp79w6y9e-8d_Fgua8lAZbjzEMMgHWc3jempCK2NbHjjlvUTv4J2Ks8Nhib5D-wz5nWuCkOHcvvJlFs_rObEGocbGv1pEi5MkHxVwVa1vXZdrL1yOiEU-VeYub"/>
              <div className="absolute inset-0 bg-primary/30 p-10 flex flex-col justify-end"><span className="text-[9px] uppercase tracking-[0.3em] text-surface/70 mb-2">Wing 03</span><h3 className="font-display text-4xl text-surface mb-2">Spiritual Activities</h3><p className="text-sm text-surface/80 font-light leading-relaxed opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">Serving through conscious action, ritual devotion, and community meditation.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Gatherings */}
      <section className="py-section-padding px-[5%] bg-surface">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 scroll-reveal">
            <div>
              <span className="text-[12px] uppercase tracking-[0.3em] text-secondary font-bold mb-6 block">Future Events</span>
              <h2 className="font-display text-5xl lg:text-[56px] leading-[1.1] text-primary-container">Upcoming Sacred Gatherings</h2>
            </div>
            <a className="mt-8 md:mt-0 text-[11px] uppercase font-bold tracking-widest text-on-surface-variant flex items-center gap-2 hover:text-secondary transition-all" href="#">
              View All Retreats <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Retreat Card 1 */}
            <div className="group scroll-reveal">
              <div className="rounded-image overflow-hidden mb-8 aspect-[16/10] minimal-shadow">
                <img alt="Rishikesh" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlQ1ToIRuEsLGnG8N4UJykNgaui4-Ve1MoJ2CpicmzuXOHKl22N9Vrjj56vqHe9o0_uD0kkXlD4U7c9WVTcYSDZBgWGYPc3GNZU21bGBLZ5gCEIN1XgnowAt1MuG_JJnL8Zky-KNDcLLKWAL6n1EPbEccEMXz8XvAlZQTwlfwA2-7wFpNNjpCARw6BT7C7uQFQvUUGU1_mt3KDVJesDZsI2xPTDZes4e9J0H4auzhDdXehgiWXgHEwu3ZpxkhT5ruJyWDQ83fY7a3M"/>
              </div>
              <h4 className="font-display text-2xl mb-2 text-primary-container">Nirgunam Retreat</h4>
              <p className="text-sm text-on-surface-variant mb-6 font-light">Rishikesh</p>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-on-surface-variant/70 mb-8">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">calendar_today</span> 12-18 Dec</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">location_on</span> India</span>
              </div>
              <a className="text-[10px] uppercase font-bold tracking-widest text-secondary flex items-center gap-3 group-hover:gap-5 transition-all" href="#">
                Join Journey <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
            {/* Retreat Card 2 */}
            <div className="group scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <div className="rounded-image overflow-hidden mb-8 aspect-[16/10] minimal-shadow">
                <img alt="Bengaluru" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg4MEcPfpbWVp3qnpKFjdSudl0_rfJGyP1npAPuySqJ7UESDBTHVqb0_lOX_C5xisbCvraPaR_JttIkdoKGos8m2fXDGfP2H-mnu5Go9i8u58yMUEJtXhjgMneWmYDC1G2B3tsK-vstYSamuDxv1Lz2zZnAscZqIm538E4DC_lS0o4o0WNhLkqA2gerfLhIkniX9Vz4H-qWubDL7aUT7usr50i4iU-Eh6dvc7tG7RtnYOpthZDWXIeXAEbZK7Z8ycRFyLFWsg3EJOQ"/>
              </div>
              <h4 className="font-display text-2xl mb-2 text-primary-container">Bhairavam Satsang</h4>
              <p className="text-sm text-on-surface-variant mb-6 font-light">Bengaluru</p>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-on-surface-variant/70 mb-8">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">calendar_today</span> 05 Jan</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">location_on</span> India</span>
              </div>
              <a className="text-[10px] uppercase font-bold tracking-widest text-secondary flex items-center gap-3 group-hover:gap-5 transition-all" href="#">
                Join Journey <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
            {/* Retreat Card 3 */}
            <div className="group scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <div className="rounded-image overflow-hidden mb-8 aspect-[16/10] minimal-shadow">
                <img alt="Tiruvannamalai" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARGdunPphWmzyLTzyFud7UWnmF2DGRgiM1iHEcz6Pke_zPUHSw09JwWhvrqZALg-2iGyAsHgLRwhskmk9AIFJAkz-VGMIURGFdys_jggouDOaLI8v9eM8Cz4IAtl9rMOKxa3-ljo4D3RZ9h9szYEcf3ReBq-qEBR9IlWB6efMNMqLvbM6lGu-9x1MHuHcqxgJ61a__R5RUG0eagc8ETh1tly4cqemMfQz_aC3efS8YKG-C3wXVYXvK2pO8uIK0qS011G3hCwNAw19v"/>
              </div>
              <h4 className="font-display text-2xl mb-2 text-primary-container">Shiva Temple Yatra</h4>
              <p className="text-sm text-on-surface-variant mb-6 font-light">Tiruvannamalai</p>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-on-surface-variant/70 mb-8">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">calendar_today</span> 21-27 Jan</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">location_on</span> India</span>
              </div>
              <a className="text-[10px] uppercase font-bold tracking-widest text-secondary flex items-center gap-3 group-hover:gap-5 transition-all" href="#">
                Join Journey <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
            {/* Retreat Card 4 */}
            <div className="group scroll-reveal" style={{ transitionDelay: '300ms' }}>
              <div className="rounded-image overflow-hidden mb-8 aspect-[16/10] minimal-shadow">
                <img alt="Varanasi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaCjknXk14Ygy0xGzWaAzm3-oxAIQAW7Jw9t6SCx8gBrXPV4WJDABc2dBfKKHS6FK8JaPVDyY5JBtEC7Lk7U-NUM-jPBgl5zoFK1vHhUHZtHC3oJR7Za_SrGx_G4_2rM6t7qLmuAQpNh5s5Wt3szhUdy5OfUt6oaqyhOqI1z5IX1W3oGbz6-NyXcdd4l8gS9p-AYviTcrr9gdrjRfJBENFkgWyqqvx8Cm2QLswUCo-Cl_b9tv2nEesasG1HRHMBKhLtJ-vJQIS5z6o"/>
              </div>
              <h4 className="font-display text-2xl mb-2 text-primary-container">Seva &amp; Satsang</h4>
              <p className="text-sm text-on-surface-variant mb-6 font-light">Varanasi</p>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-on-surface-variant/70 mb-8">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">calendar_today</span> 10-18 Feb</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">location_on</span> India</span>
              </div>
              <a className="text-[10px] uppercase font-bold tracking-widest text-secondary flex items-center gap-3 group-hover:gap-5 transition-all" href="#">
                Join Journey <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-section-padding px-[5%] bg-surface-container-low">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-[5%]">
            <div>
              <span className="text-[12px] uppercase tracking-[0.3em] text-secondary font-bold mb-6 block">Testimonials</span>
              <h2 className="font-display text-5xl lg:text-[56px] leading-[1.1] text-primary-container">Voices of Seekers</h2>
            </div>
            <div className="flex gap-4 mt-8 md:mt-0">
              <button onClick={() => scrollTestimonials('left')} className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center hover:bg-secondary hover:text-surface hover:border-secondary transition-all">
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button onClick={() => scrollTestimonials('right')} className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center hover:bg-secondary hover:text-surface hover:border-secondary transition-all">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
          <div ref={scrollRef} className="flex overflow-x-auto gap-10 px-[5%] pb-10 no-scrollbar scroll-smooth snap-x snap-mandatory">
            {/* Testimonial 1 */}
            <div className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center bg-surface p-10 rounded-card minimal-shadow flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-surface-container-low">
                <img alt="Kavya S." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJca9I5iJmYt3TxuoNlo6KFcEdM6DFP3vgNTVpy6S4i3LMbGx-gBr1noPxmwf07cP6NUe4StZYDQbi0kTzTsfL6kQhCbikDlvxbJyWZAdXSxe4svu3ovgWmpHLMw4vqgFU0irkv17Bl0wX5RwdjjcLyGZNKNSmB3HUthu-zj9hGgNWJ1TJF3wzPwVj7bMNvoeJN6k183Oy3hgaz0gC2uTOmoDcq9rOJnvJ42RIa0yi3NnYL4XKmjeU6_JL58pzwMCi5ZLzEo6EjI4h"/>
              </div>
              <div className="flex-grow">
                <span className="material-symbols-outlined text-4xl text-secondary/30 mb-4 inline-block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="font-display text-2xl italic text-primary-container mb-6 leading-snug">"Nirgunam is not just an organization. It is a living experience of truth, love, and freedom."</p>
                <div>
                  <span className="text-[12px] uppercase font-bold tracking-widest text-secondary">Kavya S.</span>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/50">Heart Seeker</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center bg-surface p-10 rounded-card minimal-shadow flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-surface-container-low">
                <img alt="Arjun V." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhgsXXTN42OR1qh8C5V3YlbPbTkelPj5hzG-65Yw0tgmzpyItBQOU5c5dIRzlXP9mJjn9bIBZ7UiEe1kyHTfMDcpT4LNtOGXvDCNOf_KTRVXcvlCYQ6kffQhLasz43UiCTRnXRMKzh5YhICobeQ_fvMvK8MQteZoPttlBs2DXigjnKiKyK0X4a_ZrWQi00P_nK8AgFJpaEus2o9FgM2jiwDIupV4mX1uHPFjfN9JGwy-0BR-Vi8asPtWadx07CzTicSr_lnAmGX8Fi"/>
              </div>
              <div className="flex-grow">
                <span className="material-symbols-outlined text-4xl text-secondary/30 mb-4 inline-block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="font-display text-2xl italic text-primary-container mb-6 leading-snug">"The silence I found at Nirgunam wasn't just an absence of noise, but a presence of profound peace."</p>
                <div>
                  <span className="text-[12px] uppercase font-bold tracking-widest text-secondary">Arjun V.</span>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/50">Entrepreneur</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center bg-surface p-10 rounded-card minimal-shadow flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-surface-container-low">
                <img alt="Sarah L." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFOVG69z_3LM2ZCWTThhbzFGdqPZQKqjE1LjJuHptKUkQkxOSdv50p1P5LC5nvGAsukhxEC1cZ2L0gSGthL9wfdbCEqXoXPJVfNKX1msjX4lCpQlrtUdMYXMBlWzx8oBOZ5uqxaFPPg_BeE7zcDKTDcBqNIMns3WzvDJl_810vzOMmYfMYDE8b2Dg605c1j7me7-h2bE5CiuJFjVLZm5BIkNhzzC6NpMdZiEnutbIeIjhqC_h7AiY5eeTlhGPABm66FB76pV-KV51i"/>
              </div>
              <div className="flex-grow">
                <span className="material-symbols-outlined text-4xl text-secondary/30 mb-4 inline-block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="font-display text-2xl italic text-primary-container mb-6 leading-snug">"Bhairavam is more than a practice; it's a homecoming. The depth of wisdom shared here is rare."</p>
                <div>
                  <span className="text-[12px] uppercase font-bold tracking-widest text-secondary">Sarah L.</span>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/50">Wellness Architect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Banner */}
      <section className="relative min-h-screen flex flex-col justify-center w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Every Journey Begins" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAhKCdBVxGXCUFQvXwAakJ1CcQox2Cf6Hm3Wqml10mTCjDXVWs_JTjcoYXhz6ZE6tvC9bPqCJHK7uJx0-mF0LtTJptKMoqnnJv1BHAKUFlZh3Wuh6m39lq8IlDoQMeK7ne2nfzTRqmxY7fvwYNN2byReXcwiHw4HI_DSgkCVDGk3z_1ptOE7KK83KqeFHjOT_dWxUIcdh7taFnBIRtDgPgrZDgFI0zzFjLwIh5K8FJO1QMUaan7-0ABfUfnNam_FJvkgyovNgsghUG"/>
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="relative z-10 text-center px-[5%] scroll-reveal">
          <h2 className="font-display text-5xl md:text-7xl lg:text-[88px] leading-[1.05] text-surface mb-8">Every Journey Begins<br className="hidden md:block"/>With A Single Step</h2>
          <p className="font-body text-surface/80 text-xl lg:text-2xl font-light mb-16 max-w-3xl mx-auto">Step into a path of wisdom, meditation, and inner awakening.</p>
          <button className="bg-surface text-primary-container px-14 py-6 rounded-button text-[12px] uppercase font-bold tracking-[0.2em] hover:bg-secondary hover:text-surface transition-all transform hover:scale-105 flex items-center gap-4 mx-auto">
            Begin Your Journey
            <span className="material-symbols-outlined text-base">spa</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
