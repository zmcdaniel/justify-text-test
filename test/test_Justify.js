let expect = require('chai').expect;
const payload = require('./payload');
const Justify = require("../Justify");

let tests = 1;

// Justify class tests
describe('Text Justify Class', function () {
	afterEach(function() {
		console.log('Test #' + (tests++));
	});

	it('should justify right', function () {
		let justify = new Justify(
			payload.justifyFull.text_area,
			payload.justifyFull.max_length,
			'right'
		);
		let result = justify.right();
		expect(result).to.eql(payload.justifyRight.success_text_array);
	});

	it('should justify left', function() {
		let justify = new Justify(
			payload.justifyFull.text_area,
			payload.justifyFull.max_length,
			'left'
		);
		let result = justify.left();
		expect(result).to.eql(payload.justifyLeft.success_text_array);
	});

	it('should justify full', function() {
		let justify = new Justify(
			payload.justifyFull.text_area,
			payload.justifyFull.max_length,
			'full'
		);
		let result = justify.full();
		expect(result).to.eql(payload.justifyFull.success_text_array);
	});

	it('should have lines of equal length', function () {
		let justify = new Justify(
			payload.justifyFull.text_area,
			payload.justifyFull.max_length,
			'full'
		);
		let result = justify.full();
		let compare_length = result[0].length;
		for (let i = 0, len = result.length; i < len; i++) {
			expect(compare_length).to.equal(result[i].length);
		}

		result = justify.left();
		compare_length = result[0].length;
		for (let i = 0, len = result.length; i < len; i++) {
			expect(compare_length).to.equal(result[i].length);
		}

		result = justify.right();
		compare_length = result[0].length;
		for (let i = 0, len = result.length; i < len; i++) {
			expect(compare_length).to.equal(result[i].length);
		}
	});

	it('should have lines of equal length with odd numbers', function () {
		let justify = new Justify(
			payload.justifyFull2.text_area,
			payload.justifyFull2.max_length,
			'full'
		);
		let result = justify.full();
		let compare_length = result[0].length;
		for (let i = 0, len = result.length; i < len; i++) {
			expect(compare_length).to.equal(result[i].length);
		}
	});

	it('should space evenly with odd numbers', function () {
		let justify = new Justify(
			payload.justifyFull2.text_area,
			payload.justifyFull2.max_length,
			'full'
		);
		let result = justify.full();
		expect(result).to.eql(payload.justifyFull2.success_text_array);
	});
});