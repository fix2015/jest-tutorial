// npx jest

function subtract(a, b) {
    return a - b;
}

test('subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
});

// Test for subtracting negative numbers
test('subtracts negative numbers correctly', () => {
    expect(subtract(-5, -3)).toBe(-2);
});