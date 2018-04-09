const LINE = "====================================================================================";
const MIN_PATTERN_REPEAT = process.env.MIN_PATTERN_REPEAT || 3;

const splitInto = (inputString, split) => {
    const array = [];
    const splitLength = Math.ceil(inputString.length / split);

    const residual = inputString.length % splitLength;
    const missing = residual ? splitLength - residual : 0;

    const missingString = inputString.substring(0, missing);
    const loopedString = inputString.concat(missingString);

    for (let i = 0; i < split; i++) {
        const start = i * splitLength;
        const end = start + splitLength;
        const subString = loopedString.substring(start, end);
        if (subString) array.push(subString);
    }

    return array;
};

const findPattern = (input) => {
    let pattern = '';
    let substringArray = [];
    let counter = MIN_PATTERN_REPEAT;
    while (!pattern) {
        if (counter >= input.length) break;

        substringArray = splitInto(input, counter);
        const substringCount = {};
        substringArray.forEach(v => substringCount[v] = (substringCount[v] || 0) + 1);

        const patterns = Object.keys(substringCount).filter(v => substringCount[v] >= MIN_PATTERN_REPEAT);

        pattern = patterns[0];
        if (!pattern) counter++;
    }

    return { pattern, substringArray };
};

const solveInput = (input) => {
    console.log(LINE);
    console.log(`INPUT: ${input}`);
    console.log(`LENGTH: ${input.length}`);

    // Split array and find pattern
    const { pattern, substringArray } = findPattern(input);
    console.log("INPUT ARRAY: ", substringArray);
    console.log("PATTERN: ", pattern || "none");

    // Find the faulty parts
    const faultyArray = substringArray.filter(v => v !== pattern);
    console.warn("FAULTY PARTS: ", faultyArray.length > 0 ? faultyArray : "No faulty parts found.");

    // Replace the faulty parts
    const correctedArray = substringArray.map(v => faultyArray.includes(v) ? pattern : v);
    const solution = correctedArray.join('').substring(0, input.length);
    console.log("SOLUTION: ", solution);

    console.log(LINE);
    return solution;
};

module.exports = solveInput;