import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Bhairavam() {

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F7F2EB] text-[#2C2119] font-body selection:bg-[#C89A58]/30 overflow-x-hidden min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[900px] flex overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/img4.webp" />
            <img 
              alt="Bhairavam Meditation" 
              className="w-full h-full object-cover object-right lg:object-center" 
              src="/img4.webp"
              onError={(e) => { e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuC9nMkGHy1eUFkJWPrvjBW6fH4yHw4IpClhTC8bKCtaNK8sTOJHanH_4l0A09y1ikBB4n2h6CpAhrqJTXGdCqid3TJlxRya5sEAzDID1C4CejMYP10JFPxUKLB_R5HK_BsHt-8duFYzXQcel0ZED1pp79w6y9e-8d_Fgua8lAZbjzEMMgHWc3jempCK2NbHjjlvUTv4J2Ks8Nhib5D-wz5nWuCkOHcvvJlFs_rObEGocbGv1pEi5MkHxVwVa1vXZdrL1yOiEU-VeYub" }}
            />
          </picture>
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
        </div>
        
        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-center px-[5%] lg:px-[8%] w-full h-full pt-[90px]">
          <div className="w-full max-w-[520px]">
            <span className="text-[13px] uppercase tracking-[0.2em] text-white/80 font-semibold mb-6 block">The Essence</span>
            <h1 className="font-display font-medium text-[72px] leading-[1] text-white tracking-[-0.03em] mb-4">
              Bhairavam
            </h1>
            <h2 className="font-display text-[32px] md:text-[40px] italic font-light text-white/90 mb-8 leading-tight">
              The truth beyond description.
            </h2>
            <div className="font-body text-white/80 text-[18px] leading-[1.9] font-light space-y-4 mb-10">
              <p>
                Bhairavam is not a belief, philosophy, or ritual. It is the raw presence behind all existence — beyond identity, thought, and the illusion of separation.
              </p>
              <p>
                When the mind has no movement and this feeling of lack loses all meaning — one is completely in Bhairavam. It is already alive inside you right now.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white bg-[#5F6A46] hover:bg-[#4a5337] transition-colors flex items-center justify-center w-full sm:w-auto">
                Explore Bhairavam
              </button>
              <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white border border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center w-full sm:w-auto">
                Join a Satsang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-[140px] px-[5%] lg:px-[8%] border-b border-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 xl:gap-20 items-center lg:items-start">
          
          {/* Left: Cinematic Portrait (35%) */}
          <div className="w-full lg:w-[35%]">
            <div className="relative aspect-[4/5] rounded-[18px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white p-2 transform rotate-[-1deg] group">
              <div className="w-full h-full rounded-[14px] overflow-hidden">
                <img 
                  src="/founder.png" 
                  alt="Founder in Silence" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                  onError={(e) => { e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCaCjknXk14Ygy0xGzWaAzm3-oxAIQAW7Jw9t6SCx8gBrXPV4WJDABc2dBfKKHS6FK8JaPVDyY5JBtEC7Lk7U-NUM-jPBgl5zoFK1vHhUHZtHC3oJR7Za_SrGx_G4_2rM6t7qLmuAQpNh5s5Wt3szhUdy5OfUt6oaqyhOqI1z5IX1W3oGbz6-NyXcdd4l8gS9p-AYviTcrr9gdrjRfJBENFkgWyqqvx8Cm2QLswUCo-Cl_b9tv2nEesasG1HRHMBKhLtJ-vJQIS5z6o" }}
                />
              </div>
            </div>
          </div>

          {/* Center: Editorial Content (40%) */}
          <div className="w-full lg:w-[40%] flex flex-col pt-4">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#C89A58] font-semibold mb-6 block">About Bhairavam</span>
            <h2 className="font-display font-medium text-[42px] xl:text-[52px] leading-[1.05] text-[#2C2119] tracking-[-0.03em] mb-8">
              Beyond Thought.<br/>Beyond Self.
            </h2>
            <div className="font-body text-[#776D64] text-[18px] leading-[1.9] font-light space-y-6">
              <p>Bhairavam is the ultimate formless reality that exists beyond names, beyond shapes, beyond concepts.</p>
              <p>It is not something you practice. It is what remains when all practicing ends.</p>
              <p>It is not something you become. It is what you discover has always been the truth of you.</p>
            </div>
          </div>

          {/* Right: Quote Panel (25%) */}
          <div className="w-full lg:w-[25%] h-full mt-8 lg:mt-0">
            <div className="h-full min-h-[360px] bg-[#FBF8F4] border border-black/5 rounded-[20px] p-[40px] flex flex-col justify-center relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
              {/* Botanical watermark */}
              <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-[#C89A58] opacity-[0.08] pointer-events-none" style={{ fontVariationSettings: "'wght' 100" }}>local_florist</span>
              
              <span className="font-display text-[60px] leading-none text-[#C89A58] opacity-50 mb-4 block">"</span>
              <p className="font-display italic text-[28px] xl:text-[32px] leading-[1.2] text-[#2C2119] relative z-10">
                When the seeker disappears, what remains is Bhairavam — limitless, silent, and whole.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Philosophy Section (Dark Mode) */}
      <section className="bg-[#17120F] py-[120px] px-[5%] lg:px-[8%]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 xl:gap-24 items-center lg:items-start">
          
          {/* Left Content (40%) */}
          <div className="w-full lg:w-[40%] flex flex-col pt-8">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#C89A58] font-semibold mb-8 block">Bhairavam Is</span>
            <h2 className="font-display font-medium text-[48px] xl:text-[58px] leading-[1.1] text-white tracking-[-0.02em] mb-6">
              Not a belief.<br/>Not a philosophy.<br/>Not a system.
            </h2>
            <p className="font-display italic text-[32px] text-[#C89A58] leading-[1.2] tracking-[-0.01em]">
              Simply the truth that remains when separation ends.
            </p>
          </div>

          {/* Right Grid (60%) */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[20px] p-[32px] h-[280px] flex flex-col transition-all duration-400 hover:-translate-y-2 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(200,154,88,0.1)] group">
              <span className="material-symbols-outlined text-[#C89A58] text-[36px] mb-6 opacity-90 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'wght' 200" }}>radio_button_unchecked</span>
              <h4 className="font-display font-medium text-[22px] text-white mb-3">Seeing the Formless</h4>
              <p className="font-body text-[14px] text-white/60 font-light leading-[1.8]">He sees everything and everyone as Nirguna Parabrahma — the ultimate formless divine reality.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[20px] p-[32px] h-[280px] flex flex-col transition-all duration-400 hover:-translate-y-2 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(200,154,88,0.1)] group">
              <span className="material-symbols-outlined text-[#C89A58] text-[36px] mb-6 opacity-90 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'wght' 200" }}>psychiatry</span>
              <h4 className="font-display font-medium text-[22px] text-white mb-3">No Rules or Dependency</h4>
              <p className="font-body text-[14px] text-white/60 font-light leading-[1.8]">People can experience true peace and detachment without complicated rituals or relying blindly on a teacher.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[20px] p-[32px] h-[280px] flex flex-col transition-all duration-400 hover:-translate-y-2 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(200,154,88,0.1)] group">
              <span className="material-symbols-outlined text-[#C89A58] text-[36px] mb-6 opacity-90 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'wght' 200" }}>local_fire_department</span>
              <h4 className="font-display font-medium text-[22px] text-white mb-3">Find Your Own Light</h4>
              <p className="font-body text-[14px] text-white/60 font-light leading-[1.8]">His invitation to everyone is to become their own light — standing strong and unshaken on their own feet.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[20px] p-[32px] h-[280px] flex flex-col transition-all duration-400 hover:-translate-y-2 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(200,154,88,0.1)] group">
              <span className="material-symbols-outlined text-[#C89A58] text-[36px] mb-6 opacity-90 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'wght' 200" }}>all_inclusive</span>
              <h4 className="font-display font-medium text-[22px] text-white mb-3">Everyone Is Equal</h4>
              <p className="font-body text-[14px] text-white/60 font-light leading-[1.8]">He sees himself in everyone and everything. He does not place himself above anyone. He is limitless, yet content in being nothing.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-[140px] px-[5%] lg:px-[8%] border-b border-black/5 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content (40%) */}
          <div className="w-full lg:w-[40%] flex flex-col pr-0 lg:pr-8">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#C89A58] font-semibold mb-6 block">The Experience</span>
            <h2 className="font-display font-medium text-[42px] xl:text-[52px] leading-[1.05] text-[#2C2119] tracking-[-0.03em] mb-8">
              Beyond Thought.<br/>Beyond Identity.
            </h2>
            <div className="font-body text-[#776D64] text-[18px] leading-[1.9] font-light space-y-6 mb-10">
              <p>Bhairavam is not understood by the mind. It is known in the silence that remains when the mind dissolves.</p>
              <p>It is not found in books or temples, but in the stillness of direct experience.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-3 text-[14px] uppercase tracking-widest font-semibold text-[#7A5736] hover:text-[#C89A58] transition-colors group">
              Explore the Experience 
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>

          {/* Right Image (60%) */}
          <div className="w-full lg:w-[60%]">
            <div className="w-full aspect-[16/9] rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeYe2qJVkBNRTu32aojzlEVc7p5fx3nNgQDr_RAY0JRepGyeXTuViUvp3SC4VCJ27dpUvqhzVkOr10-xZi3fAJK-m45v9P789XqNlwZH5iIkhAQWJSUTuDm-8zDWc_Q3kiqWFnn3lxetiPVYh6WaN5yukQA2ZTdM2sRNA4KNzQhvto6nGwwdU5Eded21jdvzpi13bxJb166ycQQNkdrwR3oQfoh1XwSr4M_0a24IjNjVvf3AgBY4qf4wwoZCanPHt-fygj5capt7iK" 
                alt="Sacred Shiva Lingam" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-[120px] px-[5%] bg-[#F7F2EB]">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-[40px] h-[1px] bg-[#C89A58]/30"></div>
            <h3 className="text-[13px] uppercase tracking-[0.2em] text-[#7A5736] font-semibold">How Bhairavam Transforms</h3>
            <div className="w-[40px] h-[1px] bg-[#C89A58]/30"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-black/5">
            
            <div className="flex flex-col items-center pt-8 sm:pt-0 sm:px-6">
              <span className="material-symbols-outlined text-[#C89A58] text-[40px] mb-6 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>filter_vintage</span>
              <h4 className="font-display font-medium text-[22px] text-[#2C2119] mb-4">Dissolves Fear</h4>
              <p className="font-body text-[14px] text-[#776D64] font-light leading-[1.8]">When separation ends, fear has no place to exist.</p>
            </div>

            <div className="flex flex-col items-center pt-8 sm:pt-0 sm:px-6">
              <span className="material-symbols-outlined text-[#C89A58] text-[40px] mb-6 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>light_mode</span>
              <h4 className="font-display font-medium text-[22px] text-[#2C2119] mb-4">Brings True Freedom</h4>
              <p className="font-body text-[14px] text-[#776D64] font-light leading-[1.8]">Freedom is not earned — it is recognized as your nature.</p>
            </div>

            <div className="flex flex-col items-center pt-8 sm:pt-0 sm:px-6">
              <span className="material-symbols-outlined text-[#C89A58] text-[40px] mb-6 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>change_circle</span>
              <h4 className="font-display font-medium text-[22px] text-[#2C2119] mb-4">Ends Suffering</h4>
              <p className="font-body text-[14px] text-[#776D64] font-light leading-[1.8]">Suffering belongs to the mind. You are beyond the mind.</p>
            </div>

            <div className="flex flex-col items-center pt-8 sm:pt-0 sm:px-6">
              <span className="material-symbols-outlined text-[#C89A58] text-[40px] mb-6 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>landscape</span>
              <h4 className="font-display font-medium text-[22px] text-[#2C2119] mb-4">Reveals Oneness</h4>
              <p className="font-body text-[14px] text-[#776D64] font-light leading-[1.8]">You see yourself in all and all in yourself.</p>
            </div>

            <div className="flex flex-col items-center pt-8 sm:pt-0 sm:px-6">
              <span className="material-symbols-outlined text-[#C89A58] text-[40px] mb-6 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>all_inclusive</span>
              <h4 className="font-display font-medium text-[22px] text-[#2C2119] mb-4">Abides as Peace</h4>
              <p className="font-body text-[14px] text-[#776D64] font-light leading-[1.8]">Not temporary peace, but your natural, limitless peace.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="relative w-full h-[340px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Mountain Sunrise" 
            className="w-full h-full object-cover" 
            src="/quote_banner_bg.png"
            onError={(e) => { e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBH_5TIzLqfE67589gMkw7iBW7iurg_8Z9zW4dNofmATXR4G2FIUBKjs617lxlbFcArUk6ITEmjmCeS0K718dM2dB6t7E2gL9PbdJ4P80HeZ-t9ea0Cj3ZRsF81UAFoha5GvXE5rkJvUlMF4bAIqwUCYR2v_jE_g3esh2df5dufRf-pLn_T3hJDqQ4nszis18gajBN1XwfwZPQDOse3lbpXswdYBG0XHlYMStfvV2ilNJSQ7n90KzLg-sgq3bWNsT7Lr3kNgd6ADFJW" }}
          />
          <div className="absolute inset-0 bg-[#17120F]/50 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-[5%] max-w-[1000px]">
          <p className="font-display font-medium text-[36px] md:text-[64px] leading-[1.1] text-white tracking-[-0.02em] mb-8 drop-shadow-lg">
            “Bhairavam is not something to achieve. It is what you are when you stop believing you are separate.”
          </p>
          <span className="text-[13px] uppercase tracking-[0.2em] text-[#C89A58] font-semibold drop-shadow-md">— Manish Nirgunam</span>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full h-auto min-h-[450px] bg-[#F7F2EB] flex flex-col md:flex-row items-center border-t border-[#E7D8C5]">
        {/* Left Content */}
        <div className="w-full md:w-[50%] lg:w-[45%] py-24 px-[5%] lg:pl-[10%] xl:pl-[15%] flex flex-col justify-center bg-[#F7F2EB] z-10">
          <h2 className="font-display font-medium text-[42px] md:text-[52px] leading-[1.05] text-[#2C2119] tracking-[-0.03em] mb-6">
            Walk the Path of Bhairavam
          </h2>
          <p className="font-body text-[#776D64] text-[18px] leading-[1.8] font-light mb-10 max-w-[480px]">
            Attend a satsang, join a yatra gathering, or simply come and sit in silence. Bhairavam is open to every sincere seeker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white bg-[#5D6845] hover:bg-[#4a5337] transition-colors flex items-center justify-center">
              Join a Satsang
            </button>
            <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-[#7A5736] border border-[#7A5736]/30 hover:bg-[#7A5736]/5 transition-colors flex items-center justify-center">
              Explore Teachings
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[50%] lg:w-[55%] h-[400px] md:h-[100%] absolute right-0 bottom-0 md:top-0 z-0">
          <img 
            alt="Final CTA Landscape" 
            className="w-full h-full object-cover object-left-top md:object-center" 
            src="/final_cta.png"
            onError={(e) => { e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCaCjknXk14Ygy0xGzWaAzm3-oxAIQAW7Jw9t6SCx8gBrXPV4WJDABc2dBfKKHS6FK8JaPVDyY5JBtEC7Lk7U-NUM-jPBgl5zoFK1vHhUHZtHC3oJR7Za_SrGx_G4_2rM6t7qLmuAQpNh5s5Wt3szhUdy5OfUt6oaqyhOqI1z5IX1W3oGbz6-NyXcdd4l8gS9p-AYviTcrr9gdrjRfJBENFkgWyqqvx8Cm2QLswUCo-Cl_b9tv2nEesasG1HRHMBKhLtJ-vJQIS5z6o" }}
            style={{ maskImage: 'linear-gradient(to right, transparent, black 20%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)' }}
          />
        </div>
      </section>

      <Footer />

    </div>
  );
}
