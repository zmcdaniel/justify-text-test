# Justify Text

Given an array of words, a line length L, and a justification direction, format the text such that each line has exactly L characters and is fully (left, right or full) justified.

Pad extra spaces ‘ ‘ when necessary so that each line has exactly L characters.

Your program should return a list of strings, where each string represents a single line.

## Example (full justification):
```javascript

function justifyText(text_to_justify, length_of_line, justify_direction) {

  return "put your code here"

}

const text_to_justify = ["This", "is", "an", "example", "of", "full", "justification."]

const length_of_line = 16

const justify_direction = "full"

const justified_text = justifyText(text_to_justify, length_of_line, justify_direction)

console.log(justified_text)
```
Which should return **fully** justified text...
```javascript
[
   "This    is    an",
   "example  of full",
   "justification.  "
]
```

## Example (left justification):
```javascript

function justifyText(text_to_justify, length_of_line, justify_direction) {

  return "put your code here"

}

const text_to_justify = ["This", "is", "an", "example", "of", "left", "justification."]

const length_of_line = 16

const justify_direction = "left"

const justified_text = justifyText(text_to_justify, length_of_line, justify_direction)

console.log(justified_text)
```
Which should return text **left** justified...
```javascript
[
   "This is an      ",
   "example of text ",
   "justification.  "
]
```
## Example (right justification):
```javascript

function justifyText(text_to_justify, length_of_line, justify_direction) {

  return "put your code here"

}

const text_to_justify = ["This", "is", "an", "example", "of", "right", "justification."]

const length_of_line = 16

const justify_direction = "right"

const justified_text = justifyText(text_to_justify, length_of_line, justify_direction)

console.log(justified_text)
```
Which should return text **right** justified...
```javascript
[
   "      This is an",
   "example of right",
   "  justification."
]
```
