// testFile1.js

// Importing the isLeapYear function individually
import { isLeapYear } from './dateUtil.mjs';

// Testing the function with a leap year
const leapYearResult = isLeapYear(2020);
console.log(`2020 is a leap year: ${leapYearResult}`);

// Testing the function with a non-leap year
const nonLeapYearResult = isLeapYear(2021);
console.log(`2021 is a leap year: ${nonLeapYearResult}`);
