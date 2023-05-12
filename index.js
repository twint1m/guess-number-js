function guessNumber() {
  let counter = 10;
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  function playGame() {
    const userNumber = prompt("Угадай число от 1 до 100:");

    if (userNumber === null) {
      alert("Игра окончена!");
      return;
    } else if (counter == 0) {
      alert("У вас не осталось попыток! Игра окончена!");
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
      alert("Загаданное число больше, осталось попыток " + counter);
      counter--;
      playGame();
    } else if (parsedNumber > secretNumber) {
      alert("Загаданное число меньше, осталось попыток " + counter);
      counter--;
      playGame();
    } else {
      let playAgain = confirm("Поздравляю, Вы угадали!!! Желаете сыграть еще?");
      if (playAgain == true) {
        guessNumber();
      }
    }
  }

  playGame();
}

guessNumber();
