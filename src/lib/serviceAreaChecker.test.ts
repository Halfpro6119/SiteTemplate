import { describe, it, expect } from 'vitest';
import { checkCovered } from './serviceAreaChecker';

describe('checkCovered', () => {
  it('returns true for Stoke postcodes', () => {
    expect(checkCovered('ST1 2AB')).toBe(true);
    expect(checkCovered('ST4 1AA')).toBe(true);
    expect(checkCovered('st1 2ab')).toBe(true);
  });

  it('returns true for covered town names', () => {
    expect(checkCovered('Stoke')).toBe(true);
    expect(checkCovered('Stafford')).toBe(true);
    expect(checkCovered('stoke-on-trent')).toBe(true);
    expect(checkCovered('Stone')).toBe(true);
    expect(checkCovered('Rugeley')).toBe(true);
    expect(checkCovered('Cannock')).toBe(true);
    expect(checkCovered('Derby')).toBe(true);
  });

  it('returns true for Derbyshire and other covered areas', () => {
    expect(checkCovered('Derbyshire')).toBe(true);
    expect(checkCovered('DE23 4AB')).toBe(true);
  });

  it('returns false for out-of-area postcodes', () => {
    expect(checkCovered('SW1A')).toBe(false);
    expect(checkCovered('SW1A 1AA')).toBe(false);
    expect(checkCovered('London')).toBe(false);
  });

  it('returns false for empty or too short input', () => {
    expect(checkCovered('')).toBe(false);
    expect(checkCovered('   ')).toBe(false);
    expect(checkCovered('S')).toBe(false);
  });
});
