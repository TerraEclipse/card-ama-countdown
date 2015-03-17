$(function() {

  console.log('JS loaded');

  function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  function setBackground(variantArray, selector) {
    var loop_number = variantArray.length + 1
      , bg_images = [
          '/public/img/doctors-1.jpg',
          '/public/img/doctors-2.jpg',
          '/public/img/doctors-3.jpg',
          '/public/img/doctors-4.jpg',
          '/public/img/doctors-5.jpg',
          '/public/img/doctors-6.jpg'
        ];

    variables.bg_images = shuffle(bg_images);

    console.log(variables.bg_images);
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
