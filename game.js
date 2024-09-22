var buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
var level = "Level ";
var num = 1;

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * (4 - 0) + 0);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  flash("#" + randomChosenColour);

  playSound(randomChosenColour);

  $("h1").text(level + num);
  num++;
  console.log("gamePattern => " + gamePattern);
  return gamePattern;
}

var started = true;

$(document).keypress(function () {
  if (started) {
    started = false;
    nextSequence();
  }
});

$(".start").click((e) => {
  if (started) {
    started = false;
    nextSequence();
  }
});

$(".btn").click(function () {
  if (!started) {
    handler(this);
  }
});

userClickedPattern = [];

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function flash(button) {
  $(button).animate({ opacity: "0.2" }, 200);
  $(button).animate({ opacity: "1" });
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

var checkAnswerCount = 0;
function handler(x) {
  const userChosenColour = x.id;

  animatePress(userChosenColour);

  playSound(userChosenColour);

  userClickedPattern.push(userChosenColour);

  console.log("userClickedPattern => ", userClickedPattern, checkAnswerCount);

  if (userClickedPattern[checkAnswerCount] === gamePattern[checkAnswerCount]) {
    checkAnswerCount++;
    if (userClickedPattern.length === gamePattern.length) {
      userClickedPattern = [];
      setTimeout(function () {
        nextSequence();
      }, 1000);

      checkAnswerCount = 0;
      console.log(true);
    }
    console.log[false];
  } else {
    startOver();
    checkAnswerCount = 0;
    wrongChoice();
  }
}

function startOver() {
  num = 1;
  gamePattern = [];
  userClickedPattern = [];
  started = true;
}

function wrongChoice() {
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game Over! Press Start Button to Restart");
  playSound("wrong");
}
