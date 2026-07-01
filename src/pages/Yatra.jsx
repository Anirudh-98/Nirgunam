import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Yatra() {
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pilgrims: '1',
    destination: '',
    senior: 'No',
    city: '',
    dates: '',
    requirements: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const destinations = [
    { name: 'Sampurna Kashi', desc: 'Complete pilgrimage across the sacred city of Varanasi — the oldest living city and the divine abode of Lord Shiva.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeYe2qJVkBNRTu32aojzlEVc7p5fx3nNgQDr_RAY0JRepGyeXTuViUvp3SC4VCJ27dpUvqhzVkOr10-xZi3fAJK-m45v9P789XqNlwZH5iIkhAQWJSUTuDm-8zDWc_Q3kiqWFnn3lxetiPVYh6WaN5yukQA2ZTdM2sRNA4KNzQhvto6nGwwdU5Eded21jdvzpi13bxJb166ycQQNkdrwR3oQfoh1XwSr4M_0a24IjNjVvf3AgBY4qf4wwoZCanPHt-fygj5capt7iK' },
    { name: 'Rameshwaram', desc: 'The southernmost Jyotirlinga — where Lord Rama worshipped Shiva before crossing to Lanka. A place of immense sanctity.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9nMkGHy1eUFkJWPrvjBW6fH4yHw4IpClhTC8bKCtaNK8sTOJHanH_4l0A09y1ikBB4n2h6CpAhrqJTXGdCqid3TJlxRya5sEAzDID1C4CejMYP10JFPxUKLB_R5HK_BsHt-8duFYzXQcel0ZED1pp79w6y9e-8d_Fgua8lAZbjzEMMgHWc3jempCK2NbHjjlvUTv4J2Ks8Nhib5D-wz5nWuCkOHcvvJlFs_rObEGocbGv1pEi5MkHxVwVa1vXZdrL1yOiEU-VeYub' },
    { name: 'Panchabhutam', desc: 'The five Shiva temples representing the five elements of nature — unique to Tamil Nadu.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJca9I5iJmYt3TxuoNlo6KFcEdM6DFP3vgNTVpy6S4i3LMbGx-gBr1noPxmwf07cP6NUe4StZYDQbi0kTzTsfL6kQhCbikDlvxbJyWZAdXSxe4svu3ovgWmpHLMw4vqgFU0irkv17Bl0wX5RwdjjcLyGZNKNSmB3HUthu-zj9hGgNWJ1TJF3wzPwVj7bMNvoeJN6k183Oy3hgaz0gC2uTOmoDcq9rOJnvJ42RIa0yi3NnYL4XKmjeU6_JL58pzwMCi5ZLzEo6EjI4h' },
    { name: 'Yulla Kanda', desc: 'A remote and powerful Himalayan pilgrimage in Himachal Pradesh — for sincere seekers walking the high-altitude path.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhgsXXTN42OR1qh8C5V3YlbPbTkelPj5hzG-65Yw0tgmzpyItBQOU5c5dIRzlXP9mJjn9bIBZ7UiEe1kyHTfMDcpT4LNtOGXvDCNOf_KTRVXcvlCYQ6kffQhLasz43UiCTRnXRMKzh5YhICobeQ_fvMvK8MQteZoPttlBs2DXigjnKiKyK0X4a_ZrWQi00P_nK8AgFJpaEus2o9FgM2jiwDIupV4mX1uHPFjfN9JGwy-0BR-Vi8asPtWadx07CzTicSr_lnAmGX8Fi' },
    { name: 'Dho Dham', desc: 'A focused two-shrine yatra to two of the most sacred Dhams — combining spiritual depth with comfortable access.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaCjknXk14Ygy0xGzWaAzm3-oxAIQAW7Jw9t6SCx8gBrXPV4WJDABc2dBfKKHS6FK8JaPVDyY5JBtEC7Lk7U-NUM-jPBgl5zoFK1vHhUHZtHC3oJR7Za_SrGx_G4_2rM6t7qLmuAQpNh5s5Wt3szhUdy5OfUt6oaqyhOqI1z5IX1W3oGbz6-NyXcdd4l8gS9p-AYviTcrr9gdrjRfJBENFkgWyqqvx8Cm2QLswUCo-Cl_b9tv2nEesasG1HRHMBKhLtJ-vJQIS5z6o' },
    { name: 'Char Dham', desc: 'The four most sacred Hindu pilgrimage sites — Badrinath, Kedarnath, Gangotri, and Yamunotri in the Himalayas.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH_5TIzLqfE67589gMkw7iBW7iurg_8Z9zW4dNofmATXR4G2FIUBKjs617lxlbFcArUk6ITEmjmCeS0K718dM2dB6t7E2gL9PbdJ4P80HeZ-t9ea0Cj3ZRsF81UAFoha5GvXE5rkJvUlMF4bAIqwUCYR2v_jE_g3esh2df5dufRf-pLn_T3hJDqQ4nszis18gajBN1XwfwZPQDOse3lbpXswdYBG0XHlYMStfvV2ilNJSQ7n90KzLg-sgq3bWNsT7Lr3kNgd6ADFJW' },
    { name: 'Kamakhya', desc: 'One of the most powerful Shakti Peethas — the temple of Goddess Kamakhya atop Nilachal Hill in Assam.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAhKCdBVxGXCUFQvXwAakJ1CcQox2Cf6Hm3Wqml10mTCjDXVWs_JTjcoYXhz6ZE6tvC9bPqCJHK7uJx0-mF0LtTJptKMoqnnJv1BHAKUFlZh3Wuh6m39lq8IlDoQMeK7ne2nfzTRqmxY7fvwYNN2byReXcwiHw4HI_DSgkCVDGk3z_1ptOE7KK83KqeFHjOT_dWxUIcdh7taFnBIRtDgPgrZDgFI0zzFjLwIh5K8FJO1QMUaan7-0ABfUfnNam_FJvkgyovNgsghUG' },
    { name: 'ABC Trek', desc: 'The Annapurna Base Camp trek — a high-altitude Himalayan journey through sacred mountain landscapes.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQxMh250V3Z-Qz7l9q3R475_H6g47t8P6Z_9239WfX2062x28x_8992_803fQx3446-f_904xQ_5H1Y96939b4bX9QW5Z-5_VzX6691461993444_2hG_y9-7_R7-0243_z28V1z-2y9x985qQ6_Z-4Q58bX5716W4-x_2209q93Wq990xZ-y-V3Qy7Z3_0b2z6-23V46_8-6fH-Q91_qXz-189_01b22XfH-xX2q-Q1Z-W35x4QW44Q' },
    { name: 'Kailash Manasarovar', desc: 'The most revered of all pilgrimages — the abode of Lord Shiva, with the sacred Manas Sarovar lake in Tibet.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQq0s45XzZ-Qz7l9q3R475_H6g47t8P6Z_9239WfX2062x28x_8992_803fQx3446-f_904xQ_5H1Y96939b4bX9QW5Z-5_VzX6691461993444_2hG_y9-7_R7-0243_z28V1z-2y9x985qQ6_Z-4Q58bX5716W4-x_2209q93Wq990xZ-y-V3Qy7Z3_0b2z6-23V46_8-6fH-Q91_qXz-189_01b22XfH-xX2q-Q1Z-W35x4QW44Q' }
  ];

  return (
    <div className="bg-[#F7F2EB] text-[#2C2119] font-body selection:bg-[#C89A58]/30 overflow-x-hidden min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[850px] flex overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/img2.webp" />
            <img 
              alt="Yatra Meditation" 
              className="w-full h-full object-cover object-center" 
              src="/img2.webp"
              onError={(e) => { e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDQq0s45XzZ-Qz7l9q3R475_H6g47t8P6Z_9239WfX2062x28x_8992_803fQx3446-f_904xQ_5H1Y96939b4bX9QW5Z-5_VzX6691461993444_2hG_y9-7_R7-0243_z28V1z-2y9x985qQ6_Z-4Q58bX5716W4-x_2209q93Wq990xZ-y-V3Qy7Z3_0b2z6-23V46_8-6fH-Q91_qXz-189_01b22XfH-xX2q-Q1Z-W35x4QW44Q" }}
            />
          </picture>
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
        </div>
        
        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-center px-[5%] lg:px-[8%] w-full h-full pt-[90px]">
          <div className="w-full max-w-[520px]">
            <span className="text-[13px] uppercase tracking-[0.2em] text-white/80 font-semibold mb-6 block">The Path</span>
            <h1 className="font-display font-medium text-[72px] leading-[1] text-white tracking-[-0.03em] mb-4">
              Yatra
            </h1>
            <h2 className="font-display text-[32px] md:text-[40px] italic font-light text-white/90 mb-8 leading-tight">
              Sacred Walkouts.
            </h2>
            <div className="font-body text-white/80 text-[18px] leading-[1.9] font-light space-y-4 mb-10">
              <p>Unique pilgrimage plans with affordable pricing, ancient scripture knowledge, and special care for every seeker.</p>
              <p>Yatra is not tourism. It is a sacred travel outward that mirrors your spiritual transformation inward, guided by profound wisdom.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white bg-[#5F6A46] hover:bg-[#4a5337] transition-colors flex items-center justify-center w-full sm:w-auto">
                Explore Yatra
              </button>
              <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white border border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center w-full sm:w-auto">
                Join a Group Yatra
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATION + REGISTRATION SECTION */}
      <section className="py-[120px] px-[5%] lg:px-[8%]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10">
          
          {/* Left Panel (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Large Featured Image */}
            <div className="w-full h-[420px] rounded-[20px] overflow-hidden mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQxMh250V3Z-Qz7l9q3R475_H6g47t8P6Z_9239WfX2062x28x_8992_803fQx3446-f_904xQ_5H1Y96939b4bX9QW5Z-5_VzX6691461993444_2hG_y9-7_R7-0243_z28V1z-2y9x985qQ6_Z-4Q58bX5716W4-x_2209q93Wq990xZ-y-V3Qy7Z3_0b2z6-23V46_8-6fH-Q91_qXz-189_01b22XfH-xX2q-Q1Z-W35x4QW44Q" 
                alt="Pilgrims at Sunrise" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="font-display text-[32px] text-[#2C2119] mb-8">Current Yatra Destinations</h3>
            
            {/* Destination Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
              {[
                'Sampurna Kashi', 'Char Dham', 
                'Rameshwaram', 'Kamakhya', 
                'Panchabhutam', 'ABC Trek', 
                'Yulla Kanda', 'Kailash Manasarovar', 
                'Dho Dham'
              ].map((dest, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C89A58] text-[16px]" style={{ fontVariationSettings: "'wght' 300" }}>filter_vintage</span>
                  <span className="font-body text-[15px] text-[#2C2119] font-light">{dest}</span>
                </div>
              ))}
            </div>

            {/* Quote Card */}
            <div className="bg-[#FBF8F4] border border-black/5 rounded-[20px] p-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border-l-4 border-l-[#C89A58]">
              <p className="font-display italic text-[24px] leading-[1.4] text-[#2C2119] mb-6">
                "With the reference of ancient scriptures we give detailed knowledge on every particular place which we visit in the yatra."
              </p>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C89A58] font-bold block">
                — Sri Mata Group
              </span>
            </div>
          </div>

          {/* Right Panel - Registration Form (50%) */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#FBF8F4] border border-black/5 rounded-[20px] p-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] h-full">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-[#C89A58] text-[28px]">filter_vintage</span>
                <h3 className="font-display text-[28px] text-[#2C2119]">Register for Yatra</h3>
              </div>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#7A5736] mb-2 block">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" className="w-full h-[56px] px-4 rounded-[12px] border border-black/[0.08] bg-white text-[#2C2119] font-body text-[15px] outline-none focus:border-[#C89A58] transition-colors" />
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#7A5736] mb-2 block">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" className="w-full h-[56px] px-4 rounded-[12px] border border-black/[0.08] bg-white text-[#2C2119] font-body text-[15px] outline-none focus:border-[#C89A58] transition-colors" />
                  </div>
                  <div className="flex-1">
                    <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#7A5736] mb-2 block">No. of Pilgrims</label>
                    <input type="number" name="pilgrims" min="1" value={formData.pilgrims} onChange={handleInputChange} className="w-full h-[56px] px-4 rounded-[12px] border border-black/[0.08] bg-white text-[#2C2119] font-body text-[15px] outline-none focus:border-[#C89A58] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#7A5736] mb-2 block">Destination</label>
                  <div className="relative">
                    <select name="destination" value={formData.destination} onChange={handleInputChange} className="w-full h-[56px] px-4 rounded-[12px] border border-black/[0.08] bg-white text-[#2C2119] font-body text-[15px] outline-none focus:border-[#C89A58] transition-colors appearance-none cursor-pointer">
                      <option value="" disabled>Select destination</option>
                      <option value="Sampurna Kashi">Sampurna Kashi</option>
                      <option value="Char Dham">Char Dham</option>
                      <option value="Rameshwaram">Rameshwaram</option>
                      <option value="Kailash Manasarovar">Kailash Manasarovar</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#776D64]">expand_more</span>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#7A5736] mb-2 block">Senior Citizen in Group?</label>
                  <div className="relative">
                    <select name="senior" value={formData.senior} onChange={handleInputChange} className="w-full h-[56px] px-4 rounded-[12px] border border-black/[0.08] bg-white text-[#2C2119] font-body text-[15px] outline-none focus:border-[#C89A58] transition-colors appearance-none cursor-pointer">
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#776D64]">expand_more</span>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#7A5736] mb-2 block">City / State</label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Your city and state" className="w-full h-[56px] px-4 rounded-[12px] border border-black/[0.08] bg-white text-[#2C2119] font-body text-[15px] outline-none focus:border-[#C89A58] transition-colors" />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#7A5736] mb-2 block">Preferred Dates</label>
                  <input type="text" name="dates" value={formData.dates} onChange={handleInputChange} placeholder="Any preferred months or dates" className="w-full h-[56px] px-4 rounded-[12px] border border-black/[0.08] bg-white text-[#2C2119] font-body text-[15px] outline-none focus:border-[#C89A58] transition-colors" />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#7A5736] mb-2 block">Special Requirements</label>
                  <textarea name="requirements" value={formData.requirements} onChange={handleInputChange} placeholder="Any dietary needs, mobility concerns, or other requirements..." className="w-full h-[140px] p-4 rounded-[12px] border border-black/[0.08] bg-white text-[#2C2119] font-body text-[15px] outline-none focus:border-[#C89A58] transition-colors resize-none"></textarea>
                </div>

                <button className="w-full h-[58px] mt-2 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white bg-[#C56F2B] hover:bg-[#b06124] transition-colors flex items-center justify-center">
                  Register for Yatra
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* SHRINES WE COVER SECTION */}
      <section className="py-[120px] px-[5%] lg:px-[8%] bg-[#FDFBF8] border-t border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[13px] uppercase tracking-[0.2em] text-[#C89A58] font-semibold mb-4 block">Sacred Destinations</span>
              <h2 className="font-display font-medium text-[42px] md:text-[52px] leading-[1] text-[#2C2119] tracking-[-0.03em]">
                Shrines We Cover
              </h2>
            </div>
            <div className="hidden md:block">
              <span className="material-symbols-outlined text-[#C89A58] text-[80px] opacity-30" style={{ fontVariationSettings: "'wght' 100" }}>local_florist</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <div key={i} className="bg-[#FBF8F4] border border-black/5 rounded-[20px] h-[220px] flex overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-400 hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] group cursor-pointer">
                <div className="w-[120px] h-full flex-shrink-0 overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <h4 className="font-display text-[22px] md:text-[24px] font-medium text-[#2C2119] mb-3">{dest.name}</h4>
                  <p className="font-body text-[14px] leading-[1.6] text-[#776D64] font-light flex-grow">{dest.desc}</p>
                  <div className="flex justify-end mt-2">
                    <span className="material-symbols-outlined text-[#C89A58] text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESSENCE OF YATRA SECTION */}
      <section className="py-[140px] px-[5%] lg:px-[8%] bg-[#F7F2EB] border-t border-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-16 xl:gap-8">
          
          {/* Left Content (25%) */}
          <div className="w-full xl:w-[25%] flex flex-col pr-0 xl:pr-8">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#C89A58] font-semibold mb-6 block">The Essence of Yatra</span>
            <h2 className="font-display font-medium text-[42px] leading-[1.05] text-[#2C2119] tracking-[-0.03em] mb-6">
              More Than <br/>A Journey
            </h2>
            <p className="font-body text-[#776D64] text-[15px] leading-[1.8] font-light">
              Yatra is not about places, it is about transformation. Every step dissolves ego. Every destination awakens devotion. Every moment becomes meditation.
            </p>
          </div>

          {/* Right Benefits Grid (75%) */}
          <div className="w-full xl:w-[75%] grid grid-cols-2 md:grid-cols-5 gap-8 divide-x divide-black/5">
            <div className="flex flex-col items-center text-center px-4">
              <span className="material-symbols-outlined text-[#C89A58] text-[40px] mb-6 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>filter_vintage</span>
              <h4 className="font-display font-medium text-[20px] text-[#2C2119] mb-4">Purifies the Mind</h4>
              <p className="font-body text-[13px] text-[#776D64] font-light leading-[1.6]">Travel with intention, return with clarity.</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4">
              <span className="material-symbols-outlined text-[#C89A58] text-[40px] mb-6 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>eco</span>
              <h4 className="font-display font-medium text-[20px] text-[#2C2119] mb-4">Reconnects You</h4>
              <p className="font-body text-[13px] text-[#776D64] font-light leading-[1.6]">Reconnect with yourself, nature, and the divine.</p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <span className="material-symbols-outlined text-[#C89A58] text-[40px] mb-6 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>account_balance</span>
              <h4 className="font-display font-medium text-[20px] text-[#2C2119] mb-4">Ancient Wisdom</h4>
              <p className="font-body text-[13px] text-[#776D64] font-light leading-[1.6]">Learn scriptures, stories, and sacred traditions.</p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <span className="material-symbols-outlined text-[#C89A58] text-[40px] mb-6 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>landscape</span>
              <h4 className="font-display font-medium text-[20px] text-[#2C2119] mb-4">Creates Inner Shift</h4>
              <p className="font-body text-[13px] text-[#776D64] font-light leading-[1.6]">From seeking outside to awakening within.</p>
            </div>

            <div className="flex flex-col items-center text-center px-4 md:border-none">
              <span className="material-symbols-outlined text-[#C89A58] text-[40px] mb-6 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>diversity_1</span>
              <h4 className="font-display font-medium text-[20px] text-[#2C2119] mb-4">Blessed Companions</h4>
              <p className="font-body text-[13px] text-[#776D64] font-light leading-[1.6]">Walk with seekers, share, learn, and grow.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="relative w-full h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Sacred Landscape" 
            className="w-full h-full object-cover" 
            src="/aboutimg.webp"
            onError={(e) => { e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCFOVG69z_3LM2ZCWTThhbzFGdqPZQKqjE1LjJuHptKUkQkxOSdv50p1P5LC5nvGAsukhxEC1cZ2L0gSGthL9wfdbCEqXoXPJVfNKX1msjX4lCpQlrtUdMYXMBlWzx8oBOZ5uqxaFPPg_BeE7zcDKTDcBqNIMns3WzvDJl_810vzOMmYfMYDE8b2Dg605c1j7me7-h2bE5CiuJFjVLZm5BIkNhzzC6NpMdZiEnutbIeIjhqC_h7AiY5eeTlhGPABm66FB76pV-KV51i" }}
          />
          <div className="absolute inset-0 bg-[#7A5736]/40 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#17120F]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-[5%] lg:px-[8%] w-full max-w-[800px]">
          <h2 className="font-display font-medium text-[46px] md:text-[56px] leading-[1.1] text-white tracking-[-0.02em] mb-6">
            Begin Your Sacred Journey
          </h2>
          <p className="font-body text-white/90 text-[18px] leading-[1.8] font-light mb-10 max-w-[500px]">
            Join a yatra, walk ancient paths, and awaken the truth that has always been within you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white bg-[#5D6845] hover:bg-[#4a5337] transition-colors flex items-center justify-center">
              Join a Yatra
            </button>
            <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white border border-white/40 hover:bg-white/10 transition-colors flex items-center justify-center">
              Explore Yatra
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
