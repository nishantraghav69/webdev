let target = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

alert("Guess the number between 1 and 100!");

while (true) {
  let guess = prompt("Enter your guess:");

  if (guess === null) {
    alert("Game cancelled!");
    break;
  }

  guess = Number(guess);
  attempts++;

  if (isNaN(guess)) {
    alert("Please enter a valid number!");
    continue;
  }

  if (guess < target) {
    alert("Too low! Try again.");
  } else if (guess > target) {
    alert("Too high! Try again.");
  } else {
    alert(`Correct! You guessed it in ${attempts} attempts!`);
    break;
  }
}
