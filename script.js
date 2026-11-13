:root {
  --bg: #0f120f;
  --bg-soft: #111813;
  --panel: rgba(255,255,255,0.03);
  --panel-strong: rgba(255,255,255,0.05);
  --line: rgba(255,255,255,0.08);
  --text: #ebf3ea;
  --muted: #aebbb2;
  --accent: #a7f56d;
  --accent-2: #8ad6f5;
  --shadow: rgba(21, 31, 24, 0.8);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(167, 245, 109, 0.18), transparent 32%),
    radial-gradient(circle at bottom right, rgba(138, 214, 245, 0.16), transparent 28%),
    var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  letter-spacing: -0.02em;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(rgba(255,255,255,0.06) 0.7px, transparent 0.7px);
  background-size: 10px 10px;
  mask-image: radial-gradient(circle at center, black, transparent 88%);
  opacity: 0.18;
}

.topbar,
.hero,
.section,
footer {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0 20px;
  border-bottom: 1px solid var(--line);
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);
  background: rgba(15,18,15,0.7);
  z-index: 50;
}

.brand {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.08em;
}
.brand span { color: var(--accent); }

.nav {
  display: flex;
  align-items: center;
  gap: 32px;
  color: var(--muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}
.nav a { transition: color 180ms ease; }
.nav a:hover { color: var(--text); }

.mini-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--text);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 0 18px rgba(167, 245, 109, 0.8);
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  min-height: calc(100vh - 110px);
  gap: 40px;
  padding: 60px 0 40px;
}

.eyebrow,
.section-tag {
  margin: 0 0 24px;
  color: var(--muted);
  letter-spacing: 0.17em;
  font-size: 0.7rem;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  font-size: clamp(3rem, 7vw, 6.6rem);
  line-height: 0.92;
  letter-spacing: -0.08em;
  font-weight: 700;
}
.accent { color: var(--accent); }

.typed {
  color: var(--accent-2);
  font-weight: 600;
}
.cursor {
  display: inline-block;
  color: var(--accent);
  animation: blink 0.9s infinite;
}
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.summary {
  max-width: 620px;
  margin-top: 26px;
  font-size: 1.08rem;
  color: var(--muted);
  line-height: 1.8;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 34px;
}
.primary,
.secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}
.primary {
  background: linear-gradient(135deg, var(--accent), #daf9b8);
  color: #0e120d;
  font-weight: 800;
}
.secondary {
  border: 1px solid var(--line);
  color: var(--text);
  background: rgba(255,255,255,0.015);
}
.primary:hover,
.secondary:hover,
.project a:hover,
.contact-wrap a:hover {
  transform: translateY(-1px);
}

.hero-visual {
  position: relative;
  min-height: 520px;
  display: grid;
  place-items: center;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(0.2px);
}
.orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at 35% 35%, rgba(167,245,109,0.82), rgba(96,128,75,0.5) 35%, rgba(15,18,15,0.3) 100%);
  box-shadow: 0 20px 60px rgba(148, 237, 107, 0.18);
  right: 85px;
  top: 80px;
}
.orb-2 {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle at 30% 35%, rgba(138,214,245,0.8), rgba(61,103,133,0.42) 42%, rgba(15,18,15,0.2) 100%);
  bottom: 70px;
  left: 70px;
  box-shadow: 0 20px 60px rgba(138,214,245,0.18);
}
.orb-3 {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, rgba(255,255,255,0.8), rgba(167,245,109,0.15));
  right: 180px;
  bottom: 90px;
  border: 10px solid rgba(15,18,15,0.4);
}
.ring {
  position: absolute;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50%;
}
.ring-1 {
  width: 420px;
  height: 420px;
  right: 18px;
  top: 20px;
}
.ring-2 {
  width: 500px;
  height: 500px;
  left: 22px;
  bottom: 5px;
}
.label {
  position: absolute;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.label-top {
  top: 26px;
  right: 30px;
}
.label-bottom {
  bottom: 22px;
  left: 15px;
}

.section {
  padding: 90px 0;
  border-top: 1px solid var(--line);
}

.about-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 32px;
  align-items: start;
}
.about-layout h2,
.contact-wrap h2 {
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.08em;
}
.about-copy { color: var(--muted); }
.about-copy p {
  margin: 0 0 28px;
  max-width: 660px;
  font-size: 1.04rem;
  line-height: 1.9;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tags span {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text);
}

.section-head {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: end;
  margin-bottom: 28px;
}
.section-head p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.projects {
  display: grid;
  gap: 28px;
}
.project {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.015));
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 18px;
  box-shadow: 0 18px 50px rgba(0,0,0,0.16);
}
.project.large {
  padding-bottom: 12px;
}
.project-meta {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 8px 18px;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}
.project-body {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;
  align-items: stretch;
}
.project-visual {
  min-height: 300px;
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 18px;
  background: rgba(255,255,255,0.025);
}
.mockup {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.window-bar {
  display: flex;
  gap: 8px;
  padding-bottom: 8px;
}
.window-bar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.18);
}
.window-bar span:first-child { background: #baf67f; }
.window-bar span:nth-child(2) { background: #8ad6f5; }
.window-bar span:nth-child(3) { background: #d5d9d3; }
.chat-box {
  flex: 1;
  border-radius: 18px;
  padding: 18px;
  border: 1px solid var(--line);
  background: rgba(12,16,13,0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}
.bubble {
  max-width: 76%;
  padding: 14px 16px;
  border-radius: 14px;
  line-height: 1.6;
  font-size: 0.9rem;
}
.bubble.user {
  align-self: flex-end;
  background: rgba(167,245,109,0.12);
  color: var(--text);
  border: 1px solid rgba(167,245,109,0.2);
}
.bubble.bot {
  align-self: flex-start;
  background: rgba(138,214,245,0.08);
  border: 1px solid rgba(138,214,245,0.2);
  color: var(--muted);
}
.project-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 8px 10px 0;
}
.project-text h3 {
  margin: 0 0 12px;
  font-size: clamp(1.8rem, 2.2vw, 2.8rem);
  letter-spacing: -0.08em;
}
.project-text p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
  font-size: 1rem;
}
.project a,
.contact-wrap a {
  display: inline-flex;
  align-items: center;
  margin-top: 24px;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.68rem;
}

.contact-wrap {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  padding-top: 12px;
}
.contact-wrap a {
  margin-top: 0;
  padding: 12px 18px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255,255,255,0.02);
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 0 32px;
  color: var(--muted);
  font-size: 0.76rem;
  border-top: 1px solid var(--line);
}
.footer-brand {
  font-size: 1.1rem;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 52px;
  }
  .hero-visual {
    min-height: 360px;
  }
  .about-layout,
  .project-body,
  .contact-wrap,
  .section-head {
    grid-template-columns: 1fr;
    display: grid;
  }
  .section-head,
  .contact-wrap {
    justify-content: start;
    align-items: start;
  }
  .project-text { padding: 0; }
}

@media (max-width: 620px) {
  .topbar {
    flex-wrap: wrap;
    gap: 14px;
    padding-top: 18px;
  }
  .nav {
    order: 3;
    width: 100%;
    justify-content: center;
    gap: 18px;
  }
  .topbar,
  .hero,
  .section,
  footer {
    width: min(100% - 28px, 1180px);
  }
  .hero {
    min-height: auto;
  }
  .summary {
    font-size: 0.98rem;
  }
  .actions {
    flex-direction: column;
    align-items: flex-start;
  }
  .project-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  .project-visual {
    min-height: 220px;
  }
  footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
