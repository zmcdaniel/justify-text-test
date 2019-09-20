/**
 * The purpose of this class is to create a Text 'Justifier' which takes an array of string elements and creates
 * a text justification according to a specified line-length requirement, as well as position (left, right, full).
 */
class Justify {
    constructor(text_array, max_line_length) {
        this.text_array = text_array;
        this.max_line_length = max_line_length;
        this.text_array_size = text_array.length;
    }

    /**
     * Left justification of text array
     * @returns {Array}
     */
    left() {
        let lines_array = [];
        let index = 0;

        while (index < this.text_array_size) {
            let line = '';
            let [last, count] = this._greedily_find_last_word(index);

            line = this._separate_words_by_whitespaces(line, index, last);

            // Fills in blanks to the right to even out the length of the array element
            let repeat_whitespace = Math.max(this.max_line_length - (line.length - 1), 0);
            line = line.substr(0, line.length - 1) + ' '.repeat(repeat_whitespace);

            lines_array.push(line);
            index = last;
        }
        return lines_array;
    }

    /**
     * Right justification of text array
     * @returns {Array}
     */
    right() {
        let lines_array = [];
        let index = 0;

        while (index < this.text_array_size) {
            let line = '';
            let [last, count] = this._greedily_find_last_word(index);

            line = this._separate_words_by_whitespaces(line, index, last);

            // Fills in blanks to the left to even out the length of the array element
            let repeat_whitespace = Math.max(this.max_line_length - (line.length - 1), 0);
            line = ' '.repeat(repeat_whitespace) + line.substr(0, line.length - 1);

            lines_array.push(line);
            index = last;
        }
        return lines_array;
    }

    /**
     * Full justification of text array
     * @returns {Array}
     */
    full() {
        let lines_array = [];
        let index = 0;

        while(index < this.text_array_size) {
            let line = '';
            let [last, count] = this._greedily_find_last_word(index);
            let line_gaps = last - index - 1;

            // Last line, so left-justify, potentially factor this out
            if (line_gaps === 0 || last === this.text_array_size) {
                line = this._separate_words_by_whitespaces(line, index, last);
                let repeat_whitespace = Math.max(this.max_line_length - (line.length - 1), 0);
                line = line.substr(0, line.length - 1) + ' '.repeat(repeat_whitespace);
            } else {
                // Calculate spaces
                let spaces = (this.max_line_length - count) / line_gaps;
                let remainder = (this.max_line_length - count) % line_gaps;

                // Add in spaces in appropriate places
                for (let i = index; i < last; i++) {
                    line += this.text_array[i];

                    if (i < last - 1) {
                        let limit = spaces + ((i - index) < remainder ? 1 : 0);
                        for (let j = 0; j <= limit; j++) {
                            line += " ";
                        }
                    }
                }
            }
            lines_array.push(line);
            index = last;
        }
        return lines_array;
    }

    /**
     * Greedily locates the last word that can fit on the line by looking at the next word
     * This includes potential whitespaces created along the way
     * @param index : Number
     * @returns Array
     * @private
     */
    _greedily_find_last_word(index) {
        let count = this.text_array[index].length;
        let last = index + 1;
        while (last < this.text_array_size) {
            if (this.text_array[last].length + count + 1 > this.max_line_length) break;
            count += this.text_array[last].length + 1;
            last++;
        }
        return [last, count];
    }

    /**
     * Separates words by whitespaces
     * @param line
     * @param index
     * @param last
     * @returns String
     * @private
     */
    _separate_words_by_whitespaces(line, index, last) {
        for (let i = index; i < last; i++) {
            line += this.text_array[i] + " ";
        }
        return line;
    }
}
module.exports = Justify;