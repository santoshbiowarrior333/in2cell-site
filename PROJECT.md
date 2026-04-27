# In2Cell Biosciences — Website Project Documentation

**Live URL:** https://in2cell.com
**Repository:** https://github.com/santoshbiowarrior333/in2cell-site
**Status:** Live in **Coming Soon mode** (landing page only + reachable contact page)
**Last major update:** April 2026
**Owner:** Santosh Kumar (Founder & CTO, In2Cell Biosciences)

---

## 1. Project Overview

A static, single-domain marketing website for **In2Cell Biosciences** — a biotech building a DNA break detection platform powered by nanopore sequencing and AI.

The site was built page-by-page in a single working folder (no framework, no build step) so it's straightforward to edit and deploy. Currently published in **Coming Soon mode** — visitors see only a landing hero with a "Get in touch" button that leads to the contact page; all other content (team, technology, applications, news, etc.) is built but hidden until launch.

### Core purpose
- Public-facing brand presence at `in2cell.com`
- Single contact funnel for investors, recruits, collaborators
- Quietly built infrastructure ready to expose more sections (or full site) when company is ready

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| **Framework** | None — plain HTML / CSS / vanilla JavaScript |
| **CSS** | Inline `<style>` per page (single-file pattern) |
| **JavaScript** | Inline `<script>` per page + 2 small shared files (`seasonal.js`, `nav-logo.js`) |
| **Animations** | CSS keyframes + Canvas API + LottieFiles player |
| **Fonts** | Google Fonts — Poppins (headings), Space Grotesk (body), JetBrains Mono (code) |
| **Hosting** | GitHub Pages (free tier, static) |
| **Domain registrar** | GoDaddy (`in2cell.com` registered there) |
| **DNS** | GoDaddy (apex A records → GitHub Pages IPs) |
| **Email** | Microsoft 365 via GoDaddy Professional Email (MX records intact) |
| **SSL** | Let's Encrypt via GitHub Pages (auto-managed) |
| **Version control** | Git + GitHub |

### Why no framework?
Single-file HTML is easier to maintain solo, faster to load, doesn't break when frameworks update, ranks well in SEO (no JS-rendered content), and has zero build complexity. Anyone with a text editor can edit it.

---

## 3. File Structure

```
website_example/
├── .gitignore                    # Excludes _archive/, drafts, OS files
├── CNAME                         # Tells GitHub Pages to serve in2cell.com
├── LICENSE                       # Proprietary copyright notice
├── PROJECT.md                    # ← This file
├── favicon.svg                   # Stylised DNA-helix favicon (currently UNUSED — Asset_1 used instead)
├── nav-logo.js                   # Animated nav logo (wipe-reveal + glitch-on-hover)
├── seasonal.js                   # Christmas snowflake effect (auto-active Dec 1 - Jan 6)
│
├── index.html                    # Landing page (Coming Soon mode active)
├── technology.html               # Tech / AnaLog platform page (currently redirects to /)
├── precision-medicine.html       # 95-disease atlas (cancer / neuro / progeroid / immuno) (redirects to /)
├── applications.html             # Application areas + pipeline table (redirects to /)
├── publications.html             # Publications page (redirects to /)
├── careers.html                  # Open roles (redirects to /)
├── contact.html                  # Contact form + addresses + map (LIVE — no nav)
│
├── images/
│   ├── ai-flow.json              # Lottie animation for technology page
│   ├── logos/
│   │   ├── in2cell.svg           # In2Cell wordmark (used as favicon + hero logo)
│   │   ├── oxford.svg            # University of Oxford
│   │   ├── mrc.png               # MRC (UKRI)
│   │   ├── bbsrc.png             # BBSRC (UKRI)
│   │   ├── crh.svg               # Cancer Research Horizons
│   │   ├── hq.png                # HQ Science (Umbizo collaborator)
│   │   └── umbizo.gif            # Umbizo (white-on-transparent)
│   └── team/
│       ├── Photo_santosh-cropped2.jpg   # Santosh Kumar
│       ├── Fumiko_esashi.png            # Prof. Fumiko Esashi
│       ├── _d8e3693-2_square.jpg        # Dr. Mike Boemo
│       └── shivani.jpg                  # Dr. Shivani Patel
│
├── _archive/                     # Old / superseded files (gitignored, not deployed)
│   ├── CONTENT.md                # Original placeholder template
│   ├── DEPLOY.md
│   ├── LOTTIE_GUIDE.md
│   ├── README.txt
│   └── in2cell-logo.svg          # Old hand-drawn logo
│
└── In2cell/                      # Empty leftover folder (can be deleted)
```

