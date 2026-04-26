/* ============================================================
   In2Cell — Nav logo animations
   ------------------------------------------------------------
     - Wipe-reveal: periodic clip-path reveal (1.9s, every 18s)
                    with the logo fading in 40% -> 100% opacity
     - Glitch:      hover-only RGB-split shake (~0.55s)
   Respects prefers-reduced-motion. Pauses on hidden tab.
============================================================ */
(function(){
  'use strict';

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var navLogo = document.querySelector('.nav .logo');
  if (!navLogo) return;
  var navImg = navLogo.querySelector('img');
  if (!navImg) return;

  var WIPE_MS   = 1900;
  var WIPE_IDLE = 18000;
  var GLITCH_MS = 600;
  var navPlaying = false;
  var hoverLock  = false;

  function playWipe(){
    if (navPlaying) return;
    navPlaying = true;
    navImg.classList.remove('is-revealing');
    void navImg.offsetWidth;
    navImg.classList.add('is-revealing');
    setTimeout(function(){
      navImg.classList.remove('is-revealing');
      navPlaying = false;
    }, WIPE_MS);
  }

  function glitch(){
    navImg.classList.remove('is-glitching');
    void navImg.offsetWidth;
    navImg.classList.add('is-glitching');
    setTimeout(function(){ navImg.classList.remove('is-glitching'); }, GLITCH_MS);
  }

  setTimeout(playWipe, 700);
  setInterval(function(){ if (!document.hidden) playWipe(); }, WIPE_IDLE);

  navLogo.addEventListener('mouseenter', function(){
    if (hoverLock) return;
    hoverLock = true;
    setTimeout(function(){ hoverLock = false; }, 1200);
    glitch();
  });
})();
