// Unit tests for page sections — Tasks 14.2 through 14.9
import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { JSDOM } from 'jsdom';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

let doc;
let cssContent;

beforeAll(() => {
  const html = readFileSync(resolve(__dirname, '../index.html'), 'utf-8');
  const dom = new JSDOM(html);
  doc = dom.window.document;
  cssContent = readFileSync(resolve(__dirname, '../css/styles.css'), 'utf-8');
});

// --- 14.2 Shipping Bar (removed from main page) ---
describe('Shipping Bar (removed)', () => {
  it('should NOT have a shipping bar on the main page', () => {
    const bar = doc.querySelector('.shipping-bar');
    expect(bar).toBeNull();
  });
});

// --- 14.3 Header ---
describe('Header (14.3)', () => {
  it('should have a .site-header element', () => {
    expect(doc.querySelector('.site-header')).not.toBeNull();
  });

  it('should display logo text "unwritten"', () => {
    const logo = doc.querySelector('.logo');
    expect(logo).not.toBeNull();
    expect(logo.textContent).toBe('unwritten');
  });

  it('should have 3 nav links with correct text', () => {
    const links = doc.querySelectorAll('.nav-links a');
    expect(links.length).toBe(3);
    expect(links[0].textContent).toBe('Shop');
    expect(links[1].textContent).toBe('Process');
    expect(links[2].textContent).toBe('Our Story');
  });

  it('should have Shop link pointing to shop.html', () => {
    const shopLink = doc.querySelectorAll('.nav-links a')[0];
    expect(shopLink.getAttribute('href')).toBe('shop.html');
  });

  it('should be the first child of body (no shipping bar above)', () => {
    const body = doc.querySelector('body');
    const firstElement = body.children[0];
    expect(firstElement.classList.contains('site-header')).toBe(true);
  });
});

// --- 14.4 Hero Section ---
describe('Hero Section (14.4)', () => {
  it('should display headline "Grace Looks Good On You"', () => {
    const headline = doc.querySelector('.hero-headline');
    expect(headline).not.toBeNull();
    expect(headline.textContent).toBe('Grace Looks Good On You');
  });

  it('should display sub-headline text', () => {
    const sub = doc.querySelector('.hero-subheadline');
    expect(sub).not.toBeNull();
    expect(sub.textContent).toBe('Handcrafted slow fashion for the intentional woman');
  });

  it('should display tagline "Unwritten, but not untold."', () => {
    const tagline = doc.querySelector('.hero-tagline');
    expect(tagline).not.toBeNull();
    expect(tagline.textContent).toBe('Unwritten, but not untold.');
  });

  it('should have a "View the Lookbook" button linking to gallery', () => {
    const btn = doc.querySelector('.hero-btn');
    expect(btn).not.toBeNull();
    expect(btn.textContent).toBe('View the Lookbook');
    expect(btn.getAttribute('href')).toBe('#gallery');
  });
});

// --- Gallery Section (Masonry Grid with Categories) ---
describe('Gallery Section', () => {
  it('should display title "From the Studio to the Field"', () => {
    const title = doc.querySelector('.gallery-title');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('From the Studio to the Field');
  });

  it('should have filter buttons for All, The Process, and The Range', () => {
    const filters = doc.querySelectorAll('.gallery-filter');
    expect(filters.length).toBe(3);
    const texts = Array.from(filters).map(f => f.textContent);
    expect(texts).toContain('All');
    expect(texts).toContain('The Process');
    expect(texts).toContain('The Range');
  });

  it('should have a gallery grid container', () => {
    expect(doc.getElementById('gallery-grid')).not.toBeNull();
  });

  it('should have a Load More button', () => {
    const btn = doc.getElementById('gallery-load-more');
    expect(btn).not.toBeNull();
    expect(btn.textContent).toBe('Load More');
  });
});

// --- 14.6 Process Section ---
describe('Process Section (14.6)', () => {
  it('should display title "The Art of the Stitch"', () => {
    const title = doc.querySelector('.process-title');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('The Art of the Stitch');
  });

  it('should have 3 process tiles', () => {
    const tiles = doc.querySelectorAll('.process-tile');
    expect(tiles.length).toBe(3);
  });

  it('should have correct tile captions', () => {
    const captions = doc.querySelectorAll('.process-tile-caption');
    const texts = Array.from(captions).map(c => c.textContent);
    expect(texts).toContain('Technical Drawings & CAD Patterns');
    expect(texts).toContain('Garment Construction & Fabric Preparation');
    expect(texts).toContain('Photography & Photoshoot Execution');
  });
});

