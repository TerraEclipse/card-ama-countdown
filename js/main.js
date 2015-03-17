$(function() {

  console.log('JS loaded');

  function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  function setBackground(variantArray, selector) {
    var base_url = '/cards/OaBGCfHcasTKrDHX/eyJmaXJzdCI6IllvdXIiLCJsYXN0IjoiTmFtZSIsImNpdHkiOiJBcHRvcyIsInN0YXRlIjoiQ0EiLCJzdGF0ZV9mdWxsIjoiWW91ciBIb21ldG93biIsImF2YXRhciI6bnVsbCwidGFyZ2V0Ijp7InRpdGxlIjoiUmVwIiwiZmlyc3QiOiJGaXJzdCIsImxhc3QiOiJTZW5zZW5icmVubmVyIn0sInZhcmlhbnQiOiJ2YXJpYW50X2EiLCJ2YXJpYW50c19zaGFyZWQiOltdLCJ0YXJnZXRzX3NoYXJlZCI6W10sImNvdW50ZG93biI6MTMwNjYxODcyNSwidmFyaWFudHMiOltdLCJzaXplIjoidHdpdHRlciIsImRlZmF1bHQiOnRydWUsInJhbmRvbWl6ZSI6ZmFsc2V9/files/img/'
      , loop_number = variantArray.length + 1
      , bg_images = [
          base_url + 'doctors-1.jpg',
          base_url + 'doctors-2.jpg',
          base_url + 'doctors-3.jpg',
          base_url + 'doctors-4.jpg',
          base_url + 'doctors-5.jpg',
          base_url + 'doctors-6.jpg'
        ];

    if (!variables.bg_images) {
      variables.bg_images = shuffle(bg_images);
    }

    $(selector).css({ 'background': 'url("' + variables.bg_images[0] + '") no-repeat center center' });
    
    variables.bg_images.splice(0, 1);

    console.log(variables.bg_images);
  }

  function setLoopNumber(variantArray, selector) {
    var loopNumber = variantArray.length + 1;

    $(selector).addClass('loop-' + loopNumber);
  }

  if (variables.variants_shared) {
    setLoopNumber(variables.variants_shared, 'body');
    setBackground(variables.variants_shared, '.card');
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
