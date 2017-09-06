#!/usr/bin/env node
'use strict';
const meow = require('meow');
const generatePi = require('generate-pi');

const cli = meow(`
    Usage
        $ gen-pi [input]
      
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
`);

let input = cli.input[0];

// Number.isSafeInteger Polyfill
Number.isSafeInteger =
    Number.isSafeInteger ||
    function(value) {
        return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
    };

if (input && !Number.isSafeInteger(input)) {
    console.error('Please enter a valid integer for number of decimals to display');
    process.exit(1);
}

// Default to 50 decimal places
input = input === undefined ? 50 : input;
console.log(generatePi.get(input));