---

## 4. Pages & Sections

### `index.html` — Landing page
- **Hero**: animated logo + radar pill ("DNA damage. On your radar.") + headline ("Reading the breaks in every strand.") + lede + "Get in touch" button
- **About / Mission / Vision / Approach** (3-card grid) — *currently hidden*
- **Application areas** (4 cards: Cancer / Neurodegeneration / Premature ageing / Gene therapy) — *currently hidden*
- **Platform teaser** (links to technology.html) — *currently hidden*
- **Research applications** (5 service cards) — *currently hidden*
- **Team section** (8 cards: Santosh, Fumiko, Mike Boemo, Shivani, plus 4 open roles: CEO, CFO, CDO, QA Manager + Research Scientist & Associate roles) — *currently hidden*
- **Timeline / Milestones** (deactivated even before Coming Soon mode)
- **News / Publications** (3 cards) — *currently hidden*
- **Investor section** ("Pre-seed round opening" + £140k grants from BBSRC + Guy Newton) — *currently hidden*
- **Supported by** (Oxford, MRC, BBSRC, CRH) + **In collaboration with** (Umbizo, HQ Science) — *currently hidden*
- **Contact form** (mailto:) — *currently hidden*
- **Newsletter** — *currently hidden*
- **Footer** — *compacted to single line in Coming Soon mode*

### `contact.html` — Contact page (live, no nav)
- Contact form (mailto, sends to both `shashisantosh2007@gmail.com` and `path1327@ox.ac.uk`)
- Direct contacts (both emails)
- Registered office: 27 Little Hay Road, Oxford OX4 3EG
- Laboratory: Sir William Dunn School of Pathology, University of Oxford, South Parks Road, OX1 3RE
- Embedded Google Map (pinned to Dunn School)
- Footer (compact)
- **Nav menu hidden** — visitors can't navigate from here to other pages

### `technology.html` — AnaLog platform deep-dive
- Hero with company tagline + "LIVE · MOTION" Lottie animation
- 6-stage AnaLog pipeline (sample prep → sequencing → basecalling → break calling → context annotation → reporting)
- DNA cell-to-break zoom animation with moving "current" pulses through SSB and DSB diagrams
- Live terminal (fake basecalling output)
- AI models (NeuroBase, BreakSeer, ContextNet)
- *Currently redirects to / via meta refresh*

### `precision-medicine.html` — 95-disease atlas
- 50 cancer types (filterable by Solid / Heme / Pediatric, plus High/Mid/Low instability)
- 15 neurodegeneration disorders
- 15 progeroid syndromes
- 15 immunodeficiency / V(D)J disorders
- Each card shows density plot, drug sensitivity, treatment mix, KPIs
- *Currently redirects to / via meta refresh*

### `applications.html` — Application areas
- 3 cards: Genotoxicity Screening, DDR Biology & Gene Editing, Tumor Genomic Instability Profiling
- Pipeline readiness table (Cancer/HRD, Neurodegeneration, Premature Ageing, Gene Therapy/V(D)J)
- *Currently redirects to / via meta refresh*

### `publications.html` — Publications
- Single empty-state card ("First publication coming soon" — methods paper for AnaLog in preparation)
- *Currently redirects to / via meta refresh*

### `careers.html` — Open roles
- 6 role cards: CEO, CFO, CDO, QA Manager, Research Scientist, Research Associate
- Each with description + Oxford location + mailto application link
- "Why work with us" cards (Remote-first GMT, mission-driven, etc.)
- *Currently redirects to / via meta refresh*

---

## 5. Design System

