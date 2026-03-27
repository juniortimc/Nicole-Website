// Feature: unwritten-fashion-website, Property 3: Fabric & Care Dropdown Toggle Round-Trip
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { toggleDropdown } = require('../js/main.js');

// **Validates: Requirements 8.1, 8.2**

/**
 * Helper: creates a minimal Fabric & Care dropdown DOM structure using jsdom
 * (vitest runs in a jsdom-like environment when configured, but we build
 * the fragment manually so the test is self-contained).
 */
function createDropdownDOM() {
  const dropdown = document.createElement('div');
  dropdown.className = 'fabric-care-dropdown';

  const btn = document.createElement('button');
  btn.className = 'fabric-care-toggle';
  btn.setAttribute('aria-expanded', 'false');
  btn.textContent = 'Fabric & Care';

  const content = document.createElement('div');
  content.className = 'fabric-care-content';
  content.innerHTML = '<p><strong>Fabric:</strong> 100% Linen</p>';

  dropdown.appendChild(btn);
  dropdown.appendChild(content);

  return { dropdown, btn };
}

describe('Fabric & Care Dropdown — Property 3: Toggle Round-Trip', () => {
  it('single click expands, second click collapses back to initial state', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { dropdown, btn } = createDropdownDOM();
        document.body.appendChild(dropdown);

        // Initial state: collapsed
        expect(dropdown.classList.contains('is-open')).toBe(false);
        expect(btn.getAttribute('aria-expanded')).toBe('false');

        // First click → expanded
        toggleDropdown(btn);
        expect(dropdown.classList.contains('is-open')).toBe(true);
        expect(btn.getAttribute('aria-expanded')).toBe('true');

        // Second click → collapsed (back to initial)
        toggleDropdown(btn);
        expect(dropdown.classList.contains('is-open')).toBe(false);
        expect(btn.getAttribute('aria-expanded')).toBe('false');

        document.body.removeChild(dropdown);
      }),
      { numRuns: 100 }
    );
  });

  it('N toggles: even count returns to collapsed, odd count leaves expanded', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 20 }), (clickCount) => {
        const { dropdown, btn } = createDropdownDOM();
        document.body.appendChild(dropdown);

        for (let i = 0; i < clickCount; i++) {
          toggleDropdown(btn);
        }

        const shouldBeOpen = clickCount % 2 === 1;
        expect(dropdown.classList.contains('is-open')).toBe(shouldBeOpen);
        expect(btn.getAttribute('aria-expanded')).toBe(String(shouldBeOpen));

        document.body.removeChild(dropdown);
      }),
      { numRuns: 100 }
    );
  });
});
