// testFile2.js

// Importing the entire module as a variable
import dateUtil from './dateUtil.mjs';

// Testing the function with a leap year
const leapYearResult = dateUtil(2024);
console.log(`2024 is a leap year: ${leapYearResult}`);

// Testing the function with a non-leap year
const nonLeapYearResult = dateUtil(2023);
console.log(`2023 is a leap year: ${nonLeapYearResult}`);

