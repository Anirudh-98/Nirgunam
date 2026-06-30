import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Journey() {

  const timelineEvents = [
    {
      id: "01",
      eyebrow: "EARLY YEARS",
      title: "The Inner Question",
      text: "Even during school days, the silent inquiry 'Who am I?' lived within him. By the 10th grade he often preferred solitude over crowds. As he grew older, this inner sensitivity deepened — he began perceiving everything around him with a higher level of awareness.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNQUqFI2yDsRb9Kb3IVOoWBqwVbFSmbRU7VEPr7l9r9_rz_MIRG6r_I_oYOd8vY4QQnI38yG0jF9-03smXFuV92VIcapH603Dpb1c6r3mSZn_QOwTN1hHhTyWbbIgDts78LubtH7rFeCByGD5EJyQSxmHhX1pTkUEovlt9HjgfudhOfFHUDonS9WBnNtmJRujaHic2FrwLseO83bmIEYRxv1TYLOIC8yyMQoSzu2lQC9--Wf5_rlmt6nwk9IpysSlBEteyGV2QjRWp"
    },
    {
      id: "02",
      eyebrow: "THE TURNING POINT",
      title: "Tiruvannamalai — The Miracle",
      text: "For the first 30 years of his life, Manish did not believe in God or spirituality. That changed completely when he was forced to visit a famous Shiva temple in Tiruvannamalai. A real miracle happened there, shattering his old worldview and igniting his profound spiritual journey he walks today.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARGdunPphWmzyLTzyFud7UWnmF2DGRgiM1iHEcz6Pke_zPUHSw09JwWhvrqZALg-2iGyAsHgLRwhskmk9AIFJAkz-VGMIURGFdys_jggouDOaLI8v9eM8Cz4IAtl9rMOKxa3-ljo4D3RZ9h9szYEcf3ReBq-qEBR9IlWB6efMNMqLvbM6lGu-9x1MHuHcqxgJ61a__R5RUG0eagc8ETh1tly4cqemMfQz_aC3efS8YKG-C3wXVYXvK2pO8uIK0qS011G3hCwNAw19v"
    },
    {
      id: "03",
      eyebrow: "2017",
      title: "Sri Chakra Peetam",
      text: "He met a spiritual scholar who first helped him see beyond the ordinary world — opening the doors of perception to deeper layers of reality that had been invisible before.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASBQ-sQ6Qz4QE0qxEFLR_WRd7FsAC_zfeNKsB1Om-hSBQ11v2sJbs6sA7gpIxXzsaTREwYuWvSn353yudCXK7MEG6KLqlp0K4KS4gLlROv8vaaedNxfhn6OTxjxfG5VXAkT6Ztj6q2ggJ9ggltVEeFFa6TmjnG-0KulTs5zsRp0qCH_KSbyJXviruja9vBJbC3i1uk3M4P-EeR7aqxovjpvxWmaZmYwKi4_J0YZUyTK8-wSasLsGwuL_2YHX5FXQOnovSt_u9VqHPV"
    },
    {
      id: "04",
      eyebrow: "2019",
      title: "Energy Initiation",
      text: "He studied with a powerful tantric teacher and experienced deep spiritual visions of the Divine Mother in forms like Maha Kali, Maha Prathyangira, and Lalitha Tripura Sundari. These darshans transformed his understanding of reality entirely.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH_5TIzLqfE67589gMkw7iBW7iurg_8Z9zW4dNofmATXR4G2FIUBKjs617lxlbFcArUk6ITEmjmCeS0K718dM2dB6t7E2gL9PbdJ4P80HeZ-t9ea0Cj3ZRsF81UAFoha5GvXE5rkJvUlMF4bAIqwUCYR2v_jE_g3esh2df5dufRf-pLn_T3hJDqQ4nszis18gajBN1XwfwZPQDOse3lbpXswdYBG0XHlYMStfvV2ilNJSQ7n90KzLg-sgq3bWNsT7Lr3kNgd6ADFJW"
    },
    {
      id: "05",
      eyebrow: "2021",
      title: "Meditation & Awareness",
      text: "He met a guide who taught him about ultimate freedom and energy centers. During this time, he felt the strong spiritual presence of Maha Kali, Baba Ji, and Bhagavan Ramana Maharshi — each leaving a lasting mark on his path.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9nMkGHy1eUFkJWPrvjBW6fH4yHw4IpClhTC8bKCtaNK8sTOJHanH_4l0A09y1ikBB4n2h6CpAhrqJTXGdCqid3TJlxRya5sEAzDID1C4CejMYP10JFPxUKLB_R5HK_BsHt-8duFYzXQcel0ZED1pp79w6y9e-8d_Fgua8lAZbjzEMMgHWc3jempCK2NbHjjlvUTv4J2Ks8Nhib5D-wz5nWuCkOHcvvJlFs_rObEGocbGv1pEi5MkHxVwVa1vXZdrL1yOiEU-VeYub"
    },
    {
      id: "06",
      eyebrow: "MARCH 21, 2023",
      title: "The Awakening in Kashi",
      text: "At the holy Manikarnika Ghat in Varanasi, Manish encountered a mysterious person. With just a single look, they showed him the ultimate experience of oneness and completeness — permanently changing the way he perceives. Now he sees into the unmanifested (nirguna) reality behind all form.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaCjknXk14Ygy0xGzWaAzm3-oxAIQAW7Jw9t6SCx8gBrXPV4WJDABc2dBfKKHS6FK8JaPVDyY5JBtEC7Lk7U-NUM-jPBgl5zoFK1vHhUHZtHC3oJR7Za_SrGx_G4_2rM6t7qLmuAQpNh5s5Wt3szhUdy5OfUt6oaqyhOqI1z5IX1W3oGbz6-NyXcdd4l8gS9p-AYviTcrr9gdrjRfJBENFkgWyqqvx8Cm2QLswUCo-Cl_b9tv2nEesasG1HRHMBKhLtJ-vJQIS5z6o"
    },
    {
      id: "07",
      eyebrow: "2024 — PRESENT",
      title: "Nirgunam Foundation",
      text: "Nirgunam was established on Maha Shivaratri 2024 as a space for seekers of truth and inner transformation. Under the guidance of an enlightened master from the Nirguna lineage, revelations naturally blossomed into a path of self-inquiry, awareness, and oneness.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPzKiDM1tzqRxpc6DNRpfwRy9Eww3lhGNV6fG0n4nKQTDxZJvLxQkmrJT7M2TtywQ6xaYevj2DDgLW0KZuEoi4aInh9h3HWvn9owpVGl7CLoo73MOxY9VQPJ2IcxI0mpmBA21qHk-wq2CNjY2CiHMz8tfzTjMbSFR5ZvF1kNf8cTvp9ycK4C7pfYXSKQDiNCq56va78_fskup1sGWwXQD0OXe1i-pGtnxZjsx_31ikXwc3JiGsRQEecEDlPcrVJPzB_lR7BLVSSMHr"
    }
  ];

  return (
    <div className="bg-[#F7F2EB] text-[#2C2119] font-body selection:bg-[#C89A58]/30 overflow-x-hidden min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[850px] flex overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/img3.webp" />
            <img 
              alt="Manish Meditating at Sunrise" 
              className="w-full h-full object-cover object-right" 
              src="/heroimg.webp"
            />
          </picture>
          {/* Gradient to blend image with ivory background on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F2EB] via-[#F7F2EB]/90 to-transparent w-full md:w-2/3 lg:w-1/2"></div>
        </div>
        
        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-center px-[5%] w-full h-full pt-[90px]">
          <div className="w-full max-w-[520px]">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#C89A58] font-semibold mb-6 block">The Path</span>
            <h1 className="font-display font-medium text-[56px] md:text-[72px] leading-[1] text-[#7A5736] tracking-[-0.03em] mb-8">
              Spiritual Journey
            </h1>
            <p className="font-body text-[#776D64] text-[18px] leading-[1.9] font-light">
              An unfolding of inner transformation, sacred encounters, and awakening through direct experiences. Every step on this path is an invitation to go deeper, beyond the known, into the truth of who you are.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="relative py-[160px] px-[5%] overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative">
          
          {/* Central Vertical Axis */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[1px] bg-[#E7D8C5] transform md:-translate-x-1/2 z-0"></div>

          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={event.id} className="relative flex flex-col md:flex-row items-center w-full mb-[120px] last:mb-0 z-10 group">
                
                {/* Node Icon */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-[56px] h-[56px] rounded-full bg-[#FBF8F4] border border-[#E7D8C5] flex items-center justify-center shadow-sm z-20 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[#C89A58] text-[28px] opacity-80" style={{ fontVariationSettings: "'wght' 300" }}>local_florist</span>
                </div>

                {/* Left Side (Empty on even, Content on odd) - Only applies on Desktop */}
                <div className={`hidden md:flex w-1/2 justify-end pr-[80px] ${!isEven ? 'order-1' : 'order-2'}`}>
                  {!isEven ? (
                    <div className="w-[380px] flex flex-col items-end text-right">
                      <span className="text-[13px] uppercase tracking-[0.2em] text-[#C89A58] font-semibold mb-4">{event.eyebrow}</span>
                      <h3 className="font-display font-medium text-[34px] leading-[1.1] text-[#2C2119] tracking-[-0.03em] mb-6">{event.title}</h3>
                      <p className="font-body text-[#776D64] text-[16px] leading-[1.8] font-light">{event.text}</p>
                    </div>
                  ) : (
                    <div className="w-[420px] rounded-[24px] overflow-hidden bg-[#FBF8F4] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-black/5 aspect-[4/3] group-hover:-translate-y-2 transition-transform duration-500">
                      <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                {/* Right Side (Content on even, Empty on odd) - Only applies on Desktop */}
                <div className={`hidden md:flex w-1/2 justify-start pl-[80px] ${!isEven ? 'order-2' : 'order-1'}`}>
                  {isEven ? (
                    <div className="w-[380px] flex flex-col items-start text-left">
                      <span className="text-[13px] uppercase tracking-[0.2em] text-[#C89A58] font-semibold mb-4">{event.eyebrow}</span>
                      <h3 className="font-display font-medium text-[34px] leading-[1.1] text-[#2C2119] tracking-[-0.03em] mb-6">{event.title}</h3>
                      <p className="font-body text-[#776D64] text-[16px] leading-[1.8] font-light">{event.text}</p>
                    </div>
                  ) : (
                    <div className="w-[420px] rounded-[24px] overflow-hidden bg-[#FBF8F4] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-black/5 aspect-[4/3] group-hover:-translate-y-2 transition-transform duration-500">
                      <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                {/* Mobile Layout (Stacks vertically) */}
                <div className="flex md:hidden flex-col w-full pl-[64px] pt-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#C89A58] font-semibold mb-3">{event.eyebrow}</span>
                  <h3 className="font-display font-medium text-[28px] leading-[1.1] text-[#2C2119] tracking-[-0.03em] mb-4">{event.title}</h3>
                  <div className="w-full rounded-[16px] overflow-hidden bg-[#FBF8F4] border border-black/5 aspect-[16/9] mb-5">
                    <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-body text-[#776D64] text-[15px] leading-[1.8] font-light">{event.text}</p>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Journey Realization Quote */}
      <section className="px-[5%] pb-[140px]">
        <div className="max-w-[1000px] mx-auto bg-[#FBF8F4] border border-black/5 rounded-[24px] p-[64px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle watermark flower */}
          <span className="material-symbols-outlined absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[300px] text-[#C89A58] opacity-[0.03] pointer-events-none">filter_vintage</span>
          
          <span className="material-symbols-outlined text-[#C89A58] text-[40px] mb-8 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>self_improvement</span>
          <p className="font-display font-medium italic text-[36px] md:text-[56px] leading-[1.1] text-[#7A5736] tracking-[-0.02em] max-w-[800px] relative z-10">
            This journey is not about becoming something new — but dissolving everything false.
          </p>
          <div className="w-[80px] h-[1px] bg-[#C89A58]/40 mt-12"></div>
        </div>
      </section>

      {/* Avadhuta Path Section */}
      <section className="py-[120px] px-[5%] bg-white border-y border-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-16 items-center lg:items-start">
          
          {/* Left: Cinematic Portrait (40%) */}
          <div className="w-full xl:w-[40%] aspect-[3/4] rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5 group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9nMkGHy1eUFkJWPrvjBW6fH4yHw4IpClhTC8bKCtaNK8sTOJHanH_4l0A09y1ikBB4n2h6CpAhrqJTXGdCqid3TJlxRya5sEAzDID1C4CejMYP10JFPxUKLB_R5HK_BsHt-8duFYzXQcel0ZED1pp79w6y9e-8d_Fgua8lAZbjzEMMgHWc3jempCK2NbHjjlvUTv4J2Ks8Nhib5D-wz5nWuCkOHcvvJlFs_rObEGocbGv1pEi5MkHxVwVa1vXZdrL1yOiEU-VeYub" 
              alt="Avadhuta Path" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
            />
          </div>

          {/* Center: Editorial Content (35%) */}
          <div className="w-full xl:w-[35%] flex flex-col pt-4 pr-0 xl:pr-8">
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#C89A58] font-semibold mb-6 block">The Tradition</span>
            <h2 className="font-display font-medium text-[42px] md:text-[52px] leading-[1] text-[#2C2119] tracking-[-0.03em] mb-10">
              The Avadhuta Path
            </h2>
            <div className="font-body text-[#776D64] text-[18px] leading-[1.9] font-light space-y-6 mb-12">
              <p>After the Kashi awakening, Manish realized his path is deeply connected to the Avadhuta tradition — a way of total, unbound inner freedom where no rules, rituals, or identities remain.</p>
              <p>The Avadhuta is one who has shed all external identities and conditioning. He or she lives in constant state of recognition — that everything is already perfect, already whole, already Shiva.</p>
              <p>Through the Bhairavam sadhana, anyone who constantly realizes with this recognition dissolves their limitations and becomes one with the source.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-3 text-[14px] uppercase tracking-widest font-semibold text-[#7A5736] hover:text-[#C89A58] transition-colors group">
              Learn More 
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>

          {/* Right: Philosophy Cards (25%) */}
          <div className="w-full xl:w-[25%] flex flex-col gap-6">
            <div className="bg-[#FBF8F4] border border-black/5 rounded-[18px] p-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-[#C89A58] text-[28px] mb-4 opacity-90" style={{ fontVariationSettings: "'wght' 300" }}>ac_unit</span>
              <h4 className="font-display font-medium text-[22px] text-[#2C2119] mb-2 leading-snug">No Identity</h4>
              <p className="font-body text-[14px] text-[#776D64] font-light leading-relaxed">The Avadhuta has no fixed identity — no role, no position, no separation from existence.</p>
            </div>
            
            <div className="bg-[#FBF8F4] border border-black/5 rounded-[18px] p-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-[#C89A58] text-[28px] mb-4 opacity-90" style={{ fontVariationSettings: "'wght' 300" }}>all_inclusive</span>
              <h4 className="font-display font-medium text-[22px] text-[#2C2119] mb-2 leading-snug">Constant Freedom</h4>
              <p className="font-body text-[14px] text-[#776D64] font-light leading-relaxed">Freedom is not gained. It is uncovered. It is the natural condition of one who has zero identification.</p>
            </div>

            <div className="bg-[#FBF8F4] border border-black/5 rounded-[18px] p-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-[#C89A58] text-[28px] mb-4 opacity-90" style={{ fontVariationSettings: "'wght' 300" }}>blur_on</span>
              <h4 className="font-display font-medium text-[22px] text-[#2C2119] mb-2 leading-snug">Bhairavam Sadhana</h4>
              <p className="font-body text-[14px] text-[#776D64] font-light leading-relaxed">Not a practice invented by humans — it is the recognition of what is already alive within every being.</p>
            </div>

            <div className="bg-[#FBF8F4] border border-black/5 rounded-[18px] p-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-[#C89A58] text-[28px] mb-4 opacity-90" style={{ fontVariationSettings: "'wght' 300" }}>wifi_tethering</span>
              <h4 className="font-display font-medium text-[22px] text-[#2C2119] mb-2 leading-snug">Open Transmission</h4>
              <p className="font-body text-[14px] text-[#776D64] font-light leading-relaxed">Manish shares freely with anyone who is genuinely seeking. No conditions, no fees, no hierarchy.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Cinematic Quote Banner */}
      <section className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Sunrise Temple View" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH_5TIzLqfE67589gMkw7iBW7iurg_8Z9zW4dNofmATXR4G2FIUBKjs617lxlbFcArUk6ITEmjmCeS0K718dM2dB6t7E2gL9PbdJ4P80HeZ-t9ea0Cj3ZRsF81UAFoha5GvXE5rkJvUlMF4bAIqwUCYR2v_jE_g3esh2df5dufRf-pLn_T3hJDqQ4nszis18gajBN1XwfwZPQDOse3lbpXswdYBG0XHlYMStfvV2ilNJSQ7n90KzLg-sgq3bWNsT7Lr3kNgd6ADFJW"
          />
          <div className="absolute inset-0 bg-[#17120F]/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-[5%]">
          <p className="font-display font-medium italic text-[36px] md:text-[52px] leading-[1.1] text-white tracking-[-0.02em] mb-6 drop-shadow-lg">
            "The highest purpose of life<br/>is to know who you truly are."
          </p>
          <span className="text-[13px] uppercase tracking-[0.2em] text-[#FBF8F4] font-semibold drop-shadow-md">— Manish Nirgunam</span>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full h-auto min-h-[420px] bg-[#F7F2EB] flex flex-col md:flex-row items-center border-t border-[#E7D8C5]">
        
        {/* Left Content */}
        <div className="w-full md:w-[50%] lg:w-[45%] py-24 px-[5%] lg:pl-[10%] xl:pl-[15%] flex flex-col justify-center bg-[#F7F2EB] z-10">
          <h2 className="font-display font-medium text-[42px] md:text-[52px] leading-[1.05] text-[#2C2119] tracking-[-0.03em] mb-6">
            Walk the Path with Nirgunam
          </h2>
          <p className="font-body text-[#776D64] text-[18px] leading-[1.8] font-light mb-10 max-w-[480px]">
            Attend a gathering, join a yatra, or simply come and sit in silence. Nirgunam is open to every sincere seeker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-white bg-[#5D6845] hover:bg-[#4a5337] transition-colors flex items-center justify-center">
              Join a Gathering
            </button>
            <button className="h-[56px] px-8 rounded-[12px] text-[13px] uppercase font-bold tracking-widest text-[#7A5736] border border-[#7A5736]/30 hover:bg-[#7A5736]/5 transition-colors flex items-center justify-center">
              Explore Bhairavam
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[50%] lg:w-[55%] h-[400px] md:h-[100%] absolute right-0 bottom-0 md:top-0 z-0">
          <img 
            alt="Golden Horizon" 
            className="w-full h-full object-cover object-left-top md:object-center" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaCjknXk14Ygy0xGzWaAzm3-oxAIQAW7Jw9t6SCx8gBrXPV4WJDABc2dBfKKHS6FK8JaPVDyY5JBtEC7Lk7U-NUM-jPBgl5zoFK1vHhUHZtHC3oJR7Za_SrGx_G4_2rM6t7qLmuAQpNh5s5Wt3szhUdy5OfUt6oaqyhOqI1z5IX1W3oGbz6-NyXcdd4l8gS9p-AYviTcrr9gdrjRfJBENFkgWyqqvx8Cm2QLswUCo-Cl_b9tv2nEesasG1HRHMBKhLtJ-vJQIS5z6o"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 20%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)' }}
          />
        </div>
      </section>

      <Footer />

    </div>
  );
}
