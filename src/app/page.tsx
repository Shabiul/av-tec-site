'use client';

import { useEffect, useRef, useState } from 'react';

/* ── Social icon SVG paths ── */
const SOCIAL = {
  linkedin: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM20 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0014 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z',
  facebook: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  instagram: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z',
  youtube: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27z',
};

const SocialIcon = ({ name }: { name: keyof typeof SOCIAL }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={SOCIAL[name]} /></svg>
);

/* ── Data ── */
const HERO_SLIDES = [
  { type: 'video' as const, src: '/video/hero-video.mp4', poster: '/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg', heading: 'Experience Sound Like Never Before', sub: 'Bringing exceptional audio visual experiences since 1992' },
  { type: 'video' as const, src: '/video/sequence-04-1.mp4', poster: '/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg', heading: 'Professional Event Production', sub: 'Corporate events, conferences, concerts, and exhibitions across India' },
  { type: 'video' as const, src: '/video/sequence-04-9.mp4', poster: '/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg', heading: 'Premium AV Technology', sub: 'LED walls, sound systems, stage lighting, and technical crew' },
  { type: 'video' as const, src: '/video/sequence-04-7.mp4', poster: '/gallery/19b57f7c-e740-4d10-80f1-7e226abafcfd.jpg', heading: 'Trusted Technical Partners', sub: 'Over 30 years of reliable event technology support' },
];

const TESTIMONIALS = [
  { quote: 'Sound was clean, the LED wall looked exceptional, and the team solved every detail before we had to ask.', name: 'Priya Menon', role: 'Event Director', initials: 'PM' },
  { quote: 'Setup was on time, microphones were flawless, and the show calling felt calm and professional.', name: 'Rahul Kapoor', role: 'Conference Lead', initials: 'RK' },
  { quote: 'The lighting and video wall made our product launch feel premium from the first guest arrival.', name: 'Sana Mehta', role: 'Brand Manager', initials: 'SM' },
  { quote: 'The ambience, audio, and stage lights were elegant without ever feeling overdone.', name: 'Nisha Kumar', role: 'Wedding Planner', initials: 'NK' },
];

const NEWS = [
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80', label: 'AV-TEC', title: "AV-TEC & New D&B GSL System Rock Major Festival", desc: 'We were proud to provide sound and lighting for one of India\'s largest music festivals, featuring the new D&B audiotechnik GSL system for exceptional clarity and coverage.' },
  { img: '/gallery/image.png', label: 'AV-TEC', title: "World's First: AV-TEC Gets New D&B SL Series", desc: "We're the first company in the world to receive the revolutionary SL Series from D&B audiotechnik, after 5 years of development." },
  { img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80', label: 'AV-TEC', title: "Our New 20' x 60' LED Wall Steals the Show", desc: 'Our brand new massive LED wall was the star of a recent high-profile product launch, delivering larger-than-life visuals.' },
];

