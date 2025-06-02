const arg = process.argv[2];
const size = parseInt(arg);

if (isNaN(size)) {
  console.log("Missing size");
} else if (size >= 0) {
  let row = '';
  for (let i = 0; i < size; i++) {
    row += 'X';
  }

  let square = '';
  for (let j = 0; j < size; j++) {
    square += row + '\n';
  }

  console.log(square.trim()); // trim to remove last newline
}
