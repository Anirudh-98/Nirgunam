import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SpiritualActivities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8F4EE] text-[#2D221A] font-body overflow-x-hidden min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[700px] flex items-center overflow-hidden bg-[#241812]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/spiritual_activities_hero.png" 
            alt="Spiritual Gathering" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-[5%] lg:px-[8%] pt-[90px] flex">
          <div className="w-full max-w-[600px]">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#D8782B] font-semibold mb-6 block">Wing 03</span>
            <h1 className="font-display text-[56px] md:text-[72px] leading-[1.1] text-white tracking-[-0.03em] mb-8 font-medium">
              Spiritual Activities
            </h1>
            <p className="font-body text-[#E8E2D9] text-[18px] leading-[1.9] font-light">
              Dharmic education, social service, spiritual gatherings, and community transformation — serving genuine seekers and the community.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE INTRODUCTION SECTION */}
      <section className="relative py-[140px] px-[5%] lg:px-[8%] overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute -bottom-20 -right-20 opacity-[0.08] pointer-events-none select-none">
          <span className="material-symbols-outlined text-[400px] text-[#C89A58]">eco</span>
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Image (45%) */}
          <div className="w-full lg:w-[45%]">
            <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <img 
                src="/community_service.png" 
                alt="Community Food Service" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content (55%) */}
          <div className="w-full lg:w-[55%] relative z-10">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#D8782B] font-semibold mb-6 block">What We Do</span>
            <h2 className="font-display font-medium text-[42px] md:text-[52px] leading-[1.15] text-[#241812] tracking-[-0.03em] mb-8">
              Service. Sadhana.<br />Transformation.
            </h2>
            
            <p className="font-body text-[#766C63] text-[18px] leading-[1.9] font-light mb-10 max-w-[600px]">
              We conduct spiritual gatherings, dharmic education, and community service to support genuine seekers and rebuild inner values from the grassroots. We welcome volunteers with open arms.
            </p>

            <div className="flex flex-col gap-4 mb-12">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#D8782B] text-[22px] mt-1">check</span>
                <p className="font-body text-[#2D221A] text-[16px] leading-[1.6]">Food, clothes, and minute repair with shelter for those in need</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#D8782B] text-[22px] mt-1">check</span>
                <p className="font-body text-[#2D221A] text-[16px] leading-[1.6]">Encouraging school and college students through skill development contests</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#D8782B] text-[22px] mt-1">check</span>
                <p className="font-body text-[#2D221A] text-[16px] leading-[1.6]">Dharmic classes — Soundarya Lahari, Lalita and Vishnu Sahasranamam, Hanuman Chalisa</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#D8782B] text-[22px] mt-1">check</span>
                <p className="font-body text-[#2D221A] text-[16px] leading-[1.6]">Detailed knowledge on Sangatang Dharma topics and slokas</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#D8782B] text-[22px] mt-1">check</span>
                <p className="font-body text-[#2D221A] text-[16px] leading-[1.6]">Providing employment to skilled people regardless of education</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#D8782B] text-[22px] mt-1">check</span>
                <p className="font-body text-[#2D221A] text-[16px] leading-[1.6]">Conducting events and gatherings for dharmic community building</p>
              </div>
            </div>

            <button className="h-[56px] px-[28px] rounded-[12px] bg-[#D8782B] hover:bg-[#c26a24] text-white text-[13px] uppercase font-bold tracking-[0.1em] transition-colors shadow-lg shadow-[#D8782B]/20">
              Volunteer Now
            </button>
          </div>
        </div>
      </section>

      {/* PATHS OF SERVICE SECTION */}
      <section className="py-[140px] px-[5%] lg:px-[8%] bg-[#FCFAF6] border-y border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#D8782B] font-semibold mb-4 block">Our Paths of Service</span>
            <h2 className="font-display font-medium text-[42px] md:text-[52px] leading-[1.1] text-[#241812] tracking-[-0.03em] mb-6">
              Paths of Service &amp; Sadhana
            </h2>
            <div className="w-16 h-[1px] bg-[#C89A58] mx-auto opacity-50 flex items-center justify-center">
               <span className="w-2 h-2 rounded-full border border-[#C89A58] bg-transparent"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 01 */}
            <div className="group bg-[#FCFAF6] border border-black/5 rounded-[20px] p-12 text-center h-[280px] flex flex-col items-center justify-center hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-400">
              <span className="material-symbols-outlined text-[42px] text-[#D8782B] mb-6 font-light transition-transform duration-500 group-hover:scale-110">group</span>
              <h3 className="font-display text-[28px] text-[#241812] mb-3 font-medium tracking-[-0.02em]">Spiritual Gatherings</h3>
              <p className="font-body text-[#766C63] text-[15px] leading-[1.6] font-light">
                Satsangs, kirtans, and spiritual gatherings that uplift the heart and unite the community in devotion.
              </p>
            </div>

            {/* Card 02 */}
            <div className="group bg-[#FCFAF6] border border-black/5 rounded-[20px] p-12 text-center h-[280px] flex flex-col items-center justify-center hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-400">
              <span className="material-symbols-outlined text-[42px] text-[#D8782B] mb-6 font-light transition-transform duration-500 group-hover:scale-110">landscape</span>
              <h3 className="font-display text-[28px] text-[#241812] mb-3 font-medium tracking-[-0.02em]">Yatras (Sacred Walkouts)</h3>
              <p className="font-body text-[#766C63] text-[15px] leading-[1.6] font-light">
                Sacred walkouts and pilgrimage journeys across India to holy places and ancient energy centers.
              </p>
            </div>

            {/* Card 03 */}
            <div className="group bg-[#FCFAF6] border border-black/5 rounded-[20px] p-12 text-center h-[280px] flex flex-col items-center justify-center hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-400">
              <span className="material-symbols-outlined text-[42px] text-[#D8782B] mb-6 font-light transition-transform duration-500 group-hover:scale-110">self_improvement</span>
              <h3 className="font-display text-[28px] text-[#241812] mb-3 font-medium tracking-[-0.02em]">Spiritual Activities</h3>
              <p className="font-body text-[#766C63] text-[15px] leading-[1.6] font-light">
                Dharmic sessions, guided meditations, chanting, and spiritual practices to awaken inner awareness.
              </p>
            </div>

            {/* Card 04 */}
            <div className="group bg-[#FCFAF6] border border-black/5 rounded-[20px] p-12 text-center h-[280px] flex flex-col items-center justify-center hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-400">
              <span className="material-symbols-outlined text-[42px] text-[#D8782B] mb-6 font-light transition-transform duration-500 group-hover:scale-110">volunteer_activism</span>
              <h3 className="font-display text-[28px] text-[#241812] mb-3 font-medium tracking-[-0.02em]">Community Service</h3>
              <p className="font-body text-[#766C63] text-[15px] leading-[1.6] font-light">
                Food, clothes, and shelter drives for those in need. We understand that selfless giving is the path to inner abundance.
              </p>
            </div>

            {/* Card 05 */}
            <div className="group bg-[#FCFAF6] border border-black/5 rounded-[20px] p-12 text-center h-[280px] flex flex-col items-center justify-center hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-400">
              <span className="material-symbols-outlined text-[42px] text-[#D8782B] mb-6 font-light transition-transform duration-500 group-hover:scale-110">local_fire_department</span>
              <h3 className="font-display text-[28px] text-[#241812] mb-3 font-medium tracking-[-0.02em]">Bhairavam Initiation</h3>
              <p className="font-body text-[#766C63] text-[15px] leading-[1.6] font-light">
                Awakens the higher self within, guiding the seeker from limited identity to divine beingness.
              </p>
            </div>

            {/* Card 06 */}
            <div className="group bg-[#FCFAF6] border border-black/5 rounded-[20px] p-12 text-center h-[280px] flex flex-col items-center justify-center hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-400">
              <span className="material-symbols-outlined text-[42px] text-[#D8782B] mb-6 font-light transition-transform duration-500 group-hover:scale-110">diversity_1</span>
              <h3 className="font-display text-[28px] text-[#241812] mb-3 font-medium tracking-[-0.02em]">Volunteering</h3>
              <p className="font-body text-[#766C63] text-[15px] leading-[1.6] font-light">
                We don't need your certificates. We pay for your skills. Join hands to rebuild our Dharma.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-[120px] px-[5%] text-center max-w-[900px] mx-auto flex flex-col items-center">
        <span className="font-serif text-[#C89A58] text-[80px] leading-[0.5] block mb-6 font-bold opacity-40">"</span>
        <blockquote className="font-display text-[32px] md:text-[42px] leading-[1.3] text-[#241812] mb-8 font-medium tracking-[-0.02em]">
          The highest form of worship is serving the Divine in every being.
        </blockquote>
        <p className="font-body text-[#766C63] text-[16px] uppercase tracking-[0.1em] font-semibold">
          — Manish Nirgunam
        </p>
        <span className="font-serif text-[#C89A58] text-[80px] leading-[0] block mt-8 font-bold opacity-40 rotate-180">"</span>
      </section>

      {/* VOLUNTEER CTA BANNER */}
      <section className="relative w-full h-[320px] flex items-center justify-center px-[5%] overflow-hidden bg-gradient-to-br from-[#D8782B] to-[#C96A24]">
        {/* Subtle decorative geometry/mandala overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center mix-blend-overlay">
          <span className="material-symbols-outlined text-[800px] text-white">all_inclusive</span>
        </div>

        <div className="relative z-10 text-center max-w-[800px] flex flex-col items-center">
          <h2 className="font-display font-medium text-[42px] md:text-[56px] leading-[1.1] text-white tracking-[-0.02em] mb-4">
            We Welcome Volunteers with Open Arms
          </h2>
          <p className="font-body text-white/90 text-[18px] leading-[1.6] font-light mb-10 max-w-[600px] mx-auto">
            We pay for your skills. No certificate required. Let's join our hands together and bring colors to others' lives.
          </p>
          <button className="h-[56px] px-[32px] rounded-[12px] bg-white hover:bg-[#F8F4EE] text-[#D8782B] text-[13px] uppercase font-bold tracking-[0.1em] transition-colors shadow-xl">
            Apply as Volunteer
          </button>
        </div>
      </section>

      {/* Dark Footer */}
      <Footer theme="dark" />
    </div>
  );
}
