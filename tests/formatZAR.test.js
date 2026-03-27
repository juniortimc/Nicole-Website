// Feature: unwritten-fashion-website, Property 1: ZAR Currency Formatting Round-Trip
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { formatZAR } = require('../js/main.js');

// **Validates: Requirements 5.2, 14.1, 14.2, 14.3**

describe('formatZAR — Property 1: ZAR Currency Formatting Round-Trip', () => {
  it('should produce a string matching R#,###.00 format for any non-negative integer', () => {
    fc.assert(
      fc.property(fc.nat(), (priceInCents) => {
        const result = formatZAR(priceInCents);
        expect(result).toMatch(/^R\d{1,3}(,\d{3})*\.\d{2}$/);
      }),
      { numRuns: 200 }
    );
  });

  it('should round-trip: parsing the formatted string back to cents yields the original value', () => {
    fc.assert(
      fc.property(fc.nat(), (priceInCents) => {
        const result = formatZAR(priceInCents);
        const numericStr = result.slice(1).replace(/,/g, '');
        const parsedCents = Math.round(parseFloat(numericStr) * 100);
        expect(parsedCents).toBe(priceInCents);
      }),
      { numRuns: 200 }
    );
  });

  it('should format 149900 as R1,499.00', () => {
    expect(formatZAR(149900)).toBe('R1,499.00');
  });

  it('should format 0 as R0.00', () => {
    expect(formatZAR(0)).toBe('R0.00');
  });

  it('should format 99 as R0.99', () => {
    expect(formatZAR(99)).toBe('R0.99');
  });

  it('should format 100 as R1.00', () => {
    expect(formatZAR(100)).toBe('R1.00');
  });

  it('should format 1000000 as R10,000.00', () => {
    expect(formatZAR(1000000)).toBe('R10,000.00');
  });
});
