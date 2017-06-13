$(document).ready(function(){

  // hide tweet button
  $('#tweet-controls').css('display', 'none');
  $('.tweet-actions').css('display', 'none');

  //When the user clicks on the textarea, the textarea should double in size
  //and the character count and Tweet buttons should be revealed.
  $('.tweet-compose').on('click', function(){
    $('#tweet-controls').show();
    $(this).animate({height: '5em'});
  });

  //As the user types, the character count should decrease.
  var text_max = 15;

  $('#char-count').html(text_max);

  $('.tweet-compose').keyup(function(){
    var text_length = $('.tweet-compose').val().length;
    var text_remaining = text_max - text_length;
    $('#char-count').html(text_remaining);

    if(text_remaining <= 10) {
      $('#char-count').css('color', 'red');
    }

    // disable submit button once character limit reached
    if(text_remaining <= -1) {
      $('#tweet-submit').attr('disabled', 'disabled');
    } else {
      $('#tweet-submit').removeAttr('disabled');
    }

  });

  // When the user successfully inputs characters and clicks the “Tweet” button,
  // a new tweet should be created and added to the tweet stream in the main column,
  // using the user’s fake profile image in the top left and username/fullname.
  $('#tweet-submit').on('click', function(){
    var tweetText = $('.tweet-compose').val();
    $('#stream').prepend('<div class="tweet"> <div class="content"> <img class="avatar" src="img/alagoon.jpg" /> <strong class="fullname">The Animal</strong><span class="username"> @theBlacknBlue</span><p class="tweet-text">' + tweetText + '.</p>');
    $('.tweet-compose').reset();
  });

  // Clear the t



  //The tweet actions (Reply, Retweet, etc) should only show up when you hover over that individual
  //tweet. Otherwise, they should be hidden.
  $('.tweet-text').hover(
    function(){
      $('.tweet-actions').fadeIn();
    },
    function() {
      $('.tweet-actions').fadeOut();
    }
  );


})
