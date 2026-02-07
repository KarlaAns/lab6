const div= require('./div');
test('Division de 8/2 debe ser 4 ', () => {
    expect(div(8, 2)).toBe(4);
});
test('Division por cero debe lanzar un error', () => {
    expect(() => div(8, 0)).toThrow('Division by zero is not allowed.');
});