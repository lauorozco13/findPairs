// Function to find pairs of integers from a list that sum to a given value
function findPairs(list, target) {
    const pairs = [];

    const seen = new Set();

    for (const item of list) {
        const neededNumber = target - item;

        if (seen.has(neededNumber)) {
            pairs.push([item, neededNumber]);
        } else {
            seen.add(item);
        }
    }

    return pairs;
}

const args = process.argv.slice(2);
const list = args[0].split(',').map(Number);
const target = parseInt(args[1], 10);

const result = findPairs(list, target);
result.forEach(pair => {
    console.log(`+ ${pair[0]}, ${pair[1]}`);
});

module.exports = findPairs;
