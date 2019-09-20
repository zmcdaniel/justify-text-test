let expect = require('chai').expect;
let justify_text = require('../justify_text');
const payload = require('./payload');

let tests = 1;

// System-level tests
describe('Text Justification System', function () {
	afterEach(function() {
		console.log('Test #' + (tests++));
	});
	context('happy paths', function() {
		it('should justify right', function () {

			let result = justify_text.justifyText(
				payload.justifyRight.text_area,
				payload.justifyRight.max_length,
				'right'
			);
			expect(result).to.eql(payload.justifyRight.success_text_array);
		});

		it('should justify left', function () {
			let result = justify_text.justifyText(
				payload.justifyLeft.text_area,
				payload.justifyLeft.max_length,
				'left'
			);
			expect(result).to.eql(payload.justifyLeft.success_text_array);
		});

		it('should justify full', function () {
			let result = justify_text.justifyText(
				payload.justifyFull.text_area,
				payload.justifyFull.max_length,
				'full'
			);
			expect(result).to.eql(payload.justifyFull.success_text_array);
		});

		it('should have lines of equal length', function () {
			let result = justify_text.justifyText(
				payload.justifyFull.text_area,
				payload.justifyFull.max_length,
				'full'
			);
			let compare_length = result[0].length;
			for (let i = 0, len = result.length; i < len; i++) {
				expect(compare_length).to.equal(result[i].length);
			}

			result = justify_text.justifyText(
				payload.justifyFull.text_area,
				payload.justifyFull.max_length,
				'left'
			);
			compare_length = result[0].length;
			for (let i = 0, len = result.length; i < len; i++) {
				expect(compare_length).to.equal(result[i].length);
			}

			result = justify_text.justifyText(
				payload.justifyFull.text_area,
				payload.justifyFull.max_length,
				'right'
			);
			compare_length = result[0].length;
			for (let i = 0, len = result.length; i < len; i++) {
				expect(compare_length).to.equal(result[i].length);
			}
		});
	});
	context('sad paths', function() {
		it('should throw a not array error', function () {
			let result = justify_text.justifyText(
				null,
				payload.justifyRight.max_length,
				'right'
			);
			expect(payload.notArrayMessage).to.equal(result);
		});

		it('should throw an invalid number error', function () {
			let result = justify_text.justifyText(
				payload.justifyRight.text_area,
				null,
				'right'
			);
			expect(payload.invalidNumberMessage).to.equal(result);
		});

		it('should throw an invalid direction error', function () {
			let result = justify_text.justifyText(
				payload.justifyRight.text_area,
				payload.justifyRight.max_length,
				null
			);
			expect(payload.invalidDirectionMessage).to.equal(result);
		});

		it('should throw a too small of line length error', function () {
			let result = justify_text.justifyText(
				payload.justifyRight.text_area,
				1,
				'right'
			);
			expect(payload.invalidSizeMessage).to.equal(result);
		});

		it('should throw an invalid element error', function () {
			let result = justify_text.justifyText(
				[undefined, null],
				1,
				'right'
			);
			expect(payload.invalidElementMessage).to.equal(result);
		});

		it('should catch blank elements', function () {
			let result = justify_text.justifyText(
				payload.justifyFull3.text_area,
				payload.justifyFull3.max_length,
				'full'
			);
			expect(payload.justifyFull3.success_text_array).to.eql(result);
		});

		it('should alert of non-ascii characters being used', function () {
			let result = justify_text.justifyText(
				payload.justifyFull4.text_area,
				payload.justifyFull4.max_length,
				'full'
			);
			expect(payload.invalidCharactersMessage).to.equal(result);
		});
	});
});