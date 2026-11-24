# READI Nepal: Website Redesign Concept

A redesign concept for **[readi.org.np](https://readi.org.np/)**, the website of **Rural Empowerment and Development Initiative (READI)** (ग्रामीण सशक्तिकरण तथा विकास पहल), a volunteer-led Nepali NGO founded in Humla in 2008.

The concept is a set of static HTML pages, in English and Nepali, that use READI's real photos, facts and logo. It's a **design prototype**, not a production site. Forms and payments are mock-ups, and some content still has to be confirmed by READI (see [Still needed from READI](#still-needed-from-readi)).

---

## Run it locally

You need [Node.js](https://nodejs.org/). Nothing else needs installing.

```powershell
node tools/serve.mjs web 4399
```

Then open:

- English: <http://localhost:4399/>
- Nepali: <http://localhost:4399/ne/readi-home-concept.html>

The `.html` files also open directly from disk. The server is still better, because the gallery and the language toggle behave exactly as they would on a live site. The fonts (Google Fonts) and the home/About hero photo (Wikimedia Commons) load from the internet.

---

## Deploy

The home page file stays `web/readi-home-concept.html`.

On Vercel, set the project **Root Directory** to `web` when you can. `web/index.html` then sends `/` to that home page, the same way `tools/serve.mjs` does locally.

If the project publishes the repository root, `vercel.json` redirects `/` and `/index.html` to `/web/readi-home-concept.html`. That redirect keeps image and page links working, because the browser loads the home file from `web/`.

---

## Pages

Each page exists in English (`web/`) and Nepali (`web/ne/`) under the same filename. The **नेपाली / English** link in the header switches between a page and its twin.

| Page | File | What's on it |
|---|---|---|
| Home | `readi-home-concept.html` | Full-bleed Simikot hero, mission, photo mosaic, a Children's Home section where the photo stays pinned while the story scrolls, impact stats, story cards with filters, donate box, newsletter, and an appeal pop-up shown once per visit |
| Children's Home | `children-home.html` | Flagship page: key facts, why the home matters, what sponsorship covers, gallery, the Japan/TRAS partnership, FAQ, sponsor call to action |
| Our Work | `our-work.html` | Six programs (Children's Home, Education, Nutrition & Health, Relief, Volunteer, Local Economy) and where READI works |
| Volunteer | `volunteer.html` | International Volunteer Program: 2 to 6 weeks, homestays, focus areas, the two partner schools, the AIPC Pandora group program, the 2017 video, contacts |
| Gallery | `gallery.html` | 78 photos in 5 albums, a masonry grid, and a full-screen viewer that works with the keyboard |
| Story | `story-childrens-home.html` | Blog post template using the December 2024 handover story, with a reading-progress bar |
| About & Team | `about.html` | Mission, a timeline from 2008 to 2024, team, partners, transparency (registration, reports) |
| Donate | `donate.html` | Donate form (monthly or one time, amount chips, custom amount, fund choice), what each amount does, bank transfer details, giving from Canada via TRAS, membership and sponsorship contact |
| Plan (internal) | `readi-redesign-plan.html` | Research and planning document: audit of the current site, inspiration sites, sitemap, design directions, findings. English only. |

---

## Folder structure

```
readi-redesign/
├── README.md
├── tools/
│   └── serve.mjs              # tiny static server (node tools/serve.mjs web 4399)
└── web/
    ├── *.html                 # English pages
    ├── ne/*.html              # Nepali pages (same filenames)
    ├── site.css               # shared base styles (tokens, header, buttons, sections)
    ├── site-inner.css         # inner-page components (page hero, facts, FAQ, timeline, donate…)
    ├── brand/
    │   ├── readi-logo-transparent.png   # header logo (checkerboard removed, 600px)
    │   ├── readi-logo.jpg               # logo on cream, used as card placeholder
    │   └── logo-original.jpg            # the 50×50 logo from the current site
    └── photos/
        ├── *.jpg              # 16 photos from READI's Facebook page (2020–2024)
        └── gallery/*.jpg|png  # 65 photos from readi.org.np (image gallery + volunteer page)
```

> The home page carries its own copy of the shared styles inline. `site.css` was extracted from it. If you change base styles, update both, or switch the home page to link `site.css`.

---

## Design system

Inspired by **[americaslands.org](https://americaslands.org/)**. Its navy, crimson and gold palette lines up with the Nepali flag.

| Token | Value | Use |
|---|---|---|
| `--navy` | `#0b2e5c` | Headings, impact band, footer |
| `--crimson` | `#b0163e` | Primary buttons, labels, accents |
| `--gold` | `#d4a443` | Stats, secondary labels |
| `--tan` | `#9f8265` | Meta text (dates, places) |
| `--paper` | `#f1ebe0` | Page background (with a subtle paper texture) |

- **Type:** Figtree for English and Mukta for Nepali, both from Google Fonts. Nepali pages set `--font: Mukta, Figtree` and a taller line-height.
- **Signature elements:**
  - transparent header over the hero photo
  - crimson pill labels ("MISSION", "STORIES")
  - a photo mosaic in a rounded box
  - in the Children's Home section, the photo stays pinned while the chapters scroll and the photos crossfade
  - uppercase buttons with ▸
- **Motion:** sections fade in on scroll, and photos zoom slightly on hover. All motion turns off under `prefers-reduced-motion`.
- **Responsive:** below 900px, the layout drops to one column and the nav collapses to a ☰ button. The button doesn't open a menu yet (see To do).

---

## Nepali version

- **Location:** `web/ne/`, with `<html lang="ne">` and `hreflang` links between twins.
- **Digits:** years, counts and amounts use Devanagari digits (२००८, रु. २,०००). Account numbers, SWIFT, emails and URLs stay in Latin digits so they can be copied exactly. The Nepali donate form also accepts amounts typed in Devanagari digits.
- **Glossary** (used across all pages):

| English | Nepali |
|---|---|
| READI / READI Nepal | रेडि / रेडि नेपाल (spelling used by the Nepali press) |
| Rural Empowerment and Development Initiative | ग्रामीण सशक्तिकरण तथा विकास पहल |
| About · Children's Home · Our Work · Volunteer · Gallery · Stories · Donate | हाम्रो बारेमा · बाल गृह · हाम्रो काम · स्वयंसेवा · तस्बिरहरू · कथाहरू · सहयोग गर्नुहोस् |
| Sponsorship · Membership · Monthly | प्रायोजन · सदस्यता · मासिक |
| Malnutrition (severe acute) | कुपोषण (कडा शीघ्र कुपोषण) |
| FCHV | महिला सामुदायिक स्वास्थ्य स्वयंसेविका |
| District Health Office · Social Welfare Council · District Administration Office | जिल्ला स्वास्थ्य कार्यालय · समाज कल्याण परिषद् · जिल्ला प्रशासन कार्यालय |
| Trust (footer) · To confirm | पारदर्शिता · पुष्टि गर्न बाँकी |

> **The Nepali text was translated by AI and has not been reviewed yet.** A native speaker should proofread every page before launch, especially the organization's Nepali name and spelling (रेडि), and the Embassy of Japan quote, which is our own rendering rather than the Embassy's official Nepali wording.

---

## Content sources

| Source | Used for |
|---|---|
| [readi.org.np](https://readi.org.np/) (all pages) | Mission, programs, volunteer program, contacts, 59 gallery photos |
| READI brochure (scanned in the old gallery, about 2011) | DAO/SWC registration, 20 children in 2009 and 30 (half girls) by 2011, $30/month sponsorship, $80 or Rs 7,000 membership, no government funding |
| READI Facebook page ([facebook.com/readi.np](https://www.facebook.com/readi.np)) | 2017–2024 timeline, Japan handover post, 16 photos |
| Embassy of Japan / The Himalayan Times / Spotlight Nepal | Founded 2008; children's home handover 11 Dec 2024; GGP grant USD 124,267 |
| TRAS (tras.ca) | Long-time donor; Humla's first library (2010); Humla Delights café |
| Maresía ONG (maresia.ong) | Changunarayan school support and volunteer camps (from 2019) |
| Bank details | Supplied by the READI team (account 1588/03, RBB Simikot, SWIFT RBBANPKA) |
| Hero photo | "Wonderful Simikot Valley" by Mohan K. Duwal, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via Wikimedia Commons. Credit shown on the page. |
| Logo | Supplied by the READI team. A transparent PNG was made from it by removing the baked-in checkerboard. |

---

## Still needed from READI

Items marked **"To confirm" / "पुष्टि गर्न बाँकी"** on the pages:

- [ ] Registration number (DAO Simikot / SWC)
- [ ] Team and board: names, roles, photos (only Rakesh Shahi and Mim Hamal are known)
- [ ] Current sponsorship and membership amounts (the $30/month and $80/year figures come from the old brochure)
- [ ] What each donation amount pays for (the Rs 1,000 / 2,000 / 5,000 / 25,000 amounts are placeholders)
- [ ] Volunteer fees, visas and what's included
- [ ] eSewa / Khalti merchant setup and QR code; card or PayPal gateway
- [ ] Annual reports and audited accounts (PDFs)
- [ ] Draft FAQ answers on the Children's Home page
- [ ] Whether the old phone number (+977-87-680186) still works
- [ ] **Bank account mismatch:** the old brochure lists account `419000158801`. The site uses `1588/03` as supplied. Retire the old number anywhere it still appears.
- [ ] High-resolution photo originals (the current ones are 300–640px; Facebook images are about 600px)
- [ ] Real logo file as SVG or transparent PNG (the current PNG keeps a faint texture in the glow)
- [ ] Native-speaker review of all Nepali text

### Photo consent: check before launch

- About 10 gallery photos in the **Nutrition program 2016** album show identifiable children being treated for malnutrition. Check consent, and follow dignity guidelines before these go public.
- Five photos have filenames that look like people's names. They're captioned generically ("Community nutrition visit"), but the people should still be checked.
- Some 2020 relief photos show identifiable children.

---

## To do (build)

- [ ] Mobile menu (the ☰ button is still visual only)
- [ ] Choose a platform. The plan recommends WordPress 6 with a block theme and Polylang for the Nepali version. A static site (Astro) is the alternative.
- [ ] Wire up real payments (eSewa/Khalti, Stripe/PayPal), the newsletter signup and the contact form
- [ ] Host fonts and the hero photo locally, and serve optimized/WebP images
- [ ] 301 redirects from the old URLs (`/about-us/`, `/programs/`, `/nutrition-and-health/`, `/image-gallery/`…)
- [ ] Individual pages for each story, linked from the "Read more" buttons
- [ ] Replace placeholder links (`href="#"`: Contact, share buttons)
