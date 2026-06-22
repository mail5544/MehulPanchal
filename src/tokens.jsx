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