const GALLERY_IMAGES = [
  '/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg',
  '/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg',
  '/gallery/19b57f7c-e740-4d10-80f1-7e226abafcfd.jpg',
  '/gallery/7900fd62-19bf-4ca3-aa5c-5a20b7b7b2b5.jpg',
  '/gallery/0fffa344-8289-404e-bec4-1fb754115443.jpg',
  '/gallery/30bdfd59-7b60-4b0c-b87d-20193dedff55.jpg',
  '/gallery/432d250b-2aca-433c-8a97-2261da7f376a.jpg',
  '/gallery/3e7f749e-e078-4ec2-b892-2b2981e9084f.jpg',
  '/gallery/8f52f091-e10a-4dd9-b06c-be58925150b4.jpg',
  '/gallery/c4b439fe-114e-4322-a8b4-c694e440fe49.jpg',
  '/gallery/d02eea4a-448b-41ef-b4d2-ab51063d38e9.jpg',
  '/gallery/e88e9f35-4aa0-46fc-87e6-9698d8297471.jpg',
  '/gallery/11f99473-86af-4540-a76f-ecb6983817c9.jpg',
  '/gallery/1d40fc12-8399-4681-a4c7-eec07cfeff98.jpg',
];

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Events', href: '#rental' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimIndex, setTestimIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const goLightbox = (dir: number) => setLightbox(i => i !== null ? (i + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null);

  /* ── Testimonial auto-rotate ── */
  useEffect(() => {
    const t = setInterval(() => setTestimIndex(i => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  /* ── Scroll effects ── */
  useEffect(() => {
    const onScroll = () => {
      headerRef.current?.classList.toggle('is-scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect(); };
  }, []);

  const t = TESTIMONIALS[testimIndex];

  return (
    <div>
      <a className="skip-link" href="#main">Skip to content</a>

      {/* ═══ HEADER ═══ */}
      <header className="site-header" ref={headerRef} id="home">
        <div className="header-top">
          <img className="header-logo" src="/logo/av-tec-logo-web.png" alt="AV-TEC Audio Visual Technology" width="180" height="60" />
        </div>
        <div className="header-social">
          {(['linkedin', 'facebook', 'instagram', 'youtube'] as const).map(s => (
            <a key={s} href="#" aria-label={s}><SocialIcon name={s} /></a>
          ))}
        </div>
        <nav className={`header-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className={l.label === 'Home' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <button className="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </header>

      <main id="main">
        {/* ═══ HERO SECTIONS (stacked vertically) ═══ */}
        {HERO_SLIDES.map((s, i) => (
          <section className="hero-block" key={i}>
            {s.type === 'video' ? (
              <video autoPlay muted loop playsInline preload="auto" poster={s.poster}><source src={s.src} type="video/mp4" /></video>
            ) : (
              <img src={s.src} alt={s.heading} loading={i === 0 ? 'eager' : 'lazy'} />
            )}
            <div className="hero-slide-content">
              <h2>{s.heading}</h2>
              <p>{s.sub}</p>
              <a className="hero-explore" href="#services">Explore More <span>›</span></a>
            </div>
          </section>
        ))}

        {/* ═══ ABOUT PANEL ═══ */}
        <section className="section about-panel" id="about">
          <div className="section-bg"><video autoPlay muted loop playsInline><source src="/video/why-video.mp4" type="video/mp4" /></video></div>
          <div className="about-card reveal">
            <span className="eyebrow">What we&apos;re all about</span>
            <h2 className="heading-crimson">Audio Visual &amp; Event Technology</h2>
            <p>AV-TEC has been delivering professional audio visual and event technology solutions since 1992. With over three decades of industry experience, our team has supported corporate events, conferences, concerts, exhibitions, weddings, and large-scale productions with dependable equipment and steady technical support.</p>
            <p>Backed by a team of seasoned specialists and a cutting-edge equipment inventory, AV-TEC holds the distinction of being a premier provider of technical event solutions and professional entertainment equipment, operating from Bengaluru and available across India.</p>
            <a className="btn-pill" href="#services">Read More</a>
          </div>
        </section>

        {/* ═══ DIVERSIFICATION ═══ */}
        <section className="diversification reveal">
          <span className="eyebrow">Diversification</span>
          <h2 className="heading-crimson">Our Business Divisions</h2>
          <p>Rental of Sound, Lighting &amp; Audio Visual Equipment &nbsp;|&nbsp; Event Production &amp; Technical Services</p>
        </section>

        {/* ═══ RENTAL ═══ */}
        <section className="fullbleed-section" id="rental">
          <div className="section-bg"><video autoPlay muted loop playsInline><source src="/video/hero-new-video.mp4" type="video/mp4" /></video></div>
          <div>
            <h2>Rental</h2>
            <div className="fullbleed-tags">
              <span>Concerts</span><span>•</span><span>Weddings</span><span>•</span>
              <span>Corporate</span><span>•</span><span>Festivals</span><span>•</span>
              <span>Religious Events</span>
            </div>
            <a className="btn-pill" href="#services">More</a>
          </div>
        </section>

        {/* ═══ SALES & DISTRIBUTION ═══ */}
        <section className="fullbleed-section">
          <div className="section-bg"><video autoPlay muted loop playsInline><source src="/video/equipment-video.mp4" type="video/mp4" /></video></div>
          <div>
            <h2>Sales &amp; Distribution</h2>
            <div className="fullbleed-tags">
              <span>Retail</span><span>•</span><span>Distribution</span><span>•</span>
              <span>Installations</span><span>•</span><span>Service &amp; Support</span>
            </div>
            <a className="btn-pill" href="#contact">More</a>
          </div>
        </section>

        {/* ═══ OUR SERVICES ═══ */}
        <section className="section services-section" id="services">
          <div className="services-heading reveal">
            <span className="eyebrow">Our Services</span>
            <h2>Practical AV Support for Real Events</h2>
          </div>
          <div className="services-grid">
            <div className="service-card large reveal">
              <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80" alt="Rentals — Audio, Lighting, Video, Trussing" loading="lazy" />
              <h3>Rentals</h3>
              <ul className="service-card-list">
                <li><a href="/services/audio">Audio</a></li><li><a href="/services/lighting">Lighting</a></li><li><a href="/services/video">Video</a></li><li><a href="/services/trussing">Trussing</a></li>
              </ul>
            </div>
            <a className="service-card reveal" href="/services/consultancy">
              <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80" alt="Tech Consultancy" loading="lazy" />
              <h3>Tech Consultancy</h3>
            </a>
            <a className="service-card reveal" href="/services/installations">
              <img src="https://images.unsplash.com/photo-1559223607-b4d0555ae227?auto=format&fit=crop&w=900&q=80" alt="Installs & Integrations" loading="lazy" />
              <h3>Installs &amp; Integrations</h3>
            </a>
          </div>
        </section>

        {/* ═══ NEWS ═══ */}
        <section className="section news-section" id="news">
          <div className="news-heading reveal">
            <span className="eyebrow">News Updates</span>
            <h2>Get the Scoop</h2>
          </div>
          <div className="news-stack">
            {NEWS.map((n, i) => (
              <article className="news-card reveal" key={i}>
                <img src={n.img} alt={n.title} loading="lazy" />
                <div className="news-card-body">
                  <span className="news-label">{n.label}</span>
                  <h3>{n.title}</h3>
                  <p>{n.desc}</p>
                  <a className="news-readmore" href="#contact">Read More <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ GALLERY ═══ */}
        <section className="section gallery-section" id="gallery">
          <div className="gallery-heading reveal">
            <span className="eyebrow">Our Work</span>
            <h2>Gallery</h2>
          </div>
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((src, i) => (
              <div className="gallery-thumb reveal" key={i} onClick={() => openLightbox(i)} role="button" tabIndex={0} aria-label={`View image ${i + 1}`} onKeyDown={e => e.key === 'Enter' && openLightbox(i)}>
                <img src={src} alt={`AV-TEC event ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="section testimonials-section">
          <div className="section-bg"><img src="/gallery/432d250b-2aca-433c-8a97-2261da7f376a.jpg" alt="" aria-hidden="true" loading="lazy" /></div>
          <div className="testimonial-content reveal">
            <span className="eyebrow">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="testimonial-avatar">{t.initials}</div>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-role">{t.role}</p>
            <div className="testimonial-dots">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} className={`testimonial-dot ${i === testimIndex ? 'active' : ''}`} type="button" aria-label={`Testimonial ${i + 1}`} onClick={() => setTestimIndex(i)} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CONTACT ═══ */}
        <section className="section contact-section" id="contact">
          <div className="contact-inner reveal">
            <span className="eyebrow">Get In Touch</span>
            <h2>Explore How We Can Collaborate!</h2>
            <p className="contact-subtitle">Tell us about your event and we&apos;ll shape the technical solution.</p>
            <form className="contact-form" action="https://formspree.io/f/your-form-id-here" method="POST">
              <input type="hidden" name="_subject" value="New AV-TEC Enquiry" />
              <div className="form-row">
                <label>Name<input name="name" required placeholder="Your name" /></label>
                <label>Company / Organization<input name="company" placeholder="Company name" /></label>
              </div>
              <div className="form-row">
                <label>Email<input name="email" type="email" placeholder="you@example.com" /></label>
                <label>Event Date<input name="date" type="date" /></label>
              </div>
              <div className="form-row">
                <label>Event Type<input name="event_type" placeholder="Concert, Wedding, Corporate..." /></label>
                <label>Event Location<input name="location" placeholder="City or venue" /></label>
              </div>
              <div className="form-row full">
                <label>Phone<input name="phone" required placeholder="+91" /></label>
              </div>
              <div className="form-row full">
                <label>Message<textarea name="message" rows={4} placeholder="Tell us about your event, audience size, equipment needs, and schedule." /></label>
              </div>
              <div className="form-row full">
                <label className="form-checkbox"><input type="checkbox" required />I agree to the Terms &amp; Conditions</label>
              </div>
              <div className="form-submit-row">
                <button className="btn-blue" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="site-footer">
        <img className="footer-logo" src="/logo/av-tec-logo-web.png" alt="AV-TEC" width="180" height="50" />
        <nav className="footer-nav" aria-label="Footer navigation">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="footer-follow">
          <span>Follow Us</span>
          <div className="footer-social">
            {(['linkedin', 'facebook', 'instagram', 'youtube'] as const).map(s => (
              <a key={s} href="#" aria-label={s}><SocialIcon name={s} /></a>
            ))}
          </div>
        </div>
        <div className="footer-address">
          Bengaluru, Karnataka, India<br />
          <a href="tel:+919876543210">+91 98765 43210</a> &nbsp;|&nbsp; <a href="mailto:hello@av-tec.in">hello@av-tec.in</a><br />
          Available across India
        </div>
        <p className="footer-copy">&copy; 2026 AV-TEC. All rights reserved.</p>
      </footer>

      {/* ═══ LIGHTBOX ═══ */}
      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
          <button className="lightbox-arrow prev" onClick={e => { e.stopPropagation(); goLightbox(-1); }} aria-label="Previous"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg></button>
          <img src={GALLERY_IMAGES[lightbox]} alt={`Gallery ${lightbox + 1}`} onClick={e => e.stopPropagation()} />
          <button className="lightbox-arrow next" onClick={e => { e.stopPropagation(); goLightbox(1); }} aria-label="Next"><svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg></button>
          <span className="lightbox-counter">{lightbox + 1} / {GALLERY_IMAGES.length}</span>
        </div>
      )}

      {/* ═══ WHATSAPP FLOAT ═══ */}
      <a className="whatsapp-float" href="https://wa.me/919876543210?text=Hi%20AV-TEC%2C%20I%20would%20like%20a%20quote" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.6L1 23l5.5-1.4A11.8 11.8 0 0 0 20.5 3.5Zm-8.7 16.2a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-3.2.8.9-3.1-.2-.4a9.7 9.7 0 1 1 7.8 4.2Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.4.2-.7.1a7.9 7.9 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9 4.9c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.1-.2-.2-.5-.3Z" /></svg>
      </a>
    </div>
  );
}
