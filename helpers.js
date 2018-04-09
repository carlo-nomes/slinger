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

// const solutions = [].map((input, index) => {
//     console.log("FOUND PATTERN: ", foundPattern || "none");

//     if (!foundPattern) return input;

//     const split = splitInto(input, counter);
//     const faultyArray = split.filter(v => v !== foundPattern);

//     console.warn("FAULTY PARTS: ", faultyArray.length > 0 ? faultyArray : "No faulty parts found.");

//     faultyArray.forEach(f => {
//         const index = split.indexOf(f);
//         split[index] = foundPattern;
//     });

//     const solution = split.join('').substring(0, input.length);
//     console.log("SOLUTION: ", solution);
//     console.log(solution === outputArray[index] ? "CORRECT" : "INCORRECT");
//     return solution;
// });

// const solutionVSoutput = solutions.map((v, i) => v === outputArray[i]);
// const numberOfCorrectAnswers = solutionVSoutput.reduce((acc, cv) => acc + (cv ? 1 : 0), 0);
// console.log(`RESULT: ${numberOfCorrectAnswers}/${solutionVSoutput.length} CORRECT`);

module.exports = findPattern;