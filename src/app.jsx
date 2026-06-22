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
