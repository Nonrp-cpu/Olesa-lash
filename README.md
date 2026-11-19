# OLESA — lash artist landing page

A warm, minimalist landing page for a lash extension artist. Plain HTML, CSS and JavaScript: no build step, no dependencies.

[![Live Demo](https://img.shields.io/badge/Live-Demo-C9A882?style=for-the-badge&logo=googlechrome&logoColor=white)](https://nonrp-cpu.github.io/Olesa-lash/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/layout-responsive-blueviolet?style=flat-square)

> Built as a custom project. Photos, reviews and some contact details in this public version are demo content.

<!--
Add screenshots later: save them as docs/screenshots/desktop.png and mobile.png,
then uncomment this block.

## Preview

| Desktop | Mobile |
|---|---|
| ![Desktop](docs/screenshots/desktop.png) | ![Mobile](docs/screenshots/mobile.png) |
-->

## Features

| Section | What it has |
|---|---|
| **Hero** | Large typography, gradient, animated statistics counters |
| **Services** | 6 cards with duration and price |
| **Portfolio** | Gallery with a lightbox for enlarged photos |
| **About** | Photo, certificates, materials, social links |
| **Price list** | Tabs: Extensions / Correction / Care |
| **Reviews** | Client cards with a rating |
| **Aftercare** | 6 rules to follow after the procedure |
| **FAQ** | Questions and answers in `<details>` |
| **Booking form** | Name and phone validation, success message |
| **Messengers** | WhatsApp and Telegram buttons |
| **Location** | Address, metro and a route button in Yandex Maps |
| **Responsive** | Phones, tablets, wide screens, mobile menu |

The booking form only validates the fields and shows a message: it does not send data anywhere yet.

## Run locally

Open `index.html` in a browser, or start a local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Customize

- **Texts, services, prices, reviews, FAQ** — directly in `index.html`.
- **Colors and fonts** — design tokens in `:root` at the top of `styles.css`:

  ```css
  --bg: #faf8f5;
  --accent: #c9a882;
  --accent-strong: #b8935f;
  --font-display: "DM Serif Display", Georgia, serif;
  ```

- **Photos** — put your files into `images/` as `work-1.jpg` … `work-6.jpg` and `master.jpg`. If a local file is missing, `script.js` shows a placeholder photo through the `data-fallback` attribute.
- **Contacts** — phone, email and the WhatsApp link in the booking block and in the messenger buttons.

## Project structure

```text
.
├── index.html      # entry point
├── styles.css      # styles and design tokens
├── script.js       # menu, scroll, lightbox, tabs, form
└── images/         # your photos (work-1.jpg … work-6.jpg, master.jpg)
```

## Tech and accessibility

- HTML5, CSS3 (variables, Grid, Flexbox, animations), vanilla JavaScript (ES6), inline SVG icons
- Fonts: Outfit and DM Serif Display (Google Fonts)
- Semantic markup, `aria-label` on buttons, visible focus states
- `prefers-reduced-motion` support
- `IntersectionObserver` for reveal animations and counters
- Lazy-loaded images, mobile menu closes with `Esc`

## Roadmap

- [x] Responsive layout and mobile menu
- [x] Gallery with lightbox, price tabs
- [x] Booking form and messengers
- [ ] Real photos, reviews and contacts
- [ ] Send booking requests to a server or CRM
- [ ] SEO: sitemap and structured data

## Author

**Nonrp-cpu** — [GitHub](https://github.com/Nonrp-cpu)
