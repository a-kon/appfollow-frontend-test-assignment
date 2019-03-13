const findOdd = require('../tasks/first.js');

describe('Первое задание', () => {
    it('Возвращает правильное значение', () => {
        expect(findOdd([1, 1, 2, 2, 0])).toBe(0);
        expect(findOdd([1, 1, 10, 2, 2, 0, 0])).toBe(10);
    });
    it('Возвращает правильное значение при многократных вхождениях', () => {
        expect(findOdd([2, 2, 2, 3, 3])).toBe(2);
        expect(findOdd([1337, 1337, 1337, 1337, 1337, 0, 0])).toBe(1337);
    });
});
