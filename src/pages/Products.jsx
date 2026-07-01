import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8F4EE] text-[#2C2119] font-body selection:bg-[#C7954D]/30 overflow-x-hidden min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[850px] flex overflow-hidden bg-[#2A1F18]">
        {/* Split Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_bg.png" 
            alt="Temple Altar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col lg:flex-row items-center px-[5%] lg:px-[8%] pt-[90px]">
          
          {/* Left Content */}
          <div className="w-full max-w-[600px]">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#C7954D] font-semibold mb-6 block">Sri Mata Enterprises</span>
            <h1 className="font-display text-[56px] md:text-[72px] leading-[1] text-white tracking-[-0.03em] mb-8 font-medium">
              Dharmic Products
            </h1>
            <p className="font-body text-white/80 text-[18px] leading-[1.9] font-light max-w-[480px] mb-12">
              Every product is handcrafted with devotion and intention, using authentic materials and ancient knowledge — to support your spiritual journey and daily practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white bg-[#5F6A46] hover:bg-[#4a5337] transition-colors flex items-center justify-center">
                View All Products
              </button>
              <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white border border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center">
                Custom Orders
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE 01: Moksha Lakshmii Photo Frame */}
      <section className="py-[140px] px-[5%] lg:px-[8%]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
          
          {/* Left: Product Image & Privacy Note */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="w-full h-[520px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(42,31,24,0.08)]">
              <img 
                src="/lakshmi_frame.png" 
                alt="Moksha Lakshmii Photo Frame" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#FCFAF6] border border-black/5 rounded-[20px] p-6 flex items-start gap-4">
              <span className="material-symbols-outlined text-[#C7954D] text-[24px]">filter_vintage</span>
              <p className="text-[14px] font-body text-[#776D64] leading-relaxed">
                Image is confidential and not displayed publicly.<br/>
                Enquire to know more.
              </p>
            </div>
          </div>

          {/* Right: Content & Form */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#C7954D] font-semibold mb-4 block">Sacred Product</span>
            <h2 className="font-display font-medium text-[42px] md:text-[52px] leading-[1.1] text-[#2A1F18] tracking-[-0.03em] mb-4">
              Moksha Lakshmii Photo Frame
            </h2>
            <span className="text-[12px] uppercase tracking-[0.1em] text-[#8A5A34] font-bold mb-8 block">SIZE: 24" × 20"</span>
            
            <div className="font-body text-[#776D64] text-[18px] leading-[1.9] font-light space-y-4 mb-12">
              <p>Moksha Lakshmi is a form of Sri Maha Lakshmi. When a sadhaka was in deep practice, the form of Moksha Lakshmi appeared in meditation. With the help of he sketched this sacred form of the Devi.</p>
              <p>With the grace of his beloved mother Aadi Shakti, the sadhaka completed this form. People who have purchased this frame are often experiencing miracles in their homes.</p>
            </div>

            {/* Enquiry Card */}
            <div className="bg-[#FCFAF6] border border-black/5 rounded-[20px] p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
              <h3 className="font-display text-[24px] text-[#2A1F18] mb-6 font-medium">Enquire About This Product</h3>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#776D64] font-bold">Full Name</label>
                    <input type="text" placeholder="Your full name" className="h-[56px] rounded-[12px] bg-white border border-black/5 px-4 focus:outline-none focus:border-[#C7954D] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#776D64] font-bold">Quantity</label>
                    <input type="number" defaultValue="1" min="1" className="h-[56px] rounded-[12px] bg-white border border-black/5 px-4 focus:outline-none focus:border-[#C7954D] transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#776D64] font-bold">Phone</label>
                    <input type="text" placeholder="+91 XXXXX XXXXX" className="h-[56px] rounded-[12px] bg-white border border-black/5 px-4 focus:outline-none focus:border-[#C7954D] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#776D64] font-bold">City / State</label>
                    <input type="text" placeholder="Your city and state" className="h-[56px] rounded-[12px] bg-white border border-black/5 px-4 focus:outline-none focus:border-[#C7954D] transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-widest text-[#776D64] font-bold">Message</label>
                  <textarea placeholder="Any questions..." className="min-h-[100px] rounded-[12px] bg-white border border-black/5 p-4 focus:outline-none focus:border-[#C7954D] transition-colors resize-y"></textarea>
                </div>
                <button type="button" className="h-[56px] w-full rounded-[12px] bg-[#D87428] hover:bg-[#c26723] text-white text-[13px] uppercase font-bold tracking-widest transition-colors mt-2">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE 02: Aadi Lingam */}
      <section className="py-[140px] px-[5%] lg:px-[8%] bg-[#F5EFE6]">
        <div className="max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row gap-16 xl:gap-24 items-start">
          
          {/* Left: Content & Form */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#C7954D] font-semibold mb-4 block">Handmade</span>
            <h2 className="font-display font-medium text-[42px] md:text-[52px] leading-[1.1] text-[#2A1F18] tracking-[-0.03em] mb-4">
              Aadi Lingam
            </h2>
            <span className="text-[12px] uppercase tracking-[0.1em] text-[#8A5A34] font-bold mb-8 block">SIZE: 6cm HEIGHT × 5cm WIDTH</span>
            
            <div className="font-body text-[#776D64] text-[18px] leading-[1.9] font-light space-y-4 mb-12">
              <p>Aadi Lingam is an actual form of Shiva Lingam designed based on our Puranas and Vedas.</p>
              <p>Every single detail in our Aadi Lingam has its own specification and meaning — we worked on this Lingam for more than 2 years.</p>
              <p>No modern mechanism is used in the manufacturing of the Aadi Lingam — it is completely handmade. We perform Rudrabhishekam to each and every Aadi Lingam at a Shiva temple before dispatching.</p>
            </div>

            {/* Enquiry Card */}
            <div className="bg-[#FCFAF6] border border-black/5 rounded-[20px] p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
              <h3 className="font-display text-[24px] text-[#2A1F18] mb-6 font-medium">Enquire About This Product</h3>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#776D64] font-bold">Full Name</label>
                    <input type="text" placeholder="Your full name" className="h-[56px] rounded-[12px] bg-white border border-black/5 px-4 focus:outline-none focus:border-[#C7954D] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#776D64] font-bold">Quantity</label>
                    <input type="number" defaultValue="1" min="1" className="h-[56px] rounded-[12px] bg-white border border-black/5 px-4 focus:outline-none focus:border-[#C7954D] transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-widest text-[#776D64] font-bold">City / State</label>
                  <input type="text" placeholder="Your city and state" className="h-[56px] rounded-[12px] bg-white border border-black/5 px-4 focus:outline-none focus:border-[#C7954D] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-widest text-[#776D64] font-bold">Message</label>
                  <textarea placeholder="Any questions..." className="min-h-[100px] rounded-[12px] bg-white border border-black/5 p-4 focus:outline-none focus:border-[#C7954D] transition-colors resize-y"></textarea>
                </div>
                <button type="button" className="h-[56px] w-full rounded-[12px] bg-[#D87428] hover:bg-[#c26723] text-white text-[13px] uppercase font-bold tracking-widest transition-colors mt-2">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-[600px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(42,31,24,0.08)]">
              <img 
                src="/shiva_lingam.png" 
                alt="Aadi Lingam" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE 03: Parad Lingam */}
      <section className="py-[140px] px-[5%] lg:px-[8%]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 xl:gap-24 items-center lg:items-start">
          
          {/* Left: Product Image */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-[520px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(42,31,24,0.08)]">
              <img 
                src="/shiva_lingam.png" 
                alt="Parad Lingam Coming Soon" 
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
            </div>
          </div>

          {/* Right: Content & Form */}
          <div className="w-full lg:w-1/2 flex flex-col pt-8">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#C7954D] font-semibold mb-4 block">Coming Soon</span>
            <h2 className="font-display font-medium text-[42px] md:text-[52px] leading-[1.1] text-[#2A1F18] tracking-[-0.03em] mb-8">
              Parad Lingam
            </h2>
            
            <div className="font-body text-[#776D64] text-[18px] leading-[1.9] font-light space-y-4 mb-12">
              <p>Parad Lingam (Padrasam) — also called the Rasal Lingam — plays a vital role in Lord Shiva's worship. It is also mentioned in the Brahma Purana that he who worships the Parad gets full worldly pleasures and at last attains ultimate salvation.</p>
              <p>The Rasa Lingam, symbol of the god Shiva, is made of solidified mercury, named Shiva Lingam from solidified mercury using the secret sonic secret process of mercury solidification, Tamil Siddhas identified mercury as Shiva's metal — Shivadhatu.</p>
            </div>

            {/* Notify Card */}
            <div className="bg-[#FCFAF6] border border-black/5 rounded-[20px] p-6 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
              <p className="text-[14px] font-body text-[#776D64] mb-4">Notify me when this product becomes available.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="+91 XXXXX XXXXX" className="h-[56px] flex-1 rounded-[12px] bg-white border border-black/5 px-4 focus:outline-none focus:border-[#C7954D] transition-colors" />
                <button type="button" className="h-[56px] px-8 rounded-[12px] bg-[#D87428] hover:bg-[#c26723] text-white text-[13px] uppercase font-bold tracking-widest transition-colors w-full sm:w-auto">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY OUR PRODUCTS ARE DIFFERENT */}
      <section className="py-[120px] px-[5%] border-t border-black/5 bg-[#FCFAF6]">
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-[13px] uppercase tracking-[0.2em] text-[#C7954D] font-semibold mb-16 block">Why Our Products Are Different</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-black/5">
            {/* Feature 1 */}
            <div className="flex flex-col items-center pt-8 sm:pt-0 px-4">
              <span className="material-symbols-outlined text-[40px] text-[#C7954D] mb-6 font-light">filter_vintage</span>
              <h4 className="font-display text-[22px] text-[#2A1F18] mb-3">Authentic &amp; Scriptural</h4>
              <p className="font-body text-[#776D64] text-[15px] leading-[1.6] font-light">Based on Puranas, Vedas, and Siddha traditions.</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center pt-8 sm:pt-0 px-4">
              <span className="material-symbols-outlined text-[40px] text-[#C7954D] mb-6 font-light">pan_tool</span>
              <h4 className="font-display text-[22px] text-[#2A1F18] mb-3">Handcrafted with Devotion</h4>
              <p className="font-body text-[#776D64] text-[15px] leading-[1.6] font-light">Made by skilled craftsmen with spiritual intention.</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center pt-8 sm:pt-0 px-4">
              <span className="material-symbols-outlined text-[40px] text-[#C7954D] mb-6 font-light">self_improvement</span>
              <h4 className="font-display text-[22px] text-[#2A1F18] mb-3">Consecrated &amp; Energized</h4>
              <p className="font-body text-[#776D64] text-[15px] leading-[1.6] font-light">Mantras and rituals infuse divine energy.</p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center pt-8 sm:pt-0 px-4">
              <span className="material-symbols-outlined text-[40px] text-[#C7954D] mb-6 font-light">spa</span>
              <h4 className="font-display text-[22px] text-[#2A1F18] mb-3">Pure &amp; Natural Materials</h4>
              <p className="font-body text-[#776D64] text-[15px] leading-[1.6] font-light">Only natural materials are used.</p>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col items-center pt-8 sm:pt-0 px-4">
              <span className="material-symbols-outlined text-[40px] text-[#C7954D] mb-6 font-light">temple_hindu</span>
              <h4 className="font-display text-[22px] text-[#2A1F18] mb-3">Supports Sacred Living</h4>
              <p className="font-body text-[#776D64] text-[15px] leading-[1.6] font-light">Designed for daily spiritual practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative w-full h-[420px] flex items-end pb-16 px-[5%] lg:px-[8%]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/final_cta.png" 
            alt="Spiritual Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-[600px]">
            <h2 className="font-display font-medium text-[42px] md:text-[56px] leading-[1.1] text-white tracking-[-0.03em] mb-4">
              Bring Home the Divine
            </h2>
            <p className="font-body text-white/80 text-[18px] leading-[1.7] font-light">
              Every product becomes a reminder of the sacred and a companion on the path of inner transformation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white bg-[#5F6A46] hover:bg-[#4a5337] transition-colors flex items-center justify-center">
              View All Products
            </button>
            <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white border border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center">
              Custom Orders
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
