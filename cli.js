#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import generatePi from 'generate-pi';
import isPositiveInt from 'is-positive-int';

const cli = meow(`
    Usage
        $ gen-pi <input>

    Default Input
        50 [By default, will show PI(π) to 50 decimal places]

    Max Input
        200 [Currently upto 200 decimal places are shown
             Will default to 200, if input more than 200]

    Examples
        $ gen-pi
        3.14159265358979323846264338327950288419716939937510

        $ gen-pi 10
        3.1415926535
`, {
	importMeta: import.meta,
});

let input = cli.input[0];

if (input && !isPositiveInt(input)) {
	console.error('Please enter a valid integer for number of decimals to display');
	process.exit(1);
}

// Default to 50 decimal places
input = input === undefined ? 50 : input;
console.log(generatePi.get(input));
