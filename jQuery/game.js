var buttonColors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function playSound(name) {
  $(".btn").click(function() {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  });
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 25);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern.at(currentLevel) === gamePattern.at(currentLevel)) {
    console.log("successs");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 300);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 25);
    $("#level-title").text("Game Over, Refresh Page to Restart");
  }
}

function nextSequence() {

  var userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNum = Math.floor(Math.random() * 4);
  var pickedColor = buttonColors[randomNum];
  gamePattern.push(pickedColor);

  var pickedBtn = $("#" + pickedColor);
  pickedBtn.fadeTo("slow", 0.2, function() {
    $(this).fadeTo(500, 1.0);
  });
}

$(".btn").click(function() {
  var userClickedBtn = $(this).attr("id");
  userClickedPattern.push(userClickedBtn);
  playSound(userClickedBtn);
  animatePress(userClickedBtn);
  checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function(event) {
  nextSequence();
  $(this).off();
});