// --- 14.7 Brand Story Section ---
describe('Brand Story Section (14.7)', () => {
  it('should display title "More Than Just a Brand"', () => {
    const title = doc.querySelector('.brand-story-title');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('More Than Just a Brand');
  });

  it('should have a .brand-story-text element', () => {
    expect(doc.querySelector('.brand-story-text')).not.toBeNull();
  });

  it('should mention Nicole Venter and Elizabeth Galloway', () => {
    const text = doc.querySelector('.brand-story-text').textContent;
    expect(text).toContain('Nicole Venter');
    expect(text).toContain('Elizabeth Galloway');
  });

  it('should include the brand philosophy quote', () => {
    const text = doc.querySelector('.brand-story-text').textContent;
    expect(text).toContain('Every piece begins as a quiet idea');
  });

  it('should include the mission statement', () => {
    const text = doc.querySelector('.brand-story-text').textContent;
    expect(text).toContain('empowering individuals to break free from limitations');
  });
});

// --- 14.8 Footer ---
describe('Footer (14.8)', () => {
  it('should display newsletter heading "Join the Journey"', () => {
    const title = doc.querySelector('.footer-newsletter-title');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('Join the Journey');
  });

  it('should have an email input', () => {
    const input = doc.querySelector('.newsletter-input');
    expect(input).not.toBeNull();
    expect(input.getAttribute('type')).toBe('email');
  });

  it('should have a submit button', () => {
    expect(doc.querySelector('.newsletter-submit')).not.toBeNull();
  });

  it('should have 4 images in the Instagram gallery', () => {
    const imgs = doc.querySelectorAll('.instagram-gallery img');
    expect(imgs.length).toBe(4);
  });

  it('should display "Follow our journey" CTA', () => {
    const cta = doc.querySelector('.instagram-cta');
    expect(cta).not.toBeNull();
    expect(cta.textContent).toBe('Follow our journey');
  });

  it('should display contact email', () => {
    const contact = doc.querySelector('.footer-contact');
    expect(contact).not.toBeNull();
    expect(contact.textContent).toContain('nicoleurianne@gmail.com');
  });

  it('should display contact phone number', () => {
    const contact = doc.querySelector('.footer-contact');
    expect(contact.textContent).toContain('+27 76 225 1600');
  });

  it('should have a Technical Skills footer bar', () => {
    const skills = doc.querySelector('.footer-skills-text');
    expect(skills).not.toBeNull();
    expect(skills.textContent).toContain('Adobe Illustrator');
    expect(skills.textContent).toContain('Pattern Drafting');
    expect(skills.textContent).toContain('Garment Construction');
  });

  it('should have contact details in the skills footer', () => {
    const skillsContact = doc.querySelector('.footer-skills-contact');
    expect(skillsContact).not.toBeNull();
    expect(skillsContact.textContent).toContain('Nicoleurianne@gmail.com');
    expect(skillsContact.textContent).toContain('+27 76 225 1600');
  });
});

