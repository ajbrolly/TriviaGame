$(document).ready(function() {

var gameStarted = false;
var countdown = 120;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;

var incorrect;
var correct;

$(".jumbotron").hide();

$('.startGame').click(function() {
    $(".jumbotron").fadeIn();
    $(this).hide();
    gameStarted = true;
    if (gameStarted) {
      setTimeout(decrement, 1000);
      run();
    }
});


function decrement() {
  countdown--;
  $("#timer").html("Time remaining: " + countdown + " secs");
  if (countdown === 0) {
        stop();
          $('.jumbotron').remove();
          scoreTally();

            correctDiv = $('<div class="jumbotron">');
            correctDiv.text('Correct Answers: ' + correct);
            $('#score').append(correctDiv);

            incorrectDiv = $('<div class="jumbotron">');
            incorrectDiv.text('Incorrect Answers: ' + incorrect);
            $('#score').append(incorrectDiv);

            newButton = $('<button class="btn btn-default btn-lg">');
            newButton.text('Start New Game');
            $('#score').append(newButton);
            newButton.click(function() {
                newGame();
            })
    }
}

function run() {
  if (!intervalId) {  
    intervalId = setInterval(decrement, 1000);
  }
}

function stop() {
    clearInterval(intervalId);
  }




function scoreTally() {
  $( "input[type=radio]:checked" ).val();  
  $('.answer').each(function() {
    if ($(this).val() == 'correct') {
      correctAnswers++;
      correct = Math.floor(correctAnswers / 3);
      console.log(correct);
    }
    else {
      incorrectAnswers++;
      incorrect = Math.floor(incorrectAnswers / 3);
      console.log(incorrect);    
    }
  });
};



$('#submit').click(function() {
  stop();
  $('.jumbotron').remove();
  scoreTally();

    correctDiv = $('<div class="jumbotron">');
    correctDiv.text('Correct Answers: ' + correct);
    $('#score').append(correctDiv);

    incorrectDiv = $('<div class="jumbotron">');
    incorrectDiv.text('Incorrect Answers: ' + incorrect);
    $('#score').append(incorrectDiv);

    newButton = $('<button class="btn btn-default btn-lg">');
    newButton.text('Start New Game');
    $('#score').append(newButton);
    newButton.click(function() {
        newGame();
    })
});


// Start a Brand New Game Function
function newGame() {
    location.reload();
};


});




