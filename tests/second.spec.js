const isPangram = require('../tasks/second.js');

describe('Второе задание', () => {
	it('Не валидно для пустых строк', () => {
		expect(isPangram("")).toBe(false);
	});
	it('Не валидные значения', () => {
		expect(isPangram("this isn't a pangram")).toBe(false);
		expect(isPangram("aaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(false);
		expect(isPangram("no it's not")).toBe(false);
		expect(isPangram("")).toBe(false);
	});
	it('Валидные значения', () => {
		expect(isPangram("the quick brown fox jumps over the lazy dog")).toBe(true);
		expect(isPangram("cwm fjord bank glyphs vext quiz")).toBe(true);
		expect(isPangram("pack my box with five dozen liquor jugs")).toBe(true);
	});
});
