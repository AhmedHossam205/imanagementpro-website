# IMP Website – AI-Assisted Rebuild

> Assessment submission for [imanagementpro.com](https://imanagementpro.com/en/)

I recreated the IMP website using AI-assisted development tools, maintaining the same structure and content sections. The site features a dark editorial design system, responsive layouts, interactive components, and a modular multi-page structure built for scalability.

---

## Project Structure

```
imp-ai-website/
├── index.html        ← Homepage
├── about.html        ← About Us
├── courses.html      ← All Courses
├── blog.html         ← Blog
├── contact.html      ← Contact & Enrollment Form
├── css/style.css     ← Shared design system
├── js/script.js      ← Shared interactions
└── README.md
```

No build tools required — open `index.html` directly in any browser.

---

## AI Tools Used

**1. Claude (Anthropic)**
Used as the primary development tool to analyze the original IMP website, generate the full HTML/CSS/JS codebase, design the component system, write all content, and ensure responsive behavior and accessibility.

**2. AI-Assisted Design Iteration**
Iterative prompting used to refine typography choices (Bebas Neue + Outfit), establish a dark editorial color palette (deep navy + amber gold), and develop a consistent visual language across all five pages.

**3. AI-Assisted Content Generation**
Used to extract, rewrite, and expand on content from the original website including course descriptions, blog articles, FAQ sections, and UI copy.

---

## Features

- Responsive design (mobile-first, all breakpoints)
- Fixed navbar with scroll-shadow and mobile hamburger menu
- Active nav state per page
- Animated scroll-reveal (IntersectionObserver)
- Animated stat counters
- Mission/Vision/About/Values tab system
- Auto-playing testimonial slider with dots + prev/next
- Course filter bar
- Full contact form with success feedback
- Infinite-scroll client logo marquee
- Consistent footer across all pages

---

## Design System

| Token | Value |
|---|---|
| Background | `#0a0a0f` |
| Surface | `#111118` / `#1a1a24` |
| Accent (Gold) | `#f0a500` |
| Display Font | Bebas Neue |
| Body Font | Outfit |

---

*Built by Ahmed Hossam · IMP Assessment Submission · 2025*
