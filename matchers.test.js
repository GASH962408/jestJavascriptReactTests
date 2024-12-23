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
  

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // Esto no funcionaría porque hay errores de redondeo
    // expect(value).toBe(0.3);
    // Esto sí funciona
    expect(value).toBeCloseTo(0.3); // Tolerancia para errores de redondeo
  });
  

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/); // No debe encontrar "I" en "team"
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/); // Encuentra "stop" en "Christoph"
  });
  
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk'); // Verifica que "milk" está en el arreglo
    expect(new Set(shoppingList)).toContain('milk'); // Verifica en un Set
  });
  