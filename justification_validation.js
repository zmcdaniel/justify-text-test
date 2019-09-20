// Also, something considered, was extremely lengthy strings in the array, for example:
// "Pneumonoultramicroscopicsilicovolcanoconiosis" (a lung disease) but I wasn't sure what number to place here.
function sanitize(array, size, direction) {
    if (!is_string(direction) || !/^left|right|full$/.test(direction)) {
        throw "Text direction must be one of: left, right, or full. Case sensitive."
    }
    if (!is_valid_number(size)) {
        throw "Line length is not a valid number.";
    }
    if (!is_array(array)) {
        throw "Input is not an array.";
    }

    let sanitized_array = [];
    for (let i=0, len = array.length; i < len; i++) {
        // Validating elements
        if (!is_string(array[i])) {
            throw "One or more of your elements has a non-string value."
        }
        // Skip blank elements
        if (array[i].length === 0) {
            continue;
        }
        if (has_non_ascii_elements(array[i])) {
            throw "One or more of your elements contain ASCII characters outside of limitations of this program."
        }

        array[i] = remove_white_spaces(array[i]);
        sanitized_array.push(array[i]);
    }

    // In case an element is bigger than the requested size, we recommend upsizing
    let valid_min_size = get_appropriate_size(sanitized_array, size);
    if (valid_min_size !== size) {
        throw "Line length requested is smaller than your largest word. Please select a length greater than or equal to: " + valid_min_size;
    }

    return [sanitized_array, size, direction];
}

// Sanitization Functions
function remove_white_spaces(el) {
    return el.replace(/ +?/g, '');
}
function has_non_ascii_elements(el) {
    return /^[^\x00-\x7F]*$/.test(el);
}
function is_string (value) {
    return typeof value === 'string' || value instanceof String;
}
function get_appropriate_size(array, size) {
    let max_element_size = Math.max(...(array.map(el => el.length)));
    if (max_element_size > size) {
        size = max_element_size;
    }
    return size;
}
function is_valid_number(size) {
    return Number.isInteger(size);
}
function is_array(array) {
    return Array.isArray(array);
}

module.exports.sanitize = sanitize;
