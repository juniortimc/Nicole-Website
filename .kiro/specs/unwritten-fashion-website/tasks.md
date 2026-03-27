# Tasks: Unwritten Fashion Website

## Task 1: Project Setup and Design Tokens

- [x] 1.1 Create project file structure (`index.html`, `css/styles.css`, `js/main.js`, `images/` directory)
- [x] 1.2 Add Google Fonts `<link>` tags for Cormorant Garamond and Inter in `index.html`
- [x] 1.3 Define CSS custom properties in `:root` — colors (`--color-bone`, `--color-sage`, `--color-rose`, `--color-charcoal`), typography (`--font-heading`, `--font-body`), spacing (`--section-padding`, `--grid-gap`), transitions (`--transition-hover`)
- [x] 1.4 Set global base styles — `box-sizing: border-box`, body background `var(--color-bone)`, text color `var(--color-charcoal)`, font-family `var(--font-body)`, smooth scrolling
- [x] 1.5 Add a `max-width` container utility for wide viewport constraint (e.g., 1440px centered)

## Task 2: Shipping Bar

- [x] 2.1 Add shipping bar HTML at the top of `<body>` with text "Courier delivery across South Africa | Free for orders over R2,000"
- [x] 2.2 Style shipping bar — Deep Charcoal text on Soft Bone background, centered text, small font size, appropriate padding

## Task 3: Header Navigation

- [x] 3.1 Add `<header>` HTML with centered "unwritten" logo and `<nav>` with links: "Shop," "Process," "Our Story"
- [x] 3.2 Style header with `position: absolute`, transparent background, `z-index` above hero, Cormorant Garamond for logo, Inter/Montserrat for nav links
- [x] 3.3 Add hover effects on nav links (color change or underline transition, 200-400ms using `var(--transition-hover)`)
- [x] 3.4 Implement smooth scroll navigation — nav links scroll to corresponding section IDs

## Task 4: Hero Section

- [x] 4.1 Add `<section>` for hero with full-viewport-width styling, background image, and overlay for text readability
- [x] 4.2 Add headline "Grace Looks Good On You" (Cormorant Garamond), sub-headline "Handcrafted slow fashion for the intentional woman", and tagline "Unwritten, but not untold."
- [x] 4.3 Style hero text — centered, white or light color for contrast, appropriate font sizes and spacing

## Task 5: Product Data and Currency Formatting

- [x] 5.1 Define product data array in `js/main.js` with sample products (id, name, price in cents, image, hoverImage, fabric, care)
- [x] 5.2 Implement `formatZAR(priceInCents)` function that returns "R#,###.00" format string
- [x] 5.3 Write property-based test for `formatZAR` round-trip (Property 1: generate random non-negative integers, verify format regex and round-trip)

## Task 6: Product Grid and Product Cards

- [x] 6.1 Add Product Grid `<section>` with CSS Grid container in HTML
- [x] 6.2 Style Product Grid — 4 columns at ≥1024px, 2 columns at 768-1023px, 2 columns below 768px, consistent `var(--grid-gap)` gutters
- [x] 6.3 Implement `renderProductCard(product)` function that generates Product Card HTML (image, name, formatted price)
- [x] 6.4 Write property-based test for Product Card data completeness (Property 2: generate random products, verify rendered HTML contains image src, name, and formatted price)
- [x] 6.5 Call `renderProductCard` for each product and inject into the grid container on DOM load
- [x] 6.6 Style Product Cards — image fills card width, Inter/Montserrat for text, appropriate spacing
- [x] 6.7 Add hover zoom effect on product images (CSS `transform: scale()` with `var(--transition-hover)`)
- [x] 6.8 Implement Quick Add overlay — hidden by default, fades in on card hover (200-400ms transition), styled with Sage Green accent

## Task 7: Fabric & Care Dropdown

