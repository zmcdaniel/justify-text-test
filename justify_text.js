// Custom made modules to break the code up
const Justify = require("./Justify");
const validator = require("./justification_validation");

function justifyText(text_to_justify, length_of_line, justify_direction) {
	// Run a try catch, just in case sanitizing missed something
	try {
		// This sanitizes the input prior to validation
		let [s_text, s_length, s_direction] = validator.sanitize(text_to_justify, length_of_line, justify_direction);

		// Create Justify class to be used depending on the direction
		let justify = new Justify(s_text, s_length);

		switch (s_direction) {
			case 'full':
				return justify.full();
			case 'left':
				return justify.left();
			case 'right':
				return justify.right();
		}
	} catch (e) {
		return "Oh no, there's been an error! Check your inputs and try again. Error Info: " + String(e);
	}
}

//const text_to_justify = ["ಠ", null, undefined, [],"This", "is", "an", "example", "of", "full", 123, "justification.", ];
//const text_to_justify = null;
const text_to_justify = ['Some', 'text', 'that', 'will', 'work', 'nicely.'];

const length_of_line = 18;

const justify_direction = "right";

console.log(justifyText(text_to_justify, length_of_line, justify_direction));

module.exports.justifyText = justifyText;