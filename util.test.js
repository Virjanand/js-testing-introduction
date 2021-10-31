const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText('Vir', 41);
    expect(text).toBe('Vir (41 years old)');
});