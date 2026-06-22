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
