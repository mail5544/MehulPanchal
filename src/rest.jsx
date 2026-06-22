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
