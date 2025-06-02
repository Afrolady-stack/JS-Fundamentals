const args = process.argv[2];
const num = Number.parseInt(args);

console.log(!isNaN(num) ? `My number: ${num}` : 'Not a number');
