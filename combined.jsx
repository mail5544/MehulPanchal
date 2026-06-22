

// === src/tokens.jsx ===
// Design tokens + global styles for Mehul Panchal redesign
// Editorial luxe on cream, warm gold accent

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "gold",
  "heroVariant": "editorial"
}/*EDITMODE-END*/;

const ACCENTS = {
  gold:   { name: "Warm Gold",  hex: "#B8935A", soft: "#E8DCC4" },
  ember:  { name: "Ember",      hex: "#C2562E", soft: "#EDD4C4" },
  forest: { name: "Forest",     hex: "#4A6342", soft: "#D4DBCC" },
  ink:    { name: "Ink",        hex: "#1A1A1A", soft: "#D8D4CC" },
  rose:   { name: "Dusty Rose", hex: "#B76B6B", soft: "#EDD6D6" }
};

window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;
window.ACCENTS = ACCENTS;

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    :root {
      --cream:     #F4EEE3;
      --cream-2:   #EDE5D4;
      --ink:       #131210;
      --ink-2:     #2A2824;
      --muted:     #6B6557;
      --rule:      #2a2824;
      --rule-soft: rgba(19, 18, 16, 0.14);
      --accent:    #B8935A;
      --accent-soft: #E8DCC4;

      --serif: 'Cormorant Garamond', 'Times New Roman', serif;
      --sans:  'Geist', -apple-system, sans-serif;
      --mono:  'JetBrains Mono', ui-monospace, monospace;
    }

    body {
      background: var(--cream);
      color: var(--ink);
      font-family: var(--sans);
      font-size: 16px;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    /* Subtle paper grain */
    body::before {
      content: '';
      position: fixed; inset: 0;
      pointer-events: none;
      z-index: 1;
      opacity: 0.35;
      mix-blend-mode: multiply;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.07  0 0 0 0 0.07  0 0 0 0 0.07  0 0 0 0.05 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
    }

    ::selection { background: var(--accent); color: var(--cream); }

    /* Typography primitives */
    .serif { font-family: var(--serif); font-weight: 400; letter-spacing: -0.02em; }
    .mono  { font-family: var(--mono); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
    .kicker { font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }

    /* Reveal-on-scroll */
    .reveal { opacity: 0; transform: translateY(24px); transition: opacity 900ms cubic-bezier(.2,.7,.2,1), transform 900ms cubic-bezier(.2,.7,.2,1); }
    .reveal.in { opacity: 1; transform: none; }
    .reveal-delay-1 { transition-delay: 80ms; }
    .reveal-delay-2 { transition-delay: 160ms; }
    .reveal-delay-3 { transition-delay: 240ms; }
    .reveal-delay-4 { transition-delay: 320ms; }

    /* Container */
    .container { max-width: 1440px; margin: 0 auto; padding: 0 48px; position: relative; z-index: 2; }
    @media (max-width: 720px) { .container { padding: 0 24px; } }

    /* Section number badge */
    .section-num {
      font-family: var(--mono);
      font-size: 11px;
      letter-spacing: 0.18em;
      color: var(--muted);
      display: flex; align-items: center; gap: 10px;
    }
    .section-num::before {
      content: ''; width: 28px; height: 1px; background: currentColor;
    }

    /* Links */
    a { color: inherit; text-decoration: none; }
    .link-underline {
      position: relative;
      padding-bottom: 2px;
      display: inline-flex; align-items: center; gap: 8px;
    }
    .link-underline::after {
      content: ''; position: absolute; left: 0; bottom: 0;
      width: 100%; height: 1px; background: currentColor;
      transform-origin: right; transition: transform .5s cubic-bezier(.2,.7,.2,1);
    }
    .link-underline:hover::after { transform: scaleX(0); transform-origin: left; }

    /* Buttons */
    .btn {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 16px 24px;
      border: 1px solid var(--ink);
      border-radius: 999px;
      font-family: var(--sans);
      font-size: 13px; font-weight: 500;
      letter-spacing: 0.04em;
      background: transparent; color: var(--ink);
      cursor: pointer;
      transition: all .4s cubic-bezier(.2,.7,.2,1);
    }
    .btn:hover { background: var(--ink); color: var(--cream); }
    .btn.primary { background: var(--ink); color: var(--cream); }
    .btn.primary:hover { background: var(--accent); color: var(--ink); border-color: var(--accent); }
    .btn .arrow { transition: transform .4s; }
    .btn:hover .arrow { transform: translateX(4px); }

    /* Rule */
    .rule { height: 1px; background: var(--rule-soft); width: 100%; }

    /* Image placeholder */
    .img-ph {
      position: relative;
      background:
        repeating-linear-gradient(135deg,
          var(--cream-2) 0px, var(--cream-2) 12px,
          var(--accent-soft) 12px, var(--accent-soft) 13px);
      border: 1px solid var(--rule-soft);
      overflow: hidden;
    }
    .img-ph .label {
      position: absolute; inset: auto 0 12px 0;
      text-align: center;
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-2);
    }

    /* Marquee */
    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .marquee-track { display: flex; gap: 80px; width: max-content; animation: marquee 40s linear infinite; }

    /* Fixed-size focus for Tweaks panel */
    .tweaks-panel {
      position: fixed;
      bottom: 24px; right: 24px;
      z-index: 50;
      background: var(--ink);
      color: var(--cream);
      padding: 20px 22px;
      border-radius: 14px;
      font-family: var(--sans);
      font-size: 12px;
      min-width: 260px;
      box-shadow: 0 20px 60px rgba(0,0,0,.25);
    }
    .tweaks-panel h4 {
      margin: 0 0 12px;
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(244,238,227,.6);
    }
    .tweaks-panel .swatches { display: flex; gap: 8px; margin-bottom: 14px; }
    .tweaks-panel .swatch {
      width: 26px; height: 26px; border-radius: 999px; cursor: pointer;
      border: 2px solid transparent; transition: border-color .2s;
    }
    .tweaks-panel .swatch.active { border-color: var(--cream); }
    .tweaks-panel .variant-row { display: flex; gap: 6px; }
    .tweaks-panel .variant-row button {
      flex: 1;
      padding: 8px 10px;
      background: transparent;
      color: rgba(244,238,227,.6);
      border: 1px solid rgba(244,238,227,.2);
      border-radius: 8px;
      font-family: var(--sans); font-size: 11px;
      cursor: pointer; transition: all .2s;
    }
    .tweaks-panel .variant-row button.active { background: var(--cream); color: var(--ink); border-color: var(--cream); }
  `}</style>
);

window.GlobalStyles = GlobalStyles;


// === src/nav.jsx ===
// Top navigation — editorial, thin, sticky

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { label: 'Biography', href: '#about' },
    { label: 'Chapters', href: '#chapters' },
    { label: 'Awards',   href: '#awards' },
    { label: 'Journal',  href: '#journal' },
    { label: 'Press',    href: '#press' },
    { label: 'CSR',      href: '#csr' },
    { label: 'Contact',  href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 30,
      transition: 'all .5s cubic-bezier(.2,.7,.2,1)',
      background: scrolled ? 'rgba(244,238,227,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--rule-soft)' : '1px solid transparent',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 48px',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span className="serif" style={{ fontSize: 22, fontStyle: 'italic', fontWeight: 500 }}>Mehul</span>
          <span className="serif" style={{ fontSize: 22, fontWeight: 400 }}>Panchal</span>
          <span className="mono" style={{ marginLeft: 4 }}>EST. 2002</span>
        </a>

        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {items.map(it => (
            <a key={it.label} href={it.href}
               className="link-underline"
               style={{ fontSize: 13, letterSpacing: '.02em', fontWeight: 400 }}>
              {it.label}
            </a>
          ))}
          <a href="#contact" className="btn primary" style={{ padding: '10px 18px', fontSize: 12 }}>
            Get in touch
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

window.Nav = Nav;


// === src/hero.jsx ===
// Hero section — editorial & variant layouts

const Hero = ({ variant = 'editorial' }) => {
  if (variant === 'stacked') return <HeroStacked />;
  if (variant === 'split')   return <HeroSplit />;
  return <HeroEditorial />;
};

const HeroEditorial = () => (
  <section id="top" style={{ paddingTop: 140, paddingBottom: 80, position: 'relative' }}>
    <div className="container">
      {/* top meta row */}
      <div className="reveal in" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 64 }}>
        <div className="mono">Ahmedabad · Gujarat · India</div>
        <div className="mono">Vol. 01 — Personal Portfolio · MMXXVI</div>
        <div className="mono">Chairman & Managing Director · Filter Concept Pvt. Ltd.</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 48, alignItems: 'end' }}>
        {/* Left — name + positioning */}
        <div>
          <div className="reveal in reveal-delay-1" style={{ marginBottom: 32 }}>
            <span className="kicker">— A Life in Three Chapters</span>
          </div>
          <h1 className="serif reveal in reveal-delay-2" style={{
            margin: 0,
            fontSize: 'clamp(72px, 10vw, 168px)',
            lineHeight: 0.88,
            letterSpacing: '-0.035em',
            fontWeight: 400,
          }}>
            Mehul<br/>
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Panchal</span>
            <span style={{ color: 'var(--accent)' }}>.</span>
          </h1>

          <div className="reveal in reveal-delay-3" style={{
            marginTop: 40, maxWidth: 440,
            fontSize: 18, lineHeight: 1.55, color: 'var(--ink-2)',
          }}>
            Entrepreneur building India's quiet industrial future.
            Runner at sunrise. Singer after hours.
            One man, three disciplines — each sharpening the other.
          </div>

          <div className="reveal in reveal-delay-4" style={{ marginTop: 44, display: 'flex', gap: 12 }}>
            <a href="#about" className="btn primary">Read the story <span className="arrow">→</span></a>
            <a href="#contact" className="btn">Invite to speak</a>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="reveal in reveal-delay-2" style={{ position: 'relative' }}>
          <div className="img-ph" style={{ aspectRatio: '3/4', borderRadius: 2 }}>
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: 8
            }}>
              <div className="mono">[ PORTRAIT ]</div>
              <div className="mono" style={{ fontSize: 9 }}>3:4 · B&W or warm tone</div>
            </div>
            <div className="label">mehul_portrait_01.jpg</div>
          </div>
          {/* corner stamps */}
          <div style={{
            position: 'absolute', top: -18, left: -18,
            background: 'var(--accent)', color: 'var(--ink)',
            padding: '8px 12px', borderRadius: 999,
            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em',
          }}>FOUNDED 2002</div>
          <div style={{
            position: 'absolute', bottom: -14, right: -14,
            background: 'var(--ink)', color: 'var(--cream)',
            padding: '10px 14px', borderRadius: 4,
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16,
          }}>“Paid for results.”</div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="reveal" style={{
        marginTop: 120, paddingTop: 32, borderTop: '1px solid var(--rule-soft)',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
      }}>
        {[
          { n: '23+', l: 'Years building Filter Concept' },
          { n: '40+', l: 'Countries served globally' },
          { n: '02',  l: 'National & state awards' },
          { n: '10K', l: 'Rupees. The seed. His mother\u2019s savings.' },
        ].map((s, i) => (
          <div key={i}>
            <div className="serif" style={{ fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em' }}>{s.n}</div>
            <div className="mono" style={{ marginTop: 10, lineHeight: 1.5, textTransform: 'none', letterSpacing: '.04em' }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Variant 2 — centered stacked
const HeroStacked = () => (
  <section id="top" style={{ paddingTop: 160, paddingBottom: 80, textAlign: 'center' }}>
    <div className="container">
      <div className="reveal in" style={{ marginBottom: 28 }}>
        <span className="kicker">Mehul J. Panchal · Personal Archive</span>
      </div>
      <h1 className="serif reveal in reveal-delay-1" style={{
        margin: '0 auto', fontSize: 'clamp(80px, 14vw, 220px)',
        lineHeight: 0.88, letterSpacing: '-0.04em', fontWeight: 400,
      }}>
        <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Three</span> chapters,<br/>
        one man<span style={{ color: 'var(--accent)' }}>.</span>
      </h1>
      <div className="reveal in reveal-delay-2" style={{
        margin: '36px auto 0', maxWidth: 560, fontSize: 18, color: 'var(--ink-2)'
      }}>
        Entrepreneur · Athlete · Singer. The Chairman of Filter Concept Pvt. Ltd.,
        off the factory floor.
      </div>
      <div className="reveal in reveal-delay-3" style={{ marginTop: 40, display: 'inline-flex', gap: 12 }}>
        <a href="#about" className="btn primary">Read the story <span className="arrow">→</span></a>
        <a href="#chapters" className="btn">See the chapters</a>
      </div>

      <div className="reveal in reveal-delay-3" style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {['portrait', 'on the track', 'at the mic'].map((l, i) => (
          <div key={i} className="img-ph" style={{ aspectRatio: '3/4' }}>
            <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div className="mono">[ {l.toUpperCase()} ]</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Variant 3 — asymmetric split with huge slab
const HeroSplit = () => (
  <section id="top" style={{ paddingTop: 120, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'stretch' }}>
      <div style={{ paddingRight: 48, paddingTop: 40, paddingBottom: 40 }}>
        <div className="reveal in kicker" style={{ marginBottom: 24 }}>01 / Identity</div>
        <h1 className="serif reveal in reveal-delay-1" style={{
          margin: 0, fontSize: 'clamp(64px, 8vw, 128px)',
          lineHeight: 0.92, letterSpacing: '-0.03em', fontWeight: 400,
        }}>
          The filtration<br/>
          <span style={{ fontStyle: 'italic' }}>industrialist</span><br/>
          who <span style={{ color: 'var(--accent)' }}>sings</span>.
        </h1>
        <div className="reveal in reveal-delay-2" style={{ marginTop: 36, maxWidth: 440, color: 'var(--ink-2)', fontSize: 17 }}>
          Mehul Panchal · Chairman & MD, Filter Concept Pvt. Ltd.
          Chemical engineer. MBA. Marathoner. Vocalist.
          Started with ₹10,000. Now serves 40+ countries.
        </div>
        <div className="reveal in reveal-delay-3" style={{ marginTop: 40, display: 'flex', gap: 12 }}>
          <a href="#about" className="btn primary">Biography <span className="arrow">→</span></a>
          <a href="#chapters" className="btn">Chapters</a>
        </div>
      </div>
      <div className="reveal in reveal-delay-1 img-ph" style={{ minHeight: 640, borderRadius: 2 }}>
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div className="mono">[ FULL-HEIGHT PORTRAIT ]</div>
        </div>
      </div>
    </div>
  </section>
);

window.Hero = Hero;


// === src/chapters.jsx ===
// Philosophy/About + Three Chapters

const Philosophy = () => (
  <section id="about" style={{ padding: '120px 0', borderTop: '1px solid var(--rule-soft)' }}>
    <div className="container">
      <div className="reveal section-num" style={{ marginBottom: 56 }}>
        <span>02 / Philosophy</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
        <div className="reveal kicker">A note from<br/>the Chairman</div>
        <div>
          <p className="serif reveal reveal-delay-1" style={{
            margin: 0, fontSize: 'clamp(32px, 3.4vw, 52px)',
            lineHeight: 1.15, letterSpacing: '-0.015em', fontWeight: 400,
          }}>
            “We are paid for <span style={{ fontStyle: 'italic' }}>results</span>,
            not for efforts. But the truest result of a life — the one no balance sheet tracks —
            is who you are when the office empties and the <span style={{ color: 'var(--accent)' }}>lights dim</span>.”
          </p>
          <div className="reveal reveal-delay-2" style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 1, background: 'var(--ink)' }} />
            <div>
              <div className="serif" style={{ fontSize: 20, fontStyle: 'italic' }}>Mehul Panchal</div>
              <div className="mono">Chairman & Managing Director</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Chapters = () => {
  const chapters = [
    {
      num: '01',
      title: 'The Industrialist',
      italic: 'Industrialist',
      accent: '— 2002 → Present',
      blurb: 'Founder & CMD of Filter Concept Pvt. Ltd. Started with ₹10,000 borrowed from my mother. Today, our filtration systems protect plants across 40+ countries — from pharma to semiconductors.',
      tags: ['Founder', 'CMD', 'Chemical Engineer', 'MBA'],
      ph: 'FACTORY FLOOR · WIDE'
    },
    {
      num: '02',
      title: 'The Athlete',
      italic: 'Athlete',
      accent: '— Mornings, before work',
      blurb: 'Fitness is the non-negotiable. Running, strength, discipline — the same rules that scale a company scale a body. The 5 a.m. version of you is the one who decides everything else.',
      tags: ['Runner', 'Strength', 'Endurance', 'Discipline'],
      ph: 'ACTION · RUNNING'
    },
    {
      num: '03',
      title: 'The Vocalist',
      italic: 'Vocalist',
      accent: '— Evenings, weekends',
      blurb: 'Music is how I exhale. From classical riyaz to covers on my YouTube channel — singing is the only place where the only KPI is feeling. It keeps the industrialist honest.',
      tags: ['Singer', 'Performer', 'YouTube @MehulPanchal', 'Bhajan · Ghazal · Hindi'],
      ph: 'ON STAGE · WARM LIGHT'
    }
  ];

  return (
    <section id="chapters" style={{ padding: '120px 0', borderTop: '1px solid var(--rule-soft)', background: 'var(--cream-2)' }}>
      <div className="container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 64 }}>
          <div>
            <div className="section-num" style={{ marginBottom: 16 }}><span>03 / Three Chapters</span></div>
            <h2 className="serif" style={{
              margin: 0, fontSize: 'clamp(48px, 5.5vw, 88px)',
              lineHeight: 1, letterSpacing: '-0.025em', fontWeight: 400,
            }}>
              One man,<br/>
              <span style={{ fontStyle: 'italic' }}>three</span> disciplines.
            </h2>
          </div>
          <div className="kicker" style={{ maxWidth: 260, textAlign: 'right', letterSpacing: '.04em', textTransform: 'none', fontSize: 13, color: 'var(--ink-2)' }}>
            The current website tells you about the CMD.<br/>
            This one tells you about the man.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {chapters.map((c, i) => (
            <div key={c.num} className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr 1fr' : '1fr 1.2fr 1fr',
              gap: 48,
              padding: '56px 0',
              borderTop: '1px solid var(--rule-soft)',
              alignItems: 'center',
            }}>
              {/* num */}
              <div>
                <div className="serif" style={{ fontSize: 120, lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.04em', fontStyle: 'italic', fontWeight: 300 }}>{c.num}</div>
                <div className="mono" style={{ marginTop: 12 }}>{c.accent}</div>
              </div>
              {/* title & blurb */}
              <div>
                <h3 className="serif" style={{ margin: 0, fontSize: 'clamp(40px, 4vw, 64px)', lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 400 }}>
                  The <span style={{ fontStyle: 'italic' }}>{c.italic}</span>
                </h3>
                <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 520 }}>
                  {c.blurb}
                </p>
                <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {c.tags.map(t => (
                    <span key={t} className="mono" style={{
                      padding: '6px 12px', border: '1px solid var(--rule-soft)',
                      borderRadius: 999, color: 'var(--ink-2)', background: 'var(--cream)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              {/* image */}
              <div className="img-ph" style={{ aspectRatio: '4/5' }}>
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <div className="mono">[ {c.ph} ]</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Philosophy = Philosophy;
window.Chapters = Chapters;


// === src/awards.jsx ===
// Signature moment + Awards timeline + Press marquee

const SignatureMoment = () => (
  <section style={{ padding: '120px 0', background: 'var(--ink)', color: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
    <div className="container">
      <div className="reveal section-num" style={{ color: 'rgba(244,238,227,.5)', marginBottom: 40 }}>
        <span>04 / Signature Moment</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div className="reveal kicker" style={{ color: 'rgba(244,238,227,.6)', marginBottom: 24 }}>New Delhi · 2016</div>
          <h2 className="serif reveal reveal-delay-1" style={{
            margin: 0, fontSize: 'clamp(48px, 5.5vw, 88px)',
            lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 300,
          }}>
            The <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>MSME National Award</span>,<br/>
            handed in person by<br/>
            the Prime Minister.
          </h2>
          <p className="reveal reveal-delay-2" style={{ marginTop: 32, fontSize: 17, lineHeight: 1.6, color: 'rgba(244,238,227,.75)', maxWidth: 520 }}>
            In 2016, Filter Concept Pvt. Ltd. received the First Prize for Outstanding
            Entrepreneurship from Hon'ble Prime Minister Shri Narendra Modi — a moment
            that validated fourteen years of filtration work, and quietly opened the next fourteen.
          </p>
          <div className="reveal reveal-delay-3" style={{ marginTop: 40 }}>
            <a href="#awards" className="btn" style={{ borderColor: 'var(--cream)', color: 'var(--cream)' }}>
              See full list of awards <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="reveal reveal-delay-1 img-ph" style={{
          aspectRatio: '4/3',
          background: 'repeating-linear-gradient(135deg, #1f1d1a 0, #1f1d1a 12px, #2a2824 12px, #2a2824 13px)',
          border: '1px solid rgba(244,238,227,.1)'
        }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10 }}>
            <div className="mono" style={{ color: 'rgba(244,238,227,.5)' }}>[ AWARD CEREMONY PHOTO ]</div>
            <div className="mono" style={{ color: 'rgba(244,238,227,.35)', fontSize: 9 }}>with PM Narendra Modi · 2016</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AwardsTimeline = () => {
  const items = [
    { year: '2013', title: 'MSME Outstanding Entrepreneurship', sub: 'First prize, Govt. of India', side: 'L' },
    { year: '2016', title: 'MSME National Award', sub: 'Presented by Hon. PM Shri Narendra Modi', side: 'R', featured: true },
    { year: '2017', title: 'Best MSME Award — Gujarat', sub: 'For innovation in technology', side: 'L' },
    { year: '2017', title: 'Zee Business — Emerging Business Forum', sub: 'Featured entrepreneur', side: 'R' },
    { year: '2018', title: 'Safar Kamyabi Ka', sub: 'Televised exclusive interview', side: 'L' },
    { year: '2020', title: 'Global Expansion Milestone', sub: '40+ countries served', side: 'R' },
    { year: '2025', title: 'Semiconductor India Recognition', sub: 'Filtration partner, Micron · Sanand', side: 'L' },
  ];

  return (
    <section id="awards" style={{ padding: '120px 0', borderTop: '1px solid var(--rule-soft)' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div>
            <div className="section-num" style={{ marginBottom: 16 }}><span>05 / Awards & Recognition</span></div>
            <h2 className="serif" style={{
              margin: 0, fontSize: 'clamp(48px, 5.5vw, 88px)',
              lineHeight: 1, letterSpacing: '-0.025em', fontWeight: 400,
            }}>
              A quiet<br/><span style={{ fontStyle: 'italic' }}>shelf</span> of proof.
            </h2>
          </div>
          <a href="#journal" className="link-underline" style={{ fontSize: 14 }}>Read press coverage →</a>
        </div>

        <div style={{ position: 'relative' }}>
          {/* center line */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 1, background: 'var(--rule-soft)' }} />

          {items.map((it, i) => (
            <div key={i} className="reveal" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
              padding: '28px 0', alignItems: 'center',
            }}>
              {it.side === 'L' ? (
                <>
                  <div style={{ textAlign: 'right', paddingRight: 48 }}>
                    <div className="serif" style={{
                      fontSize: it.featured ? 56 : 36, lineHeight: 1,
                      color: it.featured ? 'var(--accent)' : 'var(--ink)',
                      fontStyle: it.featured ? 'italic' : 'normal',
                      letterSpacing: '-0.02em',
                    }}>{it.title}</div>
                    <div className="mono" style={{ marginTop: 8 }}>{it.sub}</div>
                  </div>
                  <div style={{ paddingLeft: 48, position: 'relative' }}>
                    <div style={{
                      position: 'absolute', left: -6, top: '50%', transform: 'translateY(-50%)',
                      width: 12, height: 12, borderRadius: 999,
                      background: it.featured ? 'var(--accent)' : 'var(--ink)',
                      border: '3px solid var(--cream)',
                    }} />
                    <div className="serif" style={{ fontSize: 32, color: 'var(--muted)', fontStyle: 'italic' }}>{it.year}</div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ textAlign: 'right', paddingRight: 48, position: 'relative' }}>
                    <div className="serif" style={{ fontSize: 32, color: 'var(--muted)', fontStyle: 'italic' }}>{it.year}</div>
                    <div style={{
                      position: 'absolute', right: -6, top: '50%', transform: 'translateY(-50%)',
                      width: 12, height: 12, borderRadius: 999,
                      background: it.featured ? 'var(--accent)' : 'var(--ink)',
                      border: '3px solid var(--cream)',
                    }} />
                  </div>
                  <div style={{ paddingLeft: 48 }}>
                    <div className="serif" style={{
                      fontSize: it.featured ? 56 : 36, lineHeight: 1,
                      color: it.featured ? 'var(--accent)' : 'var(--ink)',
                      fontStyle: it.featured ? 'italic' : 'normal',
                      letterSpacing: '-0.02em',
                    }}>{it.title}</div>
                    <div className="mono" style={{ marginTop: 8 }}>{it.sub}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PressMarquee = () => {
  const outlets = ['ZEE BUSINESS', 'RELIANCE INDUSTRIES', 'ESSAR', 'INDIAN INSTITUTE OF MATERIALS MANAGEMENT',
    'EVERYTHING ABOUT WATER', 'GIRNAR', 'MAF', 'ECONOMIC TIMES', 'BUSINESS STANDARD', 'THE HINDU'];

  return (
    <section id="press" style={{ padding: '80px 0', borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)', background: 'var(--cream-2)' }}>
      <div className="container" style={{ marginBottom: 32 }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="section-num"><span>06 / As featured in</span></div>
          <div className="kicker">Coverage · interviews · industry recognition</div>
        </div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...outlets, ...outlets].map((o, i) => (
            <div key={i} className="serif" style={{
              fontSize: 44, lineHeight: 1,
              letterSpacing: '-0.02em', color: 'var(--muted)',
              whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 80,
            }}>
              {o}
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.SignatureMoment = SignatureMoment;
window.AwardsTimeline = AwardsTimeline;
window.PressMarquee = PressMarquee;


// === src/rest.jsx ===
// Journal (blog), CSR, Contact, Footer

const Journal = () => {
  const posts = [
    { date: 'Sep 11, 2024', cat: 'Entrepreneurship', title: 'Entrepreneurship: A New Era',
      excerpt: 'We were all entrepreneurs once. Some of us just never stopped. On building when the market rewards sameness.' },
    { date: 'Aug 28, 2024', cat: 'Leadership', title: 'Succeed as Great Entrepreneurs by Avoiding Common Mistakes',
      excerpt: 'The thorns outnumber the roses — and that is the point. Lessons from 22 years of filtration.' },
    { date: 'Jul 30, 2024', cat: 'Manufacturing', title: 'Manufacturing Through Fluctuating Market Forces',
      excerpt: 'Mapping the terrain when the terrain itself moves. A practical framework for founders in industrial sectors.' },
  ];

  return (
    <section id="journal" style={{ padding: '120px 0', borderTop: '1px solid var(--rule-soft)' }}>
      <div className="container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 64 }}>
          <div>
            <div className="section-num" style={{ marginBottom: 16 }}><span>07 / The Journal</span></div>
            <h2 className="serif" style={{
              margin: 0, fontSize: 'clamp(48px, 5.5vw, 88px)',
              lineHeight: 1, letterSpacing: '-0.025em', fontWeight: 400,
            }}>
              Notes from<br/>the <span style={{ fontStyle: 'italic' }}>workbench</span>.
            </h2>
          </div>
          <a href="#" className="btn">All writing <span className="arrow">→</span></a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {posts.map((p, i) => (
            <a key={i} href="#" className="reveal" style={{
              display: 'block', textDecoration: 'none', color: 'inherit',
              paddingTop: 24, borderTop: '1px solid var(--ink)',
              transition: 'transform .5s cubic-bezier(.2,.7,.2,1)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                <span className="mono">{p.cat}</span>
                <span className="mono">{p.date}</span>
              </div>
              <div className="img-ph" style={{ aspectRatio: '4/3', marginBottom: 24 }}>
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <div className="mono">[ ARTICLE IMG ]</div>
                </div>
              </div>
              <h3 className="serif" style={{
                margin: 0, fontSize: 28, lineHeight: 1.15,
                letterSpacing: '-0.015em', fontWeight: 400,
              }}>{p.title}</h3>
              <p style={{ marginTop: 12, fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.55 }}>{p.excerpt}</p>
              <div style={{ marginTop: 20 }} className="link-underline">
                Read essay <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const CSR = () => (
  <section id="csr" style={{ padding: '120px 0', borderTop: '1px solid var(--rule-soft)', background: 'var(--cream-2)' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div className="reveal">
          <div className="section-num" style={{ marginBottom: 24 }}><span>08 / Giving Back</span></div>
          <h2 className="serif" style={{
            margin: 0, fontSize: 'clamp(40px, 4.5vw, 72px)',
            lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 400,
          }}>
            Every filter we ship<br/>
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>plants</span> something<br/>somewhere else.
          </h2>
          <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: 480 }}>
            Filter Concept's CSR programs focus on clean water access, rural education,
            and healthcare in underserved parts of Gujarat. The way I see it, filtration
            isn't just a product — it's a principle. Keep what matters. Let the rest pass.
          </p>
          <div style={{ marginTop: 32 }}>
            <a href="#" className="btn primary">Our CSR work <span className="arrow">→</span></a>
          </div>
        </div>

        <div className="reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { n: '12,000+', l: 'Lives touched via clean-water projects' },
            { n: '04',      l: 'Rural schools supported in Gujarat' },
            { n: '7 yrs',   l: 'Running community health camps' },
            { n: '100%',    l: 'Profits committed to long-term CSR' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: 28, background: 'var(--cream)',
              border: '1px solid var(--rule-soft)', borderRadius: 4,
            }}>
              <div className="serif" style={{ fontSize: 48, lineHeight: 1, letterSpacing: '-0.03em' }}>{s.n}</div>
              <div className="mono" style={{ marginTop: 10, lineHeight: 1.5, textTransform: 'none', letterSpacing: '.04em' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" style={{ padding: '140px 0 100px', borderTop: '1px solid var(--rule-soft)', background: 'var(--ink)', color: 'var(--cream)' }}>
    <div className="container">
      <div className="reveal section-num" style={{ color: 'rgba(244,238,227,.5)', marginBottom: 48 }}>
        <span>09 / Let's talk</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'start' }}>
        <div className="reveal">
          <h2 className="serif" style={{
            margin: 0, fontSize: 'clamp(56px, 7vw, 120px)',
            lineHeight: 0.95, letterSpacing: '-0.03em', fontWeight: 400,
          }}>
            Speaking,<br/>
            <span style={{ fontStyle: 'italic' }}>press</span>,<br/>
            or a <span style={{ color: 'var(--accent)' }}>conversation</span>.
          </h2>
          <p style={{ marginTop: 32, fontSize: 18, color: 'rgba(244,238,227,.7)', maxWidth: 480, lineHeight: 1.6 }}>
            I read every note personally. Keynotes, interviews, mentoring —
            or just a message about filtration, fitness, or a song you'd like me to learn.
          </p>
        </div>

        <div className="reveal reveal-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {[
            { l: 'Office', v: 'Filter Concept Pvt. Ltd.\nAhmedabad, Gujarat · India' },
            { l: 'Email', v: 'office@mehulpanchal.com' },
            { l: 'Instagram', v: '@mehul2800 · @MehulPanchal.FCPL' },
            { l: 'YouTube', v: '@MehulPanchal' },
            { l: 'LinkedIn', v: '/in/mehul-panchal-entrepreneur' },
          ].map((r, i) => (
            <div key={i} style={{ paddingBottom: 20, borderBottom: '1px solid rgba(244,238,227,.15)' }}>
              <div className="mono" style={{ color: 'rgba(244,238,227,.5)', marginBottom: 6 }}>{r.l}</div>
              <div className="serif" style={{ fontSize: 22, lineHeight: 1.3, whiteSpace: 'pre-line' }}>{r.v}</div>
            </div>
          ))}
          <a href="mailto:office@mehulpanchal.com" className="btn primary" style={{
            marginTop: 12, background: 'var(--cream)', color: 'var(--ink)', borderColor: 'var(--cream)',
            alignSelf: 'flex-start'
          }}>
            Write to Mehul <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ padding: '40px 0 32px', background: 'var(--ink)', color: 'rgba(244,238,227,.6)', borderTop: '1px solid rgba(244,238,227,.1)' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
      <div className="mono">© MMXXVI · Mehul J. Panchal · All rights reserved</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span className="serif" style={{ fontSize: 20, fontStyle: 'italic', color: 'var(--cream)' }}>Mehul</span>
        <span className="serif" style={{ fontSize: 20, color: 'var(--cream)' }}>Panchal</span>
      </div>
      <div className="mono">Ahmedabad · Visnagar · The World</div>
    </div>
  </footer>
);

window.Journal = Journal;
window.CSR = CSR;
window.Contact = Contact;
window.Footer = Footer;


// === src/tweaks.jsx ===
// Tweaks panel — accent color + hero layout variant

const TweaksPanel = ({ accent, setAccent, heroVariant, setHeroVariant, visible }) => {
  if (!visible) return null;

  const ACCENTS = window.ACCENTS;

  return (
    <div className="tweaks-panel">
      <h4>Tweaks</h4>
      <div style={{ marginBottom: 14 }}>
        <div style={{ marginBottom: 8, color: 'rgba(244,238,227,.6)', fontSize: 11 }}>Accent colour</div>
        <div className="swatches">
          {Object.entries(ACCENTS).map(([key, a]) => (
            <div key={key}
                 className={'swatch' + (accent === key ? ' active' : '')}
                 onClick={() => setAccent(key)}
                 style={{ background: a.hex }}
                 title={a.name} />
          ))}
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, color: 'rgba(244,238,227,.6)', fontSize: 11 }}>Hero layout</div>
        <div className="variant-row">
          {[
            { k: 'editorial', l: 'Editorial' },
            { k: 'stacked',   l: 'Stacked' },
            { k: 'split',     l: 'Split' },
          ].map(v => (
            <button key={v.k}
                    onClick={() => setHeroVariant(v.k)}
                    className={heroVariant === v.k ? 'active' : ''}>
              {v.l}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

window.TweaksPanel = TweaksPanel;


// === src/app.jsx ===
// App entry

const { useState, useEffect } = React;

const App = () => {
  const defaults = window.TWEAK_DEFAULTS;
  const ACCENTS = window.ACCENTS;

  const [accent, setAccent] = useState(defaults.accent);
  const [heroVariant, setHeroVariant] = useState(defaults.heroVariant);
  const [tweaksVisible, setTweaksVisible] = useState(false);

  // Apply accent to CSS vars
  useEffect(() => {
    const a = ACCENTS[accent] || ACCENTS.gold;
    document.documentElement.style.setProperty('--accent', a.hex);
    document.documentElement.style.setProperty('--accent-soft', a.soft);
  }, [accent]);

  // Edit-mode protocol
  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setTweaksVisible(true);
      if (d.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // Persist tweak changes
  const persist = (edits) => {
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
  };
  const onSetAccent = (v) => { setAccent(v); persist({ accent: v }); };
  const onSetHero = (v) => { setHeroVariant(v); persist({ heroVariant: v }); };

  // Scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) en.target.classList.add('in');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [heroVariant]);

  return (
    <>
      <window.GlobalStyles />
      <window.Nav />
      <window.Hero variant={heroVariant} />
      <window.Philosophy />
      <window.Chapters />
      <window.SignatureMoment />
      <window.AwardsTimeline />
      <window.PressMarquee />
      <window.Journal />
      <window.CSR />
      <window.Contact />
      <window.Footer />
      <window.TweaksPanel
        accent={accent} setAccent={onSetAccent}
        heroVariant={heroVariant} setHeroVariant={onSetHero}
        visible={tweaksVisible}
      />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
