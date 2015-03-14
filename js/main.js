$(function() {
  
  console.log('JS loaded');

  function setStateBackground(loopNumber, cardSelector) {
    var $card = $(cardSelector);

    $card.css({ 'background-image': 'url("http://action.fixmedicarenow.org.s3.amazonaws.com/states/' + variables.state + '/' + variables.state + '-' + loopNumber + '.jpg")'});
  }

  function setLoopNumber(variantArray, selector) {
    var text = document.getElementsByTagName('h1')[0].innerText
      , loopNumber = variantArray.length + 1;

    $(selector).addClass('loop-' + loopNumber);
    setStateBackground(loopNumber, '.card');
  }
  
  setLoopNumber(variables.variants_shared, 'body');

});
