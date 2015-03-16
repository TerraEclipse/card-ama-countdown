$(function() {

  console.log('JS loaded');

  function setStateBackground(loopNumber, cardSelector) {
    var $card = $(cardSelector);

    if (loopNumber > 3) {
      loopNumber -= 3;
    }

    $card.css({ 'background-image': 'url("http://action.fixmedicarenow.org.s3.amazonaws.com/states/' + variables.state + '/' + variables.state + '-' + loopNumber + '.jpg")'});
  }

  function setLoopNumber(variantArray, selector) {
    var loopNumber = variantArray.length;

    $(selector).addClass('loop-' + loopNumber);
    setStateBackground(loopNumber, '.card');
  }

  if (variables.variants_shared) {
    setLoopNumber(variables.variants_shared, 'body');
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
