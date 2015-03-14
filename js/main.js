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
    var loopNumber = variantArray.length + 1;

    $(selector).addClass('loop-' + loopNumber);
    setStateBackground(loopNumber, '.card');
  }
  
  setLoopNumber(variables.variants_shared, 'body');

});
