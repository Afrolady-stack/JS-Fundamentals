

const arg = process.argv[2];

if (arg === undefined || isNaN(parseInt(arg))) {
  console.log("Missing number of occurrences");
} else {
  const x = parseInt(arg);
  if (x >= 0) {
    for (let i = 0; i < x; i++) {
      console.log("C is fun");
    }
  }
}