### Colours (`--variables` in `:root`)
| Variable | Hex | Use |
|---|---|---|
| `--navy` | `#0f2746` | Deep navy |
| `--navy-2` | `#0a1a33` | Background variants |
| `--teal` | `#1fa899` | Primary accent |
| `--teal-bright` | `#2fd4c1` | Headlines, buttons, accents |
| `--leaf` | `#7dc242` | Lime green (DNA "2", success states) |
| `--ink` | `#0a1020` | Page background |
| `--ink-2` | `#0d1528` | Card background |
| `--fog` | `#8aa0bd` | Muted text |
| `#e5ecf8` | (white-ish) | Body text |

### Typography
- **Poppins** 400-900 — headings, buttons, wordmarks
- **Space Grotesk** 400-700 — body text, captions
- **JetBrains Mono** 700 — monospace (terminal sims, base letters)

### Brand identity
- **Tagline:** "DNA damage. On your radar." / "Reading the breaks in every strand."
- **Logo:** wide wordmark with stylised DNA helix in the "2" of "In2Cell". White text on dark navy backgrounds.
- **Favicon:** uses `images/logos/in2cell.svg` (the full wordmark — looks squashed at 16×16 but consistent with brand). Alternative `favicon.svg` exists in root (DNA helix on dark disc) if a square favicon is preferred later.

---

## 6. Features Built

### Visual / interactive
- **Animated nav logo**: clip-path wipe-reveal every 18 s + glitch shake on hover (`nav-logo.js`)
- **Particle network** in hero (Canvas)
- **Floating molecules** in hero (CSS animations)
- **Radar slogan pill** with rotating sweep
- **DNA helix zoom animation** (cell → chromosome → helix → break) with moving current pulses (technology page)
- **Live terminal** simulation (fake AnaLog log output, technology page)
- **Hover lift / tilt cards** (3D perspective on team and application cards)
- **Scroll reveals** (IntersectionObserver — fade-in on scroll for `.reveal` elements)
- **Stagger-on-scroll** (cards animate in sequence)
- **3D pipeline diagram** (technology page)
- **Density plots, KPI mini-charts** (precision medicine page)

### Functional
- **Christmas snowflakes** (`seasonal.js`) — auto-activates Dec 1 - Jan 6, falling 6-point crystals + snow drift along bottom of page + snow cap on hero logo. Respects `prefers-reduced-motion`. Override with `?snow=on` or `?snow=off`.
- **Mailto contact form** (no backend) — sends to both `shashisantosh2007@gmail.com` and `path1327@ox.ac.uk`
- **Bio modals** (click team member → opens detailed biography modal)
- **Filter chips** on precision medicine page (Solid / Heme / Pediatric × High/Mid/Low instability)
- **Mobile menu** (hamburger nav for narrow screens)
- **Scroll progress bar** (top of page)
- **Back-to-top button** (appears after scrolling)
- **Magnetic buttons** (subtle cursor-follow effect on CTAs)

### SEO / metadata
- Page-specific `<title>` tags (Technology — In2Cell, Contact — In2Cell, etc.)
- Page-specific `<meta description>` tags
- Open Graph tags on `index.html` (for LinkedIn / Slack / WhatsApp link previews)
- Twitter card tags on `index.html`
- Favicon link on every page

---

## 7. Content Inventory

### Mission, Vision, Approach (alt versions, currently in code)
- **About subhead**: *"Where single-molecule genomics, deep bioinformatics, and machine learning converge to make DNA damage visible at the resolution disease actually happens."*
- **Mission**: *"To turn invisible DNA damage into actionable signal — giving every patient, every therapy, and every cell a clear readout of genome integrity."*
- **Vision**: *"A future in which DNA damage is no longer the silent driver of disease, but a measurable, interpretable, and treatable signal at the heart of every diagnosis and every cure."*
- **Approach**: *"Long-read nanopore sequencing + custom bioinformatics + deep learning, productised as **AnaLog** — the first platform to map double-strand breaks at single-base resolution, genome-wide."*

### Team (8 cards in code)
| # | Name | Role | Status |
|---|---|---|---|
| 1 | Open role | Chief Executive Officer (CEO) | Actively recruiting |
| 2 | **Dr. Santosh Kumar** | Founder · Chief Technology Officer (CTO) | Confirmed |
| 3 | Open role | Chief Financial Officer (CFO) | Actively recruiting |
| 4 | **Prof. Fumiko Esashi** | Co-founder · Scientific Advisor | Confirmed |
| 5 | **Dr. Mike Boemo** | Scientific Advisor (DNAscent, U. Cambridge) | Confirmed |
| 6 | **Dr. Shivani Patel** | Co-founder · Scientific Advisor (Oncology) | Confirmed |
| 7 | Open role | Chief Data Officer (CDO) | Actively recruiting |
| 8 | Open role | Quality Assurance Manager | Actively recruiting |

