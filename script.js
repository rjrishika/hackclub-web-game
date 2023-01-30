var counter = 0;
var score = localStorage.getItem("counter") || 0;
document.getElementById("scorevalue").innerHTML = score;

const mcqPages = [
  "2nd.html",
  "3rd.html",
  "5th.html",
  "6th.html",
  "7th.html",
  "8th.html",
  "9th.html",
  "10th.html",
  "11th.html",
  "12th.html",
];

function randomPage() {
  return mcqPages[Math.floor(Math.random() * mcqPages.length)];
}

function fun(click) {
  if (click == "4") {
    document.getElementById("4").style.backgroundColor = "#32cd32";

    score++;
    document.getElementById("scorevalue").innerHTML = score;
  } else {
    document.getElementById(click).style.backgroundColor = "red";
  }
  setTimeout(checkAnswer, 2000, click);
}

function checkAnswer(answer) {
  if (answer == 4) {
    counter = counter + 1;
    localStorage.setItem("counter", counter);
    console.log(counter);
    if (counter == 3) {
      localStorage.setItem("counter", 0);
      location.href = "final.html";
    } else {
      location.href = randomPage();
    }
  } else {
    localStorage.setItem("counter", 0);

    location.href = randomPage();
  }
}

window.onload = function () {
  counter = Number(localStorage.getItem("counter")) || 0;
};
