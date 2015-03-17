$(function() {

  console.log('JS loaded');

  function setBackground(variantArray, selector, secondarySelector) {
    var base_url = '/cards/OaBGCfHcasTKrDHX/eyJmaXJzdCI6IllvdXIiLCJsYXN0IjoiTmFtZSIsImNpdHkiOiJBcHRvcyIsInN0YXRlIjoiQ0EiLCJzdGF0ZV9mdWxsIjoiWW91ciBIb21ldG93biIsImF2YXRhciI6bnVsbCwidGFyZ2V0Ijp7InRpdGxlIjoiUmVwIiwiZmlyc3QiOiJGaXJzdCIsImxhc3QiOiJTZW5zZW5icmVubmVyIn0sInZhcmlhbnQiOiJ2YXJpYW50X2EiLCJ2YXJpYW50c19zaGFyZWQiOltdLCJ0YXJnZXRzX3NoYXJlZCI6W10sImNvdW50ZG93biI6MTMwNjYxODcyNSwidmFyaWFudHMiOltdLCJzaXplIjoidHdpdHRlciIsImRlZmF1bHQiOnRydWUsInJhbmRvbWl6ZSI6ZmFsc2V9/files/img/'    
      , bg_images = [
          base_url + 'doctors-1.jpg',
          base_url + 'doctors-2.jpg',
          base_url + 'doctors-3.jpg',
          base_url + 'doctors-4.jpg',
          base_url + 'doctors-5.jpg',
          base_url + 'doctors-6.jpg'
        ]
      , loop_number = variantArray.length + 1
      , index = 0;

    index = Math.floor(Math.random() * 6);

    console.log(index)

    $(selector).css({ 'background': 'url("' + bg_images[index] + '") no-repeat center center' });
    $(secondarySelector).addClass('loop-' + loop_number);
  }

  if (variables.variants_shared) {
    setBackground(variables.variants_shared, '.card', 'body');
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
