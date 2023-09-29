
# findPairs.js

`findPairs.js` is a JavaScript module that provides a function that finds pairs of integers from a list that
sum to a given value.

## Command-Line Usage

You run the \`findPairs.js\` module from the command line:

1. Open your terminal in the directory where \`findPairs.js\` is located.

2. Run the following command, providing a list of integers and the target sum as arguments:

   ```bash
   node findPairs.js 1,9,5,0,20,-4,12,16,7 12
   ```

   The script will output the pairs that sum to the target value:

   ```bash
    + 12, 0
    + 16, -4
    + 7, 5
   ```

## Running Tests

Tests for the `findPairs` function can be run using Mocha and Chai. To run the tests, follow these steps:

1. Install Mocha and Chai as development dependencies if you haven't already:

   ```bash
   npm install mocha chai --save-dev
   ```

2. Run the tests using the following command:

   ```bash
   npx mocha findPairs.test.js 
   ```
