console.log("linked");

let player = true;

$(document).ready( function() {
const square = $('.square');

function display() {
  if (player === true) {
    square.on('click', first);
  } else if (player === false) {
    square.on('click', second);
  }
}

display();

function first(e) {
  player = !player;
  if (player === true) {
    $(e.target).addClass('second');
    alert("Player 2 has made a move.")
    if ($(".one").hasClass('second') && $(".two").hasClass('second') && $(".three").hasClass('second') || $(".four").hasClass('second') && $(".five").hasClass('second') && $(".six").hasClass('second') || $(".seven").hasClass('second') && $(".eight").hasClass('second') && $(".nine").hasClass('second')
|| $(".one").hasClass('second') && $(".four").hasClass('second') && $(".seven").hasClass('second') || $(".two").hasClass('second') && $(".five").hasClass('second') && $(".eight").hasClass('second') || $(".three").hasClass('second') && $(".six").hasClass('second') && $(".nine").hasClass('second') ||
$(".one").hasClass('second') && $(".five").hasClass('second') && $(".nine").hasClass('second') || $(".three").hasClass('second') && $(".five").hasClass('second') && $(".seven").hasClass('second')) {
   alert("Player 2 has won the game!");
  setTimeout(function() { $(".square").removeClass('first');}, 1500);
  setTimeout(function() { $(".square").removeClass('second');}, 1500);


}
  } else {
    $(e.target).addClass('first');
    alert("Player 1 has made a move.")
if (($(".one").hasClass('first') && $(".two").hasClass('first') && $(".three").hasClass('first')) || ($(".four").hasClass('first') && $(".five").hasClass('first') && $(".six").hasClass('first')) || ($(".seven").hasClass('first') && $(".eight").hasClass('first') && $(".nine").hasClass('first'))
|| ($(".one").hasClass('first') && $(".four").hasClass('first') && $(".seven").hasClass('first')) || ($(".two").hasClass('first') && $(".five").hasClass('first') && $(".eight").hasClass('first')) || ($(".three").hasClass('first') && $(".six").hasClass('first') && $(".nine").hasClass('first')) ||
($(".one").hasClass('first') && $(".five").hasClass('first') && $(".nine").hasClass('first')) || ($(".three").hasClass('first') && $(".five").hasClass('first') && $(".seven").hasClass('first'))) {
   alert("Player 1 has won the game!");
 setTimeout(function() { $(".square").removeClass('first');}, 1500);
  setTimeout(function() { $(".square").removeClass('second');}, 1500);

}
  }

}

function second(e) {
  $(e.target).addClass('second');
  player = !player;
}

$('#restart').on('click', function() {
  $(".square").removeClass('first');
  $(".square").removeClass('second');
})
});

