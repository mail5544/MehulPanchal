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
