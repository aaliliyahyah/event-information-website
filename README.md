# SET Days 2026 — Build What’s Next

A static event information website for **SET Days 2026** (December 2–4, 2026) at the School of Engineering and Technology, National University Fairview.

## Overview

The website provides attendees and students with an organized guide to the three-day program, including featured activities, an interactive schedule, campus venues, and workshop check-in details.

## Sections

- **Header & Navigation** — National University branding and section anchor links.
- **Hero** — Event headline, quick navigation actions, and a 4-photo NU Fairview campus collage.
- **About** — Overview of the three-day event and target participants.
- **Activities** — Six featured sessions, participation steps, and key terms.
- **Schedule** — Three-day program layout (`Dec. 2–4`) with interactive day filter buttons (`All Days`, `Day 1`, `Day 2`, `Day 3`).
- **Venue** — Campus space directory covering the Exhibit Hall, Computer Lab, and Assembly Hall.
- **Highlights** — Spotlight on the Web Development Workshop, Robotics Challenge, and Project Showcase.
- **Participate** — Step-by-step joining guide and a workshop check-in reminder card.
- **Footer & Contact** — Quick links, campus address, and organizing committee contact email.

## Tech Stack

- HTML5 (`index.html`)
- CSS3 (`css/style.css`)
- Vanilla JavaScript (`js/script.js`)

## Project Structure

```text
event-information-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── favicon.svg
    ├── nu-logo.webp
    ├── nu-fairview-campus.webp
    ├── nu-fairview-students.webp
    ├── nu-fairview-study.webp
    └── nu-set-engineering.webp
```

## Running Locally

Open `index.html` directly in any web browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Content Note

This website uses AI-generated data for its event content (including schedule entries, activity descriptions, venue details, and organizer information).
