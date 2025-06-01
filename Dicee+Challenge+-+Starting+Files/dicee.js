
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
let path1 = "images/dice" + String(randomNumber1) + ".png";
let path2 = "images/dice" + String(randomNumber2) + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", path1)
document.getElementsByClassName("img2")[0].setAttribute("src", path2)


if (randomNumber1 == randomNumber2) {
    document.getElementsByClassName("container")[0].querySelector("h1").innerText = 'Draw!';
}
else if (randomNumber1 > randomNumber2) {
    document.getElementsByClassName("container")[0].querySelector("h1").innerText = 'Player 1 wins!';
}
else {
    document.getElementsByClassName("container")[0].querySelector("h1").innerText = 'Player 2 wins!';
}