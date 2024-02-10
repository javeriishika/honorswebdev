// dateUtil.js

// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Exporting the function as the default export
export default isLeapYear;

// Exporting the function individually
export { isLeapYear };