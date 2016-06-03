var numClicks = 1;
var changeClicks = 0;

$(document).ready(function() {
  $('body').append('<button class="onLoad">generate</button>'); // add generate button to page
  $('.onLoad').one('click', function () { // when generate button is clicked the FIRST TIME, do the following ONLY ONE TIME
    $('body').append('<div class="container"></div>'); // add new div
    $('.container').append('<button class="deleteButton">delete</button>'); // add delete button in div
    $('.container').append('<button class="changeButton">change</button>'); // add change button in div
    $('.container').append('<p class="counterText"></p>'); // add text area in div to store # times generate button is clicked
    $('.counterText').text("# of times generate button has been clicked: " + numClicks); // assigns this text to paragraph
  $('.onLoad').on('click', function () { // when generate button is clicked EVERY TIME, do the following EACH TIME
    numClicks++; // track # times generate button is clicked
    $('.counterText').text("# of times generate button has been clicked: " + numClicks); // assigns this text to paragraph
  });

    $('.container').on('click', '.deleteButton', function() { // when click delete button, removes its parent (div) while leaving delete button intact
      $(this).unwrap();
    });

    $('.changeButton').on('click', function() { // when click on change button, changes background color of parent (div)
      changeClicks++; // counter to track # clicks;
      if (changeClicks % 2) {
        $(this).parent().css('background-color', 'rgb(240,41,14)'); // change background of div to red
      } else {
        $(this).parent().css('background-color', 'rgb(235,242,90)'); // change background of div back to yellow
      }
    });
  });
});
