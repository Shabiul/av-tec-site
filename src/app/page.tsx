'use client';

import { useEffect, useRef, useState } from 'react';

const SOCIAL_PATHS = {
  linkedin: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM20 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0014 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z',
  facebook: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  instagram: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z',
  youtube: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27z',
};
const SocialIcon = ({ n }: { n: keyof typeof SOCIAL_PATHS }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={SOCIAL_PATHS[n]} /></svg>
);

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const METRICS = [
  { target: 30, suffix: '+', label: 'Years Experience' },
  { target: 4000, suffix: '+', label: 'Events Delivered' },
  { target: 24, suffix: '/7', label: 'Support Available' },
  { target: 100, suffix: '%', label: 'Client Satisfaction' },
  { target: 50, suffix: '+', label: 'Expert Crew' },
  { target: 12, suffix: '+', label: 'Cities Served' },
];

const SERVICES = [
  { num: '01', href: '/services/audio', img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80', title: 'Sound Systems', desc: 'PA, monitors, wireless microphones, mixers, and tuning for speech, music, and hybrid rooms.' },
  { num: '02', href: '/services/lighting', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80', title: 'Stage Lighting', desc: 'Wash lights, moving heads, profiles, ambience, and looks matched to the room and program flow.' },
  { num: '03', href: '/services/video', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80', title: 'LED Video Walls', desc: 'Panels, processors, playback, switching, rigging, and operators for clean on-screen delivery.' },
  { num: '04', href: '/services/consultancy', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80', title: 'Conference AV', desc: 'Projectors, displays, stage management, livestreaming, laptop switching, and speaker support.' },
  { num: '05', href: '#contact', img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80', title: 'DJ Booths & Clubs', desc: 'Sound design, DJ booth installations, and technical support for pubs, clubs, and nightlife venues.' },
  { num: '06', href: '/services/installations', img: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?auto=format&fit=crop&w=900&q=80', title: 'Rental & Installation', desc: 'Short-term rentals, fixed installs, setup, testing, handover, and support when plans change.' },
];

const VERTICALS = [
  { label: 'Concerts & Festivals', img: '/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg' },
  { label: 'Corporate Events', img: '/gallery/19b57f7c-e740-4d10-80f1-7e226abafcfd.jpg' },
  { label: 'Weddings & Social', img: '/gallery/432d250b-2aca-433c-8a97-2261da7f376a.jpg' },
  { label: 'DJ Booths & Clubs', img: '/gallery/0fffa344-8289-404e-bec4-1fb754115443.jpg' },
  { label: 'Pubs & Nightlife', img: '/gallery/30bdfd59-7b60-4b0c-b87d-20193dedff55.jpg' },
  { label: 'Government Events', img: '/gallery/7900fd62-19bf-4ca3-aa5c-5a20b7b7b2b5.jpg' },
];

const PROJECTS = [
  { img: '/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg', tag: 'Corporate Conference', title: 'Global Leadership Summit', desc: 'Multi-screen projection, keynote audio, live camera relay, and full show calling.' },
  { img: '/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg', tag: 'Exhibition', title: 'Tech Expo Bengaluru', desc: '' },
  { img: '/gallery/19b57f7c-e740-4d10-80f1-7e226abafcfd.jpg', tag: 'Conference', title: 'Executive AV Setup', desc: '' },
];

const GALLERY = [
  { img: '/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg', num: '01', caption: 'Corporate LED Wall & Stage' },
  { img: '/gallery/19b57f7c-e740-4d10-80f1-7e226abafcfd.jpg', num: '02', caption: 'Conference Audio Systems' },
  { img: '/gallery/7900fd62-19bf-4ca3-aa5c-5a20b7b7b2b5.jpg', num: '03', caption: 'Boardroom AV' },
  { img: '/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg', num: '04', caption: 'Exhibition Displays' },
  { img: '/gallery/0fffa344-8289-404e-bec4-1fb754115443.jpg', num: '05', caption: 'Event Production' },
  { img: '/gallery/30bdfd59-7b60-4b0c-b87d-20193dedff55.jpg', num: '06', caption: 'Lighting & Rigging' },
  { img: '/gallery/432d250b-2aca-433c-8a97-2261da7f376a.jpg', num: '07', caption: 'Display Systems' },
  { img: '/gallery/8f52f091-e10a-4dd9-b06c-be58925150b4.jpg', num: '08', caption: 'Corporate Setup' },
  { img: '/gallery/11f99473-86af-4540-a76f-ecb6983817c9.jpg', num: '09', caption: 'Technical Support' },
  { img: '/gallery/e88e9f35-4aa0-46fc-87e6-9698d8297471.jpg', num: '10', caption: 'On-Site Execution' },
  { img: '/gallery/c4b439fe-114e-4322-a8b4-c694e440fe49.jpg', num: '11', caption: 'Premium Lighting' },
  { img: '/gallery/d02eea4a-448b-41ef-b4d2-ab51063d38e9.jpg', num: '12', caption: 'Venue Preparation' },
  { img: '/gallery/3e7f749e-e078-4ec2-b892-2b2981e9084f.jpg', num: '13', caption: 'Live Sound Production' },
  { img: '/gallery/1d40fc12-8399-4681-a4c7-eec07cfeff98.jpg', num: '14', caption: 'Stage Production' },
];

const EQUIPMENT = [
  { title: 'Speakers', desc: 'Line arrays, point-source systems, wedges, subs' },
  { title: 'Mixers', desc: 'Digital consoles, stage boxes, recording interfaces' },
  { title: 'Microphones', desc: 'Wireless handhelds, lavaliers, headsets, podium mics' },
  { title: 'Lighting', desc: 'Moving heads, pars, profiles, blinders, controllers' },
  { title: 'LED Walls', desc: 'High-resolution panels, processors, playback systems' },
  { title: 'Projectors', desc: 'Laser projection, screens, switchers, scalers' },
  { title: 'Trussing', desc: 'Rigging, structures, hoists, stage safety hardware' },
  { title: 'Stage Gear', desc: 'Decks, risers, barricades, control platforms' },
];

const PROCESS = [
  { title: 'Brief', desc: 'Event details, venue, audience, schedule, requirements' },
  { title: 'Site Check', desc: 'Power, access, rigging, control position, sightlines' },
  { title: 'Plan', desc: 'Equipment list, crew, timing, backups' },
  { title: 'Setup', desc: 'Load-in, rig, cable, tune, test' },
  { title: 'Show', desc: 'Operate, cue, solve, communicate' },
  { title: 'Wrap', desc: 'Pack-down, clear, follow-up' },
];

const TC1 = [
  { i: 'PM', name: 'Priya Menon', role: 'Event Director', q: 'Sound was clean, the LED wall looked exceptional, and the team solved every detail before we had to ask.' },
  { i: 'RK', name: 'Rahul Kapoor', role: 'Conference Lead', q: 'Setup was on time, microphones were flawless, and the show calling felt calm and professional.' },
  { i: 'SM', name: 'Sana Mehta', role: 'Brand Manager', q: 'The lighting and video wall made our product launch feel premium from the first guest arrival.' },
  { i: 'AT', name: 'Arjun Thomas', role: 'Hotel Events', q: 'Fast response, clean installation, and technical support throughout the entire event.' },
];
const TC2 = [
  { i: 'NK', name: 'Nisha Kumar', role: 'Wedding Planner', q: 'The ambience, audio, and stage lights were elegant without ever feeling overdone.' },
  { i: 'DV', name: 'Dev Varma', role: 'Expo Organizer', q: 'Displays, cabling, and support crew were exactly where they needed to be.' },
  { i: 'IA', name: 'Irfan Ali', role: 'Production Head', q: 'AV-TEC understood the brief quickly and delivered a stable, polished technical setup.' },
  { i: 'LT', name: 'Leela Thomas', role: 'Institution Events', q: 'Professional team, clear communication, and excellent backup planning throughout.' },
];
const TC3 = [
  { i: 'GC', name: 'Govt. Coordinator', role: 'Public Event', q: 'Clear audio coverage and disciplined execution for a high-pressure program.' },
  { i: 'RS', name: 'Rohan Shah', role: 'Corporate Admin', q: 'The crew was sharp, respectful of the venue, and prepared for every change.' },
  { i: 'EP', name: 'Event Partner', role: 'Agency Team', q: 'Reliable equipment and excellent coordination with stage, decor, and venue teams.' },
  { i: 'VM', name: 'Venue Manager', role: 'Convention Center', q: 'They left the room clean, tested, and ready well before rehearsal time.' },
];

function MetricCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true;
        const start = Date.now();
        const dur = 1400;
        const tick = () => {
          const p = Math.min((Date.now() - start) / dur, 1);
          setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <strong ref={ref}>{count}{suffix}</strong>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsgs, setChatMsgs] = useState<{ from: 'bot' | 'user'; text: string }[]>([{ from: 'bot', text: 'Share your event date, city, audience size, and what you need. Our team will help shape the setup.' }]);
  const [chatInput, setChatInput] = useState('');
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => headerRef.current?.classList.toggle('is-scrolled', window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const prevGallery = () => setGalleryIdx(i => (i - 1 + GALLERY.length) % GALLERY.length);
  const nextGallery = () => setGalleryIdx(i => (i + 1) % GALLERY.length);
  const goLb = (dir: number) => setLightbox(i => i !== null ? (i + dir + GALLERY.length) % GALLERY.length : null);

  const sendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMsgs(m => [...m, { from: 'user', text: chatInput }]);
    setChatInput('');
    setTimeout(() => setChatMsgs(m => [...m, { from: 'bot', text: 'Thanks! Our team will reach out shortly. You can also call us at +91 79 7578 4962.' }]), 750);
  };

  const trackOffset = `calc(-${galleryIdx} * (min(78vw, 850px) + 18px))`;

  return (
    <div>
      <a className="skip-link" href="#main">Skip to content</a>

      {/* ═══ HEADER ═══ */}
      <header className="site-header" ref={headerRef} id="home">
        <a href="#home" aria-label="AV-TEC home">
          <img className="brand-logo" src="/logo/av-tec-logo-web.png" alt="AV-TEC Audio Visual Technology" width="130" height="68" />
        </a>
        <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {NAV.map(l => <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="icon-link" href="tel:+917975784962" aria-label="Call AV-TEC">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
            </svg>
          </a>
          <a className="btn btn-primary" href="#contact">Get a Quote</a>
          <button className="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main id="main">
        {/* ═══ HERO ═══ */}
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata" poster="/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg">
              <source src="/video/hero-new-video.mp4" type="video/mp4" />
            </video>
            <div className="scanline" />
            <div className="beam beam-1" />
            <div className="beam beam-2" />
          </div>
          <div className="hero-content reveal">
            <p className="eyebrow">Sound / Lighting / LED / Event Rentals</p>
            <h1>AV support that stays calm when the room is full.</h1>
            <p className="hero-copy">Since 1992, AV-TEC has powered conferences, weddings, concerts, DJ nights, pub installations, and government events with clear sound, clean lighting, and crew who stay until the last cue.</p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href="#contact">Get a Quote</a>
              <a className="btn btn-ghost btn-lg" href="tel:+917975784962">Call Now</a>
            </div>
            <div className="hero-proof">
              <span><strong>30+</strong> Years</span>
              <span><strong>4000+</strong> Events</span>
              <span><strong>24/7</strong> Support</span>
            </div>
          </div>
        </section>

        {/* ═══ TRUST STRIP ═══ */}
        <div className="trust-strip" aria-label="Event types">
          {['Corporate Events','Concerts','Weddings','DJ Booths','Pubs & Clubs','Government Events','Conferences','Exhibitions','Festivals','Institutions'].map(s => (
            <span key={s}>{s}</span>
          ))}
        </div>

        {/* ═══ WHY AV-TEC ═══ */}
        <section className="section why-section" id="why">
          <div className="vid-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/video/why-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-heading reveal">
            <p className="eyebrow">Why AV-TEC</p>
            <h2>We plan the technical side before it becomes urgent.</h2>
            <p>Site checks, cable routes, power needs, rehearsal timing, backup equipment, and crew calls are handled early — so show day feels controlled.</p>
          </div>
          <div className="metrics-grid">
            {METRICS.map(m => (
              <article className="metric reveal" key={m.label}>
                <MetricCounter target={m.target} suffix={m.suffix} />
                <span>{m.label}</span>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section className="section services-section" id="services">
          <div className="section-heading reveal">
            <p className="eyebrow">Services</p>
            <h2>Practical AV support for real venues, real timelines, and real guests.</h2>
          </div>
          <div className="services-grid">
            {SERVICES.map(s => (
              <article className="service-card reveal" key={s.num}>
                <img src={s.img} alt={s.title} loading="lazy" />
                <div>
                  <span className="svc-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href={s.href}>Learn More</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ EVENT VERTICALS ═══ */}
        <section className="section verticals-section" id="events">
          <div className="section-heading reveal">
            <p className="eyebrow">Events We Power</p>
            <h2>Every format, every scale, every time.</h2>
          </div>
          <div className="verticals-grid">
            {VERTICALS.map(v => (
              <a className="vertical-card reveal" href="#contact" key={v.label}>
                <img src={v.img} alt={v.label} loading="lazy" />
                <div className="vertical-label">{v.label}</div>
              </a>
            ))}
          </div>
        </section>

        {/* ═══ FEATURED PROJECTS ═══ */}
        <section className="section projects-section" id="projects">
          <div className="section-heading reveal">
            <p className="eyebrow">Featured Projects</p>
            <h2>Different events, same discipline: arrive early, test properly, stay ready.</h2>
          </div>
          <div className="project-grid">
            {PROJECTS.map((p, i) => (
              <article className={`project-card reveal${i === 0 ? ' large' : ''}`} key={p.title}>
                <img src={p.img} alt={p.title} loading="lazy" />
                <div>
                  <span>{p.tag}</span>
                  <h3>{p.title}</h3>
                  {p.desc && <p>{p.desc}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ GALLERY ═══ */}
        <section className="section gallery-section" id="gallery">
          <div className="section-heading reveal">
            <p className="eyebrow">Event Gallery</p>
            <h2>Real AV-TEC setups from conferences, exhibitions, concerts, and productions.</h2>
          </div>
          <div className="gallery-slider reveal">
            <div className="gallery-viewport">
              <div className="gallery-track" style={{ transform: `translateX(${trackOffset})` }}>
                {GALLERY.map((g, i) => (
                  <figure
                    key={g.num}
                    className={`gallery-item${i === galleryIdx ? ' is-active' : ''}`}
                    onClick={() => setLightbox(i)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${g.caption}`}
                    onKeyDown={e => e.key === 'Enter' && setLightbox(i)}
                  >
                    <img src={g.img} alt={g.caption} loading="lazy" />
                    <figcaption><span>{g.num}</span>{g.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="gallery-controls">
              <button className="gal-btn" type="button" onClick={prevGallery} aria-label="Previous image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
              </button>
              <button className="gal-btn" type="button" onClick={nextGallery} aria-label="Next image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </section>

        {/* ═══ EQUIPMENT ═══ */}
        <section className="section equipment-section" id="equipment">
          <div className="vid-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/video/equipment-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-heading reveal" style={{ position: 'relative', zIndex: 1 }}>
            <p className="eyebrow">Equipment Inventory</p>
            <h2>Professional-grade technology, maintained for show-day confidence.</h2>
          </div>
          <div className="equip-grid" style={{ position: 'relative', zIndex: 1 }}>
            {EQUIPMENT.map(e => (
              <article className="equip-card reveal" key={e.title}>
                <span>{e.title}</span>
                <p>{e.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ PROCESS ═══ */}
        <section className="section process-section" id="process">
          <div className="vid-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/video/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-heading reveal" style={{ position: 'relative', zIndex: 1 }}>
            <p className="eyebrow">Process</p>
            <h2>A simple workflow that keeps everyone aligned.</h2>
          </div>
          <div className="process-track" style={{ position: 'relative', zIndex: 1 }}>
            {PROCESS.map((s, i) => (
              <article className="process-step reveal" key={s.title}>
                <span className="step-num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ ABOUT ═══ */}
        <section className="section about-section" id="about">
          <div className="about-image reveal">
            <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80" alt="Event production" loading="lazy" />
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">About AV-TEC</p>
            <h2>Three decades of event technology experience, built on trust.</h2>
            <p>AV-TEC has been delivering professional audio visual and event technology solutions since 1992. With over three decades of industry experience, the team has supported corporate events, conferences, concerts, DJ nights, pubs, clubs, exhibitions, weddings, and government productions with dependable equipment and steady technical support.</p>
            <p>Backed by seasoned specialists and a cutting-edge inventory, AV-TEC is Bengaluru&apos;s premier provider of technical event solutions, operating pan-India.</p>
            <a className="btn btn-outline" href="#contact">Schedule a Consultation</a>
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="section testimonials-section">
          <div className="testimonial-wrap reveal">
            <div className="testimonial-copy">
              <p className="eyebrow">Testimonials</p>
              <h2>What clients usually notice: fewer surprises.</h2>
              <p>Clear communication, tested equipment, tidy cabling, backup planning, and crew who understand that timing matters.</p>
              <div className="testimonial-score">
                <strong>4.9</strong>
                <span>Average event support rating</span>
              </div>
            </div>
            <div className="testimonial-stage" aria-label="Client testimonials">
              <div className="testimonial-tilt">
                {[TC1, TC2, TC3].map((col, ci) => (
                  <div className={`marquee-col${ci === 1 ? ' reverse' : ''}`} key={ci}>
                    {[0, 1].map(di => (
                      <div className="marquee-stack" key={di} aria-hidden={di > 0}>
                        {col.map(t => (
                          <article className="review-card" key={t.name + di}>
                            <div className="review-head">
                              <span>{t.i}</span>
                              <div><strong>{t.name}</strong><small>{t.role}</small></div>
                            </div>
                            <p>{t.q}</p>
                          </article>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CLIENTS ═══ */}
        <section className="section clients-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Trusted By</p>
            <h2>Called in by planners, venues, institutions, and corporate teams.</h2>
          </div>
          <div className="logo-cloud reveal">
            {['Aurora Hotels', 'Nexus Events', 'Summit Corp', 'Metro Convention', 'EduSphere', 'Govt. Programs'].map(c => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </section>

        {/* ═══ CONTACT ═══ */}
        <span id="contact" className="anchor-target" />
        <section className="contact-section" id="quote">
          <div className="contact-info reveal">
            <p className="eyebrow">Contact</p>
            <h2>Tell us what you are planning. We will shape the technical solution.</h2>
            <div className="contact-cards">
              <a href="tel:+917975784962">+91 79 7578 4962</a>
              <a href="mailto:hello@av-tec.in">hello@av-tec.in</a>
              <span>Bengaluru / Available across India</span>
              <span>Mon–Sat, 9:00 AM–8:00 PM</span>
            </div>
            <iframe
              title="AV-TEC location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Bengaluru+Karnataka&output=embed"
            />
          </div>
          <form className="quote-form reveal" action="https://formspree.io/f/your-form-id-here" method="POST">
            <p className="form-title">Tell us about the event</p>
            <input type="hidden" name="_subject" value="New AV-TEC Quote Inquiry" />
            <div className="form-grid">
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Company<input name="company" placeholder="Company or organization" /></label>
              <label>Phone<input name="phone" required placeholder="+91" /></label>
              <label>Email<input name="email" type="email" placeholder="you@example.com" /></label>
              <label>Event Date<input name="date" type="date" /></label>
              <label>Location<input name="location" placeholder="City / venue" /></label>
            </div>
            <label>
              Requirements
              <textarea name="requirements" rows={5} placeholder="Tell us about your event, audience size, equipment needs, and schedule." />
            </label>
            <button className="btn btn-primary btn-lg" type="submit" style={{ width: '100%', marginTop: 4 }}>Submit Inquiry</button>
          </form>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="site-footer">
        <div className="footer-panel">
          <div className="footer-cta">
            <p className="eyebrow">Ready For Show Day?</p>
            <h2>Send the basics. We will help you shape the setup.</h2>
            <p>Venue, date, audience size, program type, and any must-have equipment are enough to begin.</p>
            <div className="footer-action-row">
              <a className="footer-pill footer-pill-primary" href="#contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18"><path d="M4 4h16v12H7.7L4 19.7V4Zm4 5h8M8 12h5" /></svg>
                Request a Quote
              </a>
              <a className="footer-pill" href="tel:+917975784962">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
                Call Now
              </a>
              <a className="footer-pill" href="https://wa.me/917975784962?text=Hi%20AV-TEC%2C%20I%20would%20like%20a%20quote">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.6L1 23l5.5-1.4A11.8 11.8 0 0 0 20.5 3.5Zm-8.7 16.2a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-3.2.8.9-3.1-.2-.4a9.7 9.7 0 1 1 7.8 4.2Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.4.2-.7.1a7.9 7.9 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9 4.9c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.1-.2-.2-.5-.3Z" /></svg>
                WhatsApp
              </a>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home" aria-label="AV-TEC home">
                <img src="/logo/av-tec-logo-web.png" alt="AV-TEC" width="150" height="79" />
              </a>
              <p>Audio, lighting, LED, rental, installation, and on-site technical support for events across India.</p>
              <div className="footer-badges">
                <span>30+ Years</span>
                <span>24/7 Support</span>
                <span>Pan-India Events</span>
              </div>
            </div>
            <div className="footer-col">
              <h3>Explore</h3>
              <a href="#services">Services</a>
              <a href="#events">Events</a>
              <a href="#gallery">Gallery</a>
              <a href="#equipment">Equipment</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h3>Services</h3>
              <a href="/services/audio">Sound Systems</a>
              <a href="/services/lighting">Stage Lighting</a>
              <a href="/services/video">LED Video Walls</a>
              <a href="/services/installations">Installations</a>
              <a href="#contact">DJ &amp; Club Setup</a>
            </div>
            <div className="footer-col footer-contact-col">
              <h3>Contact</h3>
              <a href="tel:+917975784962">+91 79 7578 4962</a>
              <a href="mailto:hello@av-tec.in">hello@av-tec.in</a>
              <span>Bengaluru / Pan-India</span>
              <span>Mon–Sat, 9 AM–8 PM</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 AV-TEC. All rights reserved.</p>
          <div className="footer-social">
            {(['linkedin', 'facebook', 'instagram', 'youtube'] as const).map(s => (
              <a key={s} href="#" aria-label={s}><SocialIcon n={s} /></a>
            ))}
          </div>
          <button className="back-to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 15 6-6 6 6" /></svg>
          </button>
        </div>
      </footer>

      {/* ═══ LIGHTBOX ═══ */}
      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <button className="lb-close" onClick={() => setLightbox(null)} aria-label="Close">&#x2715;</button>
          <button className="lb-arrow lb-prev" onClick={e => { e.stopPropagation(); goLb(-1); }} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <img src={GALLERY[lightbox].img} alt={GALLERY[lightbox].caption} onClick={e => e.stopPropagation()} />
          <button className="lb-arrow lb-next" onClick={e => { e.stopPropagation(); goLb(1); }} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
          </button>
          <span className="lb-counter">{lightbox + 1} / {GALLERY.length}</span>
        </div>
      )}

      {/* ═══ WHATSAPP ═══ */}
      <a className="wa-float" href="https://wa.me/917975784962?text=Hi%20AV-TEC%2C%20I%20would%20like%20a%20quote" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.6L1 23l5.5-1.4A11.8 11.8 0 0 0 20.5 3.5Zm-8.7 16.2a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-3.2.8.9-3.1-.2-.4a9.7 9.7 0 1 1 7.8 4.2Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.4.2-.7.1a7.9 7.9 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9 4.9c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.1-.2-.2-.5-.3Z" /></svg>
      </a>

      {/* ═══ CHAT WIDGET ═══ */}
      <div className={`chatbot${chatOpen ? ' is-open' : ''}`}>
        <button className="chat-toggle" type="button" aria-label="Open quick enquiry" onClick={() => setChatOpen(o => !o)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" /></svg>
        </button>
        <section className="chat-window" aria-label="AV-TEC quick enquiry">
          <header>
            <strong>AV-TEC Quick Enquiry</strong>
            <button type="button" aria-label="Close" onClick={() => setChatOpen(false)}>&times;</button>
          </header>
          <div className="chat-body">
            {chatMsgs.map((m, i) => <p key={i} className={m.from}>{m.text}</p>)}
          </div>
          <form className="chat-form" onSubmit={sendChat}>
            <input
              aria-label="Message"
              placeholder="Ask about equipment or bookings..."
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </div>
  );
}
