import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const observerRef = useRef(null);
  const scrollRef = useRef(null);

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

    // Testimonial auto-scroll
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' }); // Approximate card width
        }
      }
    }, 4000);

    return () => {
      clearInterval(scrollInterval);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed/50 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-screen w-full flex flex-col justify-center items-start px-[5%] pt-32 pb-32 overflow-hidden bg-[#e6dfd1]">
        {/* Background Image of meditating Manish */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/img2.webp" />
            <img alt="Manish Meditating" className="w-full h-full object-cover object-right lg:object-center mix-blend-multiply opacity-90" src="/heroimg.webp" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#e6dfd1] via-[#e6dfd1]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl scroll-reveal mt-16 md:mt-0">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-secondary font-bold mb-4 md:mb-6 block">About The Founder</span>
          <h1 className="font-display text-6xl md:text-7xl lg:text-[88px] leading-[0.95] text-primary-container mb-6">Meet<br/>Manish Nirgunam</h1>
          <h2 className="font-display text-2xl md:text-3xl font-light text-primary-container mb-6 leading-snug">
            A reflecting spiritual being connected to everything, completely free, deeply humble.
          </h2>
          <p className="font-body text-primary-container/80 max-w-lg text-base lg:text-lg font-light leading-relaxed mb-10">
            Manish Nirgunam is not a guru, teacher, or master. He sees himself simply as a reflecting spiritual being — connected to everything, completely free, and deeply humble.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-stretch sm:items-center">
            <button className="bg-secondary text-white px-10 py-4 lg:py-5 rounded-button text-[12px] uppercase font-bold tracking-widest flex items-center justify-center gap-3 hover:bg-primary transition-all group w-full sm:w-auto">
              Read The Journey
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="border border-secondary/40 text-secondary px-10 py-4 lg:py-5 rounded-button text-[12px] uppercase font-bold tracking-widest hover:bg-secondary/10 transition-all w-full sm:w-auto">
              Begin Your Path
            </button>
          </div>
        </div>
      </header>

      {/* The Essence */}
      <section className="py-24 lg:py-32 px-[5%] bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute -inset-10 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M54.627 0l.83.83-54.627 54.627-.83-.83z\\' fill=\\'%238e4e05\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }}></div>
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 scroll-reveal relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] museum-shadow border-8 border-white p-2">
              <img alt="Manish Essence" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASBQ-sQ6Qz4QE0qxEFLR_WRd7FsAC_zfeNKsB1Om-hSBQ11v2sJbs6sA7gpIxXzsaTREwYuWvSn353yudCXK7MEG6KLqlp0K4KS4gLlROv8vaaedNxfhn6OTxjxfG5VXAkT6Ztj6q2ggJ9ggltVEeFFa6TmjnG-0KulTs5zsRp0qCH_KSbyJXviruja9vBJbC3i1uk3M4P-EeR7aqxovjpvxWmaZmYwKi4_J0YZUyTK8-wSasLsGwuL_2YHX5FXQOnovSt_u9VqHPV"/>
            </div>
            {/* Minimal floral decorative element SVG placeholder */}
            <span className="material-symbols-outlined absolute -bottom-10 -left-10 text-[120px] text-secondary opacity-10 rotate-45">filter_vintage</span>
          </div>
          <div className="w-full lg:w-1/2 scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <span className="text-[12px] uppercase tracking-[0.3em] text-secondary font-bold mb-6 block">The Essence</span>
            <h2 className="font-display text-5xl lg:text-[56px] leading-[1.1] mb-8 text-primary-container">Rooted In Truth.<br/>Alive In Presence.</h2>
            <div className="space-y-6 text-primary-container/80 font-body text-lg leading-relaxed font-light mb-12">
              <p>From childhood, Manish was inwardly drawn to the silence within. Life led him through diverse experiences, sacred encounters, and profound inner awakenings.</p>
              <p>His only goal is to help true seekers experience the formless divine reality beyond names and shapes — to help them become their own light.</p>
            </div>
            
            <div className="pl-0 lg:pl-12 lg:border-l border-secondary/30 relative mt-12">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 inline-block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <p className="font-display text-3xl italic text-primary-container leading-snug mb-6">
                "I am here as a giver, openly welcoming anyone who seeks the ultimate truth."
              </p>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary">— Manish Nirgunam</span>
            </div>
          </div>
        </div>
      </section>

      {/* A Journey Beyond Labels */}
      <section className="py-24 lg:py-32 px-[5%] bg-surface border-y border-secondary/10 relative">
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <span className="text-[12px] uppercase tracking-[0.3em] text-secondary font-bold mb-16 block">A Journey Beyond Labels</span>
          
          <div className="relative scroll-reveal">
            {/* The horizontal connecting line */}
            <div className="hidden lg:block absolute top-[50px] left-10 right-10 h-px bg-secondary/30"></div>
            
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-12">
              {[
                { title: 'Awakening', desc: 'The inner calling arises — the search for truth began.', icon: 'wb_twilight' },
                { title: 'Sacred Encounters', desc: 'Meeting masters, sages and beings who awakened the path.', icon: 'temple_hindu' },
                { title: 'Deep Meditation', desc: 'Years of solitude, meditation and inner exploration.', icon: 'self_improvement' },
                { title: 'Bhairavam Realization', desc: 'The dissolution of self in the formless truth of Bhairavam.', icon: 'blur_on' },
                { title: 'Sharing Wisdom', desc: 'The movement to share what cannot be taught.', icon: 'forum' },
                { title: 'Guiding Seekers', desc: 'Walking together as fellow seekers on the path.', icon: 'diversity_1' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative z-10 group" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <div className="w-24 h-24 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-surface-container-high transition-colors minimal-shadow">
                    <span className="material-symbols-outlined text-4xl text-secondary">{step.icon}</span>
                  </div>
                  <h4 className="font-display text-xl text-primary-container mb-3">{step.title}</h4>
                  <p className="font-body text-xs text-primary-container/70 font-light leading-relaxed px-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Manish Shares (Dark Section) */}
      <section className="py-24 lg:py-32 px-[5%] bg-[#1a1411] text-surface relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-4/12 scroll-reveal">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d6b797] font-bold mb-6 block">The Essence Of Nirgunam</span>
            <h2 className="font-display text-4xl lg:text-[48px] leading-[1.1] mb-8 text-[#e6dfd1]">What Manish Shares</h2>
            <div className="font-display text-3xl lg:text-4xl font-light text-[#e6dfd1]/80 mb-8 leading-snug">
              <p className="mb-2">Not a belief.</p>
              <p className="mb-2">Not a philosophy.</p>
              <p>Not a system.</p>
            </div>
            <p className="font-display text-3xl italic text-[#d6b797] leading-snug">
              Simply the truth that remains when separation ends.
            </p>
          </div>
          
          <div className="w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-4 scroll-reveal" style={{ transitionDelay: '200ms' }}>
            {[
              { title: 'Seeing The Formless', desc: 'He sees everything and everyone as Nirguna Parabrahman — the ultimate formless reality beyond names and shapes.', icon: 'radio_button_unchecked' },
              { title: 'No Rules Or Dependency', desc: 'People can experience true peace and detachment without complicated rituals or relying blindly on a teacher.', icon: 'eco' },
              { title: 'Find Your Own Light', desc: 'His invitation to everyone is to become their own light — standing strong and unshaken on their own feet.', icon: 'tips_and_updates' },
              { title: 'Everyone is Equal', desc: 'He sees himself in everyone and everything. He does not place himself above anyone. He is limitless, yet content in being nothing.', icon: 'all_inclusive' }
            ].map((card, idx) => (
              <div key={idx} className="bg-[#241b16] p-10 rounded-2xl group hover:bg-[#2a201a] transition-all flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-[#d6b797] mb-6 text-4xl font-light">{card.icon}</span>
                <h4 className="font-display text-2xl mb-4 text-[#e6dfd1]">{card.title}</h4>
                <p className="font-body text-sm text-[#e6dfd1]/60 leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Wisdom */}
      <section className="py-24 lg:py-32 px-[5%] bg-surface-container-lowest">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-5/12 scroll-reveal">
            <span className="text-[12px] uppercase tracking-[0.3em] text-secondary font-bold mb-6 block">Living Wisdom</span>
            <h2 className="font-display text-5xl lg:text-[56px] leading-[1.1] mb-8 text-primary-container">Simple Words.<br/>Profound<br/>Transformation.</h2>
            <p className="font-body text-primary-container/80 text-lg font-light leading-relaxed mb-10">
              His teachings are not just spoken — they are lived. Through satsangs, retreats, and one-on-one guidance, he helps thousands awaken to clarity, compassion, and purpose.
            </p>
            <a className="inline-flex items-center gap-2 text-[12px] uppercase font-bold tracking-widest text-secondary group" href="#">
              Explore Teachings <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          <div className="w-full lg:w-7/12 flex gap-4 h-[500px] scroll-reveal" style={{ transitionDelay: '200ms' }}>
            {/* Left large image */}
            <div className="w-7/12 h-full rounded-2xl overflow-hidden museum-shadow">
              <img alt="Satsang Gathering" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9nMkGHy1eUFkJWPrvjBW6fH4yHw4IpClhTC8bKCtaNK8sTOJHanH_4l0A09y1ikBB4n2h6CpAhrqJTXGdCqid3TJlxRya5sEAzDID1C4CejMYP10JFPxUKLB_R5HK_BsHt-8duFYzXQcel0ZED1pp79w6y9e-8d_Fgua8lAZbjzEMMgHWc3jempCK2NbHjjlvUTv4J2Ks8Nhib5D-wz5nWuCkOHcvvJlFs_rObEGocbGv1pEi5MkHxVwVa1vXZdrL1yOiEU-VeYub" />
            </div>
            {/* Right stacked images */}
            <div className="w-5/12 flex flex-col gap-4 h-full">
              <div className="h-1/2 rounded-2xl overflow-hidden museum-shadow">
                <img alt="Meditation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNQUqFI2yDsRb9Kb3IVOoWBqwVbFSmbRU7VEPr7l9r9_rz_MIRG6r_I_oYOd8vY4QQnI38yG0jF9-03smXFuV92VIcapH603Dpb1c6r3mSZn_QOwTN1hHhTyWbbIgDts78LubtH7rFeCByGD5EJyQSxmHhX1pTkUEovlt9HjgfudhOfFHUDonS9WBnNtmJRujaHic2FrwLseO83bmIEYRxv1TYLOIC8yyMQoSzu2lQC9--Wf5_rlmt6nwk9IpysSlBEteyGV2QjRWp" />
              </div>
              <div className="h-1/2 rounded-2xl overflow-hidden museum-shadow">
                <img alt="Yatra Journey" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPzKiDM1tzqRxpc6DNRpfwRy9Eww3lhGNV6fG0n4nKQTDxZJvLxQkmrJT7M2TtywQ6xaYevj2DDgLW0KZuEoi4aInh9h3HWvn9owpVGl7CLoo73MOxY9VQPJ2IcxI0mpmBA21qHk-wq2CNjY2CiHMz8tfzTjMbSFR5ZvF1kNf8cTvp9ycK4C7pfYXSKQDiNCq56va78_fskup1sGWwXQD0OXe1i-pGtnxZjsx_31ikXwc3JiGsRQEecEDlPcrVJPzB_lR7BLVSSMHr" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wisdom In Practice */}
      <section className="py-24 px-[5%] bg-surface border-t border-secondary/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-12 scroll-reveal">
            <div className="h-px bg-secondary/30 w-16"></div>
            <span className="text-[12px] uppercase tracking-[0.3em] text-secondary font-bold">Wisdom In Practice</span>
            <div className="h-px bg-secondary/30 w-16"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 scroll-reveal" style={{ transitionDelay: '200ms' }}>
            {[
              { title: 'Bhairavam', desc: 'The path beyond description.', icon: 'self_improvement', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNQUqFI2yDsRb9Kb3IVOoWBqwVbFSmbRU7VEPr7l9r9_rz_MIRG6r_I_oYOd8vY4QQnI38yG0jF9-03smXFuV92VIcapH603Dpb1c6r3mSZn_QOwTN1hHhTyWbbIgDts78LubtH7rFeCByGD5EJyQSxmHhX1pTkUEovlt9HjgfudhOfFHUDonS9WBnNtmJRujaHic2FrwLseO83bmIEYRxv1TYLOIC8yyMQoSzu2lQC9--Wf5_rlmt6nwk9IpysSlBEteyGV2QjRWp' },
              { title: 'Yatra', desc: 'Sacred journeys that transform.', icon: 'temple_hindu', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPzKiDM1tzqRxpc6DNRpfwRy9Eww3lhGNV6fG0n4nKQTDxZJvLxQkmrJT7M2TtywQ6xaYevj2DDgLW0KZuEoi4aInh9h3HWvn9owpVGl7CLoo73MOxY9VQPJ2IcxI0mpmBA21qHk-wq2CNjY2CiHMz8tfzTjMbSFR5ZvF1kNf8cTvp9ycK4C7pfYXSKQDiNCq56va78_fskup1sGWwXQD0OXe1i-pGtnxZjsx_31ikXwc3JiGsRQEecEDlPcrVJPzB_lR7BLVSSMHr' },
              { title: 'Meditation', desc: 'The gateway to inner silence.', icon: 'spa', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw69PPqBOaZ03t2aB1fJNo-kCk06l1DMYsbwet1VWwPjEc9m2Vr08jB236_jAm4AOaV70WxfdmqVw7-07sNUGbOTsf3s30IpOZTxlEuF12_Aj3Z716kX6R366AiNzmxsdViGsXeE7rpuJgCShmO9JTlX4ddMEZJVAs7KNvRakYfRjmPhbiwfEeoOoQj7vHLLGF0x7KNk1X8K1-uFvhc2V9j-drecIvllgs533pkgCNVWWxv5G6g3WTnpJ9NhrgY98xD0IE5Sna5SLL' },
              { title: 'Sacred Gatherings', desc: 'Satsangs that awake the heart.', icon: 'diversity_3', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9nMkGHy1eUFkJWPrvjBW6fH4yHw4IpClhTC8bKCtaNK8sTOJHanH_4l0A09y1ikBB4n2h6CpAhrqJTXGdCqid3TJlxRya5sEAzDID1C4CejMYP10JFPxUKLB_R5HK_BsHt-8duFYzXQcel0ZED1pp79w6y9e-8d_Fgua8lAZbjzEMMgHWc3jempCK2NbHjjlvUTv4J2Ks8Nhib5D-wz5nWuCkOHcvvJlFs_rObEGocbGv1pEi5MkHxVwVa1vXZdrL1yOiEU-VeYub' },
              { title: 'Seva', desc: 'Serving life with love and devotion.', icon: 'volunteer_activism', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeYe2qJVkBNRTu32aojzlEVc7p5fx3nNgQDr_RAY0JRepGyeXTuViUvp3SC4VCJ27dpUvqhzVkOr10-xZi3fAJK-m45v9P789XqNlwZH5iIkhAQWJSUTuDm-8zDWc_Q3kiqWFnn3lxetiPVYh6WaN5yukQA2ZTdM2sRNA4KNzQhvto6nGwwdU5Eded21jdvzpi13bxJb166ycQQNkdrwR3oQfoh1XwSr4M_0a24IjNjVvf3AgBY4qf4wwoZCanPHt-fygj5capt7iK' },
              { title: 'Conscious Living', desc: 'Wisdom in everyday living.', icon: 'eco', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaPZwojtkfZWLWws9MAQT4P_a873e00LpdIGRMsxOJ8wflAjZQfhXspPIz26saSkAC8MOltQPElXX7WsZWrUa1Ptf-jBo18refmep2KOBwHxF1uqDiIjHN9ECo364vsmYYM-BetOfpQtPxkPZMkGYGZWKX6kBd7bN9mJyRQPMiTtEqc_P91cYkJxn_kvAF8HENIE8ZpRsigF4GJ50sriYUJBua-xczCvZi2GtKJjZPpkTA0wBfKQ9SWB2cJJNNNblafroLRu336kdU' }
            ].map((card, idx) => (
              <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1411]/90 via-[#1a1411]/40 to-transparent"></div>
                <div className="absolute inset-0 p-5 flex flex-col justify-between items-start text-left">
                  <span className="material-symbols-outlined text-white text-2xl">{card.icon}</span>
                  <div>
                    <h4 className="font-display text-white text-xl mb-1">{card.title}</h4>
                    <p className="font-body text-white/70 text-[10px] leading-tight">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Words From Seekers (Testimonials) */}
      <section className="py-24 px-[5%] bg-surface-container-lowest border-t border-secondary/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-16 scroll-reveal">
            <div className="h-px bg-secondary/30 w-16"></div>
            <span className="text-[12px] uppercase tracking-[0.3em] text-secondary font-bold">Words From Seekers</span>
            <div className="h-px bg-secondary/30 w-16"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal" style={{ transitionDelay: '200ms' }}>
            {[
              { quote: "Sitting in his presence changed my life. I found a peace I didn't know was possible.", name: "Nithya", loc: "Rishikesh", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJca9I5iJmYt3TxuoNlo6KFcEdM6DFP3vgNTVpy6S4i3LMbGx-gBr1noPxmwf07cP6NUe4StZYDQbi0kTzTsfL6kQhCbikDlvxbJyWZAdXSxe4svu3ovgWmpHLMw4vqgFU0irkv17Bl0wX5RwdjjcLyGZNKNSmB3HUthu-zj9hGgNWJ1TJF3wzPwVj7bMNvoeJN6k183Oy3hgaz0gC2uTOmoDcq9rOJnvJ42RIa0yi3NnYL4XKmjeU6_JL58pzwMCi5ZLzEo6EjI4h" },
              { quote: "His words are simple, but they go deep. He doesn't teach — he awakens.", name: "Arjun", loc: "Bengaluru", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhgsXXTN42OR1qh8C5V3YlbPbTkelPj5hzG-65Yw0tgmzpyItBQOU5c5dIRzlXP9mJjn9bIBZ7UiEe1kyHTfMDcpT4LNtOGXvDCNOf_KTRVXcvlCYQ6kffQhLasz43UiCTRnXRMKzh5YhICobeQ_fvMvK8MQteZoPttlBs2DXigjnKiKyK0X4a_ZrWQi00P_nK8AgFJpaEus2o9FgM2jiwDIupV4mX1uHPFjfN9JGwy-0BR-Vi8asPtWadx07CzTicSr_lnAmGX8Fi" },
              { quote: "I came with questions, and left with clarity and a heart full of gratitude.", name: "Meera", loc: "Mumbai", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFOVG69z_3LM2ZCWTThhbzFGdqPZQKqjE1LjJuHptKUkQkxOSdv50p1P5LC5nvGAsukhxEC1cZ2L0gSGthL9wfdbCEqXoXPJVfNKX1msjX4lCpQlrtUdMYXMBlWzx8oBOZ5uqxaFPPg_BeE7zcDKTDcBqNIMns3WzvDJl_810vzOMmYfMYDE8b2Dg605c1j7me7-h2bE5CiuJFjVLZm5BIkNhzzC6NpMdZiEnutbIeIjhqC_h7AiY5eeTlhGPABm66FB76pV-KV51i" },
              { quote: "He sees you. Completely. And in that seeing, something beautiful begins to transform.", name: "Kabir", loc: "Delhi", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPYm821j_FvYh3M1y3H6XyM4M1M1yM1yM1M1yM1yM1M1yM1yM1M1yM1yM1M1yM1yM1M1yM1yM1M1yM1yM1" }
            ].map((t, idx) => (
              <div key={idx} className="bg-surface p-8 rounded-2xl minimal-shadow border border-secondary/10 flex flex-col justify-between text-left relative">
                <span className="material-symbols-outlined text-secondary/30 text-3xl absolute top-6 left-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="font-body text-primary-container/80 text-sm font-light leading-relaxed mt-8 mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" onError={(e)=>{e.target.src="https://ui-avatars.com/api/?name="+t.name+"&background=random"}}/>
                  <div>
                    <h5 className="font-display text-sm text-primary-container">{t.name}</h5>
                    <span className="text-[9px] uppercase tracking-widest text-secondary">— {t.loc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-secondary/20"></div>
            <div className="w-2 h-2 rounded-full bg-secondary/20"></div>
            <div className="w-2 h-2 rounded-full bg-secondary/20"></div>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-12 px-[5%] bg-surface-container-lowest">
        <div className="max-w-[1400px] mx-auto text-center border-y border-secondary/20 py-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold mb-10 block">The Impact</span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-32">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 font-light">temple_hindu</span>
              <h3 className="font-display text-4xl text-primary-container mb-2">40+</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary-container/70">Sacred Gatherings</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 font-light">self_improvement</span>
              <h3 className="font-display text-4xl text-primary-container mb-2">1000+</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary-container/70">Seekers Touched</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 font-light">spa</span>
              <h3 className="font-display text-4xl text-primary-container mb-2">3</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary-container/70">Wings Of Service</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 font-light">all_inclusive</span>
              <h3 className="font-display text-4xl text-primary-container mb-2">∞</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary-container/70">Open To All Seekers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Banner */}
      <section className="relative py-32 lg:py-48 px-[5%] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Temples at sunrise" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH_5TIzLqfE67589gMkw7iBW7iurg_8Z9zW4dNofmATXR4G2FIUBKjs617lxlbFcArUk6ITEmjmCeS0K718dM2dB6t7E2gL9PbdJ4P80HeZ-t9ea0Cj3ZRsF81UAFoha5GvXE5rkJvUlMF4bAIqwUCYR2v_jE_g3esh2df5dufRf-pLn_T3hJDqQ4nszis18gajBN1XwfwZPQDOse3lbpXswdYBG0XHlYMStfvV2ilNJSQ7n90KzLg-sgq3bWNsT7Lr3kNgd6ADFJW" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#e6dfd1]/90 via-[#e6dfd1]/60 to-[#e6dfd1]/90"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl scroll-reveal">
          <p className="font-display text-4xl lg:text-5xl italic text-primary-container leading-snug mb-6">
            "The highest purpose of life<br/>is to know who you truly are."
          </p>
          <span className="text-[12px] uppercase font-bold tracking-[0.2em] text-primary-container">— Manish Nirgunam</span>
        </div>

        <div className="relative z-10 mt-20 max-w-2xl bg-surface/80 backdrop-blur-md p-10 lg:p-14 rounded-3xl minimal-shadow scroll-reveal border border-white/40">
          <h3 className="font-display text-3xl lg:text-4xl text-primary-container mb-4">Every Journey<br/>Begins With A Single Step</h3>
          <p className="font-body text-primary-container/80 text-sm font-light mb-8 max-w-md mx-auto">
            Whether you seek clarity, inner freedom, peace, or deeper understanding, the path begins here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-secondary text-white px-8 py-4 rounded-button text-[11px] uppercase font-bold tracking-widest hover:bg-primary transition-all">
              Begin Your Journey <span className="material-symbols-outlined text-[10px] ml-2 align-middle">arrow_forward</span>
            </button>
            <button className="border border-secondary/30 text-secondary bg-white/50 px-8 py-4 rounded-button text-[11px] uppercase font-bold tracking-widest hover:bg-white transition-all">
              Explore Bhairavam
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
