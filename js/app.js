let string = "";
const input = document.querySelector(".input-text");
const btn = document.querySelectorAll(".btn");

function repeatOperators() {
  for (let i = 0; i < string.length; i++) {
    if (
      (string[i] == "+" ||
        string[i] == "-" ||
        string[i] == "/" ||
        string[i] == "*" ||
        string[i] == "%" ||
        string[i] == ".") &&
      (string[i + 1] == "+" ||
        string[i + 1] == "-" ||
        string[i + 1] == "/" ||
        string[i + 1] == "*" ||
        string[i + 1] == "%" ||
        string[i + 1] == ".")
    ) {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (
      string[0] == "+" ||
      string[0] == "/" ||
      string[0] == "*" ||
      string[0] == "%" ||
      string[0] == "."
    ) {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (string[0] == "0" && string[1] == "0") {
      string = string.substring(0, string.length - 2);
      input.value = string;
    } else if (string[0] == "0") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
  }
}

function txtSize() {
  if (string.length >= 18 && string.length < 24) {
    input.style.fontSize = "1.5rem";
  } else if (string.length >= 24) {
    input.style.fontSize = "1.2rem";
  } else {
    input.style.fontSize = "2rem";
  }
}

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=" && input.value != "") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
    string = input.value;
    txtSize();
    repeatOperators();
  });
});
window.addEventListener("keydown", (ev) => {
  ev.stopPropagation();
  ev.preventDefault();
  if (ev.key === "Enter" || (ev.key === "=" && input.value != "")) {
    string = eval(string);
    input.value = string;
  } else if (ev.key === "+") {
    string += "+";
    input.value = string;
  } else if (ev.key === "-") {
    string += "-";
    input.value = string;
  } else if (ev.key === "*") {
    string += "*";
    input.value = string;
  } else if (ev.key === "/") {
    string += "/";
    input.value = string;
  } else if (ev.key === "%") {
    string += "%";
    input.value = string;
  } else if (ev.key === "Backspace") {
    string = string.substring(0, string.length - 1);
    input.value = string;
  } else if (ev.key >= 0) {
    string += ev.key;
    input.value = string;
  } else if (ev.key === "Delete") {
    string = "";
    input.value = string;
  }
  string = input.value;
  txtSize();
  repeatOperators();
});