- [x] 7.1 Add Fabric & Care dropdown HTML within each product card (collapsed by default, contains fabric and care data)
- [x] 7.2 Implement toggle logic in `js/main.js` — click to expand/collapse using class toggle
- [x] 7.3 Style dropdown — smooth expand/collapse transition, readable typography, emphasis on natural materials
- [x] 7.4 Write property-based test for dropdown toggle round-trip (Property 3: verify click toggles visibility, double-click returns to initial state)

## Task 8: Process Section

- [x] 8.1 Add Process Section HTML with title "The Art of the Stitch" and 3 tiles: "CAD Patterns and sketches", "Fabric Selection", designer at work
- [x] 8.2 Style Process Section — 3-column grid on desktop, each tile image-heavy with title overlay or caption
- [x] 8.3 Add responsive stacking — tiles stack vertically below 768px

## Task 9: Brand Story Section

- [x] 9.1 Add Brand Story Section HTML with title "More Than Just a Brand" and narrative paragraph
- [x] 9.2 Style section — centered text, `max-width: ~700px`, Cormorant Garamond title, Inter/Montserrat body, section padding 80-120px

## Task 10: Footer (Newsletter + Instagram Gallery)

- [x] 10.1 Add Footer HTML with Newsletter Signup ("Join the Journey" heading, email input, submit button) and Instagram Gallery (4 images, "Follow our journey" CTA)
- [x] 10.2 Style newsletter form — Sage Green accent on submit button, clean input styling, inline layout
- [x] 10.3 Style Instagram Gallery — horizontal row of 4 images with equal sizing, responsive stacking on mobile
- [x] 10.4 Implement newsletter form validation in `js/main.js` — prevent empty/invalid email submission, show inline error or success message

## Task 11: Responsive Design

- [x] 11.1 Add CSS media queries for breakpoints: 768px and 1024px
- [x] 11.2 Ensure header adapts to mobile layout below 768px (hamburger menu or simplified nav)
- [x] 11.3 Ensure hero section scales proportionally on mobile (text sizing, image cover)
- [x] 11.4 Verify all sections use appropriate padding (80-120px vertical) via `var(--section-padding)`
- [x] 11.5 Ensure no horizontal overflow at 320px viewport width
- [x] 11.6 Ensure all interactive elements meet 44x44px minimum tap target size on mobile

## Task 12: Hover Effects and Transitions

- [x] 12.1 Verify all buttons have fade-in hover effects with `var(--transition-hover)` (200-400ms)
- [x] 12.2 Verify nav link hover indicators (color change or underline) use correct transition duration
- [x] 12.3 Verify product card image zoom and Quick Add overlay transitions are within 200-400ms range

## Task 13: Accessibility and SEO

- [x] 13.1 Use semantic HTML throughout (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- [x] 13.2 Add `alt` text to all `<img>` elements
- [x] 13.3 Add `loading="lazy"` to below-the-fold images (product grid, process tiles, Instagram gallery)
- [x] 13.4 Add appropriate `aria-label` attributes to interactive elements (nav, form, dropdown toggle)
- [x] 13.5 Add `<meta>` viewport tag and page title in `<head>`

## Task 14: Unit and Integration Tests

- [x] 14.1 Set up test environment (Vitest + jsdom + fast-check)
- [x] 14.2 Write unit tests for Shipping Bar (text content, DOM position, colors)
- [x] 14.3 Write unit tests for Header (logo text, nav links, transparent background)
- [x] 14.4 Write unit tests for Hero Section (headline, sub-headline, tagline text)
- [x] 14.5 Write unit tests for Product Grid responsive columns (4-col at 1024px+, 2-col at 768px, 2-col below 768px)
- [x] 14.6 Write unit tests for Process Section (title, 3 tiles, tile labels)
- [x] 14.7 Write unit tests for Brand Story Section (title, max-width, centered)
- [x] 14.8 Write unit tests for Footer (newsletter heading, email input, submit button, 4 Instagram images, CTA text)
- [x] 14.9 Write unit tests for color palette (body background #F9F8F4, text #2C2C2C, accents #98A68E and #DCAE96)
