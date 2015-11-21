
$(document).ready(function(){
  
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

    /*--- Variables at start of game ---*/
    var answer = Math.floor((Math.random() * 100) +1);
      console.log(answer);
    var numberOfGuesses = 0;
    var guesses = [];

    /*--- Get the user's guess ---*/
    function getGuess() {
      $('#guessButton').click(game);
      $('#userGuess').keydown(function (enter) {
        if (enter.keycode == 13) {
          game ();
        }
      })
    }

    getGuess();

    /*--- Gameplay ---*/
    function game() {
      var guess = parseInt($('#userGuess').val());
      var difference = Math.abs(guess - answer);
    
      if (guess !== null && $.isNumeric && guess >= 1 && guess <= 100) {
        $('#userGuess').val('');
        numberOfGuesses++;
        guesses.push(guess);
        $('#count').html(numberOfGuesses);
        $('#guessList').append('<li>'+ guess + '</li>');

      if (guess === answer) {
        $('#feedback').html('Woo hoo!  You got it in ' 
          + numberOfGuesses + ' attempts!  The secret number was ' + answer);
      } else if (difference >= 50) {
        $('#feedback').html('What\'s colder than cold?  You are!  You\'re ice cold!');
      } else if (difference >= 30 && difference < 50) {
        $('#feedback').html('Brrrr it\'s cold in here!  Because your guess is not close');
      } else if (difference >= 10 && difference < 30) {
        $('#feedback').html('Your guess is warm, like the inside of a tauntaun!');
      } else {
        $('#feedback').html('Your guess, your guess, your guess is on fire!  You\'re so close!');
      }
      } else {
        $('#feedback').html('That guess will not do, try again');
        $('#userGuess').val('');
      }

    /*--- Clicking on new game resets variables, without reloading page ---*/
    $('.new').click(function (e) {
      e.preventDefault();
      answer = Math.floor((Math.random() * 100) + 1);
        console.log(answer);
      numberOfGuesses = 0;
      guesses = [];
      $('#feedback').html('Make your Guess!');
      $('#userGuess').html('');
      $('#count').html('0');
      $('#guessList').html('');

    });
  }

});

