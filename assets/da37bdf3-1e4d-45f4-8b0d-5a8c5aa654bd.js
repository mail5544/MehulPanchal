/* ============================================================
   mp-chrome.js — shared header / footer / tweaks for all pages
   Each page sets <body data-page="builder"> to mark active nav.
   ============================================================ */
(function () {
  const HOME = "Mehul%20Panchal%20Website%20v2.html";

  // nav: [label, href, pageKey]
  const NAV = [
    ["Home",        HOME,                "home"],
    ["About",       "about.html",        "about"],
    ["The Builder", "the-builder.html",  "builder"],
    ["The Warrior", "the-warrior.html",  "warrior"],
    ["The Seeker",  "the-seeker.html",   "seeker"],
    ["Ventures",    "ventures.html",     "ventures"],
    ["Ideas",       "ideas.html",        "ideas"],
    ["Recognition", "recognition.html",  "recognition"],
  ];

  const active = document.body.getAttribute("data-page") || "";

  const topStrip = `
  <div class="top-strip">
    <div class="container top-strip-inner">
      <div>Building Systems · Living Discipline · Seeking Meaning</div>
      <div class="top-right">
        <a href="contact.html">office@mehulpanchal.com</a>
        <a href="https://instagram.com/mehul2800" target="_blank" rel="noopener">Instagram</a>
        <a href="https://youtube.com/@MehulPanchal" target="_blank" rel="noopener">YouTube</a>
        <a href="https://www.linkedin.com/in/mehul-panchal-entrepreneur/" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>
  </div>`;

  const header = `
  <header class="site-header" id="mp-header">
    <div class="header-inner">
      <a href="${HOME}" class="logo">
        <span class="logo-mark">MP</span>
        <span class="logo-text"><strong>Mehul J. Panchal</strong><em>Entrepreneur · Athlete · Singer</em></span>
      </a>
      <nav class="main-nav">
        ${NAV.map(([label, href, key]) =>
          `<a href="${href}" class="nav-item${key === active ? ' active' : ''}">${label}</a>`
        ).join("")}
      </nav>
      <div class="header-cta">
        <a href="contact.html" class="btn btn-primary">Get in touch</a>
      </div>
    </div>
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo-mark">MP</span>
          <div class="footer-tagline">Building Systems. Living Discipline. Seeking Meaning.</div>
          <p class="footer-blurb">CMD of Filter Concept Pvt. Ltd. Entrepreneur, athlete, singer one human, three disciplines, six ventures.</p>
        </div>
        <div class="footer-cols">
          <div class="footer-col">
            <h5>Explore</h5>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="the-builder.html">The Builder</a></li>
              <li><a href="the-warrior.html">The Warrior</a></li>
              <li><a href="the-seeker.html">The Seeker</a></li>
              <li><a href="ventures.html">Ventures</a></li>
              <li><a href="ideas.html">Ideas</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Connect</h5>
            <ul>
              <li><a href="https://www.linkedin.com/in/mehul-panchal-entrepreneur/" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href="https://instagram.com/mehul2800" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://youtube.com/@MehulPanchal" target="_blank" rel="noopener">YouTube</a></li>
              <!-- <li><a href="#" target="_blank" rel="noopener">Threads</a></li> -->
              <!-- <li><a href="contact.html">Contact</a></li> -->
            </ul>
          </div>
          <div class="footer-col">
            <h5>Ventures</h5>
            <ul>
              <li><a href="https://filter-concept.com/" target="_blank" rel="noopener">filter-concept.com</a></li>
              <li><a href="https://airconcept.co.in/" target="_blank" rel="noopener">airconcept.co.in</a></li>
              <li><a href="https://hydroconcept.co.in/" target="_blank" rel="noopener">hydroconcept.co.in</a></li>
              <li><a href="https://ecoconcept.green/" target="_blank" rel="noopener">ecoconcept.green</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <div>© 2026 Mehul J. Panchal · All rights reserved</div>
          <div>Ahmedabad · Visnagar · The World</div>
        </div>
      </div>
    </div>
  </footer>`;

  const tweaks = `
  <div class="tweaks-panel" id="mp-tweaks">
    <div class="tweaks-head">Tweaks</div>
    <div class="tweaks-body">
      <div class="tweaks-label">Colour palette</div>
      <button class="palette-opt active" data-theme="sky"><span class="palette-swatches"><i style="background:#16C8C0"></i><i style="background:#4A8BD6"></i><i style="background:#0B0B0F"></i></span><span class="palette-name">Sky (default)</span><span class="palette-check">✓</span></button>
      <button class="palette-opt" data-theme="default"><span class="palette-swatches"><i style="background:#16C8C0"></i><i style="background:#1E73E8"></i><i style="background:#0B0B0F"></i></span><span class="palette-name">Teal → Royal Blue</span><span class="palette-check">✓</span></button>
      <button class="palette-opt" data-theme="ocean"><span class="palette-swatches"><i style="background:#2BB3E0"></i><i style="background:#1E73E8"></i><i style="background:#0B2545"></i></span><span class="palette-name">Deep Ocean</span><span class="palette-check">✓</span></button>
      <button class="palette-opt" data-theme="violet"><span class="palette-swatches"><i style="background:#16C8C0"></i><i style="background:#7C5CFF"></i><i style="background:#0B0B0F"></i></span><span class="palette-name">Seeker Violet</span><span class="palette-check">✓</span></button>
    </div>
  </div>`;

  // Inject chrome
  document.body.insertAdjacentHTML("afterbegin", topStrip + header);
  document.body.insertAdjacentHTML("beforeend", footer + tweaks);

  // Restore saved palette
  const savedTheme = localStorage.getItem("mp-theme");
  if (savedTheme) {
    if (savedTheme === "default") document.body.removeAttribute("data-theme");
    else document.body.setAttribute("data-theme", savedTheme);
    document.querySelectorAll(".palette-opt").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-theme") === savedTheme);
    });
  }

  // Header scroll state
  const hdr = document.getElementById("mp-header");
  const onScroll = () => hdr.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll);
  onScroll();

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // Tweaks edit-mode protocol
  const panel = document.getElementById("mp-tweaks");
  window.addEventListener("message", (e) => {
    const d = e.data || {};
    if (d.type === "__activate_edit_mode") panel.classList.add("show");
    if (d.type === "__deactivate_edit_mode") panel.classList.remove("show");
  });
  try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}

  // Palette switching
  const THEME_MAP = { "default": "", "ocean": "ocean", "sky": "sky", "violet": "violet" };
  document.querySelectorAll(".palette-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".palette-opt").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.getAttribute("data-theme");
      const theme = THEME_MAP[key];
      if (theme) document.body.setAttribute("data-theme", theme);
      else document.body.removeAttribute("data-theme");
      localStorage.setItem("mp-theme", key);
      try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { palette: key } }, "*"); } catch (e) {}
    });
  });
})();
