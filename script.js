@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

:root {
  --ink:      #0a0a0f;
  --ink-2:    #111118;
  --ink-3:    #1a1a24;
  --surface:  #22222f;
  --border:   rgba(255,255,255,0.07);
  --border-h: rgba(255,255,255,0.15);
  --gold:     #f0a500;
  --gold-glow:rgba(240,165,0,0.15);
  --white:    #ffffff;
  --muted:    rgba(255,255,255,0.48);
  --muted-2:  rgba(255,255,255,0.22);
  --text:     rgba(255,255,255,0.88);
  --r:        10px;
  --r-lg:     16px;
  --ease:     cubic-bezier(.4,0,.2,1);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Outfit', sans-serif;
  background: var(--ink);
  color: var(--text);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--ink); }
::-webkit-scrollbar-thumb { background: var(--gold); }

/* NAV */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 999;
  height: 66px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 clamp(1.5rem, 5vw, 3.5rem);
  background: rgba(10,10,15,0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: border-color .3s;
}
nav.scrolled { border-color: var(--border-h); }

.nav-logo {
  font-family: 'Bebas Neue', cursive;
  font-size: 1.65rem; letter-spacing: 0.06em;
  color: var(--white); text-decoration: none;
}
.nav-logo span { color: var(--gold); }

