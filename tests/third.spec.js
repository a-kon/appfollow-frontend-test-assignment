const isParentsisValid = require('../tasks/third.js');

describe('Третье задание', () => {
	it('Не валидно для строк длиной 1 символ', () => {
		expect(isParentsisValid("(")).toBe(false);
		expect(isParentsisValid(")")).toBe(false);
	});
	it('Не валидно для строк с нечетным количеством символов', () => {
		expect(isParentsisValid("(()")).toBe(false);
		expect(isParentsisValid("()))")).toBe(false);
		expect(isParentsisValid("()))")).toBe(false);
		expect(isParentsisValid("(()))))")).toBe(false);
		expect(isParentsisValid("()))))(")).toBe(false);
	});
	it('Валидные значения', () => {
		expect(isParentsisValid("((((()))))")).toBe(true);
		expect(isParentsisValid("(()()()())")).toBe(true);
		expect(isParentsisValid("((())(())(()))")).toBe(true);
		expect(isParentsisValid("(())((()())())")).toBe(true);
		expect(isParentsisValid("(())")).toBe(true);
		expect(isParentsisValid("()")).toBe(true);
	});
	it('Не валидные значения', () => {
		expect(isParentsisValid("()))")).toBe(false);
		expect(isParentsisValid("(((()))")).toBe(false);
		expect(isParentsisValid("(((())(())(()))")).toBe(false);
		expect(isParentsisValid("(()()))")).toBe(false);
		expect(isParentsisValid("()))")).toBe(false);
	});
});
