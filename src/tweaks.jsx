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
