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