Plus on careers page: Research Scientist (wet lab) + Research Associate (open).

### Funding (£140k total grant funding to date)
- **BBSRC** — £80k
- **Guy Newton Translational Award** (Sir William Dunn School of Pathology, University of Oxford) — £60k
- **Round status:** Pre-seed opening

### Supporters (logos on supported-by strip)
- University of Oxford
- MRC (UKRI)
- BBSRC (UKRI)
- Cancer Research Horizons

### Collaborators
- **Umbizo** (https://www.umbizo.co.uk) — text wordmark + GIF logo
- **HQ Science** (https://hq-science.com) — purple DNA helix wordmark logo

### Application areas (95-disease atlas on precision-medicine page)
- 50 cancer types (Solid tumours: BRCA breast, glioblastoma, PDAC, MSI-H colorectal, HRD ovarian, etc.; Hematologic: AML, ALL, CML, etc.; Pediatric: Ewing, neuroblastoma, etc.)
- 15 neurodegeneration disorders (Ataxia-telangiectasia, Huntington, ALS, Alzheimer's, Parkinson's, Friedreich's ataxia, etc.)
- 15 progeroid syndromes (Hutchinson-Gilford, Werner, Cockayne, xeroderma pigmentosum, Bloom, etc.)
- 15 immunodeficiency / V(D)J (SCID variants, Fanconi anaemia, Nijmegen, hyper-IgM, etc.)

---

## 8. Hosting & DNS Configuration

### GitHub Pages
- **Repo:** https://github.com/santoshbiowarrior333/in2cell-site
- **Source:** Deploy from a branch — `main` / `(root)`
- **Custom domain:** `in2cell.com`
- **Enforce HTTPS:** ✅ Enabled (Let's Encrypt cert auto-issued)
- **Build:** No build step (plain static HTML)
- **Deployment trigger:** Every `git push` to `main` triggers auto-deploy in 30-60 sec

### GoDaddy DNS records (final state)

| Type | Name | Value | TTL |
|---|---|---|---|
| **A** | @ | `185.199.108.153` | 600 sec |
| **A** | @ | `185.199.109.153` | 600 sec |
| **A** | @ | `185.199.110.153` | 600 sec |
| **A** | @ | `185.199.111.153` | 600 sec |
| **CNAME** | www | `in2cell.com.` (apex alias) | 1 hour |
| **CNAME** | email | `email.secureserver.net.` | 1 hour |
| **CNAME** | lyncdiscover | `webdir.online.lync.com.` | 1 hour |
| **CNAME** | msoid | `clientconfig.microsoftonline-p.net.` | 1 hour |
| **CNAME** | sip | `sipdir.online.lync.com.` | 1 hour |
| **CNAME** | _domainconnect | `_domainconnect.gd.domaincontrol.com.` | 1 hour |
| **MX** | @ | `in2cell-com.mail.protection.outlook.com.` | 1 hour |
| **TXT** | @ | `NETORG19139396.onmicrosoft.com` | 1 hour |
| **TXT** | @ | `v=spf1 include:secureserver.net -all` | 1 hour |
| **TXT** | _dmarc | `v=DMARC1; p=reject; ...` | 1 hour |
| **SRV** | _sip._tls.@ | `100 1 443 sipdir.online.lync.com.` | 1 hour |
| **SRV** | _sipfederationtls._tcp.@ | `100 1 5061 sipfed.online.lync.com.` | 1 hour |
| **NS** | @ | `ns13.domaincontrol.com.` / `ns14.domaincontrol.com.` | system |

### Email (Microsoft 365 via GoDaddy)
- MX records routed to Microsoft 365 (`outlook.com`)
- SPF, DKIM, DMARC configured
- Microsoft Teams / Lync auto-discovery records present
- All `@in2cell.com` email continues to work — DNS migration to GitHub Pages did NOT disrupt email

---

## 9. Operating Manual

### Edit content and deploy
```bash
cd C:\Users\Santosh\Documents\website_example
# (edit any HTML / CSS / JS / image file in your editor)
git add .
git commit -m "describe what changed"
git push
```
**Site updates in ~30-60 seconds** after push completes.

### Re-activate sections one by one
Open `index.html` → find the **`COMING SOON MODE`** CSS block at the top of the `<style>` section (around line 24). Each hidden section has its own selector in the list — delete a selector to bring that section back. For example, removing `#team,` reveals the team section.

### Re-activate the FULL site
1. **`index.html`** → delete the entire `COMING SOON MODE` CSS block
2. **`contact.html`** → delete the `COMING SOON MODE — contact page only` CSS block
3. **`technology.html`, `applications.html`, `careers.html`, `publications.html`, `precision-medicine.html`** → in each, delete the line:
   ```html
   <meta http-equiv="refresh" content="0; url=/"/>
   ```
4. (Optional) Restore the original two CTA buttons on the hero ("See the pipeline" + "Meet the team") instead of the single "Get in touch" button
5. `git push`

### Take site fully offline
GitHub repo → Settings → Pages → **Source** dropdown → "**None**" → Save.
To re-publish: same dropdown back to "**Deploy from a branch**" → main / root.

### Roll back a bad commit
GitHub repo → **Actions** tab → find the last successful "pages build and deployment" run before the broken one → click → **Re-run all jobs**. Site reverts in ~1 min.

### Disable Christmas snow
Append `?snow=off` to any URL, or open `seasonal.js` and change the date check at the top.

### Test locally
Open any HTML file directly in a browser by double-clicking it. The relative paths to images and JS files all work without a server.

---

## 10. Current Live State (Coming Soon mode)

| URL | What visitors see |
|---|---|
| `https://in2cell.com` | Hero only (logo + radar pill + tagline + "Get in touch" button + footer). No nav menu, no other sections. |
| `https://in2cell.com/contact.html` | Contact form + addresses + Google Map. **No nav menu** (locked-down). |
| `https://in2cell.com/technology.html` | Auto-redirects to `/` (homepage). Content invisible to visitors. |
| `https://in2cell.com/applications.html` | Same — redirects home. |
| `https://in2cell.com/precision-medicine.html` | Same — redirects home. |
| `https://in2cell.com/careers.html` | Same — redirects home. |
| `https://in2cell.com/publications.html` | Same — redirects home. |
| `https://www.in2cell.com` | Auto-redirects to `https://in2cell.com` (apex). |

---

## 11. Outstanding / Future Tasks

### Before lifting Coming Soon mode
- [ ] Verify Dr. Mike Boemo's exact title and Cambridge department against his real profile
- [ ] Verify Dr. Shivani Patel's institution / hospital affiliation
- [ ] Decide what CDO stands for (Chief Data / Diagnostic / Development Officer)
- [ ] Decide if Mike Boemo card stays hidden after re-activation, or comes back

### Content fill-ins (when ready to publish full site)
- [ ] Add real publications when first preprint goes live (replaces "First publication coming soon" empty state on `publications.html`)
- [ ] Real news stories / press coverage (replaces "Press coverage to follow" placeholder on homepage News section)
- [ ] About paragraphs (currently the 3-card Mission/Vision/Approach is filled — but the longer "ABOUT_PARA_1/2/3" body text is removed)
- [ ] Real "Hire an Expert" / consulting CTA if relevant

### Branding / legal
- [ ] Trademark "In2Cell Biosciences" + logo with UK IPO (~£170)
- [ ] File patents on AnaLog technology with IP attorney
- [ ] Set up `hello@in2cell.com` proper Microsoft 365 mailbox (MX records ready, just need to provision the inbox)

### Tech debt / nice-to-haves
- [ ] Add Google Search Console + submit URL for re-indexing (Google's snippet still shows old GoDaddy text)
- [ ] Optimise images (some PNGs / JPGs are large — could use WebP or compression)
- [ ] Add proper deck PDF and link "Request deck →" button to it (currently mailto)
- [ ] Decide on `hello@in2cell.com` vs `info@` vs `contact@` for primary public email
- [ ] Consider migrating to Cloudflare Pages with private GitHub repo (free, hides editing history)
- [ ] Consider proper square favicon (current one is the wide wordmark, looks squashed at 16×16)

### Form handling (future)
- [ ] Replace mailto contact form with proper form service (Formspree, Web3Forms, Netlify Forms) so submissions land directly in inbox without email client opening

---

## 12. Asset Inventory

### Logos used on the site
| File | Used for | Source |
|---|---|---|
| `images/logos/in2cell.svg` | Hero logo, navbar logo, favicon | Original brand asset (Asset_1.svg) |
| `images/logos/oxford.svg` | Supported by — Oxford | University of Oxford brand portal |
| `images/logos/mrc.png` | Supported by — MRC | UKRI brand portal |
| `images/logos/bbsrc.png` | Supported by — BBSRC | UKRI brand portal |
| `images/logos/crh.svg` | Supported by — CRH | Cancer Research Horizons |
| `images/logos/hq.png` | Collaborator — HQ Science | Provided by collaborator |
| `images/logos/umbizo.gif` | Collaborator — Umbizo | Provided by collaborator |

### Team photos
| File | Person |
|---|---|
| `images/team/Photo_santosh-cropped2.jpg` | Dr. Santosh Kumar |
| `images/team/Fumiko_esashi.png` | Prof. Fumiko Esashi |
| `images/team/_d8e3693-2_square.jpg` | Dr. Mike Boemo |
| `images/team/shivani.jpg` | Dr. Shivani Patel |

### Other assets
| File | Use |
|---|---|
| `images/ai-flow.json` | LottieFiles JSON animation for technology page hero |
| `favicon.svg` | Alternative DNA-helix favicon (currently NOT in use — Asset_1 used instead, but available for swap) |

---

## 13. Build History (chronological summary)

This site was built incrementally over several days through an iterative design process. Major milestones:

1. **Initial scaffolding** — multi-page site with hero, team, platform, contact
2. **Logo iterations** — multiple drafts before settling on user's own `Asset_1.svg`
3. **Precision Medicine page** — added with 95 disease cards
4. **Application areas** — homepage links to disease atlas
5. **Mailto contact form** — to `shashisantosh2007@gmail.com` + `path1327@ox.ac.uk`
6. **Team section** — Santosh, Fumiko, Mike, Shivani + 6 open roles
7. **Hero radar pill** — "DNA damage. On your radar." with rotating sweep
8. **Mission / Vision / Approach** — 3-card grid replacing placeholder paragraphs
9. **Application area icons + scanner beam in tech page** — moving "current" through DNA breaks
10. **Funding section** — £140k from BBSRC + Guy Newton, pre-seed opening
11. **Supported-by + Collaborator strips** — institutional logos with brand-faithful styling
12. **Animated nav logo** — wipe-reveal + glitch (after iterating through breath/sheen/scanner versions)
13. **Christmas snow seasonal effect** — auto-activates Dec-Jan
14. **Hosting setup** — GitHub Pages + GoDaddy DNS migration (replaced GoDaddy free Websites + Marketing site)
15. **Coming Soon mode** — locked down to landing + contact only for stealth pre-launch
16. **Favicon + meta tags** — page-specific titles / descriptions / Open Graph tags
17. **Email infrastructure preserved** — Microsoft 365 MX records untouched throughout migration

---

## 14. Quick References

- **Repo:** https://github.com/santoshbiowarrior333/in2cell-site
- **Live site:** https://in2cell.com
- **GitHub Pages settings:** https://github.com/santoshbiowarrior333/in2cell-site/settings/pages
- **GitHub Actions (deploy logs):** https://github.com/santoshbiowarrior333/in2cell-site/actions
- **GoDaddy DNS Manager:** https://dcc.godaddy.com/control/portfolio/in2cell.com/settings
- **Local working folder:** `C:\Users\Santosh\Documents\website_example`
- **Primary contact email:** `shashisantosh2007@gmail.com`
- **Research / partnerships email:** `path1327@ox.ac.uk`
- **Office (registered):** 27 Little Hay Road, Oxford OX4 3EG, UK
- **Lab:** Sir William Dunn School of Pathology, University of Oxford, South Parks Road, OX1 3RE, UK

---

*Document generated April 2026. Update this file as the site evolves so it stays a useful reference.*
