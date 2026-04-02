# PACT Lab Website

Precision Audiology & Clinical Translation Lab — University of Pittsburgh

---

## Quick start

Push all files to your GitHub repo root, then enable Pages:
**Settings → Pages → Branch: main → Save**

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## File structure

```
pact-lab/
├── index.html
├── research.html
├── publications.html
├── people.html
├── news.html
├── participate.html
├── assets/
│   ├── css/style.css      ← all styles
│   ├── js/main.js         ← active nav state
│   └── images/            ← add logo.jpg + headshots here
└── README.md
```

---

## Adding your logo

Place your logo file at `assets/images/logo.jpg`. It is already referenced in every page's nav and hero — no code changes needed.

---

## Adding lab members (`people.html`)

Duplicate the `.m-card` block and fill in:

- `.m-name` — full name
- `.m-role` — e.g. AuD Student, PhD Student, Postdoc, Research Coordinator
- `.m-focus` — 1–2 sentence research description

**Avatar options:**

```html
<!-- Option A: initials -->
<div class="m-av initials">AB</div>

<!-- Option B: headshot -->
<div class="m-av"><img src="assets/images/name.jpg" alt="Name"></div>
```

Remove the `join-card` block once the lab is fully staffed.

---

## Adding news items (`news.html`)

Duplicate a `.news-card` block and update the date, headline, and description.

To use a real photo, replace the gradient `div` inside `.news-img` with:

```html
<div class="news-img">
  <img src="assets/images/your-photo.jpg" alt="Description">
</div>
```

---

## Adding publications (`publications.html`)

Duplicate a `.pub` block within the appropriate section and fill in the title, authors, venue, and link `href` values. The dashed placeholder entries are there as formatting guides — delete them once you have real content.

Update the Google Scholar link in the page header when ready.

---

## Updating participant contact email (`participate.html`)

Two `mailto:` links near the bottom of the page currently read `pactlab@pitt.edu`. Update both to whichever address you want participant inquiries sent to.

---

## Custom domain (optional)

To use a custom domain (e.g. `pactlab.pitt.edu`):

1. Add a file called `CNAME` to the repo root containing just your domain:
   ```
   pactlab.pitt.edu
   ```
2. Configure the DNS with your institution's IT team.
3. Update the domain in GitHub under Settings → Pages.