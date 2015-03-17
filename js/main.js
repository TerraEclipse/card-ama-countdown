$(function() {

  console.log('JS loaded');

  function setBackground(variantArray, selector) {
    variables.test = 'testing';

    console.log(variables.test);
  }

  function setLoopNumber(variantArray, selector) {
    var loopNumber = variantArray.length + 1;

    $(selector).addClass('loop-' + loopNumber);
  }

  if (variables.variants_shared) {
    setLoopNumber(variables.variants_shared, 'body');
    setBackground(variables.variants_shared, 'body');
  }

  // Set clock numbers.
  var days = Math.floor(variables.countdown /  (1000 * 60 * 60 * 24))
    , hours = Math.floor((variables.countdown - (days * 1000 * 60 * 60 * 24)) /  (1000 * 60 * 60))
    , mins = Math.floor((variables.countdown - (days * 1000 * 60 * 60 * 24) - (hours * 1000 * 60 * 60)) /  (1000 * 60));

  $('[data-days-tens]').text(Math.floor(days / 10));
  $('[data-days-ones]').text(days % 10);
  $('[data-days]').text(days);
  $('[data-hours-tens]').text(Math.floor(hours / 10));
  $('[data-hours-ones]').text(hours % 10);
  $('[data-hours]').text(hours);
  $('[data-mins-tens]').text(Math.floor(mins / 10));
  $('[data-mins-ones]').text(mins % 10);
  $('[data-mins]').text(mins);
});
