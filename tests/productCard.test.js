// Feature: unwritten-fashion-website, Property 2: Product Card Data Completeness
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { renderProductCard, formatZAR } = require('../js/main.js');

// **Validates: Requirements 5.1**

describe('renderProductCard — Property 2: Product Card Data Completeness', () => {
  it('should contain the product image src, name, and formatted price for any valid product', () => {
    const productArb = fc.record({
      id: fc.string({ minLength: 1, maxLength: 30 }),
      name: fc.string({ minLength: 1, maxLength: 60 }).filter(n => !/<|>|"|&/.test(n)),
      price: fc.nat(),
      image: fc.string({ minLength: 1, maxLength: 80 }).filter(s => !/<|>|"|&/.test(s)),
    });

    fc.assert(
      fc.property(productArb, (product) => {
        const html = renderProductCard(product);

        // Image src is present
        expect(html).toContain('src="' + product.image + '"');

        // Product name is present
        expect(html).toContain(product.name);

        // Formatted ZAR price is present
        const expectedPrice = formatZAR(product.price);
        expect(html).toContain(expectedPrice);
      }),
      { numRuns: 200 }
    );
  });

  it('should produce an img element with the correct alt text', () => {
    const productArb = fc.record({
      id: fc.string({ minLength: 1, maxLength: 30 }),
      name: fc.string({ minLength: 1, maxLength: 60 }).filter(n => !/<|>|"|&/.test(n)),
      price: fc.nat(),
      image: fc.string({ minLength: 1, maxLength: 80 }).filter(s => !/<|>|"|&/.test(s)),
    });

    fc.assert(
      fc.property(productArb, (product) => {
        const html = renderProductCard(product);
        expect(html).toContain('alt="' + product.name + '"');
      }),
      { numRuns: 200 }
    );
  });

  it('should contain a Quick Add button', () => {
    const product = { id: 'test', name: 'Test Product', price: 100000, image: 'images/test.jpg' };
    const html = renderProductCard(product);
    expect(html).toContain('Quick Add');
    expect(html).toContain('quick-add-btn');
  });
});
