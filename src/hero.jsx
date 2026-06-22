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
