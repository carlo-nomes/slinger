const LINE = "====================================================================================";

const testInputs = require('./resources/examples');
const testOutputs = require('./resources/solutions');

const solveInput = require('./solution');

const wrongSolutions = [];

testInputs.forEach((v, i) => {
    const solution = solveInput(v);
    if (solution !== testOutputs[i])
        wrongSolutions.push({
            index: i,
            input: v,
            expected: testOutputs[i],
            solution,
        });
    console.clear();
});

const faults = wrongSolutions.length;
const tests = testInputs.length;

wrongSolutions.forEach((v) => {
    console.log(LINE);
    console.log(`INPUT (${v.index}): ${v.input}`);
    console.log(`EXPECTED RESULT: ${v.expected}`);
    console.log(`RECEIVED RESULT: ${v.solution}`);
});
console.log(LINE);
console.log(`${faults} of the ${tests} tested inputs gave an unexpected result.`);
console.log();

process.exit(0);