// --- 14.9 Color Palette ---
describe('Color Palette (14.9)', () => {
  it('should define --color-bone as #F9F8F4', () => {
    expect(cssContent).toMatch(/--color-bone:\s*#F9F8F4/i);
  });

  it('should define --color-charcoal as #2C2C2C', () => {
    expect(cssContent).toMatch(/--color-charcoal:\s*#2C2C2C/i);
  });

  it('should define --color-sage as #98A68E', () => {
    expect(cssContent).toMatch(/--color-sage:\s*#98A68E/i);
  });

  it('should define --color-rose as #DCAE96', () => {
    expect(cssContent).toMatch(/--color-rose:\s*#DCAE96/i);
  });
});

// --- Experience Timeline removed per user request ---
describe('Experience Timeline (removed)', () => {
  it('should NOT have an experience section on the page', () => {
    const section = doc.querySelector('.experience-section');
    expect(section).toBeNull();
  });
});

// --- Skills Matrix (Technical Proficiency) ---
describe('Skills Matrix', () => {
  it('should have a skills section with title "Technical Proficiency"', () => {
    const title = doc.querySelector('.skills-title');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('Technical Proficiency');
  });

  it('should have skill badges for key software and methods', () => {
    const badges = doc.querySelectorAll('.skill-badge');
    const texts = Array.from(badges).map(b => b.textContent);
    expect(texts).toContain('Adobe Illustrator');
    expect(texts).toContain('Adobe InDesign');
    expect(texts).toContain('Adobe Photoshop');
    expect(texts).toContain('Pattern Drafting');
    expect(texts).toContain('Garment Construction');
  });

  it('should have at least 9 skill badges', () => {
    const badges = doc.querySelectorAll('.skill-badge');
    expect(badges.length).toBeGreaterThanOrEqual(9);
  });
});

// --- Portfolio Download ---
describe('Portfolio Download', () => {
  it('should have a "Download Full Portfolio" button', () => {
    const btn = doc.querySelector('.portfolio-btn');
    expect(btn).not.toBeNull();
    expect(btn.textContent).toBe('Download Full Portfolio');
  });

  it('should link to the portfolio PDF with relative path', () => {
    const btn = doc.querySelector('.portfolio-btn');
    expect(btn.getAttribute('href')).toBe('assets/Nicole_Venter_Portfolio.pdf');
  });

  it('should have a download attribute', () => {
    const btn = doc.querySelector('.portfolio-btn');
    expect(btn.hasAttribute('download')).toBe(true);
  });
});

// --- Footer Credentials ---
describe('Footer Credentials', () => {
  it('should display Elizabeth Galloway credential in footer', () => {
    const cred = doc.querySelector('.footer-credentials');
    expect(cred).not.toBeNull();
    expect(cred.textContent).toContain('Elizabeth Galloway');
    expect(cred.textContent).toContain('2023');
  });
});

// --- Shop Page ---
describe('Shop Page (shop.html)', () => {
  let shopDoc;

  beforeAll(() => {
    const shopHtml = readFileSync(resolve(__dirname, '../shop.html'), 'utf-8');
    const shopDom = new JSDOM(shopHtml);
    shopDoc = shopDom.window.document;
  });

  it('should display headline "A Quiet Beginning."', () => {
    const headline = shopDoc.querySelector('.shop-coming-soon-headline');
    expect(headline).not.toBeNull();
    expect(headline.textContent).toBe('A Quiet Beginning.');
  });

  it('should display Stellenbosch studio body text', () => {
    const body = shopDoc.querySelector('.shop-coming-soon-body');
    expect(body).not.toBeNull();
    expect(body.textContent).toContain('Stellenbosch studio');
  });

  it('should display "Coming Soon" tag instead of countdown', () => {
    const tag = shopDoc.querySelector('.shop-coming-soon-tag');
    expect(tag).not.toBeNull();
    expect(tag.textContent).toBe('Coming Soon');
    const countdown = shopDoc.querySelector('.countdown');
    expect(countdown).toBeNull();
  });

  it('should have an email capture form', () => {
    const form = shopDoc.querySelector('.coming-soon-form');
    expect(form).not.toBeNull();
    const input = form.querySelector('.coming-soon-input');
    expect(input.getAttribute('type')).toBe('email');
    const btn = form.querySelector('.coming-soon-submit');
    expect(btn.textContent).toBe('Notify Me');
  });

  it('should have shipping info note at the bottom', () => {
    const note = shopDoc.querySelector('.shop-shipping-note');
    expect(note).not.toBeNull();
    expect(note.textContent).toContain('Free courier delivery across SA for orders over R2,000');
  });

  it('should have a solid header with nav back to main site', () => {
    const header = shopDoc.querySelector('.site-header--solid');
    expect(header).not.toBeNull();
    const logo = shopDoc.querySelector('.logo');
    expect(logo.getAttribute('href')).toBe('index.html');
  });

  it('should have Technical Skills footer', () => {
    const skills = shopDoc.querySelector('.footer-skills-text');
    expect(skills).not.toBeNull();
    expect(skills.textContent).toContain('Adobe Illustrator');
  });
});

// --- Gallery JS Data ---
describe('Gallery Data (JS)', () => {
  let galleryImages, renderGalleryItem, GALLERY_PAGE_SIZE;

  beforeAll(() => {
    const mod = require('../js/main.js');
    galleryImages = mod.galleryImages;
    renderGalleryItem = mod.renderGalleryItem;
    GALLERY_PAGE_SIZE = mod.GALLERY_PAGE_SIZE;
  });

  it('should have 22 gallery images', () => {
    expect(galleryImages.length).toBe(22);
  });

  it('should have images in both "process" and "range" categories', () => {
    const categories = [...new Set(galleryImages.map(i => i.category))];
    expect(categories).toContain('process');
    expect(categories).toContain('range');
  });

  it('should render gallery item HTML with image, alt, and caption', () => {
    const item = { src: 'images/test.jpg', alt: 'Test image', category: 'range' };
    const html = renderGalleryItem(item);
    expect(html).toContain('src="images/test.jpg"');
    expect(html).toContain('alt="Test image"');
    expect(html).toContain('data-category="range"');
    expect(html).toContain('Designed &amp; Handcrafted by Nicole Venter');
  });

  it('should have a page size of 9', () => {
    expect(GALLERY_PAGE_SIZE).toBe(9);
  });
});
