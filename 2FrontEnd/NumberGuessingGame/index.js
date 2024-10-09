const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer);

let attempts = 0;
let guess;
let running = true;
let name = window.prompt("Enter Your Name");
while (running) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert(`Enter a Valid Number`);
  } else if (guess < minNum || guess > maxNum) {
    window.alert(`Enter a Valid Number`);
  } else {
    attempts++;
    if (guess > answer) {
      window.alert(`Too High try again`);
    } else if (guess < answer) {
      window.alert(`Too Low try again`);
    } else {
      window.alert(
        `Correct! The Number is ${answer} and you took ${attempts} attempts`
      );

      window.alert(`Let me Guess Your Name ?`);
      window.alert(
        `You're ${name}, Haha I Know only ${name} takes this many attempts to guess a number IDIOT!`
      );
      running = false;
    }
  }
}
