function guessNumber() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(secretNumber);

  function playGame() {
    const userNumber = prompt("Угадай число от 1 до 100:");

    if (userNumber === null) {
      alert("Игра окончена!");
      return;
    }

    const parsedNumber = parseInt(userNumber);

    if (isNaN(parsedNumber)) {
      alert("Введи число!");
      playGame();
    } else if (parsedNumber < 1 || parsedNumber > 100) {
      alert("Число должно быть от 1 до 100!");
      playGame();
    } else if (parsedNumber < secretNumber) {
      alert("Загаданное число больше");
      playGame();
    } else if (parsedNumber > secretNumber) {
      alert("Загаданное число меньше");
      playGame();
    } else {
      alert("Поздравляю, Вы угадали!!!");
      return;
    }
  }

  playGame();
}

guessNumber();