const justifyRight = {
	text_area: ['Some', 'text', 'that', 'will', 'work', 'nicely.'],
	max_length: 16,
	success_text_array: ['  Some text that', '       will work', '         nicely.']
};
const justifyLeft = {
	text_area: ['Some', 'text', 'that', 'will', 'work', 'nicely.'],
	max_length: 16,
	success_text_array: ['Some text that  ', 'will work       ', 'nicely.         ']
};
const justifyFull = {
	text_area: ['Some', 'text', 'that', 'will', 'work', 'nicely.'],
	max_length: 16,
	success_text_array: ['Some  text  that', 'will        work', 'nicely.         ']
};
const justifyFull2 = {
	text_area: ['Some', 'text', 'that', 'will', 'work', 'nicely.'],
	max_length: 17,
	success_text_array: ['Some   text  that', 'will work nicely.']
};
const justifyFull3 = {
	text_area: ['', 'Some', 'text', 'that', 'will', 'work', 'nicely.'],
	max_length: 16,
	success_text_array: ['Some  text  that', 'will        work', 'nicely.         ']
};
const justifyFull4 = {
	text_area: ["ಠ", null, undefined, [],"This", "is", "an", "example", "of", "full", 123, "justification.", ],
	max_length: 16
};

const notArrayMessage = "Oh no, there's been an error! Check your inputs and try again. Error Info: Input is not an array.";
const invalidNumberMessage = "Oh no, there's been an error! Check your inputs and try again. Error Info: Line length is not a valid number.";
const invalidDirectionMessage = "Oh no, there's been an error! Check your inputs and try again. Error Info: Text direction must be one of: left, right, or full. Case sensitive.";
const invalidSizeMessage  = "Oh no, there's been an error! Check your inputs and try again. Error Info: Line length requested is smaller than your largest word. Please select a length greater than or equal to: 7";
const invalidElementMessage = "Oh no, there's been an error! Check your inputs and try again. Error Info: One or more of your elements has a non-string value.";
const invalidCharactersMessage = "Oh no, there's been an error! Check your inputs and try again. Error Info: One or more of your elements contain ascii characters outside of limitations of this system.";

module.exports = {
	justifyRight: justifyRight,
	justifyLeft: justifyLeft,
	justifyFull: justifyFull,
	justifyFull2: justifyFull2,
	justifyFull3: justifyFull3,
	justifyFull4: justifyFull4,
	notArrayMessage: notArrayMessage,
	invalidNumberMessage: invalidNumberMessage,
	invalidDirectionMessage: invalidDirectionMessage,
	invalidSizeMessage: invalidSizeMessage,
	invalidElementMessage: invalidElementMessage,
	invalidCharactersMessage: invalidCharactersMessage
};
