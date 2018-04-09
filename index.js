const readline = require('readline');
const solveInput = require('./solution');

const LINE = "====================================================================================";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'INPUT> ',
});

rl.prompt();

rl.on('line', (input) => {
	const solution = solveInput(input);
    rl.prompt()
}).on('close', () => {
    console.clear();
    process.exit(0);
});