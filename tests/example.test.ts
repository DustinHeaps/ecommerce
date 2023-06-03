import { expect, it, test } from 'vitest';

it('should work', () => {
    expect(true).toBe(true);
  });
  
  test('works witn "test" as well', () => {
    expect(false).not.toBe(true);
  });
    