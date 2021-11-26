var random1 = Math.floor(Math.random() * 6 + 1);
var random2 = Math.floor(Math.random() * 6 + 1);
var s1 = "images/dice" + random1 + ".png";
var s2 = "images/dice" + random2 + ".png";

if (random1 > random2) {
  document.querySelector("h1").textContent = "Player 1 wins";
} else if (random2 > random1) {
  document.querySelector("h1").textContent = "Player 2 wins";
}
 else document.querySelector("h1").textContent = "Draw";

document.getElementsByTagName("img")[0].setAttribute("src", s1);
document.getElementsByTagName("img")[1].setAttribute("src", s2);
