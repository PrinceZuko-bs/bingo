console.log('Hello from advanced JS')

$('li').on('click', function() {
var toggle = $(this).attr('class');
  if(toggle == 'hot'){
      $(this).css('background-color', '#26deaa');
       $(this).attr('class', 'cool');
  }
  else if(toggle == 'cool'){
    $(this).css('background-color', '#ed5182');
    $(this).attr('class', 'hot');
  }

});


$('h1').on('click', function() {
var toggle = $(this).attr('class');
  if(toggle == 'hot'){
      $(this).css('background-color', '#26deaa');
       $(this).attr('class', 'cool');
  }
  else if(toggle == 'cool'){
    $(this).css('background-color', '#ed5182');
    $(this).attr('class', 'hot');
  }


});


function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}


$('div#left').on('click', async function() {
  $(this).css('background-color', 'blue');
  await sleep(700);
  removeOptions();

});


$('div#right').on('click', async function() {
  $(this).css('background-color', 'blue');
  await sleep(700);
  removeOptions();
});


function removeOptions(){
  $('li#checkAnswer').css('background-color', '#403c3b');
  $('li#checkAnswer').text('');
  $('div#left').fadeOut();
  $('div#right').fadeOut();
}
