/* ============================================================
   In2Cell — Seasonal effect (Christmas snow)
   ------------------------------------------------------------
   Auto-activates between Dec 1 and Jan 6 (Christmas season).
   Renders falling 6-point snowflake crystals + a snow drift
   along the bottom of the viewport + a small snow cap on top
   of the hero logo.

   Manual testing:
     ?snow=on    → force-enable regardless of date
     ?snow=off   → force-disable

   Respects the user's "prefers-reduced-motion" setting and
   pauses when the browser tab is hidden.
   To remove the effect entirely from the site: delete this
   file and the <script src="seasonal.js"> tag in index.html.
============================================================ */
(function(){
  'use strict';

  // 1. Honor accessibility setting
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // 2. URL override
  var override = new URLSearchParams(location.search).get('snow');
  if (override === 'off') return;

  // 3. Date check — only run during Christmas season (Dec 1 – Jan 6)
  function inSeason(){
    if (override === 'on') return true;
    var now = new Date();
    var m = now.getMonth() + 1, d = now.getDate();
    return (m === 12) || (m === 1 && d <= 6);
  }
  if (!inSeason()) return;

  // 4. Inject the small bit of CSS this effect needs
  var style = document.createElement('style');
  style.textContent =
    '#season-snow-canvas{position:fixed;inset:0;pointer-events:none;z-index:9999}'+
    '#season-snow-decor{position:fixed;left:0;right:0;bottom:0;height:230px;pointer-events:none;z-index:9998}'+
    '#season-snow-decor svg{display:block;width:100%;height:100%}'+
    '#snow-cap{position:absolute;left:-2%;right:-2%;top:-22px;height:36px;'+
      'pointer-events:none;z-index:3;'+
      'filter:drop-shadow(0 3px 6px rgba(255,255,255,.45)) drop-shadow(0 2px 2px rgba(0,0,0,.15))}'+
    '#snow-cap svg{width:100%;height:100%;display:block}';
  document.head.appendChild(style);

  // 5. Static decoration: layered snow drift along the bottom of the viewport
  //    (3 layers + sparkle dots so it reads as volume, not a flat band)
  var decor = document.createElement('div');
  decor.id = 'season-snow-decor';
  decor.setAttribute('aria-hidden', 'true');
  decor.innerHTML =
    '<svg viewBox="0 0 1440 230" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">'+
      // back layer — deepest, slightly bluish-white, lowest peaks
      '<path d="M0,150 C 80,110 200,170 340,135 C 480,100 600,175 760,140 C 900,108 1080,170 1240,138 C 1340,118 1400,148 1440,142 L1440,230 L0,230 Z" '+
            'fill="rgba(220,235,250,0.55)"/>'+
      // middle layer — taller waves, mostly opaque
      '<path d="M0,170 C 100,125 240,185 400,150 C 560,115 700,185 880,160 C 1040,130 1220,185 1380,165 C 1410,160 1430,168 1440,167 L1440,230 L0,230 Z" '+
            'fill="rgba(245,250,255,0.78)"/>'+
      // front layer — closest, fluffy lumps via Q curves
      '<path d="M0,195 Q 60,178 120,188 T 240,184 Q 300,165 360,180 T 480,176 Q 540,158 600,172 T 720,168 Q 780,185 840,176 T 960,180 Q 1020,162 1080,176 T 1200,174 Q 1260,156 1320,170 T 1440,170 L1440,230 L0,230 Z" '+
            'fill="rgba(255,255,255,0.98)"/>'+
      // sparkle highlights along the front-layer ridge
      '<g fill="#ffffff">'+
        '<circle cx="120" cy="190" r="2"/><circle cx="240" cy="186" r="1.5"/>'+
        '<circle cx="380" cy="182" r="2"/><circle cx="540" cy="172" r="1.5"/>'+
        '<circle cx="700" cy="166" r="2"/><circle cx="850" cy="176" r="1.5"/>'+
        '<circle cx="1000" cy="180" r="2"/><circle cx="1180" cy="174" r="1.5"/>'+
        '<circle cx="1340" cy="168" r="2"/>'+
      '</g>'+
    '</svg>';
  document.body.appendChild(decor);

  // 6. Snow cap on the hero logo (real SVG, not pseudo-element)
  var heroLogo = document.querySelector('.hero-logo');
  if (heroLogo){
    if (getComputedStyle(heroLogo).position === 'static') heroLogo.style.position = 'relative';
    var cap = document.createElement('div');
    cap.id = 'snow-cap';
    cap.setAttribute('aria-hidden', 'true');
    cap.innerHTML =
      '<svg viewBox="0 0 600 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">'+
        // lumpy organic snow blob along the top edge
        '<path d="M0,30 C 40,18 80,28 120,18 C 160,8 200,25 240,14 C 280,4 320,22 360,12 C 400,4 440,22 480,14 C 520,8 560,24 600,20 L600,40 L0,40 Z" '+
              'fill="rgba(255,255,255,0.97)"/>'+
        // small puffs/drips hanging off the underside
        '<circle cx="60"  cy="34" r="5"   fill="white" opacity="0.95"/>'+
        '<circle cx="170" cy="36" r="4"   fill="white" opacity="0.9"/>'+
        '<circle cx="295" cy="33" r="5.5" fill="white" opacity="0.95"/>'+
        '<circle cx="430" cy="36" r="4"   fill="white" opacity="0.9"/>'+
        '<circle cx="540" cy="34" r="5"   fill="white" opacity="0.95"/>'+
        // tiny sparkles on the cap surface
        '<circle cx="80"  cy="22" r="1.2" fill="#ffffff"/>'+
        '<circle cx="200" cy="14" r="1.5" fill="#ffffff"/>'+
        '<circle cx="340" cy="16" r="1.2" fill="#ffffff"/>'+
        '<circle cx="470" cy="14" r="1.5" fill="#ffffff"/>'+
      '</svg>';
    heroLogo.appendChild(cap);
  }

  // 7. Canvas + DPR-aware sizing
  var cv = document.createElement('canvas');
  cv.id = 'season-snow-canvas';
  cv.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cv);
  var ctx = cv.getContext('2d');
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  function resize(){
    cv.width  = innerWidth  * dpr;
    cv.height = innerHeight * dpr;
    cv.style.width  = innerWidth  + 'px';
    cv.style.height = innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  // 8. 6-point snowflake crystal
  function drawFlake(p){
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.a);
    var len = p.r * 2.4;
    ctx.strokeStyle = 'rgba(255,255,255,' + (0.65 + p.alpha * 0.3) + ')';
    ctx.lineWidth = Math.max(0.8, p.r * 0.25);
    ctx.lineCap = 'round';
    for (var k = 0; k < 6; k++){
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(0, -len);
      ctx.moveTo(0, -len*0.55); ctx.lineTo(-len*0.22, -len*0.78);
      ctx.moveTo(0, -len*0.55); ctx.lineTo( len*0.22, -len*0.78);
      ctx.moveTo(0, -len*0.30); ctx.lineTo(-len*0.18, -len*0.50);
      ctx.moveTo(0, -len*0.30); ctx.lineTo( len*0.18, -len*0.50);
      ctx.stroke();
      ctx.rotate(Math.PI / 3);
    }
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.beginPath(); ctx.arc(0, 0, Math.max(0.6, p.r * 0.18), 0, Math.PI*2); ctx.fill();
    ctx.restore();
  }

  // 9. Particle pool
  var COUNT = 55;
  function spawn(initial){
    return {
      x:     Math.random() * innerWidth,
      y:     initial ? Math.random() * innerHeight : -20 - Math.random() * 200,
      vx:    (Math.random() - 0.5) * 0.8,
      vy:    0.4 + Math.random() * 1.0,
      r:     4 + Math.random() * 5,
      a:     Math.random() * Math.PI * 2,
      ar:    (Math.random() - 0.5) * 0.04,
      alpha: Math.random()
    };
  }
  var particles = [];
  for (var i = 0; i < COUNT; i++) particles.push(spawn(true));

  // 10. Animation loop (with tab-hidden pause)
  var raf;
  function frame(){
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < particles.length; i++){
      var p = particles[i];
      p.x += p.vx; p.y += p.vy; p.a += p.ar;
      p.vx += (Math.random() - 0.5) * 0.015;
      if (p.vx < -1.2) p.vx = -1.2;
      if (p.vx >  1.2) p.vx =  1.2;
      if (p.y > innerHeight + 20){ p.y = -20; p.x = Math.random() * innerWidth; }
      if (p.x < -30) p.x = innerWidth + 30;
      if (p.x > innerWidth + 30) p.x = -30;
      drawFlake(p);
    }
    raf = requestAnimationFrame(frame);
  }
  frame();

  document.addEventListener('visibilitychange', function(){
    if (document.hidden){ cancelAnimationFrame(raf); raf = null; }
    else if (!raf){ raf = requestAnimationFrame(frame); }
  });
})();
