test('object assignment', () => {
    const data = { one: 1 };        // 1
    data['two'] = 2;                // 2
    expect(data).toEqual({ one: 1, two: 2 }); // 3
  });
  

  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); // 4 > 3
    expect(value).toBeGreaterThanOrEqual(3.5); // 4 >= 3.5
    expect(value).toBeLessThan(5); // 4 < 5
    expect(value).toBeLessThanOrEqual(4.5); // 4 <= 4.5
  
    // toBe y toEqual son equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  