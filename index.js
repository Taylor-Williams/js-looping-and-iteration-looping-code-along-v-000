// Code your solutions in this file
function tailsNeverFails(){
  let count = 0
  while(Math.random() >= 0.5) {
    count++
  }
  return `You got ${count} tails in a row!`
}
