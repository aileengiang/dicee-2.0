// Random generator for Red Dice //

var randomNumber1 = Math.floor (Math.random()*6)+1;
var randomDiceImage = randomNumber1 + ".png";
var randomImageSource = "images/red-" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);



// Random generator for Blue Dice //

var randomNumber2 = Math.floor (Math.random()*6)+1;
var randomImageSource2 = "images/blue-" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);



// Heading changes based on winner //

if (randomNumber1 > randomNumber2){
  document.querySelector ("h1").innerHTML = "↙️ RED WINS!";
  document.querySelector ("h1").style.color = "#EC4646";
}

else if (randomNumber1 < randomNumber2){
  document.querySelector ("h1").innerHTML = "BLUE WINS! ↘️";
  document.querySelector ("h1").style.color = "#0F4392";
}

else {
  document.querySelector ("h1").innerHTML = "🔄  DRAW. . .REFRESH AGAIN! 🔄";
  document.querySelector ("h1").style.color = "#353535";

}