.nav-links { display: flex; align-items: center; gap: 0; list-style: none; }
.nav-links a {
  font-size: 0.87rem; font-weight: 500;
  color: var(--muted); text-decoration: none;
  padding: 0.45rem 0.85rem; border-radius: 6px;
  transition: color .18s, background .18s;
}
.nav-links a:hover, .nav-links a.active { color: var(--white); }
.nav-links .nav-cta {
  background: var(--gold); color: var(--ink) !important;
  font-weight: 700; border-radius: 7px;
  padding: 0.42rem 1.1rem; margin-left: 0.5rem;
  transition: background .2s, transform .15s !important;
}
.nav-links .nav-cta:hover { background: #ffc13a; transform: translateY(-1px); }

.hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
.hamburger span { display: block; width: 22px; height: 1.5px; background: var(--white); border-radius: 1px; transition: all .3s; }

/* PAGE HERO */
.page-hero {
  min-height: 380px; padding: 100px clamp(1.5rem,5vw,3.5rem) 4rem;
  background: var(--ink-2); display: flex; align-items: flex-end;
  position: relative; overflow: hidden;
}
.page-hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 55% 90% at 85% 40%, var(--gold-glow), transparent);
  pointer-events: none;
}
.page-hero::after {
  content: ''; position: absolute;
  bottom: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-h), transparent);
}
.page-hero-content { position: relative; max-width: 700px; }
.page-hero h1 {
  font-family: 'Bebas Neue', cursive;
  font-size: clamp(3.5rem, 9vw, 6.5rem);
  letter-spacing: 0.03em; line-height: .92;
  color: var(--white); margin-bottom: 1.2rem;
}
.page-hero p { color: var(--muted); font-size: 1.05rem; line-height: 1.72; max-width: 480px; }
.breadcrumb { font-size: 0.72rem; color: var(--muted-2); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
.breadcrumb a { color: var(--gold); text-decoration: none; }

/* BUTTONS */
.btn {
  display: inline-flex; align-items: center; gap: 0.45rem;
  font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.875rem;
  padding: 0.72rem 1.6rem; border-radius: 8px;
  text-decoration: none; border: none; cursor: pointer; letter-spacing: 0.02em;
  transition: all .2s var(--ease); white-space: nowrap;
}
.btn-gold  { background: var(--gold); color: var(--ink); }
.btn-gold:hover { background: #ffc13a; transform: translateY(-2px); box-shadow: 0 8px 30px var(--gold-glow); }
.btn-ghost { background: transparent; color: var(--white); border: 1px solid var(--border-h); }
.btn-ghost:hover { background: var(--surface); border-color: rgba(255,255,255,.26); }
.btn-surface { background: var(--surface); color: var(--white); border: 1px solid var(--border); }
.btn-surface:hover { background: var(--ink-3); border-color: var(--border-h); transform: translateY(-1px); }

/* LAYOUT */
section { padding: 5.5rem clamp(1.5rem, 5vw, 3.5rem); }
.section-alt { background: var(--ink-2); }
.container { max-width: 1160px; margin: 0 auto; }

.eyebrow {
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 0.8rem;
  display: flex; align-items: center; gap: 0.6rem;
}
.eyebrow::before { content: ''; display: block; width: 22px; height: 1.5px; background: var(--gold); flex-shrink: 0; }
.eyebrow.center { justify-content: center; }

.h-title {
  font-family: 'Bebas Neue', cursive;
  font-size: clamp(2.4rem, 5vw, 4rem);
  letter-spacing: 0.03em; line-height: .95;
  color: var(--white); margin-bottom: 1rem;
}
.h-sub { color: var(--muted); font-size: 1rem; max-width: 480px; line-height: 1.75; }
.sh { margin-bottom: 3.5rem; }
.sh.center { text-align: center; }
.sh.center .h-sub { margin: 0 auto; }

/* GRIDS */
.g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.g3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
.g4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.25rem; }

/* CARD */
.card {
  background: var(--ink-2);
  border: 1px solid var(--border);
  border-radius: var(--r-lg); padding: 2rem;
  transition: border-color .22s, transform .22s;
}
.card:hover { border-color: var(--border-h); transform: translateY(-3px); }

/* BADGE */
.badge {
  display: inline-block;
  background: rgba(240,165,0,.1); border: 1px solid rgba(240,165,0,.22);
  color: var(--gold); font-size: 0.68rem; font-weight: 700;
  padding: 0.2rem 0.6rem; border-radius: 20px; letter-spacing: 0.08em; text-transform: uppercase;
}

/* STAT NUM */
.stat-n {
  font-family: 'Bebas Neue', cursive;
  font-size: 3.6rem; letter-spacing: 0.02em;
  color: var(--white); line-height: 1;
}
.stat-l { font-size: 0.8rem; color: var(--muted); margin-top: 0.3rem; letter-spacing: 0.04em; }

/* RULE */
.rule { border: none; border-top: 1px solid var(--border); }

/* FORM */
input, select, textarea {
  width: 100%; padding: 0.78rem 1rem;
  background: var(--ink-3); color: var(--white);
  border: 1px solid var(--border); border-radius: 8px;
  font-family: 'Outfit', sans-serif; font-size: 0.9rem;
  transition: border-color .2s; outline: none; resize: vertical;
  -webkit-appearance: none;
}
input::placeholder, textarea::placeholder { color: var(--muted-2); }
input:focus, select:focus, textarea:focus { border-color: var(--gold); box-shadow: 0 0 0 3px var(--gold-glow); }
select option { background: var(--ink-3); }
label { display: block; font-size: 0.75rem; font-weight: 600; color: var(--muted); letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 0.4rem; }

/* FOOTER */
footer { background: var(--ink-2); border-top: 1px solid var(--border); padding: 4.5rem clamp(1.5rem,5vw,3.5rem) 2rem; }
.footer-inner { max-width: 1160px; margin: 0 auto; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
.footer-logo { font-family: 'Bebas Neue', cursive; font-size: 1.65rem; letter-spacing: 0.06em; color: var(--white); text-decoration: none; display: inline-block; margin-bottom: 1rem; }
.footer-logo span { color: var(--gold); }
.footer-desc { font-size: 0.87rem; color: var(--muted); line-height: 1.72; }
.footer-col h4 { font-weight: 700; font-size: 0.68rem; color: var(--muted-2); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 1.1rem; }
.footer-col ul { list-style: none; }
.footer-col li { margin-bottom: 0.5rem; }
.footer-col a { color: var(--muted); text-decoration: none; font-size: 0.87rem; transition: color .18s; }
.footer-col a:hover { color: var(--gold); }
.footer-bottom { border-top: 1px solid var(--border); padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.76rem; color: var(--muted-2); flex-wrap: wrap; gap: 0.5rem; }

/* ANIMATIONS */
.fi { opacity: 0; transform: translateY(22px); transition: opacity .5s var(--ease), transform .5s var(--ease); }
.fi.v { opacity: 1; transform: none; }
.fi:nth-child(2) { transition-delay: .07s; }
.fi:nth-child(3) { transition-delay: .14s; }
.fi:nth-child(4) { transition-delay: .21s; }

/* RESPONSIVE */
@media (max-width: 960px) {
  .g3, .g4 { grid-template-columns: 1fr 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
}
@media (max-width: 640px) {
  .nav-links { display: none; flex-direction: column; align-items: stretch; position: absolute; top: 66px; left: 0; right: 0; background: var(--ink-2); border-bottom: 1px solid var(--border-h); padding: 0.75rem 1.5rem 1.25rem; }
  .nav-links.open { display: flex; }
  .nav-links a { padding: 0.65rem 0.25rem; }
  .hamburger { display: flex; }
  .g2, .g3, .g4 { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; gap: 1.5rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
}
