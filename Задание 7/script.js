// возможно в задании имелось ввиду что-то посложнее, debounce не знаю как тут применить

let timeVar = "",
    body = document.querySelector("body"),
    button = document.querySelector("button"),
    element1 = document.querySelector("#element1");
    element2 = document.querySelector("#element2");
    element3 = document.querySelector("#element3");

button.onclick = function () {
  if (element1.style.display == "block") {
    element1.style = "display: none";
    element2.style = "display: none";
    element3.style = "display: none";
  } else {
    element1.style = "display: block";
    element2.style = "display: block";
    element3.style = "display: block";
    timeVar = 1;
  }
};

body.onclick = function () {
  if (!timeVar) {
    element1.style = "display: none";
    element2.style = "display: none";
    element3.style = "display: none";
  }

  if (timeVar) {
    setTimeout(function () {
      timeVar = "";
    }, 100);
  }
};
