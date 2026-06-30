import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
      <footer className="bg-[#F7F2EB] pt-[100px] px-[5%] border-t border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-black/5 pb-[80px]">
            
            {/* Column 1 */}
            <div className="lg:col-span-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[28px] text-[#C89A58]">filter_vintage</span>
                <span className="font-display font-semibold text-xl tracking-[0.1em] text-[#2C2119]">NIRGUNAM</span>
              </div>
              <p className="text-[14px] font-body text-[#776D64] leading-[1.8] font-light mb-8 max-w-[240px]">
                A sacred space for genuine seekers walking toward self-inquiry, inner transformation, and the experience of oneness.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#C89A58] hover:text-white hover:border-[#C89A58] transition-all text-[#776D64]" href="#"><span className="material-symbols-outlined text-[18px]">public</span></a>
                <a className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#C89A58] hover:text-white hover:border-[#C89A58] transition-all text-[#776D64]" href="#"><span className="material-symbols-outlined text-[18px]">diversity_1</span></a>
                <a className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#C89A58] hover:text-white hover:border-[#C89A58] transition-all text-[#776D64]" href="#"><span className="material-symbols-outlined text-[18px]">brand_awareness</span></a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <h5 className="text-[12px] uppercase tracking-[0.15em] font-bold mb-8 text-[#2C2119]">Nirgunam</h5>
              <div className="flex flex-col gap-4 text-[14px] font-body text-[#776D64] font-light">
                <Link to="/about" className="hover:text-[#C89A58] transition-colors">About Manish Nirgunam</Link>
                <Link to="/journey" className="hover:text-[#C89A58] transition-colors">Spiritual Journey</Link>
                <Link to="/bhairavam" className="hover:text-[#C89A58] transition-colors">Bhairavam</Link>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              <h5 className="text-[12px] uppercase tracking-[0.15em] font-bold mb-8 text-[#2C2119]">Sri Mata Group</h5>
              <div className="flex flex-col gap-4 text-[14px] font-body text-[#776D64] font-light">
                <a href="#" className="hover:text-[#C89A58] transition-colors">Our 3 Wings</a>
                <a href="#" className="hover:text-[#C89A58] transition-colors">Yatra</a>
                <a href="#" className="hover:text-[#C89A58] transition-colors">Products</a>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col">
              <h5 className="text-[12px] uppercase tracking-[0.15em] font-bold mb-8 text-[#2C2119]">Connect</h5>
              <div className="flex flex-col gap-4 text-[14px] font-body text-[#776D64] font-light">
                <a href="#" className="hover:text-[#C89A58] transition-colors">Contact &amp; Volunteer</a>
                <a href="#" className="hover:text-[#C89A58] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[#C89A58] transition-colors">Facebook</a>
              </div>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col">
              <h5 className="text-[12px] uppercase tracking-[0.15em] font-bold mb-8 text-[#2C2119]">Stay Connected</h5>
              <p className="text-[14px] font-body text-[#776D64] leading-[1.8] font-light mb-6">
                Receive reflections, updates, and inspiration to guide your journey.
              </p>
              <div className="flex h-[48px] rounded-[12px] bg-white border border-black/10 overflow-hidden shadow-sm focus-within:border-[#C89A58] transition-colors">
                <input type="email" placeholder="Enter your email" className="w-full h-full px-4 text-[14px] bg-transparent outline-none text-[#2C2119] placeholder-[#776D64]/50" />
                <button className="h-full px-5 bg-[#5D6845] hover:bg-[#4a5337] transition-colors flex items-center justify-center group">
                  <span className="material-symbols-outlined text-white text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>

          <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[12px] text-[#776D64]/80 font-light tracking-wide">
              © 2025 Sri Mata Group &amp; Nirgunam Foundation. All rights reserved.
            </p>
            <p className="font-display italic text-[#C89A58] text-[20px] flex items-center gap-3">
              Be your own light. <span className="material-symbols-outlined text-[18px]">flare</span>
            </p>
          </div>
        </div>
      </footer>
  );
}
