/* ==========================================================================
   Zeta Advantage · ZIP™ one-pager
   No dependencies. Progressive enhancement only: the page reads fine
   with JavaScript disabled.
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     CONTACT EMAIL
     The address is pending. When you have it, set it here and every
     "Start a Conversation" / "Request an Ingredient" button updates,
     and the "Direct email" line in the closing section fills in.
     ------------------------------------------------------------------ */
  var CONTACT_EMAIL = "docdrucker@druckerlabs.com";

  var mailLinks = document.querySelectorAll(".js-mailto");
  for (var i = 0; i < mailLinks.length; i++) {
    var link = mailLinks[i];
    var subject = link.getAttribute("data-subject") || "ZIP Inquiry";
    link.setAttribute("href", "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject));
  }

  var emailEl = document.querySelector("[data-contact-email]");
  if (emailEl) {
    if (CONTACT_EMAIL) {
      emailEl.innerHTML = "";
      var a = document.createElement("a");
      a.href = "mailto:" + CONTACT_EMAIL;
      a.textContent = CONTACT_EMAIL;
      emailEl.appendChild(a);
    } else {
      emailEl.textContent = "coming soon";
    }
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Header state on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    var navLinks = nav.querySelectorAll("a");
    for (var n = 0; n < navLinks.length; n++) {
      navLinks[n].addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal, .process, .scale-bar");

  if (!("IntersectionObserver" in window) || reduceMotion) {
    for (var r = 0; r < revealEls.length; r++) revealEls[r].classList.add("is-visible");
  } else {
    var io = new IntersectionObserver(function (entries) {
      for (var e = 0; e < entries.length; e++) {
        if (entries[e].isIntersecting) {
          entries[e].target.classList.add("is-visible");
          io.unobserve(entries[e].target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    for (var v = 0; v < revealEls.length; v++) io.observe(revealEls[v]);
  }

  /* ------------------------------------------------------------------
     BANNER LIGHTBOX
     Opened by the banner thumbnail and by the CTA beside it. Closes on
     the X, the backdrop, or Escape, and returns focus where it started.
     ------------------------------------------------------------------ */
  var lightbox = document.getElementById("banner-lightbox");
  if (lightbox) {
    var lastFocused = null;

    var openLightbox = function () {
      lastFocused = document.activeElement;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      var closeBtn = lightbox.querySelector("[data-lightbox-close]");
      if (closeBtn) closeBtn.focus();
    };

    var closeLightbox = function () {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    };

    var openers = document.querySelectorAll("[data-lightbox-open]");
    for (var o = 0; o < openers.length; o++) {
      openers[o].addEventListener("click", openLightbox);
    }

    // Backdrop and close button both dismiss; clicks on the image do not.
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || (e.target.closest && e.target.closest("[data-lightbox-close]"))) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }

  /* ---------- Stat count-up ---------- */
  var counters = document.querySelectorAll("[data-count]");
  function format(num) { return Math.round(num).toLocaleString("en-US"); }
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target)) return;
    var duration = 1400;
    var start = null;
    function tick(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = format(target * eased);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = format(target);
    }
    requestAnimationFrame(tick);
  }
  if (counters.length && !reduceMotion && "IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      for (var c = 0; c < entries.length; c++) {
        if (entries[c].isIntersecting) {
          animateCount(entries[c].target);
          cio.unobserve(entries[c].target);
        }
      }
    }, { threshold: 0.6 });
    for (var k = 0; k < counters.length; k++) cio.observe(counters[k]);
  }
})();
