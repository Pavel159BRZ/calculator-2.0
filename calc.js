let a = ""; //first number
let b = ""; //second number
let sign = ""; // знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "*", "/"];

//экран
const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = ""; //first number
  b = ""; //second number
  sing = ""; // знак операции
  finish = false;
  out.textContent = 0;
  console.log(
    `Нажато: as`,
    `a: ${a}`,
    `b: ${b}`,
    `sign: ${sign}`,
    `finish: ${finish}`
  );
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  //не нажата кнопка
  if (!event.target.classList.contains("btn")) return;
  //нажата кнопка clearAll ac
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  //получаю нажатую кнопку
  const key = event.target.textContent;

  //если нажата клавиша 0-9 или .
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.log(
      `Нажато: ${key}`,
      `a: ${a}`,
      `b: ${b}`,
      `sign: ${sign}`,
      `finish: ${finish}`
    );
    return;
  }
  //если нажата клавиша + - / *
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(
      `Нажато: ${key}`,
      `a: ${a}`,
      `b: ${b}`,
      `sign: ${sign}`,
      `finish: ${finish}`
    );
    return;
  }

  //нажата =
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = +a - +b;
        break;
      case "*":
        a = +a * +b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = +a / +b;
        break;
    }
    finish = true;
    out.textContent = a;
    sign = "";
    console.log(
      `Нажато: ${key}`,
      `a: ${a}`,
      `b: ${b}`,
      `sign: ${sign}`,
      `finish: ${finish}`
    );
  }
};
