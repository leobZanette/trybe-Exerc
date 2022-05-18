// ex1 --------------------------------------------------------------

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((a, cur) => a.concat(cur), [])
}

console.log(flatten())

// ex2----------------------------------------------------------------

