function add(a, b) {
    return a + b;
  }
  
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds zero correctly', () => {
    expect(add(0, 5)).toBe(5);
  });