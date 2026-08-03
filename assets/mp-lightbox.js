/* ============================================================
   mp-lightbox.js — click any content image to open it full size.

   Loaded by every page, including index.html, which builds its own
   header/footer and so cannot load mp-chrome.js.

   Skipped: logo marks, and images inside a link that actually goes
   somewhere — there the link should win. Add data-nozoom to any image
   to opt it out.
   ============================================================ */
(function () {
  "use strict";

  var CSS = [
    ".mp-lb-zoomable { cursor: zoom-in; }",
    ".mp-lb { position: fixed; inset: 0; z-index: 9999; display: none; align-items: center;",
    "  justify-content: center; background: rgba(8,10,14,0.93); padding: 40px 32px;",
    "  opacity: 0; transition: opacity .18s ease; }",
    ".mp-lb.is-open { display: flex; }",
    ".mp-lb.is-shown { opacity: 1; }",
    ".mp-lb-fig { margin: 0; display: flex; flex-direction: column; align-items: center;",
    "  gap: 14px; max-width: 100%; max-height: 100%; }",
    ".mp-lb-img { display: block; max-width: 100%; max-height: calc(100vh - 150px);",
    "  object-fit: contain; border-radius: 6px; box-shadow: 0 24px 60px rgba(0,0,0,0.55);",
    "  transform: scale(.97); transition: transform .18s ease; }",
    ".mp-lb.is-shown .mp-lb-img { transform: scale(1); }",
    ".mp-lb-cap { max-width: 720px; text-align: center; font-size: 14px; line-height: 1.5;",
    "  color: rgba(255,255,255,0.82); }",
    ".mp-lb-close { position: absolute; top: 18px; right: 20px; width: 44px; height: 44px;",
    "  display: flex; align-items: center; justify-content: center; border: 0; padding: 0;",
    "  border-radius: 50%; background: rgba(255,255,255,0.14); color: #fff; font-size: 26px;",
    "  line-height: 1; cursor: pointer; transition: background .15s ease; }",
    ".mp-lb-close:hover { background: rgba(255,255,255,0.26); }",
    ".mp-lb-close:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }",
    "body.mp-lb-lock { overflow: hidden; }",
    "@media (max-width: 768px) { .mp-lb { padding: 16px; }",
    "  .mp-lb-img { max-height: calc(100vh - 130px); }",
    "  .mp-lb-close { top: 10px; right: 10px; } }",
    "@media (prefers-reduced-motion: reduce) { .mp-lb, .mp-lb-img { transition: none; } }"
  ].join("\n");

  var style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);

  var box = document.createElement("div");
  box.className = "mp-lb";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Image viewer");
  box.innerHTML =
    '<button class="mp-lb-close" type="button" aria-label="Close image">&times;</button>' +
    '<figure class="mp-lb-fig">' +
    '<img class="mp-lb-img" alt="">' +
    '<figcaption class="mp-lb-cap"></figcaption>' +
    "</figure>";

  var full = box.querySelector(".mp-lb-img");
  var cap = box.querySelector(".mp-lb-cap");
  var closeBtn = box.querySelector(".mp-lb-close");
  var lastFocused = null;

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    document.body.appendChild(box);
    mark();
  });

  function zoomable(img) {
    if (!img || img.hasAttribute("data-nozoom")) return false;
    if (img.classList.contains("logo-mark")) return false;
    if (box.contains(img)) return false;
    var link = img.closest("a");
    if (link) {
      // a link that actually navigates should win over the viewer
      var href = link.getAttribute("href");
      if (href && href !== "#") return false;
    }
    return true;
  }

  // Marks images so they get the zoom cursor and a keyboard affordance.
  // Re-run after anything injects new images.
  function mark() {
    var imgs = document.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      if (!zoomable(img) || img.classList.contains("mp-lb-zoomable")) continue;
      img.classList.add("mp-lb-zoomable");
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      if (img.getAttribute("alt")) {
        img.setAttribute("aria-label", "Open image: " + img.getAttribute("alt"));
      }
    }
  }

  // Alt text here is a mix of real captions ("Gujarat Best MSME Award") and
  // shot labels left over from the build ("HERO SHOT", "REEL 01"). The labels
  // are the all-caps ones, and they read badly under a photo — so they stay on
  // the image for screen readers but are not shown as a caption.
  function captionFor(img) {
    var alt = (img.alt || "").trim();
    return /[a-z]/.test(alt) ? alt : "";
  }

  function open(img) {
    lastFocused = document.activeElement;
    full.src = img.currentSrc || img.src;
    full.alt = img.alt || "";
    var text = captionFor(img);
    cap.textContent = text;
    cap.style.display = text ? "" : "none";
    box.classList.add("is-open");
    document.body.classList.add("mp-lb-lock");
    // let the browser paint the hidden state first so the fade actually runs
    requestAnimationFrame(function () {
      box.classList.add("is-shown");
    });
    closeBtn.focus();
  }

  function close() {
    box.classList.remove("is-shown");
    document.body.classList.remove("mp-lb-lock");
    window.setTimeout(function () {
      box.classList.remove("is-open");
      full.removeAttribute("src");
    }, 180);
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    lastFocused = null;
  }

  // Finds the image under a click. A decorative overlay stretched across a
  // cell — .gallery-cell::after, .ig-cell::after — becomes the event target
  // and hides the image from closest(), so fall back to hit-testing the point
  // that was actually clicked. Catches any such overlay, not just those two.
  function imageAt(e) {
    var direct = e.target.closest ? e.target.closest("img") : null;
    if (direct) return direct;
    if (!document.elementsFromPoint) return null;
    if (typeof e.clientX !== "number" || (!e.clientX && !e.clientY)) return null;
    var stack = document.elementsFromPoint(e.clientX, e.clientY) || [];
    for (var i = 0; i < stack.length; i++) {
      if (stack[i].tagName === "IMG") return stack[i];
    }
    return null;
  }

  // Delegated, so images added later still work without re-binding.
  document.addEventListener("click", function (e) {
    var img = imageAt(e);
    if (!img || !zoomable(img)) return;
    e.preventDefault();
    open(img);
  });

  document.addEventListener("keydown", function (e) {
    if (box.classList.contains("is-open")) {
      if (e.key === "Escape") { close(); return; }
      // only the close button is focusable in here, so keep focus on it
      if (e.key === "Tab") { e.preventDefault(); closeBtn.focus(); }
      return;
    }
    if (e.key !== "Enter" && e.key !== " ") return;
    var el = document.activeElement;
    if (el && el.tagName === "IMG" && zoomable(el)) {
      e.preventDefault();
      open(el);
    }
  });

  // clicking the backdrop closes; clicking the image itself does not
  box.addEventListener("click", function (e) {
    if (e.target === full) return;
    close();
  });

  // expose for pages that inject images after load
  window.mpLightboxRefresh = mark;
})();
